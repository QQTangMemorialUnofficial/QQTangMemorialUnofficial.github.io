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

t[0] = '��Ѷ��ϷƵ��'
t[1] = "������Ϸ����"
t[2] = '��ʹ����'
t[3] = '17173.com'
t[4] = "ItIt.com"
t[5] = '�������鱨'
t[6] = '������Ϸ��'
t[7] = '��������'
t[8] = "�������"
t[9] = "���Ա�"

c[0] = '���ǹ������͡���������Ϸ�����ͣ���ף��QQ�á��ڲ�Բ���ɹ���'
c[1] = "��ѶQQ�ú�ճ��������������ḻ��ʵ������������"
c[2] = '�ɰ��Ŀ�ͨ���󣬷ḻ��ս����ͼ��QQ��--�����н��е��ף�'
c[3] = '��Ѷ��ҵ���£�QQ�ú�ͼ��չ��'
c[4] = "ףԸQQ��Խ��Խ����ø���������ܵ����ο��֣�"
c[5] = '����QQ������ֵ���������û�ϲ������ȥ����'
c[6] = '�������֣�����ʱ����QQ��ҫ��������ףԸ�����������������ҵ�һƬ������'
c[7] = '���۵���·�������QQ��'
c[8] = "��עQQ�ã���ע������Ϸ��ףQQ���ڲ�ɹ�"
c[9] = "��QQ�á����ǵģ����������Ҫ����Ϸ����"

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