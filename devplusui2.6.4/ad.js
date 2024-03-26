// Dark Mode
function darkMode(){var e=qSel("#mainCont");Pu.sLS("webMode","drK"===Pu.gLS("webMode")?"lgT":"drK"),"drK"===Pu.gLS("webMode")?(e.classList.remove("syD","lgT"),addCt(e,"drK")):(e.classList.remove("drK","syD"),addCt(e,"lgT")),themeColor("themeC")};

// Header Scroll
function headScroll(){var e=window.pageYOffset||document.documentElement.scrollTop,d=qSel("#header"),l=qSel("#mobile-menu");20<e?(addCt(d,"stick"),addCt(l,"slide")):(remCt(d,"stick"),remCt(l,"slide"))}
window.addEventListener("scroll",headScroll);

// Private Blog Notif
"true"==isPrivateBlog&&toastNotif('<i class="check"></i>'+blogTitle+" Blog is Private.");

// Images
(function(){var imgU=qSell('img.imgThm, .sImg .im, .cmAv .im, .pIm .im, .admIm .im, .sldC .sldIm');for(var i=0;i<imgU.length;i++){if(imgU[i].getAttribute('data-src')){var uImg=imgU[i].getAttribute('data-src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&(uImg.includes('-pd')==!0||uImg.includes('-p-k-no-nu')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30').replace('-pd','-pd-rw-e30'))}}else if(imgU[i].getAttribute('src')){var uImg=imgU[i].getAttribute('src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30'))}else{imgU[i].setAttribute('data-src',uImg)};addCt(imgU[i],'lazy');imgU[i].setAttribute('src','data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')}else if(imgU[i].getAttribute('data-style')){var uImg=imgU[i].getAttribute('data-style');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('w60')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('w60','w60-rw-e30'))}else if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('-nu','-nu-rw-e30'))}else if((uImg.includes('=s')==!0||uImg.includes('/s')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace(/\/s[0-9]+(\-c)?/,'/s1280-rw-e30').replace(/\=s[0-9]+(\-c)?/,'=s1280-rw-e30'))}}};})();

// Defer Img
Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'});
'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',()=>Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}));

// Push Ads
pushAds();

// Lazy js
Lazy(function(){
  // lazy category post
  var container=getid("categorised_posts_container");container&&"object"==typeof categorisedPosts&&"function"==typeof ctgryPst&&categorisedPosts.forEach(function(t,e){var i=document.createElement("div");i.id="_categorised_post_"+e,i.innerHTML="<h2 class='title dt'>"+t.title+"</h2><div class='ctgry'><div class='note'>Loading Posts...</div></div>",container.appendChild(i),ctgryPst(t.label,"#"+i.id+" .ctgry",6,600,200,!0)});
});

var message="Dont Try To Do This ! Its Under Protection 😎";
///////////////////////////////////
function clickIE4(){
if (event.button==2){
alert(message);
return false;}}
function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;}}}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}document.oncontextmenu=new Function("alert(message);return false")





!function(){function b(a,b){return null!=(a=Cookie.get(a))&&parseInt(a)>=b}var d=antiBombSet.cookieKey||"ADS_CLICK",a=antiBombSet.adsSelectors||".adsbygoogle",f=antiBombSet.timeOut||7200,g=antiBombSet.maxClick||3;0<document.querySelectorAll(a).length&&document.querySelectorAll(a).forEach(a=>{a.addEventListener("click",function(){var a,c;b(d,g)?antiBombSet.callback():(a=d,null==(c=Cookie.get(a))?Cookie.set(a,"1",{secure:!0,"max-age":f}):(c=parseInt(c)+1,Cookie.set(a,c.toString(),{secure:!0,"max-age":f})))})}),window.addEventListener("blur",function(){b(d,g)&&antiBombSet.callback();for(var c,h,i=document.querySelectorAll(antiBombSet.iframeSelectors||".adsbygoogle iframe"),j=0;j<i.length;j++)document.activeElement==i[j]&&(b(d,g)?antiBombSet.callback():(c=d,null==(h=Cookie.get(c))?Cookie.set(c,"1",{secure:!0,"max-age":f}):(h=parseInt(h)+1,Cookie.set(c,h.toString(),{secure:!0,"max-age":f}))))})}();


