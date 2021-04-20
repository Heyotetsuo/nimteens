var round=Math.round,floor=Math.floor,abs=Math.abs,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,min=Math.min,max=Math.max;
var cloudBuff,imgBuff,nums,lp,tmp,stache,key,seed;
var doc=document,win=window,hidden,BLINK_TO,BOX=false;
var CVS,SZ,CTR,CD,C,EASTER=false;

// MATH
function normInt(s){ return parseInt(s,32)-SZ };
function d2r(n){ return n*PI/180 };
function to1(n){ return n/255 };
function to1N(n){ return n/128-1 };
function randint(n)
{
	if (n) seed = n;
	seed ^= seed << 13;
	seed ^= seed >> 17;
	seed ^= seed << 5;
	return seed;
}
function randuint(n)
{
	return abs( randint(n) )
}
function urand(n)
{
	var seed = randint(n);
	return ((seed<0 ? ~seed+1 : seed) % 1024) / 1024;
}
function rand(n){ return urand(n)*2-1 };
function getHypo(a,b){ return sqrt(abs(a*a+b*b)) };
function getAngle(a,b,c){ return Math.acos(abs(a/c))*(180/PI) };
function getPointInCircle( x, y, Rx, Ry )
{
	var r = urand();
	var rx = Rx*sqrt(r);
	var ry = Ry*sqrt(r);
	var t = urand() * 2 * PI;
	return [
		x + rx*cos(t),
		y + ry*sin(t)
	];
}
function newHash()
{
	var a = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	var s="", i;
	for( i=0; i<64; i++ )
	{
		s += a[ floor(rnd() * a.length) ];
	}
	tokenData.hash = "0x" + s;
}
function resetSeed()
{
	seed = parseInt(
		tokenData.hash.slice( 0, 16 ),
		16
	);
}
function getNums()
{
	var hashPairs=[], rvs, j=0;
	for ( j=0; j<32; j++ )
	{
		hashPairs.push(
			tokenData.hash.slice( 2+(j*2), 4+(j*2) )
		);
	}
	rvs = hashPairs.map( n=>parseInt(n,16) );
	return rvs;
}



// DEBUGGING
function saveImg( i )
{
	var url = CVS.toDataURL();
	var img = doc.createElement( "img" );
	img.src = url;
	if ( i )
	{
		imgBuff[i] = img;
		hidden.appendChild( img );
	}
}
function setDebug( n )
{
	if ( n )
	{
		// for testing
		tokenData.hash = n;
	}
}



// TRANSFORMATION
function scaleShape( s )
{
	var p, i, j, v;
	for( p in s )
	{
		for( i=0; i<s[p].length; i++ )
		{
			for( j=0; j<2; j++ )
			{
				v = s[p][i][j];
				s[p][i][j] *= SZ/800;
			}
		}
	}
}



// ANIMATION
function queueBlink()
{
	clearTimeout( BLINK_TO );
	BLINK_TO = setTimeout(
		()=>render( blink=true ),
		to1( nums[18] ) * 10000 + 5000
	);
}
function toggleBox()
{
	BOX = !BOX;
	render();
}



