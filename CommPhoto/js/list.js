//��ҳ���������
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

//��ҳ��дjs·��
function writeDataJs()
{
    var iPdName = getUrlPara("iPdName");
    //��ȡ����id
    var cid     = getUrlPara("iType");
    //��ȡ����id
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
    
    //���page��10ҳ֮ǰ,��ѯ��������ʱ,ֱ�Ӽ��ؾ�̬js,�������cgi
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

//��ʾ�б�����
//����:
//ListTplName:ģ�������
//totalNum:   ������
//rollNum:    ÿ����ʾ������
function displayList( ListTplName, totalNum, rollNum )
{
    var iPdName = getUrlPara("iPdName");
    //��ȡ����id
    var cid     = getUrlPara("iType");
    //��ȡ����id
    var subType = getUrlPara("iSubType");
    var page    = getUrlPara("page");
    var sPicTitle   = getUrlPara("sPicTitle");
    var sServerName = getUrlPara("sServerName");
    var iSex    = getUrlPara("iSex");
    var iOrder  = getUrlPara("iOrder");
    
    //�����ر�����ֵ
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
      document.writeln("��Ǹ,�޸���ͼƬ!");
      return;
   }

   var trTpl = $(ListTplName);
   //alert(ListTplName);
   var tpl   = $(ListTplName).outerHTML;
   //alert(tpl);
   var iPdName    = getUrlPara("iPdName");
   if( iPdName == "" )
   {
    alert("ȱ��iPdName����!");
    return;
   }
   var iPdNameCondition = "&iPdName=" + iPdName;
   
   for( var i=1; i<photoListData.length; i++ )
   {
        //������������ȡģ��
        var listTpl    = getPListTpl(  photoListData[i].iType ); //�鿴�б�
        var detailTpl  = getPDetailTpl(photoListData[i].iType ); //�鿴��ϸ
    
        //����
    	var tmpTpl = repalceAll(tpl, "<%$sPicTitle$%>", unescape(photoListData[i].sPicTitle) );
    	tmpTpl = repalceAll(tmpTpl, "#sPicTitle", unescape(photoListData[i].sPicTitle) );
        //������
        tmpTpl     = repalceAll(tmpTpl,"<%$sServerName$%>", photoListData[i].sServerName );
        tmpTpl     = repalceAll(tmpTpl,"#sServerName", photoListData[i].sServerName );
        //��ͶƱ
        tmpTpl     = repalceAll(tmpTpl,"<%$iAllVotes$%>", photoListData[i].iAllVotes );
        tmpTpl     = repalceAll(tmpTpl,"#iAllVotes", photoListData[i].iAllVotes );
        //����Ʊ��
        tmpTpl     = repalceAll(tmpTpl,"<%$iVotes$%>", photoListData[i].iVotes );
        tmpTpl     = repalceAll(tmpTpl,"#iVotes", photoListData[i].iVotes );
        //ID
        tmpTpl     = repalceAll(tmpTpl, "<%$iSeqId$%>", photoListData[i].iSeqId );
        tmpTpl     = repalceAll(tmpTpl, "#iSeqId", photoListData[i].iSeqId );
        //ͼƬ
        tmpTpl     = repalceAll(tmpTpl, "<%$sUploadFile$%>", photoListData[i].sUploadFile );
        tmpTpl     = repalceAll(tmpTpl, "#sUploadFile", photoListData[i].sUploadFile );
        //����
        tmpTpl     = repalceAll(tmpTpl, "<%$nikiName$%>", photoListData[i].sNickName );
        tmpTpl     = repalceAll(tmpTpl, "#nikiName", photoListData[i].sNickName );
        
		document.writeln( tmpTpl );
		
		//����
		if( i!==0 && i%rollNum== 0)
		{
		    document.writeln("</tr><tr>");
		}
		
		if( i== totalNum)
		{
		    break;
		}
	}
	
	//����ģ��
	trTpl.style.display= "none";
	
}

//��ʾ��ҳ
function showPageIndex()
{
   if (typeof(photoListData)=='undefined')
   {
      document.writeln("");
      return;
   }

    //��ҳ����
    var pageHtml = "<script>PageRoller.DEFAULT_PAGER(" +photoListData[0].totalNum+ ");</script>";
    document.writeln(pageHtml);
    
}

//����
function search()
{
    var ul = document.location.href;
    if(ul.indexOf("?") != -1 )
    {
        ul = ul.substr(0, ul.indexOf("?") ) ;
    }
    
    var cid      = getUrlPara("iType");
    //��ȡ����id
    var subType = getUrlPara("iSubType");
    
    ul = ul.substr(0, ul.indexOf("?") ) ;
    ul += "?&iPdName=" + getUrlPara("iPdName") + "&channel=" + getUrlPara("iType");
    ul += "&q=" + escape( $("q").value );
    
    document.location.href = ul;
    
}
/*  |xGv00|be02423e81b8abb4467520db0d0dd297 */