/* Article Rating Script  (Lazyload) */ var lazyrs=!1;window.addEventListener('scroll',function(){(0!=document.documentElement.scrollTop&&!1===lazyrs||0!=document.body.scrollTop&&!1===lazyrs)&&(!function(){wpac_init=window.wpac_init||[],wpac_init.push({widget:'Rating',id:32139}),function(){var t,e;'WIDGETPACK_LOADED'in window||(WIDGETPACK_LOADED=!0,(t=document.createElement('script')).type='text/javascript',t.async=!0,t.src='https://cdn.widgetpack.com/widget.js',(e=document.getElementsByTagName('script')[0]).parentNode.insertBefore(t,e.nextSibling))}();document.querySelector('#pRating').style.display='block';}(),lazyrs=!0)},!0);


/* Safelink Settings */ var aSl={par:"url",hcd:5000,gcd:15000,nwt:false,sby:"published",mxr:20,pwt:"Getting your link..."};
/* Safelink */ function _0x1541(t,n){var e=_0x4a4c();return(_0x1541=function(t,n){return e[t=+t]})(t,n)}function _0x4a4c(){var t=[".safeL","location","hash","includes","split","get","length","click","preventDefault","target","getAttribute","href","par","nwt","open","_blank","dec","replace","feeds/posts/summary?alt=json&orderby=","&max-results=","sSS","toString","indexOf","history","replaceState","title","feed","entry","floor","random","alternate","link","hmVrfy","hidden","#hmVrfy .pstL","alt","No post was found","SAFE_L","true","gSS","gcd",".safeGoL","setAttribute","vsbl","innerHTML","pwt","rSS"];return(_0x4a4c=function(){return t})()}!function(){var t=224,n=230,e=255,r=236,a=229,l=240,i=246,u=257,o=249,s=236,c=94,S=263,d=242,f=243,x=225,_=244,h=245,v=103,g=89,w=239,p=246,b=81,m=88,L=248,q=96,y=86,C=275,P=261,A=73,E=72,M=264,k=261,T=252,G=71,N=70,U=233,j=235,F=237,I=81,O=69,V=108,B=102,D=68,H=218,J=231,R=329,W=66,z=278,K=52,Q=440,X=462,Y=223,Z=439,$=462,tt=926,nt=916,et=416,rt=249,at=238,lt=418,it=724,ut=737,ot=35,st=53,ct=736,St=755,dt=735,ft=777,xt=757,_t=741,ht=757,vt=38,gt=45,wt=751,pt=732,bt=752,mt=731,Lt=739,qt=730,yt=729,Ct=22,Pt=8,At=763,Et=770,Mt=754,kt=747,Tt=112,Gt=116,Nt=758,Ut=753,jt=499,Ft=477,It=504,Ot=514,Vt=224,Bt=111;function Dt(t,n){return _0x1541(n- -Bt,t)}function Ht(t,n){return _0x1541(n-Vt,t)}var Jt,Rt,Wt,zt,Kt=qSell(Ht(208,t));function Qt(t){var e=498;const n=window[r(jt,Ft)][r(500,483)];function r(t,n){return _0x1541(t-e,n)}if(n&&n[r(501,It)]("=")&&n[r(502,518)](/=(.*)/s)[0]=="#?"+t&&""!=n.split(/=(.*)/s)[1])return window[r(499,Ot)].hash.split(/=(.*)/s)[1]}function Xt(t){var n=window[_0x1541(Gt-115,Tt)].search;const e=new URLSearchParams(n);return e.has(t)?e[_0x1541(Nt-753,Ut)](t):void 0}0<Kt[Ht(245,n)]&&Kt.forEach(t=>{var a=448,l=449,i=447,u=427,o=160,s=144,c=138,S=422,d=147,f=134,x=454,_=441,h=465,v=455,g=456;t.addEventListener(_0x1541(Mt-kt,Et),function(t){function n(t,n){return _0x1541(n- -147,t)}function e(t,n){return _0x1541(t- -g,n)}t[e(-a,-l)]();var r=t[e(-i,-u)][n(-158,-137)](n(-o,-136)),t=t[n(-s,-c)].getAttribute("data-href");null!=(t=null!=r&&"/"!=r&&"#"!=r&&""!=r?r:null!=t&&"#"!=t&&""!=t?t:void 0)&&(t=b64.enc(t),t=blogUrl+"#?"+aSl[e(-444,-S)]+"="+t,1==aSl[n(-d,-f)]?window[e(-442,-x)](t,e(-_,-h)):window.location[e(-445,-v)]=t)})}),null==Qt(aSl[Ht(e,r)])&&null==Xt(aSl.par)||(Kt=null!=Qt(aSl[Dt(-98,-99)])?b64[Ht(a,l)](Qt(aSl[Ht(i,r)])):b64[Ht(u,l)](Xt(aSl[Ht(o,s)])),Jt=blogUrl[Dt(-92,-c)](/.*?:\/\//g,"//")+Ht(S,d)+aSl.sby+Ht(S,f)+aSl.mxr,Pu[Ht(x,_)]("SAFE_L",Kt),0<(Kt=window[Dt(-129,-110)][Ht(t,h)]())[Dt(-v,-g)]("#")&&(Kt=Kt.substring(0,Kt[Ht(w,p)]("#")),window[Dt(-b,-m)][Ht(242,L)]({},document[Dt(-q,-y)],Kt)),Pu.gAj({url:Jt,async:!0,success:function(t){var n=956,e=713;function r(t,n){return _0x1541(n- -At,t)}function a(t,n){return _0x1541(t-Pt,n)}if((t=JSON.parse(t)[r(-it,-ut)]).entry&&0!==t[a(ot,st)].length){for(var l,i,u=(t=t[r(-725,-ct)])[Math[r(-St,-dt)](Math[a(37,49)]()*t[r(-ft,-xt)])],o=0,s=u.link[r(-_t,-ht)];o<s;o++)a(vt,gt)==(i=u[r(-wt,-pt)][o]).rel&&(l=i.href);remCt(getid(r(-bt,-mt)),r(-Lt,-qt)),qSel(r(-749,-yt)).href=l,setTimeout(function(){addCt(getid(_0x1541(-961- -993,-n)),_0x1541(-678- -e,-657))},aSl.hcd)}else toastNotif(a(44,Ct))}})),null!=Pu.gSS(Ht(C,P))&&Dt(-69,-A)==isPost&&(Jt=Pu[Dt(-60,-E)](Ht(M,k)),Rt=Math[Ht(239,T)](aSl[Dt(-E,-G)]/1e3),Wt=Rt,qSel(Dt(-74,-N))[Ht(U,j)]=Jt,1==aSl[Ht(243,F)]&&qSel(".safeGoL")[Dt(-I,-O)](Dt(-V,-B),Ht(t,239)),addCt(getid("aSlCnt"),Dt(-49,-D)),zt=setInterval(function(){var t=193,n=246,e=--Wt/Rt*100;function r(t,n){return _0x1541(n-lt,t)}qSel(".aSlW").style.width=100-e+"%",qSel(".aSlCd")[r(Q,X)]=Math[_0x1541(-218- -n,-Y)](Wt),Wt<=0&&(clearInterval(zt),qSel(".aSlCd")[r(Z,$)]="0",setTimeout(()=>{qSel(".aSlC")[_0x1541(et-372,396)]=aSl[_0x1541(at-t,rt)]},1e3),setTimeout(()=>{var t=959;addCt(qSel(".aSlB"),_0x1541(-nt- -t,-tt)),addCt(getid("aSlCnt"),"alt")},4e3))},1e3),qSel(".safeGoL").addEventListener(Ht(H,J),function(){Pu[_0x1541(324-z,R)](_0x1541(89-K,W))}))}();


var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1","&m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}

/* Breaking News Ticker */
$(document).ready(function ()  {var url_blog = 'https://t9755.blogspot.com/',  numpostx = 10; $.ajax({ url: ''+url_blog+'/feeds/posts/default?alt=json-in-script&max-results=' + numpostx + '', type: 'get', dataType: "jsonp", success: function(data) { var posturl, posttitle, skeleton = '', entry = data.feed.entry; if (entry !== undefined) { skeleton = "<ul>"; for (var i = 0; i < entry.length; i++) { for (var j=0; j < entry[i].link.length; j++) { if (entry[i].link[j].rel == "alternate") { posturl = entry[i].link[j].href; break; } } posttitle = entry[i].title.$t; skeleton += '<li><a href="' + posturl + '" target="_blank">' + posttitle + '</a></li>'; } skeleton += '</ul>'; $('#news-posts').html(skeleton); function tick(){ $('#news-posts li:first').slideUp( function () { $(this).appendTo($('#news-posts ul')).slideDown(); }); } setInterval(function(){ tick () }, 3500); } else { $('#news-posts').html('<span>No result!</span>'); } }, error: function() { $('#news-posts').html('<strong>Error Loading Feed!</strong>'); } }); });  
