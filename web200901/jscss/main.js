//����
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
document.writeln("      <li id=\"m_home\"><strong><a href=\"http://qqtang.qq.com/index.shtml\" title=\"��ҳ\"><\/a>��ҳ<\/strong><\/li>");
document.writeln("      <li id=\"m_news\"><strong><a href=\"/webplat/info/news_version3/733/4193/4194/m2770/list_1.shtml\" title=\"����\"><\/a>����<\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4194/m2770/list_1.shtml\" title=\"�ۺ�����\">�ۺ�����<\/a><\/li>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4194/4199/m2770/list_1.shtml\" title=\"���¹���\">���¹���<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"/webplat/info/news_version3/733/4193/4194/4201/m2770/list_1.shtml\" title=\"���»\">���»<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("      <li id=\"m_download\"><strong><a href=\"http://qqtang.qq.com/web2008/page/download.htm\" title=\"��Ϸ����\">��Ϸ����<\/a><\/strong><span><\/span><\/li>");
document.writeln("      <li id=\"m_data\"><strong><a href=\"http://qqtang.qq.com/web2008/page/young.htm\" title=\"��Ϸ����\"><\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/page/young.htm\" title=\"��������\">��������<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/info/ui_01.htm\" title=\"����˵��\">����˵��<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://qqtang.qq.com/web2008/info/map.htm\" title=\"��ͼ�淨\">��ͼ�淨<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("      <li id=\"m_vip\"><strong><a href=\"http://qqtang.qq.com/comm-htdocs/vip/?t=qqtang\" title=\"�����Ա\">�����Ա<\/a><\/strong><span><\/span><\/li>");
document.writeln("      <li id=\"m_active\"><strong><a href=\"http://qqtang.qq.com/CommPhoto/index.shtml\" title=\"��һ���\"><\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/CommPhoto/photo.shtml\" title=\"ͼƬ\">ͼƬ<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/page/wallpaper.htm\" title=\"��ֽ\">��ֽ<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/web2008/page/movie.htm\" title=\"��Ƶ\">��Ƶ<\/a><\/li>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4229/m2880/list_1.shtml\" title=\"��־\">��־<\/a><\/li>");
document.writeln("          <li><a href=\"/webplat/info/news_version3/733/4193/4218/m2876/list_1.shtml\" title=\"¼��\">¼��<\/a><\/li>");
document.writeln("          <li><a href=\"http://qqtang.qq.com/act/a20090421fame/index.htm\" target=\"_blank\" title=\"������\">������<\/a>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://wenwen.soso.com/z/c18024704.htm\" title=\"�ʴ�\">�ʴ�<\/a>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("      <li id=\"m_bbs\"><strong><a href=\"http://qqtang.gamebbs.qq.com\" target=\"_blank\" title=\"��̳\">��̳<\/a><\/strong><\/li>");
document.writeln("      <li id=\"m_service\"><strong><a href=\"http://kf.qq.com/faq/1804176nyU3I180417JBBFFJ.html\" title=\"��Ѷ�ͷ�\">��Ѷ�ͷ�<\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://kf.qq.com/faq/1804176nyU3I180417JBBFFJ.html\" title=\"�ͻ�����\">�ͻ�����<\/a><\/li>");
document.writeln("          <li><a href=\"http://gamesafe.qq.com/\" target=\"_blank\" title=\"��Ϸ��ȫ\">��Ϸ��ȫ<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/contract.shtml\" title=\"�û�Э��\">�û�Э��<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/jhtx/\" title=\"�ҳ��໤\">�ҳ��໤<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://qqtang.qq.com/service/rules.htm\" title=\"�������\">�������<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("    <\/ul>");
}
//��¼	
document.writeln("<script language=\"javascript\" src=\"//ossweb-img.qq.com/images/js/LayerLogin.js\"><\/script>")
function qqt_login()
{
document.writeln("<div id=\"logined\"><a href=\"javascript:LogoutPage();\" title=\"�˳���¼\">�˳���¼<\/a><\/div>");
document.writeln("<div id=\"unlogin\" style=\"display:block\"><a href=\"javascript:OpenLoginDiv();\" title=\"�û���¼\">�û���¼<\/a><\/div>");
document.writeln("<script type=\"text\/javascript\">CheckLogin();<\/script>");
document.writeln("<a class=\"recharge\" href=\"http:\/\/pay.qq.com\/index.shtml\" title=\"Q�ҳ�ֵ\" target=\"_blank\">��ֵ<\/a>");
}
//ҳ��ײ�
function foot()
{



document.writeln("<div class=\"wrap\">");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/\" target=\"_blank\" title=\"��Ѷ��Ϸ\" class=\"tg\">��Ѷ��Ϸ<\/a> <a href=\"http:\/\/game.qq.com\/hr\/studio_llts.htm\" target=\"_blank\" title=\"�������Ϲ�����\" class=\"s\">�������Ϲ�����<\/a><\/p>");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/portal2010\/about.htm\" target=\"_blank\">������Ѷ��Ϸ<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com/contract.shtml\" target=\"_blank\">��������<\/a><span>|<\/span><a href=\"http:\/\/adver.qq.com\/\" target=\"_blank\">������<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/hr\/\" target=\"_blank\">��Ѷ��Ϸ��Ƹ<\/a><span>|<\/span><a href=\"http:\/\/kf.qq.com\/faq\/1804176nyU3I180417JBBFFJ.html\" target=\"_blank\">��Ѷ��Ϸ�ͷ�<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/portal2010\/business.htm\" target=\"_blank\">�������<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/gnav\/\" target=\"_blank\">��Ϸ��ͼ<\/a><span>|<\/span><a href=\"http:\/\/tgact.qq.com\" target=\"_blank\">��Ϸ�<\/a><\/p>");
document.writeln("<p class=\"e\">COPYRIGHT &copy; 1998 �C 2014 TENCENT. ALL RIGHTS RESERVED.<\/p>");
document.writeln("<p class=\"r\"><a href=\"http:\/\/www.tencent.com\/law\/mo_law.shtml?\/law\/copyright.htm\" target=\"_blank\">��Ѷ��˾��Ȩ����<\/a><\/p>");
document.writeln("<p class=\"license\">�����Ļ���Ӫ���֤ ��������[2008]11��<br \/>���������澭Ӫ���֤ �³���[2008]718��<\/p>");
document.writeln("<p class=\"license2\"><a style=\"padding-left:13px\" href=\"http:\/\/www.qq.com\/culture.shtml\" target=\"_blank\">������[2017]6138-1456��<\/a><\/p>");
document.writeln("<\/div>");
}
/*  |xGv00|6f8fd17b13ffaaa494c38e5ff22085c2 */