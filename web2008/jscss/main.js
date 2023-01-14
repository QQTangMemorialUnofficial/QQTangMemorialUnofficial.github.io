function menu()
{
window.onload=function(){
	var objMenu = document.getElementById('menu'),arrLi = objMenu.getElementsByTagName('li'),timer;
	for(var i=0;i<arrLi.length;i++){
	if(arrLi[i].parentNode==objMenu){
			arrLi[i].onmouseover=function(){
					clearTimeout(timer);
					for(var j=0;j<arrLi.length;j++){if(arrLi[j].parentNode==objMenu){arrLi[j].className='none';}}
					this.className='current';
			};
			arrLi[i].onmouseout =function(){
				clearTimeout(timer);
				var objCurr=this;
				timer=setTimeout(function(){objCurr.className='none';},100);
			};
		}
	}
}

document.writeln("<ul id=\"menu\">");
document.writeln("      <li id=\"m_home\"><strong><a href=\"http://qqtang.qq.com/index.shtml\" title=\"首页\"><\/a>首页<\/strong><\/li>");
document.writeln("      <li id=\"m_news\"><strong><a href=\"/webplat/info/news_version3/733/4193/4194/m2770/list_1.shtml\" title=\"新闻\"><\/a>新闻<\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4194/m2770/list_1.shtml\" title=\"综合新闻\">综合新闻<\/a><\/li>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4194/4199/m2770/list_1.shtml\" title=\"最新公告\">最新公告<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"/webplat/info/news_version3/733/4193/4194/4201/m2770/list_1.shtml\" title=\"最新活动\">最新活动<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("      <li id=\"m_download\"><strong><a href=\"http://qqtang.qq.com/web2008/page/download.htm\" title=\"游戏下载\">游戏下载<\/a><\/strong><span><\/span><\/li>");
document.writeln("      <li id=\"m_data\"><strong><a href=\"http://qqtang.qq.com/web2008/page/young.htm\" title=\"游戏资料\"><\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/page/young.htm\" title=\"新手入门\">新手入门<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/info/ui_01.htm\" title=\"界面说明\">界面说明<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://qqtang.qq.com/web2008/info/map.htm\" title=\"地图玩法\">地图玩法<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("      <li id=\"m_vip\"><strong><a href=\"http://qqtang.qq.com/comm-htdocs/vip/?t=qqtang\" title=\"紫钻会员\">紫钻会员<\/a><\/strong><span><\/span><\/li>");
document.writeln("      <li id=\"m_active\"><strong><a href=\"http://qqtang.qq.com/CommPhoto/index.shtml\" title=\"玩家互动\"><\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/CommPhoto/photo.shtml\" title=\"图片\">图片<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/page/wallpaper.htm\" title=\"壁纸\">壁纸<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/page/movie.htm\" title=\"视频\">视频<\/a><\/li>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4229/m2880/list_1.shtml\" title=\"杂志\">杂志<\/a><\/li>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4218/m2876/list_1.shtml\" title=\"录像\">录像<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/act/a20090421fame/index.htm\" target=\"_blank\" title=\"名人堂\">名人堂<\/a>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://wenwen.soso.com/z/c18024704.htm\" title=\"问答\">问答<\/a>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("      <li id=\"m_bbs\"><strong><a href=\"http://qqtang.gamebbs.qq.com\" target=\"_blank\" title=\"论坛\">论坛<\/a><\/strong><\/li>");
document.writeln("      <li id=\"m_service\"><strong><a href=\"http://service.qq.com/special_auto/qqtang.html\" title=\"腾讯客服\">腾讯客服<\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://service.qq.com/special_auto/qqtang.html\" title=\"客户服务\">客户服务<\/a><\/li>");
document.writeln("          <li><a href=\"http://gamesafe.qq.com/\" target=\"_blank\" title=\"游戏安全\">游戏安全<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/contract.shtml\" title=\"用户协议\">用户协议<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/jhtx/\" title=\"家长监护\">家长监护<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://qqtang.qq.com/service/rules.htm\" title=\"玩家条例\">玩家条例<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("    <\/ul>");
}
	
//登录	
document.writeln("<script language=\"javascript\" src=\"http://ossweb-img.qq.com/images/js/LayerLogin.js\"><\/script>")
function qqt_login()
{
document.writeln("<div class=\"urs\"><div id=\"logined\" style=\"display:none; padding-left:5px;\"><a href=\"javascript:LogoutPage();\" style=\"cursor:hand; background:url(http://ossweb-img.qq.com/images/qqtang/web08/login_03.jpg) no-repeat center -5px;\" class=\"hid\">注销</a></div><div id=\"unlogin\" style=\"display:block\"><a href=\"javascript:OpenLoginDiv();\" style=\"cursor:hand; height:50px;\" class=\"hid\">用户登录</a></div><script type=\"text/javascript\">CheckLogin();</script></div>");
document.writeln("<div class=\"qqcz\"><a href=\"http://pay.qq.com/index.shtml\" class=\"hid\" title=\"Q币充值\" target=\"_blank\">充值</a></div>")
}
//页面底部
function cefoot()
{
document.writeln("<div id=\"footer\">");
document.writeln("<div class=\"wrap\">");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/\" target=\"_blank\" title=\"腾讯游戏\" class=\"tg\">腾讯游戏<\/a> <a href=\"http:\/\/game.qq.com\/hr\/studio_llts.htm\" target=\"_blank\" title=\"琳琅天上工作室\" class=\"s\">琳琅天上工作室<\/a><\/p>");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/portal2010\/about.htm\" target=\"_blank\">关于腾讯游戏<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com/contract.shtml\" target=\"_blank\">服务条款<\/a><span>|<\/span><a href=\"http:\/\/adver.qq.com\/\" target=\"_blank\">广告服务<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/hr\/\" target=\"_blank\">腾讯游戏招聘<\/a><span>|<\/span><a href=\"http:\/\/service.qq.com\/\" target=\"_blank\">腾讯游戏客服<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/portal2010\/business.htm\" target=\"_blank\">商务合作<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/gnav\/\" target=\"_blank\">游戏地图<\/a><span>|<\/span><a href=\"http:\/\/tgact.qq.com\" target=\"_blank\">游戏活动<\/a><\/p>");
document.writeln("<p class=\"e\">COPYRIGHT &copy; 1998 – 2014 TENCENT. ALL RIGHTS RESERVED.<\/p>");
document.writeln("<p class=\"r\"><a href=\"http:\/\/www.tencent.com\/law\/mo_law.shtml?\/law\/copyright.htm\" target=\"_blank\">腾讯公司版权所有<\/a><\/p>");
document.writeln("<p class=\"license\">网络文化经营许可证 文网测字[2008]11号<br \/>互联网出版经营许可证 新出育[2008]718号<\/p>");
document.writeln("<p class=\"license2\"><a style=\"padding-left:13px\" href=\"http:\/\/www.qq.com\/culture.shtml\" target=\"_blank\">粤网文[2017]6138-1456号<\/a><\/p>");

