
//由数据转换成html
function DataToHtml(tpl, ndata, maxLength, hasOutPutNum)
{
    // alert("tpl:"+tpl);
    //alert(maxLength);
    
    var strFontPre = "";
    var strFontEnd = "";
    
    if( ndata.Flevel != "" && ndata.Flevel !== "#000000" )
    {
        strFontPre = "<font color=\"" + ndata.Flevel + "\">";
        strFontEnd = "</font>";
    }

    var detailTpl = getDetailTpl( ndata.Fchannel_id );
    var listTpl   = getListTpl  ( ndata.Fchannel_id );
    
    ndata.Ftitle = unescape(ndata.Ftitle);
        
    //标题
    if( typeof(maxLength) != "undefined" )
    {
        if( ndata.Ftitle.length >  maxLength )
        {
            ndata.Ftitle = ndata.Ftitle.substr(0, maxLength) + "..." ;
        }
    }
    
    var tmpTpl = repalceAll( tpl, "<%$Ftitle$%>", strFontPre + unescape(ndata.Ftitle) + strFontEnd );
    tmpTpl = repalceAll( tmpTpl, "#Ftitle", strFontPre + unescape(ndata.Ftitle) + strFontEnd );
    
    //日期
    var rDate = ndata.Freleasetime;
    rDate = rDate.substr(5, 5);
    rDate= rDate.substr(0, 2)+"/"+rDate.substr(3, 2);
    
    tmpTpl     = repalceAll( tmpTpl, "<%$Freleasetime$%>", strFontPre + "[" + rDate + "]" + strFontEnd );
    tmpTpl     = repalceAll( tmpTpl, "#Freleasetime", strFontPre + "[" + rDate + "]" + strFontEnd );
    tmpTpl     = repalceAll( tmpTpl, "<%$owner$%>", ndata.Fowner );
    tmpTpl     = repalceAll( tmpTpl, "#owner", ndata.Fowner );
    try{    tmpTpl     = repalceAll( tmpTpl, "[index]", hasOutPutNum+1 );}catch(e){}
    //文章链接
    if( ndata.iUrl == "1" )
    {
        tmpTpl = repalceAll( tmpTpl, "<%$url$%>", ndata.Furl );
        tmpTpl = repalceAll( tmpTpl, "#url", ndata.Furl );
    }
    else
    {
        tmpTpl = repalceAll( tmpTpl, "<%$url$%>", "/CommNews/static/"+detailTpl+"?fid=" + ndata.Fid + iPdNameCondition );
        tmpTpl = repalceAll( tmpTpl, "#url", "/CommNews/static/"+detailTpl+"?fid=" + ndata.Fid + iPdNameCondition );
    }
    //类别
    tmpTpl     = repalceAll( tmpTpl, "<%$Ftype_name$%>", strFontPre + "[" + ndata.Ftype_name + "]" + strFontEnd );
    tmpTpl     = repalceAll( tmpTpl, "#Ftype_name", strFontPre + "[" + ndata.Ftype_name + "]" + strFontEnd );
    //类别链接
    tmpTpl     = repalceAll( tmpTpl, "<%$typeUrl$%>", "/CommNews/static/"+listTpl+"?channel=" + ndata.Fchannel_id + "&type=" + ndata.Ftype_id + iPdNameCondition );
    tmpTpl     = repalceAll( tmpTpl, "#typeUrl", "/CommNews/static/"+listTpl+"?channel=" + ndata.Fchannel_id + "&type=" + ndata.Ftype_id + iPdNameCondition );
    //替换热门图标
    if( ndata.FHot != "0")
    {
        tmpTpl     = repalceAll( tmpTpl, "<%$FHot$%>", getHotPic(ndata.FHot) );
        tmpTpl     = repalceAll( tmpTpl, "#FHot", getHotPic(ndata.FHot) );
    }
    else
    {
        tmpTpl     = repalceAll( tmpTpl, "<%$FHot$%>", "" );
        tmpTpl     = repalceAll( tmpTpl, "#FHot", "" );
    }
    return tmpTpl;
}

