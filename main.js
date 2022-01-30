var round=Math.round,floor=Math.floor,abs=Math.abs,sqrt=Math.sqrt,asin=Math.asin,acos=Math.acos,sin=Math.sin,cos=Math.cos,PI=Math.PI,min=Math.min,max=Math.max,pow=Math.pow;
var cloudBuff,imgBuff,nums,lp,stache,key,seed,mask;
var log=console.log,doc=document,win=window,hidden,BLINK_TO,BOX=false,shad,DEV=false;
var CVS,SZ,CTR,CD,C,EASTER=false,WINK=false;
var GENDER=1,EMO=false,BALD=false,BR_LASERS;
var RUN_TOTAL = 400;

// HANDS
hands = [
        {"width":693.711034603789,"height":462.779181774025,"_0":{"verts":[[59.6,66.1],[54.2,41.9],[56,-18.4],[76.3,-264.9],[76.3,-287.3],[32.3,-310.7],[-34.6,-305.7],[-39.7,-257.2],[-26,-51],[-36.6,72.6],[-39.5,77],[-62.7,111.3],[-77.6,142.7],[-53.4,159.3],[-53.1,188.8],[-40.7,216.8],[-21.9,184.3],[-24.9,222.2],[-26.1,282.3],[-16.2,309.4],[2.2,289.6],[8.3,194.3],[12.6,212.9],[37.8,215.3],[43,184.5],[52.6,196.2],[64.7,191.7],[74.7,149.8],[68.2,87.9]],"ins":[[0,0],[0.8,8.2],[-1.5,20.1],[-9.1,58.5],[2.3,7.2],[17.7,1],[17.2,-8.6],[-1.7,-16.6],[-4.6,-45.4],[18.5,-37.6],[0,0],[7.7,-11.4],[0.4,-10.1],[-10.1,0.5],[0.8,-12.9],[-7.6,-2.3],[-1.9,30.3],[0.4,-7.5],[0.3,-13.3],[-8,-3.8],[-2.2,21.9],[-0.7,6.6],[-3.2,-5.6],[-6.1,9.4],[-1.7,15.6],[-5.2,-1.6],[-2.9,3.5],[-1.4,12.7],[8.1,19.3]],"outs":[[-3.3,-7.6],[-1.9,-20],[4.3,-59.1],[1.2,-7.4],[-5.4,-16.9],[-18.6,-1],[-16.1,8.1],[4.6,45.4],[4.2,41.7],[0,0],[-7.7,11.4],[-5.6,8.4],[-0.4,10.1],[1.3,9.5],[-1.1,16.6],[7.6,2.3],[0,0],[-0.6,13.4],[-0.2,8.1],[12.2,5.8],[2.9,-28.7],[0.5,6.4],[5,8.7],[6.2,-9.4],[2.1,4.4],[4.4,1.3],[8.6,-10.4],[2.4,-20.8],[0,0]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"}},
        {"width":693.711034603789,"height":462.779181774025,"_2":{"verts":[[-14.9,188],[-22.3,280.8],[-32.7,295.3],[-47.1,286.4],[-49.4,267.9],[-50.3,178.5],[-81.4,145.8],[-76.1,132.1],[-49.3,88.8],[-38.8,-34.9],[-52.4,-241],[-47.4,-289.5],[19.5,-294.5],[63.6,-271.1],[63.5,-248.7],[43.3,-2.2],[42.5,58.1],[47.9,82.3],[62.7,105.9],[80.3,149.6],[76.2,178.6],[51.1,178.2],[40.2,199.1],[15.9,190.5],[0,213.5]],"ins":[[3,30.7],[2.5,-32.1],[6,-1.7],[2.1,5.9],[0.1,6.2],[-2,31.3],[-1.4,16.1],[-2.5,4.3],[-7.5,15.2],[4.2,41.7],[4.6,45.4],[-16.1,8.1],[-18.6,-1],[-5.4,-16.9],[1.2,-7.4],[4.3,-59.1],[-1.9,-20],[-3.3,-7.6],[-5.1,-7.8],[-2.9,-15.5],[6.2,-7.9],[4.1,9.2],[8.7,-2.3],[6.2,6.6],[0,0]],"outs":[[-1.5,39.5],[-0.5,6.2],[-6,1.7],[-2.1,-5.9],[-0.4,-25.4],[-14.9,-6.2],[0.4,-4.9],[8.5,-14.7],[18.5,-37.6],[-4.6,-45.4],[-1.7,-16.6],[17.2,-8.6],[17.7,1],[2.3,7.2],[-9.1,58.5],[-1.5,20.1],[0.8,8.2],[3.7,8.5],[8.7,13.2],[1.9,9.9],[-6.2,7.9],[4.2,8],[-8.7,2.3],[-4.2,24.2],[0,0]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"},"_1":{"open":true,"verts":[[-47.8,175.8],[-8.2,185.2],[3.5,169.6],[3.1,165.1],[-0.9,158.4],[-32.6,140.5],[-20.3,117.6],[-32.9,96.6]],"ins":[[0,0],[-13,2.4],[0.6,7.4],[0.1,0.9],[1.9,1.9],[7.8,5.2],[-0.8,8.8],[8.5,2.3]],"outs":[[7.1,6.9],[7.3,-1.3],[-0.2,-1.8],[-0.3,-2.6],[-6.6,-6.7],[6.1,-6.4],[0.8,-8.8],[0,0]],"lineWidth":4,"strokeStyle":"#7d7d7d"},"_0":{"open":true,"verts":[[75.2,166],[61.1,147.2],[44.5,131.7],[32.7,145.8],[38,164.9],[25.1,152.4],[14.1,152.9],[11.6,168],[15.4,186.2],[-0.9,158.4]],"ins":[[0,0],[3,7.6],[8.1,-0.5],[0.4,-6.7],[-2.8,-6.1],[5.4,2.8],[7.1,-4],[-1.8,-5.3],[-2.3,-6.7],[11.2,-0.5]],"outs":[[-7.8,-2.2],[-3,-7.6],[-6.7,0.4],[-0.4,6.7],[-4.5,-4.1],[-2.8,-1.5],[-4.9,2.8],[2.3,6.7],[0,0],[0,0]],"lineWidth":4,"strokeStyle":"#7d7d7d"}},
        {"width":693.711034603789,"height":462.779181774025,"_2":{"verts":[[-38.8,-32.4],[-49.3,91.3],[-76.1,134.6],[-81.4,148.3],[-50.3,181],[-64.8,262],[-64.5,280.5],[-50.1,289.4],[-39.7,274.9],[-12.9,184.5],[2.7,270],[11.1,287.9],[29.2,291.4],[34.8,270.4],[15.9,193],[40.2,201.6],[51.1,180.7],[76.2,181.1],[80.3,152.1],[62.7,108.4],[47.9,84.8],[42.5,60.6],[43.3,0.3],[63.5,-246.2],[63.6,-268.6],[19.5,-292],[-47.4,-287],[-52.4,-238.5]],"ins":[[-4.6,-45.4],[18.5,-37.6],[8.5,-14.7],[0.4,-4.9],[-14.9,-6.2],[4.3,-27.1],[-2.1,-5.9],[-6,1.7],[-1.8,6],[-8.9,30.1],[-7.7,-28],[-4.6,-4.8],[-5.6,3.7],[0.9,7.6],[9.6,24.9],[-8.7,2.3],[4.2,8],[-6.2,7.9],[1.9,9.9],[8.7,13.2],[3.7,8.5],[0.8,8.2],[-1.5,20.1],[-9.1,58.5],[2.3,7.2],[17.7,1],[17.2,-8.6],[-1.7,-16.6]],"outs":[[4.2,41.7],[-7.5,15.2],[-2.5,4.3],[-1.4,16.1],[-5.4,26.9],[-1,6.2],[2.1,5.9],[6,-1.7],[8.9,-30.1],[2.7,28.9],[1.8,6.4],[4.6,4.8],[6.4,-4.2],[-3,-26.5],[6.2,6.6],[8.7,-2.3],[4.1,9.2],[6.2,-7.9],[-2.9,-15.5],[-5.1,-7.8],[-3.3,-7.6],[-1.9,-20],[4.3,-59.1],[1.2,-7.4],[-5.4,-16.9],[-18.6,-1],[-16.1,8.1],[4.6,45.4]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"},"_1":{"open":true,"verts":[[-47.8,178.3],[14.9,169],[16.9,162.5],[12.9,155.9],[-32.6,143],[-20.3,120.1],[-32.9,99.1]],"ins":[[0,0],[-8.2,12.4],[0.2,2.3],[1.9,1.9],[7.8,5.2],[-0.8,8.8],[8.5,2.3]],"outs":[[10.7,10.3],[1.3,-1.9],[-0.3,-2.6],[-6.6,-6.7],[6.1,-6.4],[0.8,-8.8],[0,0]],"lineWidth":4,"strokeStyle":"#7d7d7d"},"_0":{"open":true,"verts":[[13.9,156.9],[35.9,167.4],[30.5,148.3],[42.3,134.2],[58.9,149.7],[73.1,168.5]],"ins":[[0,0],[-4.5,-4.1],[-0.4,6.7],[-6.7,0.4],[-3,-7.6],[-7.8,-2.2]],"outs":[[9.6,-5.6],[-2.8,-6.1],[0.4,-6.7],[8.1,-0.5],[3,7.6],[0,0]],"lineWidth":4,"strokeStyle":"#7d7d7d"}},
        {"width":693.711034603789,"height":462.779181774025,"_1":{"verts":[[72.3,203],[30.9,174.3],[21.7,177.6],[-10.6,313.6],[-35.2,307.4],[-35.1,307.1],[-28.2,267.4],[-45.5,210.7],[-76,186],[-99,179.4],[-97.8,151.6],[-79.8,97.5],[-66.7,-61.1],[-80.4,-267.2],[-75.3,-315.8],[-8.4,-320.7],[35.6,-297.3],[35.6,-275],[15.4,-28.4],[14.5,31.9],[21.7,63.6],[55.9,139.6],[96.2,174.9],[96.5,175.2]],"ins":[[18,10.9],[12.5,10.2],[0.8,-4.2],[16.2,-43.6],[-2.3,15.1],[0,0.1],[-2.4,12],[13.6,16.3],[-4.6,16],[3.8,8.7],[-2.6,9.1],[-6.7,17.8],[4.2,41.7],[4.6,45.4],[-16.1,8.1],[-18.6,-1],[-5.4,-16.9],[1.2,-7.4],[4.3,-59.1],[-1.9,-20],[-0.7,-2.5],[-18,-21.4],[-9.6,-11.5],[-0.1,-0.1]],"outs":[[-11.8,-7.2],[-3.3,-2.7],[-8.7,46.1],[-5.3,14.3],[0,-0.1],[2,-12.1],[14.8,-75.2],[-14.7,7.9],[-6.4,7],[-3.8,-8.7],[5.3,-18.2],[3.3,-8.7],[-4.6,-45.4],[-1.7,-16.6],[17.2,-8.6],[17.7,1],[2.3,7.2],[-9.1,58.5],[-1.5,20.1],[0.8,8.2],[7.4,27],[9.7,11.5],[0.1,0.1],[13.4,16.2]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"},"_0":{"open":true,"verts":[[-10.3,203.7],[-10,151.7],[-12.1,133.2],[-25.4,121.2],[-37.7,132],[-50,115],[-64.8,129.8],[-68.2,121.7],[-75.8,122.9],[-96.9,158.3]],"ins":[[0,0],[-0.1,17.3],[2.2,5.9],[6.2,0.8],[-0.8,-6.2],[7.9,0.6],[-0.6,-7.9],[2.2,2.1],[3,-1],[8.8,-14.7]],"outs":[[0.1,-17.3],[0,-6.3],[-2.2,-5.9],[-6.2,-0.8],[1.9,-7.7],[-7.9,-0.6],[0.2,-3],[-2.3,-2.1],[-8.8,3.1],[0,0]],"lineWidth":4,"strokeStyle":"#7d7d7d"}},
        {"width":693.711034603789,"height":462.779181774025,"_0":{"verts":[[-14.9,188],[-22.3,280.8],[-32.7,295.3],[-47.1,286.4],[-49.4,267.9],[-50.3,178.5],[-81.4,145.8],[-76.1,132.1],[-49.3,88.8],[-38.8,-34.9],[-52.4,-241],[-47.4,-289.5],[19.5,-294.5],[63.6,-271.1],[63.5,-248.7],[43.3,-2.2],[42.5,58.1],[47.9,82.3],[62.7,105.9],[80.3,149.6],[76.2,178.6],[51.1,178.2],[40.2,199.1],[15.9,190.5],[0,213.5]],"ins":[[3,30.7],[2.5,-32.1],[6,-1.7],[2.1,5.9],[0.1,6.2],[-2,31.3],[-1.4,16.1],[-2.5,4.3],[-7.5,15.2],[4.2,41.7],[4.6,45.4],[-16.1,8.1],[-18.6,-1],[-5.4,-16.9],[1.2,-7.4],[4.3,-59.1],[-1.9,-20],[-3.3,-7.6],[-5.1,-7.8],[-2.9,-15.5],[6.2,-7.9],[4.1,9.2],[8.7,-2.3],[6.2,6.6],[0,0]],"outs":[[-1.5,39.5],[-0.5,6.2],[-6,1.7],[-2.1,-5.9],[-0.4,-25.4],[-14.9,-6.2],[0.4,-4.9],[8.5,-14.7],[18.5,-37.6],[-4.6,-45.4],[-1.7,-16.6],[17.2,-8.6],[17.7,1],[2.3,7.2],[-9.1,58.5],[-1.5,20.1],[0.8,8.2],[3.7,8.5],[8.7,13.2],[1.9,9.9],[-6.2,7.9],[4.2,8],[-8.7,2.3],[-4.2,24.2],[0,0]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"}},
        {"width":693.711034603789,"height":462.779181774025,"_1":{"verts":[[344.9,-229.4],[228.6,-229.4],[120.4,71.2],[76.7,71.2],[102,119.7],[26.2,103.7],[49.1,193.3],[134.1,181.8]],"ins":[[-20.7,136.7],[0,0],[0,0],[16.1,-26.1],[0,0],[17.2,-17.2],[-24.1,-37.9],[-28.1,46.5]],"outs":[[0,0],[0,0],[0,0],[-16.1,26.1],[0,0],[-17.2,17.2],[24.1,37.9],[28.1,-46.5]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"},"_0":{"verts":[[-282.8,-148],[-50.8,207.4],[34.2,207.4],[49.4,193.6],[84.7,129.3],[22.7,140.8],[37,113.4],[27.3,83.4],[-16.3,101.8],[-71.5,78.8],[-195.5,-189.9],[-344.9,-208.2]],"ins":[[0,0],[0,0],[-56.3,49.4],[-4.6,4.3],[8.3,8.3],[23,-26.4],[-1.9,7.4],[0,0],[17.2,-18.4],[43.8,-35.4],[0,0],[0,0]],"outs":[[0,0],[0,0],[5.6,-4.9],[41.6,-39.3],[-9.2,-9.2],[8,-10.9],[5.8,-22.3],[0,0],[18.4,-32.2],[-25.6,-50.5],[0,0],[0,0]],"fillStyle":"#ffffff","lineWidth":4,"strokeStyle":"#e5e5e4"}}
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
function getRare( n )
{
        return urand() <= n/RUN_TOTAL;
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
function z( n )
{
        var d = 800 / n;
        return SZ / d;
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
function getHypo(x,y){ return sqrt(abs(x*x+y*y)); }
function getAngle(x,y,h){ return Math.acos(abs(x/h))*(180/PI); }
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
        var n = SZ;
        var lo=n*-1, hi=SZ+n;

        if ( a[0]<a[1] ) a[0]=lo; else a[1]=lo;
        if ( b[0]>b[1] ) b[0]=hi; else b[1]=hi;

        return [a,b];
}
function getRndPoint( r ){ return [ rand()*r, rand()*r ]; }
function getRndPoly( n, r )
{
        var p=[], i;
        for( i=0; i<n; i++ )
        {
                p.push( getRndPoint(r) );
        }
        return p;
}



// COMPLEX SHAPES
function addSquiggle( a, b, n, color )
{
        C.beginPath();
        C.moveTo( a[0], a[1] );
        var sz, step, ang, h, c, i;

        step = arrMath( b, a, '-' );
        step = arrMath( step, n, '/' );

        h = getHypo( step[0], step[1] );
        ang = getAngle( step[0], step[1], h ) + 90;

        sz = z( getVecLen(step) );

        for( i=0; i<n; i++ )
        {
                if ( a[1] <= b[1] ) ang += i % 2 * 360 - 180;
                if ( a[1] > b[1] ) ang -= i % 2 * 360 - 180;
                c = arrMath( step, i, '*' );
                c = arrMath( a, c, '+' );
                c = arrMath( c, getPointOnCircle(sz,ang), '+' );
                C.lineTo( c[0], c[1] );
        }
        C.save();
        C.strokeStyle = color;
        C.lineWidth = sz*1.5;
        C.lineCap = "round";
        C.lineJoin = "round";
        C.stroke();
        C.restore();
}
function addShape( shape, s, o, C )
{
        var vs = shape.verts;
        var l = vs.length;
        var is = shape.ins || null;
        var os = shape.outs || null;
        var x = (o?o[0]:0), y = (o?o[1]:0);
        var ax, ay, bx, by, cx, cy;

        C.save();
        C.beginPath();
        C.moveTo(
                x + vs[0][0] * s[0],
                y + vs[0][1] * s[1]
        );

        var j,k;
        var i = ( shape.open ? 1 : l );
        var limit = ( shape.open ? l : l*2+1 );

        for( ;i<limit; i++ )
        {
                j = (i-1)%l, k = i%l;
                os ? ax = x + ( vs[j][0] + os[j][0] ) * s[0] : null;
                os ? ay = y + ( vs[j][1] + os[j][1] ) * s[1] : null;
                is ? bx = x + ( vs[k][0] + is[k][0] ) * s[0] : null;
                is ? by = y + ( vs[k][1] + is[k][1] ) * s[1] : null;
                cx = x + vs[k][0] * s[0];
                cy = y + vs[k][1] * s[1];

                // finally add it to the canvas
                if ( is && os )
                {
                        C.bezierCurveTo( ax, ay, bx, by, cx, cy );
                } else {
                        C.lineTo( cx, cy );
                }
        }
        C.lineJoin = "round";
        var props = ["strokeStyle","lineWidth","fillStyle"], p;
        for( i=0; i<props.length; i++ )
        {
                p = props[i];
                C[p] = shape[p] || null;
        }
        if ( shape["fillStyle"] ) C.fill();
        if ( shape["lineWidth"] ) C.stroke();
        C.restore();
}

function renderLayer( layer, s, o, C )
{
        var shape,path,p,q;

        s[1] *= -1;

        for( p in layer )
        {
                if ( !p.match(/_\d+/) ) continue;
                shape = layer[p];
                addShape( shape, s, o, C );
        }
}
function addVignette( amount )
{
        C.save();
        var grad = C.createRadialGradient( CTR, CTR, 0, CTR, CTR, SZ );
        grad.addColorStop( 0, "#00000000" );
        grad.addColorStop( 0.3, "#00000020" );
        grad.addColorStop( 0.67, "#00000080" );
        grad.addColorStop( 1, "#000000ff" );
        C.globalCompositeOperation = "sourceOver";
        C.globalAlpha = amount*255 | 0;
        C.fillStyle = grad;
        C.fillRect( 0, 0, SZ, SZ );
        C.restore();
}
function addLaser( line, sz )
{
        drawLine( line[0], line[1] );
        C.lineWidth = sz;
        var inc, opac, i=1, n=sz/20, rat;

        C.lineWidth = 1;
        C.stroke();

        while( n < sz )
        {
                i++;
                C.lineWidth = n *= 2;
                C.stroke();
        }
}
function getLaserConfig()
{
        var paths=[], i;
        var count = urandint()%20+10;
        for( i=0; i<count; i++ )
        {
                paths.push( getRndLine() );
        }
        var sz = getRange(1,100);
        var cfg = {
                paths: paths,
                sz: sz,
                pal: getPalette(),
                n: urandint()%40,
                weight: urand()%1,
                minSz: sz[0],
                maxSz: sz[1]
        }
        return cfg;
}
function addLasers( cfg, color, size )
{
        var newPath, diff, sz, i;
        var paths=cfg.paths, minSz=cfg.minSz, maxSz=cfg.maxSz;

        C.save();
        C.globalCompositeOperation = "lighter";

        for( i=0; i<paths.length; i++ )
        {

                // make rnd size SZ btwn MINSZ and MAXSZ
                sz = urandint()%(maxSz-minSz)+minSz;

                // find weighted diff DIFF (PATH - PPATH) * WEIGHT
                // to randomize randomness of lasers
                diff = arrMath( arrMath(paths[0],paths[i],'-'), cfg.weight, '*' );
                newPath = arrMath( paths[i], diff, '-' );

                // get red or blue stroke
                C.strokeStyle = ( BR_LASERS ? color : CD.laserColors[urandint()%2] );
                addLaser( newPath, z(size) );
        }
        C.restore();
}
function randomNoise( rgb )
{
        var imgData = C.getImageData( 0, 0, SZ, SZ );
        var px = imgData.data;
        var n = px.length, i=0, b;
        while ( i < n )
        {
                if ( rgb )
                {
                        b = 32 + rand()*96;
                        px[i+0] = rgb[0] + b;
                        px[i+1] = rgb[1] + b;
                        px[i+2] = rgb[2] + b;
                } else {
                        b = rand()%255;
                        px[i+0] = b;
                        px[i+1] = b;
                        px[i+2] = b;
                }
                px[i+3] = 255;
                i+=4;
        }

        C.putImageData( imgData, 0, 0 );
        return CVS;
}
function addPerlinNoise( rgb )
{
        var noise = randomNoise( rgb );
        var sz = 4 + urandint()%22;
        var x, y;
        if ( DEV ) return;

        C.save();

        while ( sz <= SZ )
        {
                x = urandint()%(SZ-sz);
                y = urandint()%(SZ-sz);
                C.globalAlpha = 4 / sz;
                C.drawImage(
                        noise,
                        x, y, sz, sz,
                        0, 0, SZ, SZ
                );
                sz *= 2;
        }

        C.restore();
        return C;
}
function addGrain( amount, op )
{
        var imgData = C.getImageData( 0, 0, SZ, SZ );
        var px = imgData.data;
        var n = px.length, i=0, b, max;
        while ( i < n )
        {
                max = amount * 255;
                b = rand()*max | 0;
                px[i+0] = doOp( px[i+0], b, op );
                px[i+1] = doOp( px[i+1], b, op );
                px[i+2] = doOp( px[i+2], b, op );
                i+=4;
        }
        C.putImageData( imgData, 0, 0 );
        return CVS;
}
function addCurtains( rgb )
{
        var noise = randomNoise( rgb );
        var sz=z(32), grad, x,y;

        C.globalCompositeOperation = "source-over";
        C.drawImage( noise, 0, 0, sz, 1, 0, 0, SZ, SZ );

        grad = C.createLinearGradient( CTR, 0, CTR, SZ ); 
        grad.addColorStop( 0, "#ffffff" );
        grad.addColorStop( 0.67, "#a0a0a0" );
        grad.addColorStop( 1, "#000000" );
        C.globalCompositeOperation = "multiply";
        C.fillStyle = grad;
        C.fillRect( 0, 0, SZ, SZ );

        if ( DEV ) return;

        fastBlur( z(16) );

        // add texture
        addGrain( 0.03, '-' );
        addGrain( 0.02, '+' );
        fastBlur( 1 );
        addGrain( 0.02, '-' );
        addGrain( 0.01, '+' );

        return C;
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
        var headsz = z(160)*CD.headsize;
        var bodysz = CD.bodysize;
        var necksz = z(123)/2;
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
        C.shadowOffsetY = z(800*3) + z(100);
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
                        [ x, y + z(188) ], necksz,
                        [z(60), z(80)], count*2
                );
                addBlob(
                        [ x, y + z(400) ], bodysz,
                        [ z(266)-bodysz, z(160) ], count*8
                );
        }


        // CACHE
        resetSeed();
        C.restore();
        C.save();

        // BG HAIR
        if ( !BALD )
        {
                if ( EMO )
                {
                        addHair( nums[19]%40+20 );
                } else {
                        addHair( nums[19]%200+200 );
                }
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
                [ x, y + z(160)],necksz,
                [z(50), z(80)], count*2,
                true
        );
        addBlob(
                [ x, y + z(400) ], bodysz,
                [z(266)-bodysz, z(160)], count*8,
                true
        );
        addBlob(
                [ x, z(800) ], bodysz*1.2,
                [z(266)-bodysz, z(160)], count*8,
                true
        );
        fillMask( "white" );
        C.restore();

        // FG HAIR
        if ( !EMO && !BALD )
        {
                addHair( nums[19]%200+200 );
        }
}
function normalizeLayer( layer )
{
        function resize( arr )
        {
                for( var i=0; i<arr.length; i++ )
                {
                        arr[i][0] = z( arr[i][0] );
                        arr[i][1] = z( arr[i][1] );
                }
                return arr;
        }
        for( var p in layer )
        {
                if ( !p.match(/_\d+/) ) continue;
                layer[p].verts = resize( layer[p].verts );
                layer[p].ins = resize( layer[p].ins );
                layer[p].outs = resize( layer[p].outs );
        }
}
function copyObj( obj )
{
        return JSON.parse( JSON.stringify(obj) );
}
function addHands()
{
        var hIdx = urandint()%hands.length;
        var hand = hands[hIdx];

        logf( "hIdx: %s", [hIdx] );

        // deal with inconsistent art sizes (locations)
        var xOffs = rand()*z(50);
        var o = [
                [ z(300)+xOffs, z(720) ],
                [ z(500)+xOffs, z(720) ],
                [ z(500)+xOffs, z(720) ],
                [ z(300)+xOffs, z(720) ],
                [ z(300)+xOffs, z(720) ],
                [ z(400)+xOffs, z(720) ]
        ][hIdx];

        // deal with inconsistent art sizes (sizes)
        var s = [
                [ 0.5, 0.5 ],
                [ 0.5, 0.5 ],
                [ 0.5, 0.5 ],
                [ 0.5, 0.5 ],
                [ 0.5, 0.5 ],
                [ 0.5, 0.5 ]
        ][hIdx];

        var copy = copyObj( hand );
        normalizeLayer( copy );
        renderLayer( copy, s, o, C ); 

        if ( hIdx === 0 && rand() > 0.5 )
        {
                s[0] *= -1;
                s[1] *= -1;
                o[0] += z(200);
                renderLayer( copy, s, o, C ); 
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
function addLashes( e1, e2, WINK )
{
        C.save();
        C.lineWidth *= 0.66;
        var sz = CD.eyeSize * CD.headsize * 1.3;
        var nlashes = urandint()%5+3;
        var step = PI/2/nlashes;
        var a, b, i, x, y;
        for ( i=0; i<nlashes; i++ )
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
                C.stroke();

                if ( WINK ) continue;

                // right lashes
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
        var x2 = x + offs[0] * (z(20) - CD.pupSize);

        // EYE BAGS
        var bagY = y+z(8);
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
}
function addBox()
{
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
function quickStrand( a, b, c, color )
{
        drawCurve(a,b,c);
        C.save();
        C.lineWidth = 3;
        C.strokeStyle = color;
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
        C.shadowBlur = z(4);
        for(var i=0; i<z(20); i++) C.stroke();
        C.restore();
}
function chooseAtRandom( arr )
{
        return arr[urandint()%arr.length];
}
function addStrand( len )
{
        var color = chooseAtRandom( CD.colors );
        var hairh = SZ/CD.headsize/6;
        var hairw = SZ/CD.headsize/3;
        var a,b,b2,c, x1,x2,x3;

        x = CD.a[0];
        y = ( EMO ? CD.a[1]+z(40) : CD.a[1] );
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

        if ( DEV )
        {
                quickStrand( a, b, c, color );
        } else {
                drawStrand( a, b, c );
                colorStrand( a, b, c, color );
        }
}
function addHair( c )
{
        resetSeed();
        var len = urand(), i;
        if ( DEV ) c /= 10;
        for( i=0; i<c; i++ )
        {
                addStrand( len );
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
        var sz=z(160)*CD.headsize;
        var y = CD.a[1]+sz/2;
        var zitSz, i, p;
        var zitColor = "#f77";
        C.save();
        C.clip( mask, "nonzero" );
        for( i=0; i<c; i++ )
        {
                zitSz = z(5)*urand();
                p = getPointInCircle( CD.a[0], CD.a[1]+z(6), sz, sz/2 );
                C.fillStyle = zitColor;
                fillCircle( p[0], p[1], zitSz );
                C.fillStyle = "#fff";
                fillCircle( p[0]+z(1), p[1]-z(1), zitSz/2 );
        }
        C.restore();
}
function addFreckles( x1, x2, h )
{
        var c = getExpoCount( 0, 75 );
        var sz = z(66), p, i;
        var y = CD.a[1]+sz/2;

        C.save();
        C.fillStyle = "#fa7";
        C.clip( mask, "nonzero" );
        for( i=0; i<c; i++ )
        {
                p = getPointInCircle( x1, y, sz, sz/2 );
                fillCircle( p[0], p[1], z(2)*urand() );
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
        var len = z(12);
        var d = x-CD.a[0];
        var a = [ x, y ];
        var b = [ x+d/10, y+urand()*len  ];
        drawLine( a, b );
        C.stroke();
}
function addStache( a, b, ang )
{
        C.save();
        var w = max( z(36), abs(a) );
        var count = urandint()%(w*2)+20;
        var h = z(12);
        var offsX, x, y, i;
        // C.strokeStyle = "#a07040";
        C.lineWidth = z(1);
        for( i=0; i<count; i++ )
        {
                C.strokeStyle = chooseAtRandom( CD.colors );
                offsX = rand()*w;
                x = CD.a[0] + offsX;
                y = CD.a[1] + urand()*h + z(50) + abs(offsX)*b/z(100);
                drawStacheHair( x, y, w, h );
        }
        C.restore();
}
function addMouth( offs )
{
        var x = CD.a[0];
        var y = CD.a[1] + z(80);
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
        var ed = max( 6, to1(nums[7])*z(47) );
        var offs1 = [
                to1N( nums[9] ),
                to1N( nums[10] )
        ];
        C.save();
        C.strokeStyle = col;
        C.lineWidth = CD.lineWidth;
        C.lineCap = C.lineJoin = "round";

        // EYES
        var e1 = [ x-z(33)*sz - ed*sz, y ];
        var e2 = [ x+z(26)*sz + ed*sz, y ];

        // BLUSH
        if ( bl )
        {
                addBlush([
                        e1[0] - z(80),
                        e1[1] + z(80)
                ], z(133) );
                addBlush([
                        e2[0] + z(80),
                        e2[1] + z(80)
                ], z(133) );
        }

        // SKIN
        var offs2 = [
                to1( nums[4] )*z(100),
                to1N( nums[5] )*z(20)
        ];
        addFreckles( e1[0], e1[1], offs2[1] );
        addFreckles( e2[0], e2[1], offs2[1] );
        if ( rand() > 0.5 ){ addPimples(); }


        // MOUTH
        addMouth( offs2 );

        // EYES
        if( blink )
        {
                if ( WINK )
                {
                        addEye( e1[0], e1[1], offs1, col, bagCol );
                        addBrow( e1[0], e1[1], ang );
                } else {
                        addBrow( e1[0], e1[1], 0, blink );
                }
                addBrow( e2[0], e2[1], 0, blink );

                // LASHES
                if ( GENDER === 1 && !blink )
                {
                        addLashes( e1, e2, WINK );
                }
        } else {
                addEye( e1[0], e1[1], offs1, col, bagCol );
                addEye( e2[0], e2[1], offs1, col, bagCol );
                addBrow( e1[0], e1[1], ang );
                addBrow( e2[0], e2[1], ang*-1 );

                // LASHES
                if ( GENDER === 1 )
                {
                        addLashes( e1, e2 );
                }

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
function addRetroBG()
{
        var step, sz, c, a, b, i, j, k;

        var bgC = addBrinkBG();

        // SQUIGGLES
        numSquig = urandint()%8+2;
        numZZ = urandint()%12+8;
        clrs = CD.colors.filter( e => e !== bgC );
        c = chooseAtRandom( clrs );
        step = z(800/numSquig); 
        sz = z(800/numSquig/3);
        for( i=0; i<=numSquig; i++ )
        {
                for( j=0; j<=numSquig; j++ )
                {
                        a = [ step*i, step*j ];
                        b = arrMath( a, [z(60),z(-30)], '+' );
                        addSquiggle( a, b, numZZ, c );
                }
        }

        // TRIANGLES
        var shapes = [
                getRndPoly( 3, z(800/numSquig/4) ),
                getRndPoly( 3, z(800/numSquig/4) )
        ];
        var shape, offset;
        
        clrs = clrs.filter( e => e !== c );
        c = [ chooseAtRandom(clrs) ];
        clrs = clrs.filter( e => e !== c[0] );
        c.push( chooseAtRandom(clrs) );

        for( i=0; i<=numSquig; i++ )
        {
                for( j=0; j<=numSquig; j++ )
                {
                        for( k=0; k<shapes.length; k++ )
                        {
                                offset = [ step*i+z(80), step*j+z(80) ];
                                shape = { verts: shapes[k], fillStyle:c[k] };
                                addShape( shape, [1,1], offset, C );
                        }
                }
        }
}
function addLaserBG()
{
        var c = ( BR_LASERS ? CD.darkColors[1] : CD.darkColors[urandint()%4] );
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
        var cfg = getLaserConfig();
        var sz = cfg.maxSz;
        addLasers( cfg, "#060606", 160 );
        fastBlur( z(16) );
        addLasers( cfg, "#111", 40 );
        fastBlur( z(8) );
        addLasers( cfg, "#1a1a1a", 10 );
        fastBlur( z(2) );
}
function addFractBG()
{
        var i = urandint() % CD.colors.length;
        addPerlinNoise( CD.colors[i] );
        if ( DEV ) return;
        fastBlur( z(4) );
}
function addCurtainBG()
{
        var i = urandint() % CD.colors.length;
        addCurtains( CD.colors[i] );
}
function addClassicBG()
{
        C.save();
        var ca, cb;
        var cb = "#0A6A7F";
        var grad = C.createRadialGradient(
                CD.a[0], CD.a[1], 0, 
                CD.a[0], CD.a[1], SZ
        );
        if ( EASTER || nums[0]<64 )
        {
                ca = CD.colors[1];
                cb = "#0A6A7F";
        } else {
                ca = CD.bgC;
                cb = CD.shadC;
        }
        grad.addColorStop( 0, ca );
        grad.addColorStop( 1, cb );
        C.fillStyle = grad;
        C.fillRect( 0, 0, SZ, SZ );
}
function addBrinkBG()
{
        C.save();
        var grad = C.createRadialGradient(
                CD.a[0], CD.a[1], 0, 
                CD.a[0], CD.a[1], SZ
        );
        var i = urandint()%CD.colors.length;
        var ca = CD.colors[i];
        var cb = CD.darkColors[i];
        grad.addColorStop( 0, ca );
        grad.addColorStop( 1, cb );
        C.fillStyle = grad;
        C.fillRect( 0, 0, SZ, SZ );

        return ca;
}
function addBG( bIdx )
{
        if ( key ) return;
        if ( bIdx && imgBuff[bIdx] )
        {
                C.drawImage( imgBuff[bIdx], 0, 0 );
                return;
        }

        C.save();
        var funcs = [ addLaserBG, addFractBG, addClassicBG, addCurtainBG, addBrinkBG, addRetroBG ];
        var func = ( DEV ? funcs[0] : chooseAtRandom(funcs) );
        func();
        log( "Background Type: " + func.name );
        C.restore();

        addCloud();
        if ( DEV || rand() > 0.5 ) addHands();
        if ( func.name !== "addClassicBG" ) addVignette(0.5);
        saveImg( bIdx );
        imgBuff[0] = imgBuff[bIdx];
}



// GOVERNANCE
function handleKeys( e )
{
        if ( e.code === "Space" ) main();
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
        CTR = z(400);
        CD = {
                lineWidth: z(10),
                hairLen: urand(),
                headsize: 1.2, bodysize: z(100),
                eyeSize: z(28), pupSize: z(4),
                a: [ CTR, CTR - z(25) ],
                shadBlur: z(11),
                blur: z(10),
                colors: [
                        "#f2668b", "#23c7d9",
                        "#48d9a4", "#f2bf27"
                ],
                darkColors: [
                        "#813345", "#126374",
                        "#247452", "#815813"
                ],
                laserColors: [ "#180a0d", "#031315" ],
                bgC: "#f2f1df",
                shadC: "#c9c1a2",
                wireShadC: "#494102"
        };

        lp = [ z(-8), z(190) ];
        newHash();
        resetSeed();
        nums = getNums();
        CD.wind = [ rand(), urand()/-2-1/2 ];
        CD.windWeight = urandint()%1+2;
        CD.force = rand()*3;
        EMO = getRare( 15 );
        GENDER = ( urand()>0.66 ? 1 : 0 );
        WINK = getRare( 30 );
        BALD = getRare( 20 );
        BR_LASERS = getRare( 20 );
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
        if ( blink !== undefined )
        {
                if ( !imgBuff[k] )
                {
                        addBG( i );
                        addFace( blink, k );
                } else {
                        C.drawImage( imgBuff[k], 0, 0 );
                }
                setTimeout( render, 200 );
        } else {
                if ( !imgBuff[j] )
                {
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
        if ( n ) setDebug(n);
        init();
        render();
}
main();
