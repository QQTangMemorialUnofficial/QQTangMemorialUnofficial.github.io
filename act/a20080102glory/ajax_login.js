function getCookie(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null)
		return unescape(arr[2]);
	return "";
}

function deleteCookie(name){
	setCookie(name, "");
}

function setCookie(name,value){
	document.cookie = name + "=" + value + "; path=/; domain=qq.com";
}

function gid(id){
return document.getElementById?document.getElementById(id):null;
}

function Browser(){var ua, s, i;
this.isIE = false;
this.isNS = false;
this.isOP = false;
this.isSF = false;
ua = navigator.userAgent.toLowerCase();s = "opera";
if ((i = ua.indexOf(s)) >= 0){this.isOP = true;return;}s = "msie";if ((i = ua.indexOf(s)) >= 0) 
   {this.isIE = true;return;}s = "netscape6/";
if ((i = ua.indexOf(s)) >= 0)
   {this.isNS = true;return;}s = "gecko";
 if ((i = ua.indexOf(s)) >= 0) 
   {this.isNS = true;return;}s = "safari";
 if ((i = ua.indexOf(s)) >= 0) 
   {this.isSF = true;return;}}
function gname(name)
{return document.getElementsByTagName?document.getElementsByTagName(name):new Array()}
function StrCode(str)
{if(encodeURIComponent) return encodeURIComponent(str);if(escape) return escape(str);}
function ScreenConvert()
  {var browser = new Browser();
  var objScreen = gid("ScreenOver");
  if(!objScreen) var objScreen = document.createElement("div");
  var oS = objScreen.style;objScreen.id = "ScreenOver";oS.display = "block";
  oS.top = oS.left = oS.margin = oS.padding = "0px";
  if (document.body.clientHeight)
  {var wh = document.body.clientHeight + "px";}
  else 
  if (window.innerHeight)
  {var wh = window.innerHeight + "px";}
  else
  {var wh = "100%";}
  oS.width = "100%";oS.height = wh;oS.position = "absolute";oS.zIndex = "3";
  if ((!browser.isSF) && (!browser.isOP))
  {oS.background = "#cccccc";}
  else
  {oS.background = "#cccccc";}
  oS.filter = "alpha(opacity=40)";
  oS.opacity = 40/100;
  oS.MozOpacity = 40/100;document.body.appendChild(objScreen);
  var allselect = gname("select");
  for (var i=0; i<allselect.length; i++) allselect[i].style.visibility = "hidden";}
  function DialogShow(showdata,ow,oh,w,h)
  {var objDialog = document.getElementById("DialogMove");
  if (!objDialog) objDialog = document.createElement("div");t_DiglogW = ow;t_DiglogH = oh;DialogLoc();
  objDialog.id = "DialogMove";
  var oS = objDialog.style;oS.display = "block";
  oS.top = t_DiglogY + "px";
  oS.left = t_DiglogX + "px";
  oS.margin = "0px";
  oS.padding = "0px";
  oS.width = w + "px";oS.height = h + "px";
  oS.position = "absolute";oS.zIndex = "5";
  oS.background = "#FFFFFF";
  oS.border = "solid #00D2FF 1px";
  objDialog.innerHTML = showdata;document.body.appendChild(objDialog);}
function DialogLoc()
{var dde = document.documentElement;
if (window.innerWidth)
{
var ww = window.innerWidth;
var wh = window.innerHeight;
var bgX = window.pageXOffset;
var bgY = window.pageYOffset;}
else
{
var ww = dde.offsetWidth;
var wh = dde.offsetHeight;
var bgX = dde.scrollLeft;
var bgY = dde.scrollTop;}
t_DiglogX = (bgX + ((ww - t_DiglogW)/5));
t_DiglogY = (bgY + ((wh - t_DiglogH)/3));}

function DialogHide()
{ScreenClean();
var objDialog = document.getElementById("DialogMove");
if (objDialog) objDialog.style.display = "none";}
function ScreenConvert()
{var browser = new Browser();
var objScreen = gid("ScreenOver");
if(!objScreen) 
var objScreen = document.createElement("div");
var oS = objScreen.style;objScreen.id = "ScreenOver";
oS.display = "block";
oS.top = oS.left = oS.margin = oS.padding = "0px";
if (document.body.clientHeight)	
{var wh = document.body.clientHeight + "px";}else if (window.innerHeight)
{var wh = window.innerHeight + "px";}
else
{var wh = "100%";}
oS.width = "100%";
oS.height = wh;oS.position = "absolute";
oS.zIndex = "3";
if ((!browser.isSF) && (!browser.isOP)){oS.background = "#cccccc";}
else{oS.background = "#cccccc";}
oS.filter = "alpha(opacity=40)";
oS.opacity = 40/100;
oS.MozOpacity = 40/100;document.body.appendChild(objScreen);
var allselect = gname("select");
for (
var i=0;
 i<allselect.length;
  i++) 
  allselect[i].style.visibility = "hidden";}
function ScreenClean()
{
var objScreen = document.getElementById("ScreenOver");
if (objScreen) objScreen.style.display = "none";
var allselect = gname("select");
for (var i=0; i<allselect.length; i++) allselect[i].style.visibility = "visible";}
function NeedLogin(Title)
{
ScreenConvert();
var AJAX_LoginBody="<div><table width=\"214\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"185\" height=\"27\"><img src=\"http:\/\/ossweb-img.qq.com\/images\/web\/login\/login_1.jpg\" width=\"185\" height=\"27\" \/><\/td><td width=\"29\"><a href=\"#\"><img  id=\"AjaxMainCancle\" onclick=\"return DialogHide();\"  src=\"http:\/\/ossweb-img.qq.com\/images\/web\/login\/login_2.jpg\" width=\"29\" height=\"27\" border=\"0\"><\/a><\/td><\/tr><tr><td colspan=\"2\"><iframe id=\"login_frame\" src=\"\/web200612\/page\/login.htm\" frameborder=\"0\" scrolling=\"no\" width=\"214\" height=\"224\"><\/iframe><\/td><\/tr><\/table></div><div id=\"DialogTitleText\"></div>";
DialogShow(AJAX_LoginBody,-1280,-110,214,224);
}