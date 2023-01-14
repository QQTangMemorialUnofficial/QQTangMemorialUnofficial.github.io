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

	if(tpara.length>5)
	{
	tpara=0;
	}

    return tpara;
}

//向页面写js路径
function writeDataJs()
{
    var iPdName = getUrlPara("iPdName");
    //获取渠道id
    var cid     = getUrlPara("iType");
    //获取子类id
    var subType = getUrlPara("iSubType");
    var page    = getUrlPara("page");
    var sPicTitle   = getUrlPara("sPicTitle");
    var sServerName = getUrlPara("sServerName");
    var iSex    = getUrlPara("iSex");
    var iOrder  = getUrlPara("iOrder");
    
    if( page === "" )
    {
        page = 0;
    }
    
    //如果page是10页之前,查询类别及子类别时,直接加载静态js,其余加载cgi
/*    if( page =="0" && sPicTitle == "" && sServerName == "" && (iSex=="" || iSex=="0") && (iOrder=="" || iOrder =="0") )
    {
        //alert( "<script src=\"list/_"+ cid + "_" + subType + "_" + page + ".js\"" );
        document.writeln("<script src=\"/time/photo/list/_"+ cid + "_" + subType + "_" + page + ".js\"></script>");
    }
    else
*/    {
       //alert( "<script src=\"/cgi-bin/CommPhoto/getPhotoListData.cgi?iPdName=" +iPdName+ "&page=" +page+ "&channel="+cid+"&type="+subType + "&q=" + sPicTitle + "&sServerName=" + sServerName +"\"></script>");
       document.writeln("<script src=\"http://app.qqtang.qq.com/cgi-bin/CommPhoto/getPhotoListData.cgi?iPdName=" +iPdName+ "&page=" +page+ "&channel="+cid+"&type="+subType + "&sPicTitle=" + sPicTitle + "&sServerName=" + sServerName + "&iSex=" + iSex + "&iOrder=" + iOrder +"\"></script>");
    }
    
}

//显示列表数据
//参数:
//ListTplName:模板的名称
//totalNum:   总数量
//rollNum:    每行显示的数量
function displayList( ListTplName, totalNum, rollNum )
{
    var iPdName = getUrlPara("iPdName");
    //获取渠道id
    var cid     = getUrlPara("iType");
    //获取子类id
    var subType = getUrlPara("iSubType");
    var page    = getUrlPara("page");
    var sPicTitle   = getUrlPara("sPicTitle");
    var sServerName = getUrlPara("sServerName");
    var iSex    = getUrlPara("iSex");
    var iOrder  = getUrlPara("iOrder");
    
    //给隐藏变量赋值
    setElementsValue("iPdName", iPdName);
    setElementsValue("iType", cid);
    setElementsValue("iSubType", subType);
    setElementsValue("iOrder", iOrder);
    setElementsValue("iSex", iSex);
    setElementsValue("sServerName", sServerName);
    setElementsValue("sPicTitle", sPicTitle);
    setElementsValue("page", page);
    
   if (typeof(photoListData)=='undefined')
   {
      $(ListTplName).style.display= "none";
      document.writeln("抱歉,无更多图片!");
      return;
   }

   var trTpl = $(ListTplName);
   //alert(ListTplName);
   var tpl   = $(ListTplName).outerHTML;
   //alert(tpl);
   var iPdName    = getUrlPara("iPdName");
   if( iPdName == "" )
   {
    alert("缺少iPdName参数!");
    return;
   }
   var iPdNameCondition = "&iPdName=" + iPdName;
   
   for( var i=1; i<photoListData.length; i++ )
   {
        //根据类型来获取模板
        var listTpl    = getPListTpl(  photoListData[i].iType ); //查看列表
        var detailTpl  = getPDetailTpl(photoListData[i].iType ); //查看明细
    
        //标题
    	var tmpTpl = repalceAll(tpl, "<%$sPicTitle$%>", unescape(photoListData[i].sPicTitle) );
    	tmpTpl = repalceAll(tmpTpl, "#sPicTitle", unescape(photoListData[i].sPicTitle) );
        //服务器
        tmpTpl     = repalceAll(tmpTpl,"<%$sServerName$%>", photoListData[i].sServerName );
        tmpTpl     = repalceAll(tmpTpl,"#sServerName", photoListData[i].sServerName );
        //总投票
        tmpTpl     = repalceAll(tmpTpl,"<%$iAllVotes$%>", photoListData[i].iAllVotes );
        tmpTpl     = repalceAll(tmpTpl,"#iAllVotes", photoListData[i].iAllVotes );
        //本周票数
        tmpTpl     = repalceAll(tmpTpl,"<%$iVotes$%>", photoListData[i].iVotes );
        tmpTpl     = repalceAll(tmpTpl,"#iVotes", photoListData[i].iVotes );
        //ID
        tmpTpl     = repalceAll(tmpTpl, "<%$iSeqId$%>", photoListData[i].iSeqId );
        tmpTpl     = repalceAll(tmpTpl, "#iSeqId", photoListData[i].iSeqId );
        //图片
        tmpTpl     = repalceAll(tmpTpl, "<%$sUploadFile$%>", photoListData[i].sUploadFile );
        tmpTpl     = repalceAll(tmpTpl, "#sUploadFile", photoListData[i].sUploadFile );
        //作者
        tmpTpl     = repalceAll(tmpTpl, "<%$nikiName$%>", photoListData[i].sNickName );
        tmpTpl     = repalceAll(tmpTpl, "#nikiName", photoListData[i].sNickName );
        
		document.writeln( tmpTpl );
		
		//换行
		if( i!==0 && i%rollNum== 0)
		{
		    document.writeln("</tr><tr>");
		}
		
		if( i== totalNum)
		{
		    break;
		}
	}
	
	//隐藏模板
	trTpl.style.display= "none";
	
}

//显示翻页
function showPageIndex()
{
   if (typeof(photoListData)=='undefined')
   {
      document.writeln("");
      return;
   }

    //翻页代码
    var pageHtml = "<script>PageRoller.DEFAULT_PAGER(" +photoListData[0].totalNum+ ");</script>";
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
    
    var cid      = getUrlPara("iType");
    //获取子类id
    var subType = getUrlPara("iSubType");
    
    ul = ul.substr(0, ul.indexOf("?") ) ;
    ul += "?&iPdName=" + getUrlPara("iPdName") + "&channel=" + getUrlPara("iType");
    ul += "&q=" + escape( $("q").value );
    
    document.location.href = ul;
    
}
/*  |xGv00|be02423e81b8abb4467520db0d0dd297 */