//显示置顶新闻
//iType:    1置顶新闻,2非置顶,3最新
//trTplName:模板的ID
//num:      显示条数
//channel:  新闻的频道
//newType:  新闻的类别
function showIncNews( iType, trTplName, num, channel, newType, maxLength )
{
   if (typeof(newsListData)=='undefined')
   {
      $(trTplName).style.display= "none";
      document.writeln("");
      return;
   }
   
   var tplCtl = $(trTplName);
   var hasOutPutNum = 0;
   for(var i=1; i<newsListData.length; i++ )
   {
   //alert(newsListData[i].Fchannel_id);

     if( channel !== "")
     {
        if( newsListData[i].Fchannel_id !== channel )
        {
            //alert("Fchannel_id:" + newsListData[i].Fchannel_id);
            continue;
        }
     }
     
     if(newType !== "" )
     {
        if( newsListData[i].Ftype_id !== newType )
        {
            //alert("Ftype_id:" + newsListData[i].Ftype_id);
            continue;
        }
     }
     
     if( iType == "1" )
     {
        if( newsListData[i].iHead != "1" )
        {
            continue;
        }
     }

     if( iType == "2" )
     {
        if( newsListData[i].iHead != "0" )
        {
            continue;
        }
     }
     //alert($(trTplName));
     //alert( "outerHTML:" + $(trTplName).outerHTML );
     var tpl = $(trTplName).outerHTML;
     var html = DataToHtml(tpl, newsListData[i], maxLength, hasOutPutNum );
     document.writeln( html );
     hasOutPutNum = hasOutPutNum + 1;
     //alert("hasOutPutNum:" + hasOutPutNum + ",num:" + num );
     if( hasOutPutNum >= num )
     {
        break;
     }
   }

    tplCtl.style.display = "none";
   
}

function showIncNews1( iType, trTplName, num, channel, newType, maxLength )
{
   if (typeof(newsListData)=='undefined')
   {
      $(trTplName).style.display= "none";
      document.writeln("");
      return;
   }
   
   var tplCtl = $(trTplName);
   var hasOutPutNum = 0;
   for(var i=1; i<newsListData.length; i++ )
   {
   //alert(newsListData[i].Fchannel_id);

     if( channel !== "")
     {
        if( newsListData[i].Fchannel_id !== channel )
        {
            //alert("Fchannel_id:" + newsListData[i].Fchannel_id);
            continue;
        }
     }
     
     if(newType !== "" )
     {
        if( newsListData[i].Ftype_id !== newType )
        {
            //alert("Ftype_id:" + newsListData[i].Ftype_id);
            continue;
        }
     }
     
     if( iType == "1" )
     {
        if( newsListData[i].iHead != "1" )
        {
            continue;
        }
     }

     if( iType == "2" )
     {
        if( newsListData[i].iHead != "0" )
        {
            continue;
        }
     }
     //alert($(trTplName));
     //alert( "outerHTML:" + $(trTplName).outerHTML );
     var tpl = $(trTplName).innerHTML;
     var html = DataToHtml(tpl, newsListData[i], maxLength, hasOutPutNum );
     document.writeln( html );
     hasOutPutNum = hasOutPutNum + 1;
     //alert("hasOutPutNum:" + hasOutPutNum + ",num:" + num );
     if( hasOutPutNum >= num )
     {
        break;
     }
   }

    tplCtl.style.display = "none";
   
}

//显示置顶新闻
function showHotNews(trTplName, num, channel, newType , maxLength)
{
    showIncNews( "1", trTplName, num, channel, newType, maxLength );
}

//显示非置顶新闻
function showCommNews(trTplName, num, channel, newType, maxLength )
{
    showIncNews( "2", trTplName, num, channel, newType, maxLength );
}

//显示最新新闻,不区分是否置顶
function showNewestNews(trTplName, num, channel, newType, maxLength )
{
    showIncNews( "3", trTplName, num, channel, newType, maxLength );
}

function showNewestNews1(trTplName, num, channel, newType, maxLength )
{
    showIncNews1( "3", trTplName, num, channel, newType, maxLength );
}

function showCommNews1(trTplName, num, channel, newType, maxLength )
{
    showIncNews1( "2", trTplName, num, channel, newType, maxLength );
}

function showHotNews1(trTplName, num, channel, newType , maxLength)
{
    showIncNews1( "1", trTplName, num, channel, newType, maxLength );
}