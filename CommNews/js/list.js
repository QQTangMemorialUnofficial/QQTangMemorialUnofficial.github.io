//向页面加载数据
writeDataJs();

function getUrlPara(paraName, sUrl )
{
    if (typeof(sUrl)=='undefined')
    {
        sUrl = document.location.href;
    }
    
    var urlRegex = new RegExp(paraName+"=[^&]*", "igm");
    var para     = sUrl.match( urlRegex );
    if(!para)
    {
        return "";
    }
    var v=para[0];
    from = v.indexOf( "=" );
    var tpara = v.substr(from+1, v.length);
    tpara = repalceAll(tpara, "<", "");
    tpara = repalceAll(tpara, ">", "");
    tpara = repalceAll(tpara, "script", "");
    
    tpara = parseInt(tpara);   
	if(isNaN(tpara ))tpara =1;

    return tpara;
}

//向页面写js路径
function writeDataJs()
{
    //alert("in writeDataJs");
    //获取渠道id
    var cid      = getUrlPara("channel");
    //获取子类id
    var subType =  getUrlPara("type");
    var page    =  getUrlPara("page");
    var query   =  getUrlPara("q");
    if( page === "" )
    {
        page = 0;
    }
    
    //如果page是10页之前,直接加载静态js,加载cgi
    if( page < 10 && query == "" )
    {
        //alert( "<script src=\"list/_"+ cid + "_" + subType + "_" + page + ".js\"" );
        document.writeln("<script src=\"/time/news/list/_"+ cid + "_" + subType + "_" + page + ".js\"></script>");
    }
    else
    {
       document.writeln("<script src=\"/cgi-bin/CommNews/getNewsListData.cgi?iPdName=1&page=" +page+ "&channel="+cid+"&type="+subType + "&q=" + query +"\"></script>");
    }
    
}

//显示列表数据
function displayList( ListTplName )
{
   if (typeof(newsListData)=='undefined')
   {
      $(ListTplName).style.display= "none";
      document.writeln("抱歉,无更多新闻!");
      return;
   }

   var trTpl = $(ListTplName);
   var tpl   = $(ListTplName).outerHTML;
   
   var iPdName    = getUrlPara("iPdName");
   if( iPdName == "" )
   {
    alert("缺少iPdName参数!");
    return;
   }
   var iPdNameCondition = "&iPdName=" + iPdName;
   
   for( var i=1; i<newsListData.length; i++ )
   {
        var strFontPre = "";
        var strFontEnd = "";

        if( newsListData[i].Flevel != "" )
        {
            strFontPre = "<font clor=\"" + newsListData[i].Flevel + "\">";
            strFontEnd = "</font>";
        }

        var listTpl    = getListTpl(  newsListData[i].Fchannel_id );  //查看列表
        var detailTpl  = getDetailTpl(newsListData[i].Fchannel_id );//查看明细
    
        //标题
    	var tmpTpl = repalceAll( tpl, "<%$Ftitle$%>", strFontPre + unescape(newsListData[i].Ftitle) + strFontEnd );
    	tmpTpl = repalceAll(tmpTpl, "#Ftitle", strFontPre + unescape(newsListData[i].Ftitle) + strFontEnd );
        //日期
        var rDate = newsListData[i].Freleasetime;
        rDate     = rDate.substr(0, 10);
        tmpTpl     = tmpTpl.replace("<%$Freleasetime$%>", strFontPre + rDate + strFontEnd );
        tmpTpl     = tmpTpl.replace("#Freleasetime", strFontPre + rDate + strFontEnd );
		//文章链接
		if( newsListData[i].iUrl == "1" )
		{
		    tmpTpl = repalceAll( tmpTpl, "<%$url$%>", newsListData[i].Furl );
		    tmpTpl = repalceAll( tmpTpl, "#url", newsListData[i].Furl );
		}
		else
		{
		    tmpTpl = repalceAll( tmpTpl, "<%$url$%>", "/CommNews/static/" + detailTpl + "?fid=" + newsListData[i].Fid + iPdNameCondition );
		    tmpTpl = repalceAll( tmpTpl, "#url", "/CommNews/static/" + detailTpl + "?fid=" + newsListData[i].Fid + iPdNameCondition );
	    }
		//类别
		tmpTpl     = repalceAll( tmpTpl, "<%$Ftype_name$%>", strFontPre + newsListData[i].Ftype_name + strFontEnd );
		tmpTpl     = repalceAll( tmpTpl, "#Ftype_name", strFontPre + newsListData[i].Ftype_name + strFontEnd );
		//类别链接
		tmpTpl     = repalceAll( tmpTpl, "<%$typeUrl$%>", "/CommNews/static/" + listTpl + "?channel=" + newsListData[i].Fchannel_id + "&type=" + newsListData[i].Ftype_id + iPdNameCondition );
		tmpTpl     = repalceAll( tmpTpl, "#typeUrl", "/CommNews/static/" + listTpl + "?channel=" + newsListData[i].Fchannel_id + "&type=" + newsListData[i].Ftype_id + iPdNameCondition );
        //替换热门图标
        if( newsListData[i].FHot != "0")
        {
            tmpTpl     = repalceAll( tmpTpl, "<%$FHot$%>", getHotPic(newsListData[i].FHot) );
            tmpTpl     = repalceAll( tmpTpl, "#FHot", getHotPic(newsListData[i].FHot) );
        }
        else
        {
            tmpTpl     = repalceAll( tmpTpl, "#FHot", "" );
        }
        
		document.writeln( tmpTpl );
	}
	
	//隐藏模板
	trTpl.style.display= "none";
	
}