document.writeln("<\/div>");
document.writeln("<\/div>");
}
//左侧地图玩法
function left_map()
{
document.writeln("<table width=\"162\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"lece\">");
document.writeln("<tr>");
document.writeln("<td valign=\"bottom\" class=\"le_picline\"><a href=\"/web2008/info/map.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt1.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt01.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt1.jpg\'\" \/><\/a><\/td>");
document.writeln(" <td class=\"le_picline\"><a href=\"/web2008/info/map_02.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt2.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt02.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt2.jpg\'\" \/><\/a><\/td>");
document.writeln("    <td class=\"le_picline\"><a href=\"/web2008/info/map_03.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt3.jpg\" width=\"49\" height=\"31\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt03.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt3.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/map.htm\" class=\"subbg\">普通<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_02.htm\" class=\"subbg\">比武<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_02.htm\" class=\"subbg\">抢包山<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_04.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt4.jpg\" width=\"50\" height=\"32\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt04.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt4.jpg\'\"\/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_05.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt5.jpg\" width=\"50\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt05.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt5.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_06.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt6.jpg\" width=\"49\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt06.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt6.jpg\'\" \/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/map_04.htm\" class=\"subbg\">夺宝<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_05.htm\" class=\"subbg\">机械<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_06.htm\" class=\"subbg\">推箱子<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_07.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt7.jpg\" width=\"50\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt07.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt7.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_08.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt8.jpg\" width=\"50\" height=\"33\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt08.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt8.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_09.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt9.jpg\" width=\"49\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt09.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt9.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/map_07.htm\" class=\"subbg\">英雄<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_08.htm\" class=\"subbg\">足球<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_09.htm\" class=\"subbg\">探险<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<\/table>");
document.writeln("<div style=\"height:2px; overflow:hidden;\"><\/div>")
}
//左侧界面说明
function left_ui()
{
document.writeln("<table width=\"162\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"lece\">");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_01.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm1.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm01.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm1.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_02.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm2.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm02.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm2.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_03.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm3.jpg\" width=\"49\" height=\"31\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm03.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm3.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/ui_01.htm\" class=\"subbg\">入口<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_02.htm\" class=\"subbg\">大厅<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_03.htm\" class=\"subbg\">交易<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_04.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm4.jpg\" width=\"50\" height=\"32\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm04.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm4.jpg\'\"\/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_05.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm5.jpg\" width=\"50\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm05.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm5.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_06.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm6.jpg\" width=\"49\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm06.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm6.jpg\'\" \/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/ui_04.htm\" class=\"subbg\">家族<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_05.htm\" class=\"subbg\">任务<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_06.htm\" class=\"subbg\">个人<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_07.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm7.jpg\" width=\"50\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm07.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm7.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_08.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm8.jpg\" width=\"50\" height=\"33\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm08.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm8.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_09.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm9.jpg\" width=\"49\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm09.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm9.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/ui_07.htm\" class=\"subbg\">宠物<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_08.htm\" class=\"subbg\">房间<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_09.htm\" class=\"subbg\">商城<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<\/table>")
}/*  |xGv00|ca97b65dfc14ed4e626dca0940ca9023 */