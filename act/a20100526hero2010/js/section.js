(function section(){
	document.getElementById("header").innerHTML=[
	'<h1>�������л�Ӣ��������</h1>',
	'<div class="navi">',
		'<ul>',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/index.shtml" class="mn1"><strong>������ҳ</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayPersonalSig.cgi" onclick="LL_submitWrapper(event,{style:1,fromWindow: window})" class="mn2"><strong>ѡ�ֱ���</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/cgi-bin/a20100526hero2010/playerAchievement.cgi?part=1" onclick="LL_submitWrapper(event,{style:1,fromWindow: window})" class="mn3"><strong>�ɼ���ѯ</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/rules_intro.htm" class="mn4"><strong>��������</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/awards.htm" class="mn5"><strong>��������</strong></a></li>',
			'<li><a href="javascript:alert(\'4.0������һ�á��潫�ڱ���ǰ����\')" class="long mn6"><strong>����������</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/act/a20090421fame/" target="_blank" class="long mn7"><strong>ս����ư�</strong></a></li>',
		'</ul>',
		'<ol class="hidden">',
			'<li><strong>����</strong>6.11~7.5</li>',
			'<li><strong>��ѡ��</strong>7.09~7.11</li>',
			'<li><strong>��̭��</strong>7.16~7.18</li>',
			'<li><strong>������ǿ��</strong> 7.23~7.25</li>',
			'<li><strong>�������</strong>8.7~8.14</li>',
			'<li><strong>�ܾ���</strong>10��</li>',
		'</ol>',
	'</div>'].join("");
	document.getElementById("log").innerHTML=[
	'<h2 class="hidden">�û���¼</h2>',
	'<div class="login" id="unlogin"><a href="javascript:OpenLoginDiv();"><strong>��½��ɽ��б���</strong></a></div>',
	'<div class="logout" id="logined" style="display:none;">',
		'<ul class="log_info">',
			'<li>QQ�ţ�<span id="qqnum"></span></li>',
			'<li>�ǳƣ�<span id="qqnick"></span></li>',			
		'</ul>',
		'<ul class="log_btns">',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/rules_intro.htm" class="lb1"><strong>������֪</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayPersonalSig.cgi" class="lb2"><strong>��Ҫ����</strong></a></li>',
			'<li><a href="javascript:LogoutPage();" class="lb3"><strong>ע��</strong></a></li>',
		'</ul>',
	'</div>'
	].join("");	
	if(document.getElementById("navi_rule")){
		document.getElementById("navi_rule").innerHTML=[
		'<ul>',
			'<li><a href="rules_intro.htm" class="nr1"><strong>��������</strong></a></li>',
			'<li><a href="rules_flow.htm" class="nr2"><strong>��������</strong></a></li>',
			'<li><a href="rules_online.htm" class="nr3"><strong>���ϱ�������</strong></a></li>',
			'<li><a href="rules_belowline.htm" class="nr4"><strong>���±�������</strong></a></li>',
		'</ul>'
		].join("");
	}
	if(document.getElementById("navi_reg")){
		document.getElementById("navi_reg").innerHTML=[
		'<ul>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayPersonalSig.cgi" class="nreg1"><strong>���˱���</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayTeamSig.cgi" class="nreg2"><strong>�Ŷӱ���</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/getPurpleDiamond.cgi" class="nreg3"><strong>��ȡ����</strong></a></li>',
		'</ul>'
		].join("");
	}
	CheckLogin();
	var checkname=function(){
//alert(String(LL_getNickname()));
		if(String(LL_getNickname())!=""){
			document.getElementById("qqnick").innerHTML=String(LL_getNickname());
			clearInterval(trycheck);
		};
	}
	var trycheck=setInterval(checkname,50);
	document.getElementById("qqnum").innerHTML=String(Number(GetCookieUin().replace("o","")));
	if(document.getElementById("qqnum2")){
		document.getElementById("qqnum2").innerHTML=String(Number(GetCookieUin().replace("o","")));
	}
	if(document.getElementById("qqnick2")){
		document.getElementById("qqnick2").innerHTML=String(LL_getNickname());
	}
})();
/*  |xGv00|a2b2e5b179a3042b656cff5afb6e7d2b */