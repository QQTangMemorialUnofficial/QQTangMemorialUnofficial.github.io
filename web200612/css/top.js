var g_iLoginUin;
var l = location.pathname.replace(/^.*\/|[_0-9\.]+shtml.*$/g,"");
if(l == "") l = "index";
var $E = document.getElementById;
try{
	switch(l) {

	}
}catch(e)  {};
function checkLoginStatus() {
	var login_uin = getCookie("uin");
	if(login_uin == "") {
		unLoginStatus();
	}else {
		loginedStatus();
		g_iLoginUin = parseInt(login_uin.replace(/^[o0]*/,""));
	}
}
checkLoginStatus();

function unLoginStatus() {
	document.getElementById("logined").style.display="none";
	$E("unlogin").style.display="block";
	g_iLoginUin=0;
}

function loginedStatus() {
	$E("logined").style.display="block";
	$E("unlogin").style.display="none";
}


function hidelogin() {
	$E("login").style.visibility="hidden";
}

function logOut() {
	//deleteCookie("uin");
	var arr=window.top.location.href.split("?")[0].split("/");
    var cgi_name=arr[arr.length-1];
	cgi_name+=window.top.location.search;
	document.cookie = "uin=; skey=; path=/; domain=qq.com";
	document.cookie = "zzpaneluin=; zzpanelkey=; path=/; domain=qq.com";
	unLoginStatus();
	top.window.location.href = cgi_name ;
}

/*
	
function CheckValue() {	
	u = document.form1.u;
	p = document.form1.p;
	verifycode = document.form1.verifycode;
	if (u.value.length<1)	{ 
		alert("ÇëÌîÐ´QQºÅ£¡");
		u.focus();
		return;
	}
	else if (p.value.length<1) { 
		alert("ÇëÌîÐ´ÃÜÂë£¡");
		p.focus();
		return;
	}
	else if (verifycode.value.length<1) 	{ 
		alert("ÇëÌîÐ´ÑéÖ¤Âë£¡");
		verifycode.focus();
		return;
	}
	document.form1.submit();
}

function verify(){
	document.getElementById("verify_span").innerHTML="<img src='http://verify.qq.com/getimage?"+Math.random()+"' alt='' align='top' />";
}*/