// FILTERS
function boxBlurT( src, tgt, w, h, r, H )
{
	var i, j, ti, li, ri, fv, lv, val;
	var iarr = 1/(r*2+1);
	for( i=0; i<w; i++ )
	{
		ti = i;
		li = ti;
		ri = ti + r*w;
		fv = src[ti];
		lv = src[ ti+w*(h-1) ];
		val = ( r+1 )*fv;
		for( j=0; j<r; j++ )
		{
			val += src[ ti + j*w ];
		}
		for( j=0; j<=r; j++ )
		{
			val += src[ri] - fv;
			tgt[ti] = round( val*iarr );
			ri += w;
			ti += w;
		}
		for( j=r+1; j<h-r; j++ )
		{
			val += src[ri] - src[li];
			tgt[ti] = round(val*iarr);
			li += w;
			ri += w;
			ti += w;
		}
		for( j=h-r; j<h; j++ )
		{
			val += lv - src[li];
			tgt[ti] = round( val*iarr );
			li += w;
			ti += w;
		}
	}
}
function boxBlurH( src, tgt, w, h, r )
{
	var iarr = 1/(r*2+1);
	var i, j, ti, li, ri, fv, lv, val;
	for( i=0; i<h; i++ )
	{
		ti = i*w;
		li = ti;
		ri = ti+r;
		fv = src[ti];
		lv = src[ ti + w-1 ];
		val = ( r+1 )*fv;
		for( j=0; j<r; j++)
		{
			val += src[ti+j];
		}
		for( j=0; j<=r; j++)
		{
			val += src[ri++] - fv;
			tgt[ti++] = round( val*iarr );
		}
		for( j=r+1; j<w-r; j++)
		{
			val += src[ri++] - src[li++];
			tgt[ti++] = round( val*iarr );
		}
		for( j=w-r; j<w; j++)
		{
			val += lv - src[li++];
			tgt[ti++] = round( val*iarr );
		}
	}
}
function boxBlur( src, tgt, w, h, r )
{
	for( var i=0; i<src.length; i++ )
	{
		tgt[i] = src[i];
	}
	boxBlurH( tgt, src, w, h, r );
	boxBlurT( src, tgt, w, h, r );
}
function boxesForGauss( sigma, n )
{
	var wIdeal, mIdeal;
	var wl, wu, m;
	var sizes=[], i;

	wIdeal = sqrt( (12*sigma*sigma/n)+1 );
	wl = floor( wIdeal );
	if ( wl%2 == 0 )
	{
		wl--;
	}
	wu = wl+2;
	mIdeal = (
		12*sigma*sigma -
		n*wl*wl -
		4*n*wl -
		3*n
	)/(
		-4*wl -
		4
	);
	m = round( mIdeal );
	for( i=0; i<n; i++ )
	{
		sizes.push( i<m ? wl : wu );
	}
	return sizes;
}
function gaussBlur( src, tgt, w, h, r )
{
	var bxs=boxesForGauss( r, 3 );
	boxBlur( src, tgt, w, h, (bxs[0]-1)/2 );
	boxBlur( tgt, src, w, h, (bxs[1]-1)/2 );
	boxBlur( src, tgt, w, h, (bxs[2]-1)/2 );
}
function fastBlur( amount )
{
	var w = h = SZ, c=[], i, j;
	var d = C.getImageData( 0, 0, w, h );
	for( i=0; i<3; i++ )
	{
		c.push(
			new Uint8ClampedArray( d.data.length/4 )
		);
	}
	for( i=0; i<d.data.length; i+=4 )
	{
		for( j=0; j<c.length; j++ )
		{
			c[j][i/4] = (d.data[i+j]);
		}
	}
	for( i=0; i<c.length; i++ )
	{
		gaussBlur( c[i], c[i], w, h, amount );
	}
	for( i=0; i<d.data.length; i+=4 )
	{
		for( j=0; j<c.length; j++ )
		{
			d.data[i+j] = c[j][i/4];
		}
	}
	C.putImageData( d, 0, 0 );
}



// BASIC SHAPES
function fillCircle( x, y, r )
{
	drawCircle( x, y, r );
	C.fill();
}
function drawEllipse( x, y, sx, sy, r )
{
	C.save();
	C.beginPath();
	C.translate( x, y );
	C.scale( sx, sy );
	C.arc( 0, 0, r, 0, 2*PI, false );
	C.restore();
}
function drawCircle( x, y, r )
{
	C.beginPath();
	C.arc( x, y, r, 0, 2*PI );
}
function drawCurve( a, b, c )
{
	C.beginPath();
	C.moveTo( a[0], a[1] );
	C.quadraticCurveTo( b[0], b[1], c[0], c[1] );
}