function displayList1( ListTplName )
{
   if (typeof(newsListData)=='undefined')
   {
      $(ListTplName).style.display= "none";
      document.writeln("抱歉,无更多新闻!");
      return;
   }

   var trTpl = $(ListTplName);
   var tpl   = $(ListTplName).innerHTML;
   
   var iPdName    = getUrlPara("iPdName");
   if( iPdName == "" )
   {
    alert("缺少iPdName参数!");
    return;
   }
   var iPdNameCondition = "&iPdName=" + iPdName;
   
   for( var i=1; i<newsListData.length; i++ )
   {
        var strFontPre = "";
        var strFontEnd = "";

        if( newsListData[i].Flevel != "" )
        {
            strFontPre = "<font clor=\"" + newsListData[i].Flevel + "\">";
            strFontEnd = "</font>";
        }

        var listTpl    = getListTpl(  newsListData[i].Fchannel_id );  //查看列表
        var detailTpl  = getDetailTpl(newsListData[i].Fchannel_id );//查看明细
    
        //标题
    	var tmpTpl = repalceAll( tpl, "<%$Ftitle$%>", strFontPre + unescape(newsListData[i].Ftitle) + strFontEnd );
    	tmpTpl = repalceAll(tmpTpl, "#Ftitle", strFontPre + unescape(newsListData[i].Ftitle) + strFontEnd );
        //日期
        var rDate = newsListData[i].Freleasetime;
        rDate     = rDate.substr(0, 10);
        tmpTpl     = tmpTpl.replace("<%$Freleasetime$%>", strFontPre + rDate + strFontEnd );
        tmpTpl     = tmpTpl.replace("#Freleasetime", strFontPre + rDate + strFontEnd );
		//文章链接
		if( newsListData[i].iUrl == "1" )
		{
		    tmpTpl = repalceAll( tmpTpl, "<%$url$%>", newsListData[i].Furl );
		    tmpTpl = repalceAll( tmpTpl, "#url", newsListData[i].Furl );
		}
		else
		{
		    tmpTpl = repalceAll( tmpTpl, "<%$url$%>", "/CommNews/static/" + detailTpl + "?fid=" + newsListData[i].Fid + iPdNameCondition );
		    tmpTpl = repalceAll( tmpTpl, "#url", "/CommNews/static/" + detailTpl + "?fid=" + newsListData[i].Fid + iPdNameCondition );
	    }
		//类别
		tmpTpl     = repalceAll( tmpTpl, "<%$Ftype_name$%>", strFontPre + newsListData[i].Ftype_name + strFontEnd );
		tmpTpl     = repalceAll( tmpTpl, "#Ftype_name", strFontPre + newsListData[i].Ftype_name + strFontEnd );
		//类别链接
		tmpTpl     = repalceAll( tmpTpl, "<%$typeUrl$%>", "/CommNews/static/" + listTpl + "?channel=" + newsListData[i].Fchannel_id + "&type=" + newsListData[i].Ftype_id + iPdNameCondition );
		tmpTpl     = repalceAll( tmpTpl, "#typeUrl", "/CommNews/static/" + listTpl + "?channel=" + newsListData[i].Fchannel_id + "&type=" + newsListData[i].Ftype_id + iPdNameCondition );
        //替换热门图标
        if( newsListData[i].FHot != "0")
        {
            tmpTpl     = repalceAll( tmpTpl, "<%$FHot$%>", getHotPic(newsListData[i].FHot) );
            tmpTpl     = repalceAll( tmpTpl, "#FHot", getHotPic(newsListData[i].FHot) );
        }
        else
        {
            tmpTpl     = repalceAll( tmpTpl, "#FHot", "" );
        }
        
		document.writeln( tmpTpl );
	}
	
	//隐藏模板
	trTpl.style.display= "none";
	
}


//显示翻页
function showPageIndex()
{
   if (typeof(newsListData)=='undefined')
   {
      document.writeln("");
      return;
   }
   
    //翻页代码
    var pageHtml = "<script>PageRoller.DEFAULT_PAGER(" +newsListData[0].totalNum+ ");</script>";
    document.writeln(pageHtml);
}

//搜索
function search()
{
    var ul = document.location.href;
    if(ul.indexOf("?") != -1 )
    {
        ul = ul.substr(0, ul.indexOf("?") ) ;
    }
    
    var cid      = getUrlPara("channel");
    //获取子类id
    var subType = getUrlPara("type");
    
    ul = ul.substr(0, ul.indexOf("?") ) ;
    ul += "?&iPdName=" + getUrlPara("iPdName") + "&channel=" + getUrlPara("channel");
    ul += "&q=" + escape( $("q").value );
    
    document.location.href = ul;
    
}

/*  |xGv00|3e8db4068d5dc980abc28f8282ce2d99 */