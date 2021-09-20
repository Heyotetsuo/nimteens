var round=Math.round,floor=Math.floor,abs=Math.abs,sqrt=Math.sqrt,asin=Math.asin,acos=Math.acos,sin=Math.sin,cos=Math.cos,PI=Math.PI,min=Math.min,max=Math.max,pow=Math.pow;
var cloudBuff,imgBuff,nums,lp,stache,key,seed,mask;
var log=console.log,doc=document,win=window,hidden,BLINK_TO,BOX=false,shad;
var CVS,SZ,CTR,CD,C,EASTER=false;
var GENDER=1,EMO=false,BALD=false;

// HANDS
hands = [
	{"width":595.280029296875,"height":841.890014648438,"_2":{"verts":[[243.5,380.6],[235.7,471.9],[215.9,503.8],[212,514],[234.9,538.1],[224.2,597.9],[224.4,611.5],[235.1,618.1],[242.8,607.4],[262.5,540.7],[274.1,603.8],[280.3,617],[293.6,619.6],[297.8,604.1],[283.8,546.9],[301.7,553.3],[309.8,537.9],[328.4,538.2],[331.4,516.8],[318.4,484.5],[307.4,467.1],[303.5,449.2],[304.1,404.7],[319,274.4],[319,257.9],[286.5,240.6],[237.1,244.3],[233.4,280.1]],"ins":[[-3.4,-33.5],[13.7,-27.8],[6.3,-10.8],[0.3,-3.7],[-11,-4.6],[3.1,-20],[-1.6,-4.3],[-4.4,1.3],[-1.3,4.4],[-6.6,22.2],[-5.7,-20.7],[-3.4,-3.6],[-4.1,2.7],[0.6,5.6],[7.1,18.3],[-6.5,1.7],[3.1,5.9],[-4.6,5.8],[1.4,7.3],[6.4,9.8],[2.7,6.3],[0.6,6.1],[-1.1,14.8],[-6.7,43.2],[1.7,5.3],[13.1,0.7],[12.7,-6.4],[-1.2,-12.2]],"outs":[[3.1,30.8],[-5.5,11.2],[-1.8,3.2],[-1.1,11.9],[-4,19.9],[-0.7,4.6],[1.6,4.3],[4.4,-1.3],[6.6,-22.2],[2,21.3],[1.3,4.7],[3.4,3.6],[4.7,-3.1],[-2.2,-19.5],[4.6,4.9],[6.5,-1.7],[3,6.8],[4.6,-5.9],[-2.2,-11.5],[-3.8,-5.8],[-2.4,-5.6],[-1.4,-14.8],[3.2,-43.6],[0.9,-5.5],[-4,-12.5],[-13.8,-0.8],[-11.9,6],[3.3,33.5]],"fillStyle":"#ffffff","shadowOffsetX":-4,"shadowColor":"#00000060","shadowBlur":16},"_1":{"verts":[[236.8,536.1],[265.4,533],[267,528.2],[264,523.3],[248,510],[257.1,493.1],[247.8,477.7]],"ins":[[0,0],[-6.1,9.1],[0.2,1.7],[1.4,1.4],[5.8,3.9],[-0.6,6.5],[6.3,1.7]],"outs":[[7.9,7.6],[0.9,-1.4],[-0.2,-1.9],[-4.9,-4.9],[4.5,-4.7],[0.6,-6.5],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_0":{"verts":[[284.1,545.2],[279.1,530.3],[280.9,519.2],[287.5,520.3],[298.5,528.1],[294.6,513.9],[303.3,503.5],[315.5,515],[326,528.9]],"ins":[[0,0],[1.7,5],[-3.8,1.7],[-2.1,-1.1],[-3.3,-3],[-0.3,4.9],[-4.9,0.3],[-2.2,-5.6],[-5.8,-1.6]],"outs":[[-1.7,-5],[-1.3,-3.9],[2.1,-0.9],[4,2.1],[-2.1,-4.5],[0.3,-4.9],[6,-0.4],[2.2,5.6],[0,0]],"lineWidth":4,"strokeStyle":"#000000"}}
];

// RANDOMNESS
function urandint(n){ return abs( randint(n) ); }
function randint(n)
{
	if (n) seed = n;
	seed ^= seed << 13;
	seed ^= seed >> 17;
	seed ^= seed << 5;
	return seed;
}
function urand(n)
{
	var seed = randint( n );
	return ((seed<0 ? ~seed+1 : seed) % 1024) / 1024;
}
function rand(n){ return urand(n)*2-1; }
function newHash()
// get a new hash altogether
{
	var a = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var s='', i;
	for( i=0; i<64; i++ )
	{
		s += a[ floor(rnd() * a.length) ];
	}
	tokenData.hash = "0x" + s;
}
function resetSeed()
// rewind to beginning of PRNG seed results
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
	rvs = hashPairs.map( function(n){ return parseInt(n,16); } );
	return rvs;
}
function getRange( a, b )
{
	var min = urandint()%(b-a)+a;
	var max = urandint()%(b-a)+a;
	if ( max < min )
	{
		var tmpmin = max;
		max = min;
		min = tmpmin;
	}
	return [min, max];
}
function getPalette()
// gets a random palette based off the normal CD.colors array
{
	var pal = copyArray( CD.colors );
	var n = urandint()%pal.length;
	var a = [], i, cIdx;
	for( i=0; i<n; i++ )
	{
		idx = urandint()%pal.length;
		a.push( pal.splice(cIdx) );
	}
	return a;
}



// HELPERS
function logf( s, a ) { console.log( printf(s,a) ); }
function alertf( s, a )
{
	var A = [];
	for (var i=0; i<a.length; i++ )
	{
		A.push( a[i].toString() );
	}
	alert( printf(s,A) );
}
function vardump( o, brief )
{
	s = "";
	for(var p in o)
	{
		if ( brief )
		{
			s += printf( '"%s", ', [p] );
		} else {
			s += printf( "%s: %s\n", [p,o[p]] );
		}
	}
	return s;
}
function printf( s, a )
{
	var S=s, i;
	for( i=0; i<a.length; i++ )
	{
		S = S.replace( "%s", a[i] );
	}
	return S;
}
function isArray( o )
{
	if ( o instanceof Array )
	{
		return true;
	} else {
		return false;
	}
}
function copyArray( a )
{
	var b = [];
	for ( var i=0; i<a.length; i++ )
	{
		b.push( a[i] );
	}
	return b;
}



// MATH
function normInt(s){ return parseInt(s,32)-SZ; }
function d2r(n){ return n*PI/180; }
function r2d(n){ return n*180/PI; }
function to1(n){ return n/255; }
function to1N(n){ return n/128-1; }
function getVec( a, b ){ return [ a[0]-b[0], a[1]-b[1] ]; }
function getVecLen( v ){ return sqrt( pow(v[0],2) + pow(v[1],2) ); }
function doOp( a, b, op )
{
	return (
		( op==='+'&&a+b ) ||
		( op==='-'&&a-b ) ||
		( op==='*'&&a*b ) ||
		( op==='/'&&a/b ) ||
		( op==='^'&&pow(a,b) )
	);
}
function arrMath( a, b, op )
{
	var c=[], i;
	var chcode = (op).charCodeAt();
	for( i=0; i<a.length; i++ )
	{
		if ( isArray(a[i]) && !b.length ){
			c[i] = arrMath( a[i], b, op );
		} else if ( isArray(a[i]) && isArray(b[i]) ) {
			c[i] = arrMath( a[i], b[i], op );
		} else if ( !b.length ) {
			c[i] = doOp( a[i], b, op );
		} else {
			c[i] = doOp( a[i], b[i], op );
		}
	}
	return c;
}
function d2r( deg ){ return deg*PI/180; }
function r2d( rad ){ return rad*180/PI; }
function getHypo(a,b){ return sqrt(abs(a*a+b*b)); }
function getAngle(a,b,c){ return Math.acos(abs(a/c))*(180/PI); }
function getPointOnCircle( sz, a ){ return [ cos(a)*sz, sin(a)*sz ]; }
function getPointOnEllipse( xwidth, ywidth, sz, a ){ return [ cos(a)*sz*xwidth, sin(a)*sz*ywidth ]; }
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
function setDebug( n ){ if ( n ) tokenData.hash = n; }



// TRANSFORMATION
function scaleShape( s, n )
{
	var p, i, j, v;
	for( p in s )
	{
		for( i=0; i<s[p].length; i++ )
		{
			for( j=0; j<2; j++ )
			{
				v = s[p][i][j];
				s[p][i][j] *= n;
			}
		}
	}
}



// ANIMATION
function queueBlink()
{
	clearTimeout( BLINK_TO );
	BLINK_TO = setTimeout(
		function(){ render( blink=true ); },
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
	var w=SZ, h=SZ, c=[], i, j;
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
function fillMask( color )
{
	C.clip( mask, "nonzero" );
	C.fillStyle = color;
	C.fillRect( 0, 0, SZ, SZ );
}
function maskCircle( x, y, r )
{
	mask.arc( x, y, r, 0, 2*PI );
	mask.closePath();
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
function drawLine( a, b )
{
	C.beginPath();
	C.moveTo( a[0], a[1] );
	C.lineTo( b[0], b[1] );
}
function getRndLine()
{
	var a = [ urandint()%SZ, urandint()%SZ ];
	var b = [ urandint()%SZ, urandint()%SZ ];
	var n = SZ/128;
	var lo=n*-1, hi=SZ+n;
	
	if ( a[0]<a[1] ) a[0]=lo; else a[1]=lo;
	if ( b[0]>b[1] ) b[0]=hi; else b[1]=hi;

	return [a,b];
}



// COMPLEX SHAPES
function addShape( shape, s, o, fill, stroke, shad )
// REQUIRED: shape: 2dmatrix, s: scale [x,y], o: offset [x,y]
// OPTIONAL: fill: color, stroke: color, shad: color
{
	C.save();
	var ax, ay, bx, by, cx, cy, i, j, p;
	var vs = shape.verts;
	var is = shape.ins || null;
	var os = shape.outs || null;
	var x = o ? o[0] : SZ/2;
	var y = o ? o[1] : SZ/2;
	var l = vs.length;
	var blank = "#00000000";
	var style = "";
	var styles = {
		shadowOffsetX: SZ/256,
		shadowOffsetY: SZ/256,
		shadowColor: blank,
		shadowBlur: 0,
		fillStyle: fill || blank,
		lineWidth: SZ/256,
		strokeStyle: blank,
		lineJoin: "round",
		lineCap: "round"
	}
	if ( stroke ){ style = mergeStyle( style, stroke ); }
	if ( shad ){ style = mergeStyle( style, shad ); }
	C.moveTo(
		x + vs[0][0]*s[0],
		y + vs[0][1]*s[1]
	);
	C.beginPath();
	for( i=0+l; i<=l+l-1; i++ )
	{
		j = i%l; k = (i-1)%l;
		ax = null; ay = null;
		bx = null; by = null;
		if ( os )
		{
			if ( j<1 )
			{
				ax = x + vs[0][0]*s[0];
				ay = y + vs[0][1]*s[1];
			} else {
				ax = x + (
					vs[k][0] +
					os[k][0]
				) * s[0];
				ay = y + (
					vs[k][1] +
					os[k][1]
				) * s[1];
			}
		}
		if ( is )
		{
			bx = x + (
				vs[j][0] +
				is[j][0]
			) * s[0];
			by = y + (
				vs[j][1] +
				is[j][1]
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
	for( var p in styles )
	{
		style = shape[p];
		C[p] = shape[p] || styles[p];
	}
	if (shape.fillStyle) C.fill();
	if ( C.lineWidth )
	{
		C.lineWidth *= (s[0]+abs(s[1]))/2;
		C.stroke();
	}
	C.restore();
}
function renderGroup( group, s, o )
{
	var shape,p, w=group.width, h=group.height;
	var S = [s[0]*(SZ/h),s[1]*(SZ/h)*-1];
	var O = [
		o[0] + CTR - (w/2*S[0]),
		o[1] + CTR - (h/2*S[1])
	];
	for( p in group )
	{
		C.save();
		if ( p.match(/^_\d/) )
		{
			addShape( group[p], S, O );
		}
		C.restore();
	}
}
function addLaser( line, sz )
{
	drawLine( line[0], line[1] );
	C.lineWidth = sz;
	var inc, i;

	for( i=0; i<20; i++ )
	{
		inc = (i+1);
		C.lineWidth = sz/inc;
		C.stroke();
	}
}
function addLasers()
{
	var paths=[], newPath, diff, sz, i;
	var laserSz=getRange(1,100), pal=getPalette();
	var laserN=urandint()%40, laserWeight=urand()%1;
	var minSz=laserSz[0], maxSz=laserSz[1];

	for( i=0; i<laserN; i++ )
	{
		paths.push( getRndLine() );
	}

	C.save();
	C.strokeStyle = "#060606";
	C.globalCompositeOperation = "lighter";
	
	for( i=0; i<paths.length; i++ )
	{
		// make rnd size SZ btwn MINSZ and MAXSZ
		sz = urandint()%(maxSz-minSz)+minSz;

		// find weighted diff DIFF (PATH - PPATH) * WEIGHT
		// to randomize randomness of lasers
		diff = arrMath( arrMath(paths[0],paths[i],'-'), laserWeight, '*' );
		newPath = arrMath( paths[i], diff, '-' );

		addLaser( newPath, SZ/5 );
	}
	C.restore();
}
function addComb( a, b, w )
{
	// get vectors a,b and wind ( V, VW ) 
	var v = getVec( a, b );
	var vw = CD.wind;

	// get vector length
	var l = max( 80, getVecLen(v) );

	// get wind "position" (100% weight)
	var c = arrMath(
		a,
		arrMath( vw, [l,l] , '*' ),
		'+'
	);

	// "weight" the wind
	var d=b, i;
	for( i=0; i<w; i++ )
	{
		d = arrMath( d, c, '+');
		d = arrMath( d, [2,2], '/' );
	}

	return d;
}
function addBlob( p, size, spread, count, clip )
{
	var x=p[0], y=p[1], x2, y2, pos;
	for( i=0; i<count; i++ )
	{
		pos = getPointInCircle(
			x, y,
			spread[0],
			spread[1]
		);
		x2=pos[0];
		y2=pos[1];
		if ( clip )
		{
			maskCircle( x2, y2, size );
		} else {
			fillCircle( x2, y2, size );
		}
	}
	if ( clip )
	{
		maskCircle( x, y, size*1.5 );
	} else {
		fillCircle( x, y, size*1.5 );
	}
}
function addCloud()
{
	var x = CD.a[0], y = CD.a[1];
	var count = nums[0]%7 + 6;
	var headsz = (SZ/5)*CD.headsize;
	var bodysz = CD.bodysize;
	var necksz = (SZ/6.5)/2;
	var x2, y2, scale, a=[], i, j;

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
	C.shadowOffsetY = SZ*3 + SZ/8;
	C.shadowColor = "#00000040";
	C.shadowBlur = CD.shadBlur*8;
	if ( !key )
	{
		// HEAD
		for( i=0; i<count; i++ )
		{
			x2 = x + a[i][0]*headsz;
			y2 = y + a[i][1]*headsz;
			scale = a[i][2]*headsz*0.4 + headsz*0.4;
			fillCircle( x2, y2, scale );
		}
		fillCircle( x, y, headsz );

		// NECK AND BODY
		addBlob(
			[ x, y + SZ/5 ], necksz,
			[SZ/16, SZ/10], count*2
		);
		addBlob(
			[ x, y + SZ/2 ], bodysz,
			[SZ/3-bodysz, SZ/5], count*8
		);
	}


	// CACHE
	resetSeed();
	C.restore();
	C.save();

	// BG HAIR
        if ( EMO )
        {
                addHair( nums[19]%40+20 );
        } else {
                addHair( nums[19]%200+200 );
        }

	// HEAD
	mask = new Path2D();
	for( i=0; i<count; i++ )
	{
		x2 = x + a[i][0]*headsz;
		y2 = y + a[i][1]*headsz;
		scale = a[i][2]*headsz*0.4 + headsz*0.4;
		maskCircle( x2, y2, scale );
	}
	maskCircle( x, y, headsz*0.8 );



	// NECK AND BODY
	addBlob(
		[ x, y + SZ/5 ],necksz,
		[SZ/16, SZ/10], count*2,
		true
	);
	addBlob(
		[ x, y + SZ/2 ], bodysz,
		[SZ/3-bodysz, SZ/5], count*8,
		true
	);
	addBlob(
		[ x, SZ ], bodysz*1.2,
		[SZ/3-bodysz, SZ/5], count*8,
		true
	);
	fillMask( "white" );
	C.restore();

	// FG HAIR
        if ( !EMO )
        {
                addHair( nums[19]%200+200 );
        }

	// HANDS
        if ( rand() > 0.5 )
        {
                var hIdx = urandint()%hands.length;
                var hand = hands[hIdx];
                var o = [
                        [
                                SZ/6 + rand() * SZ/16,
                                SZ/3
                        ]
                ];
                var s = 1;
                renderGroup( hand, [s,s], o[hIdx] ); 
        }
}
function addBrow( x, y, ang, blink )
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
function addLashes( e1, e2 )
{
	C.save();
	C.lineWidth *= 0.66;
	var sz = CD.eyeSize * CD.headsize * 1.3;
	var nlashes = urandint()%5+3;
	var step = PI/2/nlashes;
	var a, b, i, x, y;
	for (i=0; i<nlashes; i++ )
	{
		// left lashes
		x = e1[0], y = e1[1];
		a = getPointOnEllipse( 1.15, 0.85, sz*0.8, step*i+PI );
		b = getPointOnEllipse( 1.15, 0.85, sz*0.9, step*i+PI-step/2 );
		c = [ a[0]*1.66, a[1]*1.66, ];
		drawCurve(
			[ a[0]+x, a[1]+y ],
			[ b[0]+x, b[1]+y ],
			[ c[0]+x, c[1]+y ]
		);

		// right lashes
		C.stroke();
		x = e2[0], y = e2[1];
		a = getPointOnEllipse( 1.15, 0.85, sz*0.8, step*i*-1 );
		b = getPointOnEllipse( 1.15, 0.85, sz*0.9, step*i*-1+step/2 );
		c = [ a[0]*1.66, a[1]*1.66, ];
		drawCurve(
			[ a[0]+x, a[1]+y ],
			[ b[0]+x, b[1]+y ],
			[ c[0]+x, c[1]+y ]
		);
		C.stroke();
	}
	C.restore();
}
function addEye( x, y, offs, stroke, bagCol )
{
	var sz = CD.headsize, y2 = y;
	var x2 = x + offs[0] * (SZ/40 - CD.pupSize);

	// EYE BAGS
	var bagY = y+SZ/100;
	drawEllipse( x, bagY, 1, 1, CD.eyeSize*sz*1.3 );
	var grad = C.createRadialGradient(
		x, bagY, 0,
		x, bagY, CD.eyeSize*sz*1.3
	);
	grad.addColorStop( 0.5, bagCol );
	grad.addColorStop( 1, bagCol+"00" );
        C.globalCompositeOperation = "multiply";
	C.fillStyle = grad;
	C.fill();
        C.globalCompositeOperation = "source-over";

	C.shadowColor = "#00000000";
	C.strokeStyle = stroke;
	C.fillStyle = "white";
	drawEllipse( x, y, 1.15, 0.85, CD.eyeSize*sz );
        C.fill();
	C.stroke();
	drawCircle( x2, y2, CD.pupSize*sz );
	C.stroke();
}
function addLabel()
{
	C.save();
	var clr = [ "#F05878", "#F2C01F", "#35C1D4", "#62C29C" ];
	var txt = ["N", "i", "m", "B", "u", "d", "s"];
	var rot = [3, -3, 2, -2, 1, -1, 1];
	var w = [0, 17, 12.4, 15, 15.6, 15.2, 15.2];
	var p, x, r=17, k=SZ/256;
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
	var stk, shad, v = [0,0];
	C.fillStyle = "#ffffff20";
	C.fillRect( 0, 0, SZ, SZ );
	p1 = {
		verts: [
			v, [SZ, 0], [SZ, SZ], 
			[0, SZ], v, [0, SZ/3.8], 
			[SZ/2.4, SZ/7.5], [SZ/2, 0], v
		],
		ins: [
			v, v, v,
			v, v, v,
			v, [0,SZ/9], v
		],
		outs: [
			v, v, v,
			v, v, v,
			v, v, v
		],
		lineWidth: SZ/16,
		strokeStyle: "#35C1D5",
		join: "miter",
		offs: [ SZ/25, SZ/25 ],
		clr: "#00000040"
	};
	p2 = {
		verts: [
			[0,SZ/3.8], [SZ/2.4,SZ/7.5],
			[SZ/2,0], v
		],
		ins: [ v,v,[0,SZ/80],v ],
		outs: [ v,v,v,v ],
		fillStyle: "#35C1D5",
		lineWidth: SZ/16,
		strokeStyle: "#35C1D5",
		join: "miter"
	};
	addShape( p1, [1,1], [0,0] );
	addShape( p2, [1,1], [0,0] );
}
function drawStrand( a, b, c, clr )
{
	drawCurve(a,b,c);
	C.save();
	C.shadowColor = "#00000000";
	C.fillStyle = "#00000000";
	C.strokeStyle = "black";
	C.lineWidth = CD.lineWidth;
	C.stroke();
	C.restore();
}
function colorStrand( a, b, c, color )
{
	drawCurve(a,b,c);
	C.save();
	C.lineWidth = 1;
	C.strokeStyle = color;
	C.shadowColor = color;
	C.shadowBlur = SZ/180;
	for(var i=0; i<SZ/40; i++) C.stroke();
	C.restore();
}
function chooseAtRandom( arr )
{
        return arr[urandint()%arr.length];
}
function addStrand()
{
        var color = chooseAtRandom( CD.colors );
	var hairh = SZ/CD.headsize/6;
	var hairw = SZ/CD.headsize/3;
	var a,b,b2,c, x1,x2,x3;

	x = CD.a[0];
	y = ( EMO ? CD.a[1]+SZ/20 : CD.a[1] );
	x1 = rand();
	y1 = urand();
	x2 = rand();
	y2 = rand();
	x3 = rand();
        a = [
                x + x1*hairw/2,
                y - y1*hairh-hairh
        ];
        if ( EMO )
        {
                b = [
                        a[0] + x2*hairw/2,
                        a[1] + y2*hairh
                ];
                c = [
                        b[0] + x3*hairw/4,
                        b[1] + y1*hairh*2
                ];
                CD.windWeight *= -1;
        } else {
                b = [
                        a[0] + x2*hairw/2,
                        a[1] + y2*hairh/2
                ];
                c = [
                        b[0] + x3*hairw/4,
                        b[1] + y1*hairh/4
                ];
        }

        // WIND
        b2 = addComb( a, b, CD.windWeight );
        c = arrMath( c, arrMath(b,b2,'-'), '+' );
        b = b2;
        c = addComb( b, c, CD.windWeight/2 );

	drawStrand( a, b, c );
	colorStrand( a, b, c, color );
}
function addHair( c )
{
        resetSeed();
	for( var i=0; i<c; i++ )
	{
		addStrand( i );
	}
}
function getExpoCount( min, max )
{
        var div = max - min;
	var c = urandint()%div+min;
        return abs( c*c ) / div;
}
function addPimples()
{
        var c = getExpoCount( 0, 20 );
	var sz=(SZ/5)*CD.headsize;
	var y = CD.a[1]+sz/2;
	var zitSz, i, p;
	var zitColor = "#f77";
	C.save();
	C.clip( mask, "nonzero" );
	for( i=0; i<c; i++ )
	{
		zitSz = SZ/150*urand();
		p = getPointInCircle( CD.a[0], CD.a[1]+SZ/128, sz, sz/2 );
		C.fillStyle = zitColor;
		fillCircle( p[0], p[1], zitSz );
		C.fillStyle = "#fff";
		fillCircle( p[0]+SZ/1000, p[1]-SZ/1000, zitSz/2 );
	}
	C.restore();
}
function addFreckles( x1, x2, h )
{
        var c = getExpoCount( 0, 75 );
	var sz=SZ/12, i, p;
	var y = CD.a[1]+sz/2;
	C.save();
	C.fillStyle = "#fa7";
	C.clip( mask, "nonzero" );
	for( i=0; i<c; i++ )
	{
		p = getPointInCircle( x1, y, sz, sz/2 );
		fillCircle( p[0], p[1], SZ/400*urand() );
	}
	C.restore();
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
function drawStacheHair( x, y, w, h )
{
        var len = SZ/64;
        var d = x-CD.a[0];
        var a = [ x, y ];
        var b = [ x+d/10, y+urand()*len  ];
        drawLine( a, b );
        C.stroke();
}
function addStache( a, b, ang )
{
        C.save();
        var w = max( SZ/22, abs(a) );
        var count = urandint()%(w*2)+20;
        var h = SZ/64;
        var offsX, x, y, i;
        // C.strokeStyle = "#a07040";
        C.lineWidth = SZ/512;
        for( i=0; i<count; i++ )
        {
                C.strokeStyle = chooseAtRandom( CD.colors );
                offsX = rand()*w;
                x = CD.a[0] + offsX;
                y = CD.a[1] + urand()*h + SZ/16 + abs(offsX)*b/100;
                drawStacheHair( x, y, w, h );
        }
        C.restore();
}
function addMouth( offs )
{
	var x = CD.a[0];
	var y = CD.a[1] + SZ/10;
	var a = offs[0], b = offs[1];
	var c = getHypo( a, b );
	var ss = 0.66, ang = getAngle( a, b, c );
	var p1, p2, p3;

	// STACHE
	if (
                GENDER === 0 ||
                EASTER ||
                ( nums[12]<39 && GENDER === 0 )
        ) {
                addStache( a, b, ang );
	}

	// DRAW MOUTH
	if ( ang < 7 ) offs[1] = 0; // flat mouth
	p1 = [ x-a, y+b ];
	p2 = [ x, y ];
	p3 = [ x+a, y+b ];

	// PAINT MOUTH
	C.moveTo( p1[0], p1[1] );
	C.beginPath();
	C.lineTo( p1[0], p1[1] );
	C.arcTo( p2[0], p2[1], p3[0], p3[1], a );
	C.lineTo( p3[0], p3[1] );
	C.stroke();

}
function addFace( blink, bIdx )
{
	var bl = ( nums[15]<39 );
	var ang = to1N( nums[8] ) * 36;
	var x = CD.a[0], y = CD.a[1];
	var sz = CD.headsize*1.2;
	var cidx = nums[6] % CD.colors.length;
	var bagCol = CD.darkColors[cidx];
	var col = CD.colors[cidx];
	var ed = max( 6, to1(nums[7])*(SZ/17) );
	var offs1 = [
		to1N( nums[9] ),
		to1N( nums[10] )
	];
	C.save();
	C.strokeStyle = col;
	C.lineWidth = CD.lineWidth;
	C.lineCap = C.lineJoin = "round";

	// EYES
	var e1 = [ x-SZ/24*sz - ed*sz, y ];
	var e2 = [ x+SZ/30*sz + ed*sz, y ];

	// BLUSH
	if ( bl )
	{
		addBlush([
			e1[0] - SZ/10,
			e1[1] + SZ/10
		], SZ/6 );
		addBlush([
			e2[0] + SZ/10,
			e2[1] + SZ/10
		], SZ/6 );
	}

        // SKIN
	var offs2 = [
		to1( nums[4] )*( SZ/8 ),
		to1N( nums[5] )*( SZ/40 )
	];
	addFreckles( e1[0], e1[1], offs2[1] );
	addFreckles( e2[0], e2[1], offs2[1] );
        if ( rand() > 0.5 ){ addPimples(); }


	// MOUTH
	addMouth( offs2 );

	// EYES
	if( !blink )
	{
		addEye( e1[0], e1[1], offs1, col, bagCol );
		addEye( e2[0], e2[1], offs1, col, bagCol );
		addBrow( e1[0], e1[1], ang );
		addBrow( e2[0], e2[1], ang*-1 );

		// LASHES
                if ( GENDER === 1 )
                {
                        addLashes( e1, e2 );
                }

	} else {
		addBrow( e1[0], e1[1], 0, blink );
		addBrow( e2[0], e2[1], 0, blink );
	}

        if ( EMO )
        {
                addHair( nums[19]%200+200 );
        }

	C.miterLimit = 0;
	C.restore();
	if ( BOX )
	{
		addBox();
		addLabel();
	}
	saveImg( bIdx );
}
function addBG( bIdx )
{
	if ( bIdx && imgBuff[bIdx] )
	{
		C.drawImage( imgBuff[bIdx], 0, 0 );
		return;
	}
	var c = CD.darkColors[urandint()%4];
	var grad = C.createRadialGradient(
		CD.a[0], CD.a[1], 0, 
		CD.a[0], CD.a[1], SZ
	);
	grad.addColorStop( 0, c );
	grad.addColorStop( 1, "black" );
	C.fillStyle = grad;
	if ( !key )
	{
		C.fillRect( 0, 0, SZ, SZ );
	}
	addLasers();
	fastBlur( urandint()%SZ/32 );
	addCloud();
	saveImg( bIdx );
	imgBuff[0] = imgBuff[bIdx];
}



// GOVERNANCE
function handleKeys( e )
{
	if ( e.code === "Space" )
	{
		main();
	}
}
function init()
{
	cloudBuff=[];
	imgBuff=[];
	nums=[];
	shad = doc.querySelector( "#shadow" );
	CVS = doc.querySelector( "canvas" );
	C = CVS.getContext( "2d" );
	mask = new Path2D();

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
                hairLen: urand(),
		headsize: 1.2, bodysize: SZ/8,
		eyeSize: SZ/28, pupSize: SZ/200,
		a: [ CTR, CTR - SZ/8 ],
		shadBlur: SZ/67,
		blur: SZ/80,
		colors: [
			"#f2668b", "#23c7d9",
			"#48d9a4", "#f2bf27"
		], darkColors: [
			"#813345", "#126374",
			"#247452", "#815813"
		],
		bgC: "#f2f1df",
		shadC: "#c9c1a2",
		wireShadC: "#494102"
	};

	lp = [ SZ/-96, SZ/4.2 ];
	newHash();
	resetSeed();
	nums = getNums();
	CD.wind = [ rand(), urand()/-2-1/2 ];
	CD.windWeight = urandint()%1+2;
	CD.force = rand()*3;
        EMO = urand() > 0.9;
        GENDER = ( urand()>0.66 ? 1 : 0 );
}
function render( blink )
{
	var i,j,k;
	resetSeed();
	if( BOX )
	{
		i=3; j=4; k=5;
	} else {
		i=0; j=1; k=2;
	}
	if ( blink !== undefined ){
		if ( !imgBuff[k] ){
			addBG( i );
			addFace( blink, k );
		} else {
			C.drawImage( imgBuff[k], 0, 0 );
		}
		setTimeout( render, 200 );
	} else {
		if ( !imgBuff[j] ){
			addBG( i );
			addFace( blink, j );
		} else {
			C.drawImage( imgBuff[j], 0, 0 );
		}
	}
	queueBlink();
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
