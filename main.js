var round=Math.round,floor=Math.floor,abs=Math.abs,sqrt=Math.sqrt,asin=Math.asin,acos=Math.acos,sin=Math.sin,cos=Math.cos,PI=Math.PI,min=Math.min,max=Math.max,pow=Math.pow;
var cloudBuff,imgBuff,nums,lp,stache,key,seed,mask;
var log=console.log,doc=document,win=window,hidden,BLINK_TO,BOX=false,shad;
var CVS,SZ,CTR,CD,C,EASTER=false;

// HANDS
hands = [
	{"width":269.733431776442,"height":273.99083764285,"_0":{"verts":[[221.5,-255.4],[197.9,-187.1],[176.1,-108.2],[174.3,-93.7],[183.4,-83.5],[185.4,-73.9],[195.2,-74.6],[192.3,-33.6],[198,-19.7],[201.3,-18.6],[205.9,-23.5],[212.1,-73.4],[214.7,-67],[220.9,-66.4],[222.2,-69.4],[224.1,-85.8],[232.7,-83.7],[236.5,-93.4],[234.2,-118.2],[231.3,-127.7],[233.6,-137.3],[267.7,-244]],"ins":[[0,0],[6.4,-23.2],[7.3,-26.3],[-0.8,-4.8],[-4.8,-0.6],[-2.9,-2.2],[-2.5,2.5],[-1,-13.7],[-4.3,-2.9],[-1.2,0.1],[-0.9,2.2],[0,16.9],[-1.6,-1.7],[-1.6,1.7],[-0.2,1.1],[-0.1,5.5],[-2.7,2.3],[-0.4,3.5],[2.9,7.9],[0.2,3.3],[-1.2,3.1],[-9.5,36.1]],"outs":[[-10.7,21.6],[-7.3,26.3],[-1.3,4.7],[0.8,4.8],[-1.7,3.1],[2.9,2.2],[-2.9,13.4],[0.4,5.2],[1,0.7],[2.3,-0.3],[6.2,-15.7],[0.5,2.3],[1.6,1.7],[0.8,-0.8],[1.2,-5.4],[0.6,3.5],[2.7,-2.3],[0.9,-8.3],[-1.1,-3.1],[-0.2,-3.3],[13.3,-34.9],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_1":{"verts":[[2,-268.7],[57.8,-107.3],[65.8,-82],[65,-64],[70.2,-54.1],[78.6,-58.4],[83,-47.1],[91.4,-39.1],[99.2,-45.7],[118.1,-4.5],[121.5,-2.1],[126.4,-5.1],[126.9,-11.4],[120.6,-39.8],[129.4,-39],[130.4,-49.2],[135.7,-48.9],[137.8,-54.6],[133,-81.9],[124,-98.6],[119,-117.4],[58.6,-272]],"ins":[[0,0],[-13.7,-28.8],[-0.3,-8.9],[-0.5,-6],[-3.4,-1.8],[0.3,3.8],[-1.6,-3.7],[-4,-0.8],[0.9,3.9],[-9.9,-11.5],[-1.4,-0.3],[-0.8,1.9],[0.2,2.1],[3.3,9.1],[-2.3,2.7],[1.2,3.4],[-1.5,1.4],[-0.2,2.1],[4,8.4],[2.5,5.8],[2.4,6.1],[20.7,45.7]],"outs":[[13.7,28.8],[3.8,8.1],[0.2,6],[0.3,3.8],[3.4,1.8],[1.9,3.6],[1.6,3.7],[4,0.8],[4.4,14.6],[0.9,1.1],[2.1,0.4],[0.8,-1.9],[-0.9,-9.7],[1.2,3.4],[2.3,-2.7],[0.9,1.8],[1.5,-1.4],[0.9,-9.3],[-2.7,-5.7],[-2.6,-6],[-19.1,-48.6],[0,0]],"lineWidth":4,"strokeStyle":"#000000"}},
	{"width":86.92204339822,"height":246.254758327793,"_0":{"verts":[[6.7,-236.6],[25.2,-99.8],[25.3,-90.8],[20.2,-83.8],[3.6,-63.5],[3.4,-56.5],[7.8,-57.4],[29.4,-72],[14,-15.7],[22.7,-25.4],[36.1,-61.6],[30.9,-14.4],[34.9,-2.9],[39.9,-2.8],[41.2,-5.6],[50.2,-57.8],[57.7,-9.4],[63.6,-22.5],[64.1,-60.9],[69.4,-35.7],[72.7,-29.7],[79,-29],[80.9,-31.9],[74.8,-84.9],[64.6,-100.5],[63,-110],[50.6,-244.3]],"ins":[[0,0],[-6.2,-35.6],[1,-2.9],[2,-2.1],[4.9,-7.2],[-2.4,-1.2],[-1.4,0.8],[-6.8,5.4],[0.7,-19.6],[-1.8,4.1],[-3.8,12.3],[-0.1,-15.9],[-3.5,-2.4],[-1.3,1.2],[-0.3,1],[-1.6,17.6],[-9.1,-13.9],[-0.3,5.1],[0.3,12.8],[-2.7,-8.1],[-1.7,-1.5],[-1.8,1.5],[-0.4,1.1],[10.8,15.1],[2,5.9],[0.3,3.2],[4.1,44.8]],"outs":[[6.2,35.6],[0.5,3],[-0.9,2.8],[-6.1,6.3],[-1.5,2.2],[1.4,0.7],[7.6,-4.3],[-9.3,17.3],[4.4,-1],[5.2,-11.8],[-3.5,15.5],[0,4.2],[1.5,1],[0.8,-0.7],[4.3,-17.1],[-1,16.6],[4.7,-1.9],[0.6,-12.8],[0.7,8.6],[0.7,2.2],[1.7,1.5],[0.9,-0.7],[7.1,-17.1],[-3.6,-5.1],[-1,-3],[-4.1,-44.8],[0,0]],"lineWidth":4,"strokeStyle":"#000000"}},
	{"width":239.333242787707,"height":160.818525098062,"_0":{"verts":[[128.1,-60.9],[133.7,-70.3],[148.5,-65.8],[167.1,-48.9],[155,-71],[155.2,-74.2],[160.5,-75.8],[172.4,-71.5],[194,-149.5]],"ins":[[0,0],[-5.2,1.3],[-4.2,-3.3],[-4.7,-2.5],[1,5.4],[-0.5,1],[-1.9,-0.3],[-3.7,-2.1],[-8.8,25.5]],"outs":[[-3.3,-4.2],[5.2,-1.3],[4.2,3.3],[-2.9,-4.6],[-0.2,-1.1],[0.9,-1.7],[4.2,0.7],[5.5,-26.4],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_1":{"verts":[[237.3,-146.9],[199.8,-62.2],[177.1,-23.3],[162,-11.8],[145.1,-17.4]],"ins":[[0,0],[13.3,-27.9],[9.6,-11.6],[6.1,-1.8],[3.1,5.6]],"outs":[[-11,28.9],[-6.5,13.6],[-4.1,4.9],[-6.1,1.8],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_2":{"verts":[[2,-154.1],[94.1,-14.6],[103.2,-5.2],[126.9,-4.6],[146.1,-19.8],[158.7,-35.8],[158.2,-48.6],[152.1,-48.6],[130.5,-40.7],[140.9,-62.6],[115.3,-53.9],[118.7,-67.9],[113.8,-70.3],[93.9,-71],[88.2,-71.1],[85,-75.1],[43.8,-158.8]],"ins":[[0,0],[-34.2,-44.1],[-3.7,-2.4],[-7.5,3.3],[-5.6,6],[-3.5,5.8],[4.4,2.1],[2,-0.5],[6.9,-3.4],[-1,8.1],[7,-6.1],[3.7,3.9],[1.8,0.4],[6.6,-1.2],[1.7,0.9],[0.8,1.6],[13.7,27.9]],"outs":[[23.4,50.7],[2.7,3.5],[6.9,4.4],[7.5,-3.3],[4.6,-5],[2.5,-4.2],[-1.9,-0.9],[-7.4,1.9],[5.7,-5.9],[-9.2,-0.6],[3.5,-4],[-1.3,-1.3],[-6.5,-1.6],[-1.9,0.3],[-1.6,-0.8],[-13.7,-27.9],[0,0]],"lineWidth":4,"strokeStyle":"#000000"}},
	{"width":79.1914851867605,"height":253.822115881793,"_0":{"verts":[[69.9,-62.1],[56.8,-55],[49.2,-60.2],[43.8,-75.9],[48.3,-83],[54.2,-81.4],[55,-76.1]],"ins":[[0,0],[5.1,0.8],[1.9,2.5],[-0.4,5.6],[-2.9,0.9],[-1.6,-1.4],[-1,-1.9]],"outs":[[-3.5,3.8],[-3.1,-0.5],[-3.5,-4.4],[0.2,-3],[2.1,-0.6],[1.6,1.4],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_1":{"verts":[[17.5,-64.5],[8.9,-15.4],[10.8,-9.8],[15.7,-10.8],[18,-15.6],[30.6,-55.5],[27.5,-29.9],[31.1,-4.8],[33.8,-2.1],[38.9,-7.9],[47.2,-62.8]],"ins":[[0,0],[0.7,-16.7],[-1.8,-1.1],[-1.2,1.3],[-0.5,1.7],[-4.2,13.3],[0.9,-8.6],[-4.1,-7.5],[-1.3,-0.3],[-0.5,2.9],[-2.2,18.4]],"outs":[[-5,15.9],[-0.1,2.1],[1.5,0.9],[1.2,-1.3],[4.2,-13.3],[-0.2,8.6],[-0.9,8.6],[0.6,1.1],[2.8,0.8],[3.3,-18.2],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_2":{"verts":[[71.4,-249.7],[61,-106.3],[76.8,-66],[75.5,-62.3],[69.5,-61.7],[53.9,-89.1],[66.7,-77.6]],"ins":[[0,0],[7.6,-47.7],[1.9,-14.9],[0.9,-0.9],[2,0.6],[-2.7,11.2],[-2.2,-5.5]],"outs":[[-5.2,48],[11.6,9.7],[-0.2,1.3],[-1.5,1.5],[-11,-3.5],[5.7,1.6],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_3":{"verts":[[14.5,-251.8],[21.3,-150.1],[18.2,-117.8],[3.7,-86.7],[2.2,-76.8],[20.2,-64.4],[26.9,-64.2],[32.5,-74.3],[27.8,-85.7],[35.9,-108.6],[36.5,-103.3]],"ins":[[0,0],[-2.9,-59.3],[2.4,-9.9],[4.2,-10.7],[-0.7,-3.3],[-7.5,-1.6],[-2.2,0.7],[0.4,4.1],[2.2,3.6],[1.4,8.4],[-0.2,-1.8]],"outs":[[4.2,23],[0.5,10.2],[-2.7,11.1],[-1.2,3.1],[1.6,7.5],[2.2,0.5],[4,-1.2],[-0.4,-4.1],[6.4,-5.6],[0.2,1.8],[0,0]],"lineWidth":4,"strokeStyle":"#000000"}},
	{"width":82.4683192072989,"height":250.525820793488,"_0":{"verts":[[58.6,-57.4],[43.2,-56.6],[40.1,-57.1],[37.4,-59.8],[36.4,-82.7],[41.2,-86.4],[43.8,-85],[49.8,-77.3]],"ins":[[0,0],[5.2,0],[1,0.4],[0.7,1.1],[-3.6,7.1],[-2.1,-0.3],[-0.8,-0.6],[-1.5,-2.9]],"outs":[[-5.1,0.6],[-1,0],[-1.2,-0.5],[-4.2,-6.8],[1,-1.9],[1,0.1],[2.5,2.1],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_1":{"verts":[[73.3,-66.7],[70.3,-59.7],[64.1,-55.6],[56.7,-58.9],[49.8,-85.1],[51.8,-89.6],[56.6,-90],[59.5,-86.4]],"ins":[[0,0],[1.4,-2.1],[2.5,-0.2],[2,1.9],[-1.3,9.3],[-1.4,1],[-1.6,-0.4],[-2,-1.7]],"outs":[[-0.8,2.4],[-1.4,2.1],[-2.8,0.2],[-6.7,-6.5],[0.2,-1.7],[1.4,-1],[2.5,0.7],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_2":{"verts":[[20.4,-63.3],[18,-58],[13.6,-20.9],[14.4,-10.3],[20.5,-2],[25.1,-12.2],[34.3,-59.7]],"ins":[[0,0],[0.4,-1.9],[0.4,-12.5],[-0.9,-3.4],[-3.1,-1.7],[-0.9,3.7],[-2.2,16]],"outs":[[-1.5,1.3],[-2.5,12.2],[-0.1,3.5],[0.9,3.4],[2.6,-2.7],[3.9,-15.6],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_3":{"verts":[[70.4,-243.8],[70.5,-141.6],[70.4,-109.3],[76.6,-90.7],[80.4,-71.3],[79.9,-67.9],[73.1,-67.6],[59.1,-87.2],[61,-95],[66.4,-91.9]],"ins":[[0,0],[-2.5,-36.9],[-2.3,-10.5],[-2,-6.2],[-0.5,-6.6],[0.6,-1],[2.2,1.2],[1.4,8.2],[-2.3,1.7],[1.2,-2.6]],"outs":[[-0.7,33.8],[0.7,10.8],[1.4,6.4],[2,6.3],[0.1,1.2],[-1.4,2.1],[-7.3,-3.9],[-0.5,-2.8],[2.3,-1.7],[0,0]],"lineWidth":4,"strokeStyle":"#000000"},"_4":{"verts":[[19.9,-248.5],[16.6,-124.3],[14.3,-106.4],[2.1,-77.8],[2.6,-73.1],[5.7,-70.4],[22.6,-64.7],[32.4,-69.3],[31.6,-73.2],[24.4,-82.3],[33.4,-96.9],[31,-93.8]],"ins":[[0,0],[1.8,-41.4],[1.8,-5.8],[1.5,-10.3],[-0.8,-1.4],[-1.2,-0.7],[-6,-0.6],[-0.6,3.9],[0.5,1.2],[3.2,2.3],[-0.5,5.9],[0.8,-1]],"outs":[[-0.4,41.4],[-0.3,6],[-3.1,9.9],[-0.2,1.6],[0.7,1.2],[5.2,3.1],[4,0.4],[0.2,-1.3],[-1.5,-3.6],[5.1,-3.1],[-0.8,1],[0,0]],"lineWidth":4,"strokeStyle":"#000000"}}
];

// RANDOMNESS
function urandint(n)
{
	return abs( randint(n) );
}
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
function setDebug( n )
{
	if ( n )
	{
		// for testing
		tokenData.hash = n;
	}
}



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
	
	if ( a[0]<a[1] ) a[0]=0; else a[1]=0;
	if ( b[0]>b[1] ) b[0]=SZ; else b[1]=SZ;

	return [a,b];
}



// COMPLEX SHAPES
function addShape( shape, s, o, fill, stroke, shad )
// REQUIRED: shape: 2dmatrix, s: scale [x,y], o: offset [x,y]
// OPTIONAL: fill: color, stroke: color, shad: color
{
	C.save();
	var ax, ay, bx, by, cx, cy, i, j;
	var vs = shape.verts;
	var is = shape.ins || null;
	var os = shape.outs || null;
	var x = o ? o[0] : SZ/2;
	var y = o ? o[1] : SZ/2;
	var l = vs.length;
	var style = "";
	var styles = [
		"shadowOffsetX","shadowOffsetY","shadowColor",
		"fillStyle",
		"lineWidth","strokeStyle","lineJoin","lineCap"
	];
	var styleDefaults = [
		SZ/256, SZ/256, "#00000000",
		"#00000000",
		SZ/256, "#00000000", "round", "round"
	];
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
	for( i=0; i<styles.length; i++ )
	{
		style = shape[styles[i]];
		C[styles[i]] = shape[styles[i]] || styleDefaults[i];
	}
	if (shape.fillStyle) C.fill();
	if ( C.lineWidth )
	{
		C.lineWidth *= (s[0]+abs(s[1]))/2;
		C.stroke();
	}
	C.restore();
}
function renderLayer( layer, s, o )
{
	var shape,p, w=layer.width, h=layer.height;
	logf( "width: %s", [w] );
	var S = [s[0]*(SZ/h),s[1]*(SZ/h)*-1];
	var O = [
		o[0] + CTR - (w/2*S[0]),
		o[1] + CTR - (h/2*S[1])
	];
	for( p in layer )
	{
		C.save();
		if ( p.match(/^_\d/) )
		{
			addShape( layer[p], S, O );
		}
		C.restore();
	}
}
function addLaser( line, sz )
{
	drawLine( line[0], line[1] );
	C.lineWidth = sz;
	for( var i=0; i<10; i++ )
	{
		C.lineWidth -= sz/10;
		C.stroke();
	}
}
function addLasers()
{
	// make laser attributes: MINSZ(int), MAXSZ(int), COUNT(int)
	var laserSz = getRange( 1, 100 );
	var minSz = laserSz[0], maxSz = laserSz[1];
	var laserN = urandint()%40, sz, i;

	// make a palette PAL[](string)
	var pal = getPalette();

	// make rnd parent path PPATH[2][2](float)
	var pPath = getRndLine(), path, diff, newPath;

	// make a weight WEIGHT(float) btwn 0 and 1
	var w = urand()%1;

	C.save();
	C.strokeStyle = "#060606";
	C.globalCompositeOperation = "lighter";

	// for each COUNT
	for( i=0; i<laserN; i++ )
	{
		// make rnd size SZ btwn MINSZ and MAXSZ
		sz = urandint()%(maxSz-minSz)+minSz;

		// make rnd path PATH[2][2](int)
		path = getRndLine();

		// find weighted diff DIFF (PATH - PPATH) * WEIGHT
		diff = arrMath( arrMath(pPath,path,'-'), w, '*' );

		// make new path NEWPATH
		// ( PATH[n]-PPATH[n]*WEIGHT )[2](int)
		newPath = arrMath( path, diff, '-' );

		// add a laser addLaser( NEWPATH )
		addLaser( newPath, SZ/8 );
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
			x2 = x + a[i][0]*headsz*2;
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
	addHair( urandint()%200+200 );

	// HEAD
	mask = new Path2D();
	for( i=0; i<count; i++ )
	{
		x2 = x + a[i][0]*headsz*2;
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

	// HANDS
	var hIdx = urandint()%hands.length;
	var hand = hands[hIdx];
	logf( "hIdx: %s", [hIdx] );
	var o = [ [0,0], [SZ/-10,0], [0,0], [0,0], [SZ/10,0] ];
	var s = 0.33;
	renderLayer( hand, [s,s], o[hIdx] ); 
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
	C.fillStyle = grad;
	C.fill();

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
	var a = "#35C1D5", stk, shad;
	var v = [0,0];
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
		]
	};
	p2 = {
		verts: [
			[0,SZ/3.8], [SZ/2.4,SZ/7.5],
			[SZ/2,0], v
		],
		ins: [ v,v,[0,SZ/80],v ],
		outs: [ v,v,v,v ]
	};
	stk = {
		lineWidth: SZ/16,
		strokeStyle: a,
		join: "miter"
	};
	shad = {
		offs: [ SZ/25, SZ/25 ],
		clr:"#00000040"
	};
	addShape( p1, [1,1], [0,0], null, stk, shad );
	addShape( p2, [1,1], [0,0], a, stk );
}
function drawHair( a, b, c, clr )
{
	drawCurve(a,b,c);
	C.save();
	C.shadowColor = "#00000000";
	C.fillStyle = "rgba(0,0,0,0)";
	C.strokeStyle = "black";
	C.lineWidth = CD.lineWidth;
	C.stroke();
	C.restore();
}
function colorHair( a, b, c, clr )
{
	drawCurve(a,b,c);
	C.save();
	C.lineWidth = 1;
	C.strokeStyle = CD.colors[clr];
	C.shadowColor = CD.colors[clr];
	C.shadowBlur = SZ/180;
	for(var i=0; i<SZ/40; i++) C.stroke();
	C.restore();
}
function addStrand()
{
	var color = urandint()%CD.colors.length;
	var hairh = SZ/CD.headsize/6;
	var hairw = SZ/CD.headsize/3;
	var a,b,b2,c, x1,x2,x3;

	x = CD.a[0];
	y = CD.a[1];
	x1 = rand();
	y1 = urand();
	x2 = rand();
	y2 = rand();
	x3 = rand();
	a = [
		x + x1*hairw/2,
		y - y1*hairh-hairh
	];
	b = [
		a[0] + x2*hairw/2,
		a[1] + y2*hairh/2
	];
	c = [
		b[0] + x3*hairw/4,
		b[1] + y1*hairh/4
	];

	// WIND
	b2 = addComb( a, b, CD.windWeight );
	c = arrMath( c, arrMath(b,b2,'-'), '+' );
	b = b2;
	c = addComb( b, c, CD.windWeight/2 );

	drawHair( a, b, c );
	colorHair( a, b, c, color );
}
function addHair( c )
{
	for( var i=0; i<c; i++ )
	{
		addStrand( i );
	}
}
function addFreckles( x1, x2, h )
{
	var c=urandint()%50+25;
	var sz=SZ/12, i,p1,p2;
	var y = CD.a[1]+sz/2;
	C.save();
	C.fillStyle = "#fa7";
	C.clip( mask, "nonzero" );
	for( i=0; i<c; i++ )
	{
		p1 = getPointInCircle( x1, y, sz, sz/2 );
		p2 = getPointInCircle( x2, y, sz, sz/2 );
		fillCircle( p1[0], p1[1], SZ/400*urand() );
		fillCircle( p2[0], p2[1], SZ/400*urand() );
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
function addMouth( e1, e2 )
{
	var x = CD.a[0];
	var y = CD.a[1] + SZ/10;
	var offs = [
		to1( nums[4] )*( SZ/8 ),
		to1N( nums[5] )*( SZ/40 )
	];
	var a = offs[0], b = offs[1];
	var c = getHypo( a, b );
	var ss = 0.66, ang = getAngle( a, b, c );
	var p1, p2, p3;

	addFreckles( e1[0], e2[0], offs[1] );

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
		scaleShape( stache, SZ/800*CD.headsize );
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
	var bl = ( nums[15]<39 );
	var ang = to1N( nums[8] ) * 36;
	var x = CD.a[0], y = CD.a[1];
	var sz = CD.headsize*1.2;
	var cidx = nums[6] % CD.colors.length;
	var bagCol = CD.darkColors[cidx];
	var col = CD.colors[cidx];
	var ed = max( 6, to1(nums[7])*(SZ/17) );
	var offs = [
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

	// MOUTH
	addMouth( e1, e2 );

	// EYES
	if( !blink )
	{
		addEye( e1[0], e1[1], offs, col, bagCol );
		addEye( e2[0], e2[1], offs, col, bagCol );
		addBrow( e1[0], e1[1], ang );
		addBrow( e2[0], e2[1], ang*-1 );
	} else {
		addBrow( e1[0], e1[1], 0, blink );
		addBrow( e2[0], e2[1], 0, blink );
	}

	// FG HAIR
	addHair( urandint()%40+20 );

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
	fastBlur( SZ/32 );
	addCloud();
	saveImg( bIdx );
	imgBuff[0] = imgBuff[bIdx];
}



// GOVERNANCE
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
