function login()
{
document.writeln("<script type=\"text\/JavaScript\">");
document.writeln("<!--");
document.writeln("function MM_popupMsg(msg) { \/\/v1.0");
document.writeln("  alert(msg);");
document.writeln("}");
document.writeln("\/\/-->");
document.writeln("<\/script>")
document.writeln("<table width=\"100\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
document.writeln("      <tr>");
document.writeln("        <td height=\"9\"><\/td>");
document.writeln("      <\/tr>");
document.writeln("      <tr>");
document.writeln("        <td><div id=\"logined\" style=\"display:none\"><a href=\"javascript:logOut();\"><img src=\"http://ossweb-img2.qq.com/images/qqtang/a20071030design/to_b_08.gif\" width=\"114\" height=\"36\" border=\"0\" \/><\/a><\/div>");
document.writeln("            <div id=\"unlogin\" style=\"display:block\"><a href=\"#\" onclick=\"MM_popupMsg(\'感谢参与，活动已经结束！\')\"><img src=\"http://ossweb-img2.qq.com/images/qqtang/a20071030design/to_bn_08.gif\" width=\"114\" height=\"36\" border=\"0\" \/><\/a><script language=\"JavaScript\" src=\"http:\/\/game.qq.com\/qqjs\/top.js\" type=\"text\/javascript\"><\/script><\/div><\/td>");
document.writeln("      <\/tr>");
document.writeln("      <tr>");
document.writeln("        <td><a href=\"#\" onclick=\"MM_popupMsg(\'感谢参与，活动已经结束！\')\"><img src=\"http://ossweb-img2.qq.com/images/qqtang/a20071030design/to_bn_10.gif\" width=\"114\" height=\"38\" border=\"0\" \/><\/a><\/td>");
document.writeln("      <\/tr>");
document.writeln("    <\/table>")
}

function sea()
{
document.writeln("<table width=\"78%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"2\">");
document.writeln("              <tr>");
document.writeln("                <td width=\"41%\"><input name=\"q\" id=\"txtKeyWord\" type=\"text\" class=\"input2\" value=\"关键字\" onfocus=\"if (this.value==\'关键字\'){this.value=\'\'}\"  size=\"16\" \/><\/td>");
document.writeln("                <td width=\"34%\" >");
document.writeln("                    <div class=\"in\">");
document.writeln("                      <select name=\"picSelect\" id=\"picSelect\">");
document.writeln("                        <option value=\"1\" >按QQ查询<\/option>");
document.writeln("                        <option value=\"2\">图片名称<\/option>");
document.writeln("                      <\/select>");
document.writeln("                    <\/div>     ");
document.writeln("                    <script>");
document.writeln("                        function dosearch()");
document.writeln("                        {");
document.writeln("                           var ddp = document.getElementById(\"picSelect\");");
document.writeln("                           var txt = document.getElementById(\"txtKeyWord\");");
document.writeln("                           if(txt.value==\"\" )");
document.writeln("                           {");
document.writeln("                             alert(\"请输入查询条件\");");
document.writeln("                             return;");
document.writeln("                           }");
document.writeln("                           if(ddp.value==\"1\")");
document.writeln("                           {");
document.writeln("                             \/\/判断下qq的合法性");
document.writeln("                             var reg = \/^\\d*$\/;");
document.writeln("                             if(!reg.test( txt.value ))");
document.writeln("                             {");
document.writeln("                                alert(\"请填写正确的QQ号码!\");");
document.writeln("                                return;");
document.writeln("                             }");
document.writeln("                             document.location.href=\"\/cgi-bin\/map\/PicList.cgi?qq=\" + txt.value;");
document.writeln("                           }");
document.writeln("                           else");
document.writeln("                           {");
document.writeln("                            document.location.href=\"\/cgi-bin\/map\/PicList.cgi?title=\" + escape(txt.value);");
document.writeln("                           }");
document.writeln("                           ");
document.writeln("                           ");
document.writeln("                        }         ");
document.writeln("                    <\/script>                <\/td>");
document.writeln("                <td width=\"25%\" height=\"30\"><input onclick=\"javascript:dosearch();\" type=\"image\" src=\"http://ossweb-img2.qq.com/images/qqtang/a20071030design\/sec.gif\" width=\"40\" height=\"19\" \/>                  <\/td>");
document.writeln("              <\/tr>");
document.writeln("            <\/table>")
}