/*共有函数及配置*/


//根据id计算出数据文件所在的位置
function getDataUrlOfId(id)
{
    var dir = id%500;
    var strDir = "/time/news/data/" + dir + "/"+ id +".js";
    return strDir;
}

//获取图标
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

//获取列表模板
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

//获取新闻详细的模板
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

//是否是忽略的颜色
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