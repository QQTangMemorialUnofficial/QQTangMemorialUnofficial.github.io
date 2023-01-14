//导航
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
document.writeln("      <li id=\"m_service\"><strong><a href=\"http://kf.qq.com/faq/1804176nyU3I180417JBBFFJ.html\" title=\"腾讯客服\">腾讯客服<\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://kf.qq.com/faq/1804176nyU3I180417JBBFFJ.html\" title=\"客户服务\">客户服务<\/a><\/li>");
document.writeln("          <li><a href=\"http://gamesafe.qq.com/\" target=\"_blank\" title=\"游戏安全\">游戏安全<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/contract.shtml\" title=\"用户协议\">用户协议<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/jhtx/\" title=\"家长监护\">家长监护<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://qqtang.qq.com/service/rules.htm\" title=\"玩家条例\">玩家条例<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("    <\/ul>");
}
//登录	
document.writeln("<script language=\"javascript\" src=\"//ossweb-img.qq.com/images/js/LayerLogin.js\"><\/script>")
function qqt_login()
{
document.writeln("<div id=\"logined\"><a href=\"javascript:LogoutPage();\" title=\"退出登录\">退出登录<\/a><\/div>");
document.writeln("<div id=\"unlogin\" style=\"display:block\"><a href=\"javascript:OpenLoginDiv();\" title=\"用户登录\">用户登录<\/a><\/div>");
document.writeln("<script type=\"text\/javascript\">CheckLogin();<\/script>");
document.writeln("<a class=\"recharge\" href=\"http:\/\/pay.qq.com\/index.shtml\" title=\"Q币充值\" target=\"_blank\">充值<\/a>");
}
//页面底部
function foot()
{



document.writeln("<div class=\"wrap\">");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/\" target=\"_blank\" title=\"腾讯游戏\" class=\"tg\">腾讯游戏<\/a> <a href=\"http:\/\/game.qq.com\/hr\/studio_llts.htm\" target=\"_blank\" title=\"琳琅天上工作室\" class=\"s\">琳琅天上工作室<\/a><\/p>");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/portal2010\/about.htm\" target=\"_blank\">关于腾讯游戏<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com/contract.shtml\" target=\"_blank\">服务条款<\/a><span>|<\/span><a href=\"http:\/\/adver.qq.com\/\" target=\"_blank\">广告服务<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/hr\/\" target=\"_blank\">腾讯游戏招聘<\/a><span>|<\/span><a href=\"http:\/\/kf.qq.com\/faq\/1804176nyU3I180417JBBFFJ.html\" target=\"_blank\">腾讯游戏客服<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/portal2010\/business.htm\" target=\"_blank\">商务合作<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/gnav\/\" target=\"_blank\">游戏地图<\/a><span>|<\/span><a href=\"http:\/\/tgact.qq.com\" target=\"_blank\">游戏活动<\/a><\/p>");
document.writeln("<p class=\"e\">COPYRIGHT &copy; 1998 – 2014 TENCENT. ALL RIGHTS RESERVED.<\/p>");
document.writeln("<p class=\"r\"><a href=\"http:\/\/www.tencent.com\/law\/mo_law.shtml?\/law\/copyright.htm\" target=\"_blank\">腾讯公司版权所有<\/a><\/p>");
document.writeln("<p class=\"license\">网络文化经营许可证 文网测字[2008]11号<br \/>互联网出版经营许可证 新出育[2008]718号<\/p>");
document.writeln("<p class=\"license2\"><a style=\"padding-left:13px\" href=\"http:\/\/www.qq.com\/culture.shtml\" target=\"_blank\">粤网文[2017]6138-1456号<\/a><\/p>");
document.writeln("<\/div>");
}
/*  |xGv00|6f8fd17b13ffaaa494c38e5ff22085c2 */