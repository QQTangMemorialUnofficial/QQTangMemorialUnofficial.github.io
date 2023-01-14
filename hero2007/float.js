function QUICK_inc2(swfpath) {                                                               
document.write("<DIV ID='floater3' STYLE='position:absolute;left:850px;top:298px; width:120px; height:120px; z-index:5; visibility: visible;'>");
document.write("<table width=\"143\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
document.write("  <tr>");
document.write("    <td><a href=\"http://qqshow.qq.com/\" target=\"_blank\"><img src=\"http://ossweb-img2.qq.com/images/qqtang/hero2007/qqx.gif\" width=\"134\" height=\"87\"></a></td>");
document.write("  </tr>");
document.write("</table>");

document.write("</DIV>");
document.writeln("<div  ID=\"floater2\" style=\"position:absolute;left:860px;top:428px; width:134px; height:87px; z-index:2;\">");
document.writeln("<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http:\/\/download.macromedia.com\/pub\/shockwave\/cabs\/flash\/swflash.cab#version=7,0,19,0\" width=\"120\" height=\"120\">");
document.writeln("  <param name=\"movie\" value=\"http:\/\/ossweb-img.qq.com\/images\/qqtang\/hero2007\/120_120.swf\" \/>");
document.writeln("  <param name=\"quality\" value=\"high\" \/>");
document.writeln("  <param name=\"wmode\" value=\"transparent\" \/>");
document.writeln("  <embed src=\"http:\/\/ossweb-img.qq.com\/images\/qqtang\/hero2007\/120_120.swf\" quality=\"high\" pluginspage=\"http:\/\/www.macromedia.com\/go\/getflashplayer\" type=\"application\/x-shockwave-flash\" width=\"120\" height=\"120\"><\/embed>");
document.writeln("<\/object><\/div>");

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
		if ((chk_i2 == "yes") && (document.all.floater2.style.pixelTop < (chk_vlue=document.body.scrollHeight - (260)))){
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