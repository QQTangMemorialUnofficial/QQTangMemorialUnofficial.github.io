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
document.writeln("      <li id=\"m_service\"><strong><a href=\"http://service.qq.com/special_auto/qqtang.html\" title=\"��Ѷ�ͷ�\">��Ѷ�ͷ�<\/a><\/strong><span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"http://service.qq.com/special_auto/qqtang.html\" title=\"�ͻ�����\">�ͻ�����<\/a><\/li>");
document.writeln("          <li><a href=\"http://gamesafe.qq.com/\" target=\"_blank\" title=\"��Ϸ��ȫ\">��Ϸ��ȫ<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/contract.shtml\" title=\"�û�Э��\">�û�Э��<\/a><\/li>");
document.writeln("          <li><a href=\"http://game.qq.com/jhtx/\" title=\"�ҳ��໤\">�ҳ��໤<\/a><\/li>");
document.writeln("          <li class=\"lcorebg\"><a href=\"http://qqtang.qq.com/service/rules.htm\" title=\"�������\">�������<\/a><\/li>");
document.writeln("        <\/ul>");
document.writeln("        <\/span><\/li>");
document.writeln("    <\/ul>");
}
	
//��¼	
document.writeln("<script language=\"javascript\" src=\"http://ossweb-img.qq.com/images/js/LayerLogin.js\"><\/script>")
function qqt_login()
{
document.writeln("<div class=\"urs\"><div id=\"logined\" style=\"display:none; padding-left:5px;\"><a href=\"javascript:LogoutPage();\" style=\"cursor:hand; background:url(http://ossweb-img.qq.com/images/qqtang/web08/login_03.jpg) no-repeat center -5px;\" class=\"hid\">ע��</a></div><div id=\"unlogin\" style=\"display:block\"><a href=\"javascript:OpenLoginDiv();\" style=\"cursor:hand; height:50px;\" class=\"hid\">�û���¼</a></div><script type=\"text/javascript\">CheckLogin();</script></div>");
document.writeln("<div class=\"qqcz\"><a href=\"http://pay.qq.com/index.shtml\" class=\"hid\" title=\"Q�ҳ�ֵ\" target=\"_blank\">��ֵ</a></div>")
}
//ҳ��ײ�
function cefoot()
{
document.writeln("<div id=\"footer\">");
document.writeln("<div class=\"wrap\">");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/\" target=\"_blank\" title=\"��Ѷ��Ϸ\" class=\"tg\">��Ѷ��Ϸ<\/a> <a href=\"http:\/\/game.qq.com\/hr\/studio_llts.htm\" target=\"_blank\" title=\"�������Ϲ�����\" class=\"s\">�������Ϲ�����<\/a><\/p>");
document.writeln("<p><a href=\"http:\/\/game.qq.com\/portal2010\/about.htm\" target=\"_blank\">������Ѷ��Ϸ<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com/contract.shtml\" target=\"_blank\">��������<\/a><span>|<\/span><a href=\"http:\/\/adver.qq.com\/\" target=\"_blank\">������<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/hr\/\" target=\"_blank\">��Ѷ��Ϸ��Ƹ<\/a><span>|<\/span><a href=\"http:\/\/service.qq.com\/\" target=\"_blank\">��Ѷ��Ϸ�ͷ�<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/portal2010\/business.htm\" target=\"_blank\">�������<\/a><span>|<\/span><a href=\"http:\/\/game.qq.com\/gnav\/\" target=\"_blank\">��Ϸ��ͼ<\/a><span>|<\/span><a href=\"http:\/\/tgact.qq.com\" target=\"_blank\">��Ϸ�<\/a><\/p>");
document.writeln("<p class=\"e\">COPYRIGHT &copy; 1998 �C 2014 TENCENT. ALL RIGHTS RESERVED.<\/p>");
document.writeln("<p class=\"r\"><a href=\"http:\/\/www.tencent.com\/law\/mo_law.shtml?\/law\/copyright.htm\" target=\"_blank\">��Ѷ��˾��Ȩ����<\/a><\/p>");
document.writeln("<p class=\"license\">�����Ļ���Ӫ���֤ ��������[2008]11��<br \/>���������澭Ӫ���֤ �³���[2008]718��<\/p>");
document.writeln("<p class=\"license2\"><a style=\"padding-left:13px\" href=\"http:\/\/www.qq.com\/culture.shtml\" target=\"_blank\">������[2017]6138-1456��<\/a><\/p>");