// COMPLEX SHAPES
function addBlob( p, size, spread, count )
{
	var x=p[0], y=p[1], x2, y2;
	var pos, rad = ( (spread[0]+spread[1])/2 );
	for( i=0; i<count; i++ )
	{
		pos = getPointInCircle(
			x, y,
			spread[0],
			spread[1]
		);
		x2 = pos[0], y2 = pos[1];
		fillCircle( x2, y2, size );
	}
	fillCircle( x, y, size*1.5 );
}
function addCloud()
{
	var x = CD.a[0], y = CD.a[1];
	var count = nums[0]%7 + 6;
	var headsz = CD.headsize;
	var bodysz = CD.bodysize;
	var necksz = CD.headsize/2;
	var x2, y2, x3, y3, scale, a=[], i, j;

	// LOAD
	if ( cloudBuff.length === 0 )
	{
		for( i=0; i<count; i++ )
		{
			j = ( nums[0] + i ) % nums.length;
			cloudBuff.push
			([
				to1( nums[j] ) - 0.5,
				to1( nums[j+1] ) - 0.5,
				to1( nums[j+2] )
			]);
		}
		cloudBuff.push( [0, 0.5] );
	}
	a = cloudBuff;
	C.save();

	// Shift artifacts out of frame
	C.translate( 0, SZ*-3 );

	// SHADOWS
	C.shadowOffsetY = SZ*3 + SZ/16.7;
	C.shadowColor = CD.shadC;
	C.shadowBlur = CD.shadBlur*4;
	if ( !key )
	{
		// HEAD
		for( i=0; i<count; i++ )
		{
			x2 = x + a[i][0]*headsz*2;
			y2 = y + a[i][1]*headsz;
			scale = a[i][2]*headsz*0.6 + headsz*0.4;
			fillCircle( x2, y2, scale );
		}
		fillCircle( x, y, headsz );

		// NECK AND BODY
		addBlob(
			[ x, y + SZ/5 ],
			necksz, [SZ/16, SZ/10], count*2
		);
		addBlob(
			[ x, y + SZ/2 ],
			bodysz, [SZ/3-bodysz, SZ/5], count*8
		);
	}

	// CACHE
	resetSeed();
	C.restore();
	C.save();

	// HEAD
	C.fillStyle = "white";
	for( i=0; i<count; i++ )
	{
		x2 = x + a[i][0]*headsz*2;
		y2 = y + a[i][1]*headsz;
		scale = a[i][2]*headsz/2 + headsz/2;
		fillCircle( x2, y2, scale );
	}
	fillCircle( x, y, headsz );

	// NECK AND BODY
	addBlob(
		[ x, y + SZ/5 ],
		necksz, [SZ/16, SZ/10], count*2
	);
	addBlob(
		[ x, y + SZ/2 ],
		bodysz, [SZ/3-bodysz, SZ/5], count*8
	);

	C.restore();
}
function addBrow( x, y, offs, ang, blink )
{
	if ( nums[2] > 128 && !blink ) return;
	var len = CD.eyeSize*2.1;
	C.save();
	if ( blink )
	{
		C.translate( x, y );
	} else {
		C.translate( x, y - CD.eyeSize*1.4 );
	}
	C.rotate( ang*PI/180 );
	C.moveTo( len/-2, 0 );
	C.beginPath();
	C.lineTo( len/-2, 0 );
	C.lineTo( len/2, 0 );
	C.stroke();
	C.restore();
}
function addEye( x, y, offs )
{
	var x2 = x + offs[0] * (CD.eyeSize - SZ/80 - CD.pupSize);
	var y2 = y + offs[1] * (CD.eyeSize - SZ/80 - CD.pupSize);
	drawEllipse( x, y, 1.15, 0.85, CD.eyeSize );
	C.stroke();
	drawCircle( x2, y2, CD.pupSize );
	C.stroke();
}
function addShape( shape, s, o, fill, stroke, shad )
{
	var ax, ay, bx, by, cx, cy, i;
	var vs = shape.verts;
	var is = shape.ins || null;
	var os = shape.outs || null;
	var x = ( o ? o[0] : SZ/2 );
	var y = ( o ? o[1] : SZ/2 );
	var l = vs.length;
	C.save();
	C.moveTo(
		vs[0][0]*s[0],
		vs[0][1]*s[1]
	);
	C.beginPath();
	for( i=0+l; i<=l+l; i++ )
	{
		ax = ay = bx = by = null;
		if ( os )
		{
			ax = x + (
				vs[ (i-1)%l ][0] +
				os[ (i-1)%l ][0]
			) * s[0];
			ay = y + (
				vs[ (i-1)%l ][1] +
				os[ (i-1)%l ][1]
			) * s[1];
		}
		if ( is )
		{
			bx = x + (
				vs[ i%l ][0] +
				is[ i%l ][0]
			) * s[0];
			by = y + (
				vs[ i%l ][1] +
				is[ i%l ][1]
			) * s[1];
		}
		cx = x + vs[i%l][0] * s[0];
		cy = y + vs[i%l][1] * s[1];
		if ( is && os )
		{
			C.bezierCurveTo( ax, ay, bx, by, cx, cy );
		} else {
			C.lineTo( cx, cy );
		}
	}
	C.closePath();
	if ( shad )
	{
		C.shadowOffsetX = shad.offs[0];
		C.shadowOffsetY = shad.offs[1];
		C.shadowColor = shad.clr;
	}
	if ( stroke )
	{
		C.lineWidth = stroke.width;
		C.strokeStyle = stroke.style;
		C.lineJoin = stroke.join;
		C.stroke();
	}
	if ( fill )
	{
		C.fillStyle = fill;
		C.fill();
	}
	C.restore();
}
function addLabel()
{
	C.save();
	var clr = [ "#F05878", "#F2C01F", "#35C1D4", "#62C29C" ];
	var txt = ["N", "i", "m", "B", "u", "d", "s"];
	var rot = [3, -3, 2, -2, 1, -1, 1];
	var w = [0, 17, 12.4, 15, 15.6, 15.2, 15.2];
	var p, x, y, i, r=17, k=SZ/256;
	C.font = "italic " + SZ/10 + "px Arial, sans-serif";
	C.fontWeight = "900";
	C.strokeStyle = "#fff";
	C.fillStyle = "#fff";
	C.lineWidth = SZ/30;
	C.lineJoin = "round";
	C.rotate( d2r(r*-1) );
	for( i=0; i<txt.length; i++ )
	{
		C.rotate( d2r(rot[i]) );
		x = lp[0] + ( i*k*w[i] );
		C.strokeText( txt[i], x, lp[1] );
		C.fillText( txt[i], x, lp[1] );
	}
	C.rotate( d2r(-1) );
	C.lineWidth = SZ/128;
	for( i=0; i<txt.length; i++ )
	{
		C.rotate( d2r(rot[i]) );
		x = lp[0]+( i*k*w[i] );
		C.strokeStyle = clr[i%4];
		C.strokeText( txt[i], x, lp[1] );
		C.fillStyle = clr[i%4];
		C.fillText( txt[i], x, lp[1] );
	}
	C.rotate( d2r(r-1) );
	var clbl=[
		[0, 0, SZ/16], 
		[SZ/-30, SZ/8, SZ/16], 
		[SZ/-64, SZ/16, SZ/16], 
		[SZ/14, SZ/48, SZ/16], 
		[SZ/9, SZ/36, SZ/16], 
		[SZ/5.5, SZ/48, SZ/16], 
		[SZ/4.5, SZ/-64, SZ/16], 
		[SZ/3.4, 0, SZ/18], 
		[SZ/2.8, SZ/-32, SZ/18]
	];
	C.fillStyle="#D4EEF5";
	for( i=0; i<clbl.length; i++ )
	{
		p = clbl[i];
		fillCircle( p[0], p[1], p[2] );
	}
	C.restore();
}
function addBox()
{
	var a = "#35C1D5", stk, shad, i;
	C.fillStyle = "#ffffff20";
	C.fillRect( 0, 0, SZ, SZ );
	p1 = {
		verts: [
			[0,0], [SZ, 0], [SZ, SZ], 
			[0, SZ], [0,0], [0, SZ/3.8], 
			[SZ/2.4, SZ/7.5], [SZ/2, 0], [0,0]
		],
		ins: [
			[0,0], [0,0], [0,0],
			[0,0], [0,0], [0,0],
			[0,0], [0,SZ/9], [0,0]
		],
		outs: [
			[0,0], [0,0], [0,0],
			[0,0], [0,0], [0,0],
			[0,0], [0,0], [0,0]
		]
	};
	p2 = {
		verts: [
			[0,SZ/3.8], [SZ/2.4,SZ/7.5],
			[SZ/2,0], [0,0]
		],
		ins: [ [0,0],[0,0],[0,SZ/80],[0,0] ],
		outs: [ [0,0],[0,0],[0,0],[0,0] ]
	};
	stk = {
		width: SZ/16,
		style: a,
		join: "miter"
	}
	shad = {
		offs: [ SZ/25, SZ/25 ],
		clr:"#00000040"
	};
	addShape( p1, [1,1], [0,0], null, stk, shad );
	addShape( p2, [1,1], [0,0], a, stk );
}
function addBlush(p,s)
{
	var grad, x = p[0], y = p[1];
	C.save();
	grad = C.createRadialGradient( x, y, 0, x, y, s );
	grad.addColorStop( 0, "#ff000020" );
	grad.addColorStop( 1, "#ff000000" );
	C.fillStyle = grad;
	C.globalCompositeOperation = "hard-light";
	C.fillRect( x-s, y-s, x+s, y+s );
	C.restore();
}
function addMouth()
{
	var x = CD.a[0];
	var y = CD.a[1] + SZ/10;
	var sz = CD.headsize/SZ;
	var offs = [
		to1( nums[4] )*( SZ/6.7 )*sz,
		to1N( nums[5] )*( SZ/20 )*sz
	];
	var a = offs[0], b = offs[1], c = getHypo( a, b );
	var ss = 0.66, ang = getAngle( a, b, c );
	var p1, p2, p3;

	// DRAW MOUTH
	if ( ang < 7 ) offs[1] = 0; // flat mouth
	p1 = [ x-offs[0], y+offs[1] ];
	p2 = [ x, y ];
	p3 = [ x+offs[0], y+offs[1] ];

	// PAINT MOUTH
	C.moveTo( p1[0], p1[1] );
	C.beginPath();
	C.lineTo( p1[0], p1[1] );
	C.arcTo( p2[0], p2[1], p3[0], p3[1], a );
	C.lineTo( p3[0], p3[1] );
	C.stroke();

	// STACHE
	if ( EASTER || nums[12]<39 )
	{
		stache = {
			verts:[
				[-93, -38], 
				[-52, 6], 
				[0, -33], 
				[-41, -46], 
				[-68, -28]
			], 
			ins: [
				[9, -6], 
				[-29, -4], 
				[9, 13], 
				[13, -5], 
				[9, -2]
			], 
			outs: [
				[-10, 0], 
				[58, 8], 
				[-13, -17], 
				[-13, 5], 
				[-16, 4]
			]
		};
		scaleShape( stache );
		addShape(
			stache,
			[ ss, ss ],
			[ x, y+offs[1]/2 ],
			"#9c6f50"
		);
		addShape(
			stache,
			[ ss*-1, ss ],
			[ x, y+offs[1]/2 ],
			"#9c6f50"
		);
	}
}
function addFace( blink, bIdx )
{
	var cidx, col, ang, offs, e1, e2, ed;
	var bl = ( nums[15]<39 );
	var ang = to1N( nums[8] ) * 45;
	var x = CD.a[0];
	var y = CD.a[1] - SZ/40;

	cidx = nums[6] % CD.colors.length;
	col = CD.colors[cidx];
	ed = max( 6, to1(nums[7])*(SZ/17) );
	offs = [
		to1N( nums[9] ),
		to1N( nums[10] )
	];
	C.save();
	C.strokeStyle = col;
	C.lineWidth = CD.lineWidth;
	C.lineCap = C.lineJoin = "round";

	// EYES
	e1 = [ x-SZ/24 - ed, y ];
	e2 = [ x+SZ/30 + ed, y ];

	// BLUSH
	if ( bl )
	{
		addBlush([
			e1[0] - SZ/10,
			e1[1] + SZ/10
		], SZ/10 );
		addBlush([
			e2[0] + SZ/10,
			e2[1] + SZ/10
		], SZ/10 );
	}

	// EYES
	if( !blink )
	{
		addEye( e1[0], e1[1], offs );
		addEye( e2[0], e2[1], offs );
		addBrow( e1[0], e1[1], offs, ang );
		addBrow( e2[0], e2[1], offs, ang*-1 );
	} else {
		addBrow( e1[0], e1[1], [0, 0], 0, blink );
		addBrow( e2[0], e2[1], [0, 0], 0, blink );
	}

	addMouth();
	C.miterLimit = 0;
	C.restore();
	if ( BOX )
	{
		addBox();
		addLabel();
	}
	saveImg( bIdx );
}
function drawBG( bIdx )
{
	if ( bIdx && imgBuff[bIdx] )
	{
		C.drawImage( imgBuff[bIdx], 0, 0 );
		return;
	}
	var count = nums[0]%28+4;
	var ca = CD.colors[1], cb = "#0A6A7F";
	var grad, i;
	var grad = C.createRadialGradient(
		CD.a[0], CD.a[1], 0, 
		CD.a[0], CD.a[1], SZ
	);
	if ( EASTER || nums[0]<64 )
	{
		CD.shadC = '#0A6A7F'
	} else {
		ca = CD.bgC, cb = CD.shadC;
	}
	grad.addColorStop( 0, ca );
	grad.addColorStop( 1, cb );
	C.fillStyle = grad;
	if ( !key )
	{
		C.fillRect( 0, 0, SZ, SZ );
	}
	fastBlur( 8 );
	addCloud();
	saveImg( bIdx );
	imgBuff[0] = imgBuff[bIdx];
}



