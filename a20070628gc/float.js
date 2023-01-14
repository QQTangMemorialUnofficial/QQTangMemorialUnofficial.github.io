function QUICK_inc2(swfpath) {                                                               
document.write("<DIV ID='floater2' STYLE='position:absolute;left:790px;top:228px; width:134px; height:87px; z-index:3; visibility: visible;'>");
document.write("<table width=\"177\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
document.write("  <tr>");
document.write("    <td><a href=\"http://qqtang.qq.com/hero2007/\" target=\"_blank\"><img src=\"http://ossweb-img2.qq.com/images/qqtang/a20070628gc/hero.gif\" width=\"177\" height=\"269\"></a></td>");
document.write("  </tr>");
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
		if ((chk_i2 == "yes") && (document.all.floater2.style.pixelTop < (chk_vlue=document.body.scrollHeight - (300)))){
		 document.all.floater2.style.pixelTop += percent;
		}

		else if ((chk_i2 == "no") && (document.all.floater2.style.pixelTop > 228)){
		 document.all.floater2.style.pixelTop += percent;
		}

	}


if(NS) document.floater2.top += percent; 
lastScrollY = lastScrollY + percent;

}

} 