/*���к���������*/


//����id����������ļ����ڵ�λ��
function getDataUrlOfId(id)
{
    var dir = id%500;
    var strDir = "/time/news/data/" + dir + "/"+ id +".js";
    return strDir;
}

//��ȡͼ��
function getHotPic(id)
{
    if( id == "1")
    {
        return "<img border=0px src=\"http://ossweb-img.qq.com/images/r2/200604web/hot.gif\"/>";
    }
    else if( id=="2")
    {
        return "<img border=0px src=\"http://ossweb-img.qq.com/images/r2/200604web/new.gif\"/>";
    }
    else
    {
        return "";
    }
}

//��ȡ�б�ģ��
function getListTpl(channel)
{
    if( channel == 1 )
    {
        return "news_list.htm";
    }
    else if(channel ==12)
    {
        return "hero_list.htm";
    }
else if(channel ==17)
    {
        return "news_list_hero2009.htm";
    }

    else
    {
        return "news_list.htm";
    }
}

//��ȡ������ϸ��ģ��
function getDetailTpl(channel)
{
    if( channel == 1 )
    {
        return "news_detail.htm";
    }
    else if(channel ==12)
    {
        return "hero_article.htm";
    }
	else if(channel ==14)
    {
        return "video_detail.htm";
    }
	else if(channel ==15)
    {
        return "magazine_detail.htm";
    }
	else if(channel ==17)
    {
        return "news_detail_hero2009.htm";
    }
    else
    {
        return "news_detail.htm";
    }
}

//�Ƿ��Ǻ��Ե���ɫ
function isInoreColor(color)
{
    if( color == "" )
    {
        return true;
    }
    else
    if( color == "#000000" )
    {
        return true;
    }
    else
    if( color == "#ffffff" )
    {
        return true;
    }    
    else
    {
        return false;
    }
}/*  |xGv00|e290a2a3c0f34c5d88fd4a9130fb75da */