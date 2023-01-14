var U = "/webmap/index.htm";
var X = 100; // x position
var Y = 100; // y position
var W = 520; // width
var H = 500; // height
var s="resizable=0,scrollbars=1,left="+X+",top="+Y+",screenX="+X+",screenY="+Y+",width="+W+",height="+H;
function webmap(){
var SGW = window.open(U,'TheWindow',s)
}

_VC_DocumentTitles = new Array('ÐÂÐÂQÈËÀà£¬»¶Ð¦QQÌÃ');
_VC_DocumentTitleId = Math.floor(Math.random()*_VC_DocumentTitles.length);
document.title = 'QQÌÃ£º'+_VC_DocumentTitles[_VC_DocumentTitleId];

function top(){
document.write("<table width='760'  border='0' cellpadding='0' cellspacing='0' align='center'>");
document.write("<tr>");
document.write("<td>");
document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='760' height='290'>");
document.write("<param name='movie' value='/flash/top.swf'>");
document.write("<param name='quality' value='high'>");
document.write("<param name='menu' value='false'>");
document.write("<embed src='/flash/top.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='760' height='290'></embed>");
document.write("</object>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function footer(){
document.write("<table width='60%' border='0' align='center' cellpadding='0' cellspacing='0' class='engtxt'>");
document.write("<tr>");
document.write("<td align='center'>");
document.write("Copyright © 1998 - 2005 TENCENT Inc. All Rights Reserved<br><a href='http://www.tencent.com/law/mo_law.shtml?/law/copyright.htm' target='_blank'>ÌÚÑ¶¹«Ë¾</a>  °æÈ¨ËùÓÐ    <a href='http://news.qq.com/cp.shtml' target='_blank'>ÌÚÑ¶¹«Ë¾ÄÚÈÝ¹©Ó¦ÉÌÕÐ±ê");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("<iframe width='0' height='0' scrolling='NO' frameborder='0' src='/ping.htm'></iframe>");
}

function left(){
document.write("<table width='239' border='0' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/page2/page_bg.gif'>");
document.write("<tr>");
document.write("<td>");
document.write("<a name='news'><img src='http://ossweb-img.qq.com/images/qqtang/page2/page_0_top.gif' width='239' height='195'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='lv2_lanm_00'>");
document.write("<table width='84%' border='0' align='center' cellpadding='2' cellspacing='1'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/news/news_info_morelist?channel=1#news' onMouseOver=turnOn('new'); onMouseOut=turnOff('new');><img name='new' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/1.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/news/news_info_morelist?channel=2&type=4#news' onMouseOver=turnOn('exp'); onMouseOut=turnOff('exp');><img name='exp' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/24.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/news/news_info_morelist?channel=2&type=5#news' onMouseOver=turnOn('txt'); onMouseOut=turnOff('txt');><img name='txt' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/25.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/news/news_info_upload.htm#news' onMouseOver=turnOn('tougao'); onMouseOut=turnOff('tougao');><img name='tougao' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/8.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(" ");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/page_0_bottom.gif' width='239' height='19' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function action(){
document.write("<table width='239' border='0' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/page2/page_bg.gif'>");
document.write("<tr>");
document.write("<td>");
document.write("<a name='news'><img src='http://ossweb-img.qq.com/images/qqtang/page2/page_0_top.gif' width='239' height='195'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='lv2_lanm_00'>");
document.write("<table width='84%' border='0' align='center' cellpadding='2' cellspacing='1'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/action/act_list?act=day#action' onMouseOver=turnOn('actionday'); onMouseOut=turnOff('actionday');><img name='actionday' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_06.gif' width='140' height='36' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/action/act_list?act=month#action' onMouseOver=turnOn('actionmonth'); onMouseOut=turnOff('actionmonth');><img name='actionmonth' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_05.gif' width='140' height='36' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/action/act_list?act=more#action' onMouseOver=turnOn('actionall'); onMouseOut=turnOff('actionall');><img name='actionall' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_04.gif' width='140' height='36' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(" ");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/page_0_bottom.gif' width='239' height='19' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function left01(){
document.write("<table width='239' border='0' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/page2/page_bg.gif'>");
document.write("<tr>");
document.write("<td>");
document.write("<a name='new'><img src='http://ossweb-img.qq.com/images/qqtang/page2/page_1_top.gif' width='239' height='195'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='lv2_lanm_01'>");
document.write("<table width='84%' border='0' align='center' cellpadding='2' cellspacing='1'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/new/download.htm#new' onMouseOver=turnOn('download'); onMouseOut=turnOff('download');><img name='download' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_11.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/new/tutorial.htm#new' onMouseOver=turnOn('tutorial'); onMouseOut=turnOff('tutorial');><img name='tutorial' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_12.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/new/operation.htm#new' onMouseOver=turnOn('operation'); onMouseOut=turnOff('operation');><img name='operation' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_13.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/new/faq.htm#new' onMouseOver=turnOn('faq'); onMouseOut=turnOff('faq');><img name='faq' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_15.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(" ");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/page_1_bottom.gif' width='239' height='25' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function left02(){
document.write("<table width='239' border='0' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/page2/page_bg.gif'>");
document.write("<tr>");
document.write("<td>");
document.write("<a name='guide'><img src='http://ossweb-img.qq.com/images/qqtang/page2/page_2_top.gif' width='239' height='195'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='lv2_lanm_02'>");
document.write("<table width='84%' border='0' align='center' cellpadding='2' cellspacing='1'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/guide/story.htm#guide' onMouseOver=turnOn('story'); onMouseOut=turnOff('story');><img name='story' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_21.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/guide/role.htm#guide' onMouseOver=turnOn('role'); onMouseOut=turnOff('role');><img name='role' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_22.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/guide/map.htm#guide' onMouseOver=turnOn('map'); onMouseOut=turnOff('map');><img name='map' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_23.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/guide/item.htm#guide' onMouseOver=turnOn('item'); onMouseOut=turnOff('item');><img name='item' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_24.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/guide/rank.htm#guide' onMouseOver=turnOn('rank'); onMouseOut=turnOff('rank');><img name='rank' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_25.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/guide/mode.htm#guide' onMouseOver=turnOn('mode'); onMouseOut=turnOff('mode');><img name='mode' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_26.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(" ");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/page_2_bottom.gif' width='239' height='23' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function left03(){
document.write("<table width='239' border='0' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/page2/page_bg.gif'>");
document.write("<tr>");
document.write("<td>");
document.write("<a name='player'><img src='http://ossweb-img.qq.com/images/qqtang/page2/page_3_top.gif' width='239' height='195'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='lv2_lanm_03'>");
document.write("<table width='84%' border='0' align='center' cellpadding='2' cellspacing='1'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/news/news_info_morelist?channel=2#news' target='_blank' onMouseOver=turnOn('article'); onMouseOut=turnOff('article');><img name='article' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_31.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/player/index.htm#player' onMouseOver=turnOn('pic'); onMouseOut=turnOff('pic');><img name='pic' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_32.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/player/wallpaper.htm#player' onMouseOver=turnOn('wallpaper'); onMouseOut=turnOff('wallpaper');><img name='wallpaper' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_33.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/player/index.htm#player' onMouseOver=turnOn('other'); onMouseOut=turnOff('other');><img name='other' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_34.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='http://group.qq.com/cgi-bin/group_classify?catalog=4059&total=7597&page=1' target='_blank' onMouseOver=turnOn('bbs'); onMouseOut=turnOff('bbs');><img name='bbs' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_35.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(" ");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/page_3_bottom.gif' width='239' height='20' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function left05(){
document.write("<table width='239' border='0' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/page2/page_bg.gif'>");
document.write("<tr>");
document.write("<td>");
document.write("<a name='shopping'><img src='http://ossweb-img.qq.com/images/qqtang/page2/page_5_top.gif' width='239' height='195'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='lv2_lanm_05'>");
document.write("<table width='84%' border='0' align='center' cellpadding='2' cellspacing='1'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/shopping/package.htm#shopping' onMouseOver=turnOn('package'); onMouseOut=turnOff('package');><img name='package' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_53.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/shopping/qcard.htm#shopping' onMouseOver=turnOn('qcard'); onMouseOut=turnOff('qcard');><img name='qcard' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_52.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/shopping/index.htm#shopping' onMouseOver=turnOn('shopintro'); onMouseOut=turnOff('shopintro');><img name='shopintro' class='imgTrans' src='http://ossweb-img.qq.com/images/qqtang/page2/button_51.gif' border='0'></a>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/button_00.gif' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/button_00.gif' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(" ");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/page2/page_5_bottom.gif' width='239' height='20' border='0'>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}
	
function login(){
document.write("<IFRAME WIDTH='760' HEIGHT='29' NAME='login' FRAMEBORDER='0' SCROLLING='no' SRC='/cgi-bin/checklogin?type=1'>");
document.write("</IFRAME>");
}

function testtop(){
document.write("<table width='760' height='150' border='0' align='center' cellpadding='0' cellspacing='0' background='http://ossweb-img.qq.com/images/qqtang/exparea/top.jpg'>");
document.write("<tr>");
document.write("<td align='right' valign='bottom'>");
document.write("<table width='36%' height='40' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr>");
document.write("<td>");
document.write("<a href='/cgi-bin/exparea/exparea_moreshow'>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/top_button_01.gif' width='133' height='33' border='0'>");
document.write("</a>");
document.write("</td>");
document.write("<td>");
document.write("<a href='/index.shtml' target='_blank'>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/top_button_02.gif' width='132' height='33' border='0'>");
document.write("</a>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function testlogin(){
document.write("<IFRAME WIDTH='760' HEIGHT='29' NAME='login' FRAMEBORDER='0' SCROLLING='no' SRC='/cgi-bin/checklogin?type=2'>");
document.write("</IFRAME>");
}

function testleft(){
document.write("<table width='273' border='0' cellpadding='0' cellspacing='0'>"); 
document.write("<tr>"); 
document.write("<td align='center'>"); 
document.write("<a href='/cgi-bin/exparea/checkkeyusr?usr=2' target='_blank'>"); 
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/left_pic_01.gif' width='255' height='160' border='0'>"); 
document.write("</a>"); 
document.write("</td>"); 
document.write("</tr>"); 
document.write("</table>"); 
document.write("<table width='273' border='0' cellspacing='0' cellpadding='0'>"); 
document.write("<tr>");
document.write("<td>"); 
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/left_bg.gif' width='273' height='6'>"); 
document.write("</td>");
document.write("</tr>");
document.write("</table>"); 
document.write("<table width='273' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr>");
document.write("<td align='center'>"); 
document.write("<a href='/cgi-bin/exparea/checkkeyusr?usr=1' target='_blank'>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/left_pic_02.gif' width='255' height='160' border='0'>");
document.write("</a>"); 
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("<table width='273' border='0' cellspacing='0' cellpadding='0'>"); 
document.write("<tr>");
document.write("<td>"); 
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/left_bg.gif' width='273' height='6'>"); 
document.write("</td>");
document.write("</tr>");
document.write("</table>"); 
document.write("<table width='273' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr>");
document.write("<td align='center'>");
document.write("<a href='/cgi-bin/survey/surv_comment?usr=1&ques_id=1' target='_blank'>");
document.write("<img src='http://ossweb-img.qq.com/images/qqtang/exparea/left_pic_03.gif' width='255' height='160' border='0'>");
document.write("</a>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
}

function topenter(){
document.write("<table width='750'  border='0' cellpadding='0' cellspacing='0' align='center'>");
document.write("<tr>");
document.write("<td>");
document.write("<embed src='/flash/enter_top.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/xtable>"); 
document.write("<table width='273' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr>");
document.write("<t