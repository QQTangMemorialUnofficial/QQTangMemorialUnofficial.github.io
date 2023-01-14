                                                        
function QUICK_inc2(swfpath) {                                                               
document.write("<DIV ID='floater2' STYLE='position:absolute; left:840px;top:328px; width:143px; height:271px; z-index:3; visibility: visible;'>");
document.write("<table width=\"143\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
document.write("<tr>");
document.write("<td><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_01.gif\" width=\"20\" height=\"26\"></td>");
document.write("<td><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_02.gif\" width=\"100\" height=\"26\"></td>");
document.write("<td><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_03.gif\" width=\"23\" height=\"26\"></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td valign=\"top\" background=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_bg1.gif\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_04.gif\" width=\"20\" height=\"200\"></td>");

document.writeln('<td><a id="h6" target="_blank"><img  border="0"  width="100" height="200" id="i6"></a><script>QqGg_ShowType(3,6,"h6","i6");</script></td>');

document.write("<td valign=\"top\" background=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_bg2.gif\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_05.gif\" width=\"23\" height=\"200\"></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_06.gif\" width=\"20\" height=\"45\"></td>");
document.write("<td><a href=\"#top\"><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_07.gif\" width=\"100\" height=\"45\" border=\"0\"></a></td>");
document.write("<td><img src=\"http://ossweb-img.qq.com/images/qqtang/web200612/images/main/pf_08.gif\" width=\"23\" height=\"45\"></td>");
document.write("</tr>");
document.write("</table>");

document.write("</DIV>");

if(NS || IE) action = window.setInterval("heartBeat()",1);
}


self.onError=null;
whichIt = null; 
lastScrollY = 0;
NS = (document.layers) ? 1 : 0;
IE = (document.all) ? 1: 0;
/***** STALKER CODE *****/
function heartBeat() {

var chk_i2;

if(IE) { 
	diffY = document.body.scrollTop; 
	}
if(NS) { diffY = self.pageYOffset}

if(diffY != lastScrollY) {

	percent = .1 * (diffY - lastScrollY);

	if(percent > 0){
		 percent = Math.ceil(percent);
		 chk_i2 ="yes";
	}

	else{
		 percent = Math.floor(percent);
		 chk_i2 ="no";
	}


	if(IE){
		if ((chk_i2 == "yes") && (document.all.floater2.style.pixelTop < (chk_vlue=document.body.scrollHeight - (660)))){
		 document.all.floater2.style.pixelTop += percent;
		}

		else if ((chk_i2 == "no") && (document.all.floater2.style.pixelTop > 328)){
		 document.all.floater2.style.pixelTop += percent;
		}

	}


if(NS) document.floater2.top += percent; 
lastScrollY = lastScrollY + percent;

}

} 
