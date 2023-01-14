p = new Array(9);
t = new Array(9);

p[0] = '/images/5sail/page_pic_09.jpg'
p[1] = '/images/5sail/page_pic_08.jpg'
p[2] = '/images/5sail/page_pic_10.jpg'
p[3] = '/images/5sail/page_pic_11.jpg'
p[4] = '/images/5sail/page_pic_12.jpg'
p[5] = '/images/5sail/page_pic_13.jpg' 
p[6] = '/images/5sail/page_pic_14.jpg' 
p[7] = '/images/5sail/page_pic_15.jpg'
p[8] = '/images/5sail/page_pic_16.jpg' 

t[0] = '互动娱乐事业部'
t[1] = "凯旋项目组"
t[2] = 'QQ游戏项目组'
t[3] = 'QQ秀项目组'
t[4] = "QQ会员项目组"
t[5] = 'QQ贺卡项目组'
t[6] = 'QQ音乐项目组'
t[7] = 'QQ网络硬盘项目组'
t[8] = "QQ交友项目组"

index = Math.floor(Math.random() * p.length);

document.write("<a href='/a20041205sasail/page_05_more.htm' target='_blank'>");
document.write("<img src="+p[index]+" width='225' height='225' border='0' class='table'>");
document.write("</a>");
document.write("<br>");
document.write(""+t[index]+""