// GOVERNANCE
function render( blink )
{
	resetSeed();
	if( BOX )
	{
		var i=3, j=4, k=5;
	} else {
		var i=0, j=1, k=2;
	}
	if ( blink ){
		if ( !imgBuff[k] ){
			drawBG( i );
			addFace( blink, k );
		} else {
			C.drawImage( imgBuff[k], 0, 0 );
		}
		setTimeout( render, 200 );
	} else {
		if ( !imgBuff[j] ){
			drawBG(i);
			addFace( blink, j );
		} else {
			C.drawImage( imgBuff[j], 0, 0 );
		}
	}
	queueBlink();
}
function init()
{
	cloudBuff=[], imgBuff=[], nums=[];
	CVS = doc.querySelector( "canvas" );
	C = CVS.getContext( "2d" );

	clearTimeout( BLINK_TO );

	hidden = doc.createElement( "div" );
	hidden.style.display = "none";
	doc.body.appendChild( hidden );
	CVS.addEventListener( "click", toggleBox );

	var href = doc.location.href;
	if (
		href.match('localhost') ||
		href.match('github')
	) {
		SZ = Math.min(
			win.innerWidth,
			win.innerHeight
		);
		doc.body.style.marginTop = "10vh";
	} else {
		SZ = Math.min(
			win.innerWidth,
			win.innerHeight
		);
	}
	CVS.width = CVS.height = SZ;
	CTR = SZ/2;
	CD = {
		lineWidth: SZ/80,
		headsize: SZ/6.5, bodysize: SZ/8,
		eyeSize: SZ/28, pupSize: SZ/200,
		a: [ CTR, SZ/2-SZ/8 ],
		shadBlur: SZ/67,
		blur: SZ/80,
		colors: [
			"#f2668b", "#23c7d9",
			"#48d9a4", "#f2bf27"
		],
		bgC: "#f2f1df",
		shadC: "#c9c1a2",
		wireShadC: "#494102"
	};
	lp = [ SZ/-96, SZ/4.2 ];
	newHash();
	nums = getNums();
}
function main(n)
{
	if ( n )
	{
		setDebug(n);
	}
	init();
	render();
}
main();