document.writeln("<\/div>");
document.writeln("<\/div>");
}
//����ͼ�淨
function left_map()
{
document.writeln("<table width=\"162\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"lece\">");
document.writeln("<tr>");
document.writeln("<td valign=\"bottom\" class=\"le_picline\"><a href=\"/web2008/info/map.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt1.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt01.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt1.jpg\'\" \/><\/a><\/td>");
document.writeln(" <td class=\"le_picline\"><a href=\"/web2008/info/map_02.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt2.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt02.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt2.jpg\'\" \/><\/a><\/td>");
document.writeln("    <td class=\"le_picline\"><a href=\"/web2008/info/map_03.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt3.jpg\" width=\"49\" height=\"31\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt03.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt3.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/map.htm\" class=\"subbg\">��ͨ<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_02.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_02.htm\" class=\"subbg\">����ɽ<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_04.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt4.jpg\" width=\"50\" height=\"32\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt04.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt4.jpg\'\"\/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_05.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt5.jpg\" width=\"50\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt05.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt5.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_06.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt6.jpg\" width=\"49\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt06.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt6.jpg\'\" \/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/map_04.htm\" class=\"subbg\">�ᱦ<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_05.htm\" class=\"subbg\">��е<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_06.htm\" class=\"subbg\">������<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_07.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt7.jpg\" width=\"50\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt07.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt7.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_08.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt8.jpg\" width=\"50\" height=\"33\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt08.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt8.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/map_09.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/dt9.jpg\" width=\"49\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt09.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/dt9.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/map_07.htm\" class=\"subbg\">Ӣ��<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_08.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/map_09.htm\" class=\"subbg\">̽��<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<\/table>");
document.writeln("<div style=\"height:2px; overflow:hidden;\"><\/div>")
}
//������˵��
function left_ui()
{
document.writeln("<table width=\"162\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"lece\">");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_01.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm1.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm01.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm1.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_02.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm2.jpg\" width=\"50\" height=\"31\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm02.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm2.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_03.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm3.jpg\" width=\"49\" height=\"31\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm03.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm3.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/ui_01.htm\" class=\"subbg\">���<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_02.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_03.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_04.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm4.jpg\" width=\"50\" height=\"32\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm04.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm4.jpg\'\"\/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_05.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm5.jpg\" width=\"50\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm05.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm5.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_06.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm6.jpg\" width=\"49\" height=\"32\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm06.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm6.jpg\'\" \/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/ui_04.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_05.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_06.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_07.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm7.jpg\" width=\"50\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm07.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm7.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_08.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm8.jpg\" width=\"50\" height=\"33\" border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm08.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm8.jpg\'\" \/><\/a><\/td>");
document.writeln("<td class=\"le_picline\"><a href=\"/web2008/info/ui_09.htm\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web08/jm9.jpg\" width=\"49\" height=\"33\"  border=\"0\" onmouseover=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm09.jpg\'\" onmouseout=\"this.src=\'http://ossweb-img.qq.com/images/qqtang/web08/jm9.jpg\'\"\/><\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<tr>");
document.writeln("<td><a href=\"/web2008/info/ui_07.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_08.htm\" class=\"subbg\">����<\/a><\/td>");
document.writeln("<td><a href=\"/web2008/info/ui_09.htm\" class=\"subbg\">�̳�<\/a><\/td>");
document.writeln("<\/tr>");
document.writeln("<\/table>")
}/*  |xGv00|ca97b65dfc14ed4e626dca0940ca9023 */