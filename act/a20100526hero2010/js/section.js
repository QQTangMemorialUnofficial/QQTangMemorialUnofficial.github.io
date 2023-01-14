(function section(){
	document.getElementById("header").innerHTML=[
	'<h1>第六届中华英雄争霸赛</h1>',
	'<div class="navi">',
		'<ul>',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/index.shtml" class="mn1"><strong>大赛首页</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayPersonalSig.cgi" onclick="LL_submitWrapper(event,{style:1,fromWindow: window})" class="mn2"><strong>选手报名</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/cgi-bin/a20100526hero2010/playerAchievement.cgi?part=1" onclick="LL_submitWrapper(event,{style:1,fromWindow: window})" class="mn3"><strong>成绩查询</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/rules_intro.htm" class="mn4"><strong>大赛规则</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/awards.htm" class="mn5"><strong>大赛奖励</strong></a></li>',
			'<li><a href="javascript:alert(\'4.0《欢聚一堂》版将在比赛前开放\')" class="long mn6"><strong>比赛版下载</strong></a></li>',
			'<li><a href="http://qqtang.qq.com/act/a20090421fame/" target="_blank" class="long mn7"><strong>战神风云榜</strong></a></li>',
		'</ul>',
		'<ol class="hidden">',
			'<li><strong>报名</strong>6.11~7.5</li>',
			'<li><strong>海选赛</strong>7.09~7.11</li>',
			'<li><strong>淘汰赛</strong>7.16~7.18</li>',
			'<li><strong>线上四强赛</strong> 7.23~7.25</li>',
			'<li><strong>区域决赛</strong>8.7~8.14</li>',
			'<li><strong>总决赛</strong>10月</li>',
		'</ol>',
	'</div>'].join("");
	document.getElementById("log").innerHTML=[
	'<h2 class="hidden">用户登录</h2>',
	'<div class="login" id="unlogin"><a href="javascript:OpenLoginDiv();"><strong>登陆后可进行报名</strong></a></div>',
	'<div class="logout" id="logined" style="display:none;">',
		'<ul class="log_info">',
			'<li>QQ号：<span id="qqnum"></span></li>',
			'<li>昵称：<span id="qqnick"></span></li>',			
		'</ul>',
		'<ul class="log_btns">',
			'<li><a href="http://qqtang.qq.com/act/a20100526hero2010/rules_intro.htm" class="lb1"><strong>报名须知</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayPersonalSig.cgi" class="lb2"><strong>我要报名</strong></a></li>',
			'<li><a href="javascript:LogoutPage();" class="lb3"><strong>注销</strong></a></li>',
		'</ul>',
	'</div>'
	].join("");	
	if(document.getElementById("navi_rule")){
		document.getElementById("navi_rule").innerHTML=[
		'<ul>',
			'<li><a href="rules_intro.htm" class="nr1"><strong>大赛介绍</strong></a></li>',
			'<li><a href="rules_flow.htm" class="nr2"><strong>大赛流程</strong></a></li>',
			'<li><a href="rules_online.htm" class="nr3"><strong>线上比赛规则</strong></a></li>',
			'<li><a href="rules_belowline.htm" class="nr4"><strong>线下比赛规则</strong></a></li>',
		'</ul>'
		].join("");
	}
	if(document.getElementById("navi_reg")){
		document.getElementById("navi_reg").innerHTML=[
		'<ul>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayPersonalSig.cgi" class="nreg1"><strong>个人报名</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/displayTeamSig.cgi" class="nreg2"><strong>团队报名</strong></a></li>',
			'<li><a href="http://app.qqtang.qq.com/cgi-bin/a20100526hero2010/getPurpleDiamond.cgi" class="nreg3"><strong>领取紫钻</strong></a></li>',
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