var imgheight
var imgleft
document.ns = navigator.appName == "Netscape"
window.screen.width>800 ? imgheight=400:imgheight=400
window.screen.width>800 ? imgleft=2:imgleft=2
function myload()
{
if (navigator.appName == "Netscape")
{document.myleft.pageY=pageYOffset+window.innerHeight-imgheight;
document.myleft.pageX=imgleft;
leftmove();
}
else
{
myleft.style.top=document.body.scrollTop+document.body.offsetHeight-imgheight;
myleft.style.left=imgleft;
leftmove();
}
}
function leftmove()
 {
 if(document.ns)
 {
 document.myleft.top=pageYOffset+window.innerHeight-imgheight
 document.myleft.left=imgleft;
 setTimeout("leftmove();",80)
 }
 else
 {
 myleft.style.top=document.body.scrollTop+document.body.offsetHeight-imgheight;
 myleft.style.left=imgleft;
 setTimeout("leftmove();",80)
 }
 }

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true)

if (navigator.appName == "Netscape")
{
document.write("<layer id=myleft top=300 width=100 height=100><a href='http://qqtang.qq.com/shopping/tiyanma.htm' target='_blank'><img src='/images/float/20050816.gif' width='120' height='120' border='0'></a></layer>");
myload()}
else
{
document.write("<div id=myleft style='position: absolute;width:100;top:300;left:5;visibility: visible;z-index: 1'><a href='http://qqtang.qq.com/shopping/tiyanma.htm' target='_blank'><img src='/images/float/20050816.gif' width='120' height='120' border='0'></a></div>");
myload()
}
