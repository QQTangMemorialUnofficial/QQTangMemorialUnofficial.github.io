//加载数据
writeDataJs();

//向页面写js路径
function writeDataJs()
{
    var id  = getUrlPara( "iSeqId" );
    var dir = id%500;

    document.writeln("<script src=\"/time/photo/data/" + dir + "/"+ id +".js\"></script>");
}

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

//显示文件中的数据
function display()
{
    if(typeof(picContent)=='undefined')
    {
        alert("抱歉,找不到这篇图片,可能已经被删除.");
        return;
    }

    //显示新闻信息
    try{$("sNickName").innerText      = unescape(picContent.sNickName);   }catch(e){}
    try{$("sServerName").innerText    = picContent.sServerName; }catch(e){}
    try{$("sDesc").innerText          = unescape(picContent.sDesc);       }catch(e){}
    try{$("iAllVotes").innerText      = picContent.iAllVotes;   }catch(e){}
    try{$("iVotes").innerText         = picContent.iVotes;      }catch(e){}
    try{$("sPicTitle").innerText      = picContent.sPicTitle;      }catch(e){}

    if( picContent.iIsShow == "1" )
    {
       try{ $("iUin").innerText   = picContent.iUin;   }catch(e){}
       try{ $("sEmail").innerText = picContent.sEmail; }catch(e){}
    }
    else
    {
       try{ $("iUin").innerText   = "保密";      }catch(e){}
       try{ $("sEmail").innerText = "保密";      }catch(e){}
    }
    
   try{ $("iframeRelated").src = "/CommPhoto/static/rollshow.htm?iPdName=" + getUrlPara( "iPdName" ) + "&itype=" +picContent.iType+ "&iSubType=" + picContent.iSubType; }catch(e){}

    //add click
    document.writeln("<script src=\"http://app.qqtang.qq.com/cgi-bin/CommPhoto/photo_click.cgi?iPdName="+getUrlPara("iPdName") +"&iSeqId=" + getUrlPara("iSeqId") +"\"></script>");

}

function showPic( para )
{
    if(typeof(picContent)=='undefined')
    {
        alert("抱歉,找不到这篇图片,可能已经被删除.");
        return;
    }
    
    document.writeln("<a target=\"_blank\" title=\"点击查看大图\" href=\""+  picContent.sUploadFile +"\"><img src="+ picContent.sUploadFile +" width="+ para.width+" height="+ para.Height+" border=\"0\" />");
    //alert( "<a target=\"_blank\" title=\"点击查看大图\" href=\""+  picContent.sUploadFile +"\"><img src=\""+ picContent.sUploadFile +"\" width="+ para.width+" height="+ para.Height+" border=\"0\" />" );
}

/*  |xGv00|454d1d87723e443c96a4cd369618a165 */