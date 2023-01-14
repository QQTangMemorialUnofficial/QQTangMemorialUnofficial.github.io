p = new Array(10);
t = new Array(10);
c = new Array(10);

p[0] = '/images/enter/media_pic_01s.jpg'
p[1] = '/images/enter/media_pic_02s.jpg'
p[2] = '/images/enter/media_pic_03s.jpg'
p[3] = '/images/enter/media_pic_04s.jpg'
p[4] = '/images/enter/media_pic_05s.jpg'
p[5] = '/images/enter/media_pic_06s.jpg' 
p[6] = '/images/enter/media_pic_07s.jpg' 
p[7] = '/images/enter/media_pic_08s.jpg'
p[8] = '/images/enter/media_pic_09s.jpg' 
p[9] = '/images/enter/media_pic_10s.jpg'

t[0] = '腾讯游戏频道'
t[1] = "电脑游戏攻略"
t[2] = '天使在线'
t[3] = '17173.com'
t[4] = "ItIt.com"
t[5] = '电脑商情报'
t[6] = '骄阳游戏网'
t[7] = '软件与光盘'
t[8] = "大众软件"
t[9] = "电脑报"

c[0] = '“糖果创世纪”，创造游戏新世纪！恭祝《QQ堂》内测圆满成功！'
c[1] = "腾讯QQ堂横空出世，带你进入更丰富多彩的休闲娱乐天地"
c[2] = '可爱的卡通形象，丰富的战斗地图，QQ堂--将休闲进行到底！'
c[3] = '腾讯骏业日新，QQ堂鸿图大展！'
c[4] = "祝愿QQ堂越来越红火，让更多的人享受到网游快乐！"
c[5] = '亲切QQ再添增值服务，亿众用户喜获休闲去处。'
c[6] = '网络娱乐，休闲时代，QQ堂耀世而出，祝愿所有网民都能在这里找到一片乐土。'
c[7] = '甜蜜的网路，生活尽在QQ堂'
c[8] = "关注QQ堂，关注国产游戏，祝QQ堂内测成功"
c[9] = "《QQ堂》，是的，这就是我想要的游戏……"

index = Math.floor(Math.random() * p.length);

document.write("<table width='95%' height='100' border='0' align='center' cellpadding='0' cellspacing='6'>");
document.write("<tr>");
document.write("<td width='90'>");
document.write("<a href='/enter/mediaintro.htm' target='_blank'>");
document.write("<img src="+p[index]+" width='90' height='90' border='0' class='table'>");
document.write("</a>");
document.write("</td>");
document.write("<td>");
document.write("<b><font color='#3333FF' class='articleTitle'>"+t[index]+"</font></b>");
document.write("<p>"+c[index]+"</p>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");