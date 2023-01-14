
//获取列表模板
function getPListTpl(channel)
{
    switch(channel)
    {
        case "1": return "showpic.htm";
        case "2": return "showpic.htm";
        default:  return "showpic.htm";
    }
}

//获取图片详细的模板
function getPDetailTpl(channel)
{
    switch(channel)
    {
        case "1": return "picdetail.htm";
        case "2": return "picdetail.htm";
        default:  return "picdetail.htm";
    }
}

//排序
function GetOrder(order, formName)
{
	//获取类别参数
    var subwin = document.getElementById("subwin");
    var sHref  = subwin.src;
    var iType  = getUrlPara("iType",sHref);
    var urlPage = "";
    var iPos = sHref.indexOf("?");
    urlPage = sHref.substr(0, iPos);
    var iPdName = getUrlPara("iPdName",sHref);
    var subType = getUrlPara("iSubType",sHref);
    urlPage = urlPage + "?iPdName=" + iPdName + "&iType=" + iType + "&iOrder=" + order;
    if( subType !== "")
    {
        urlPage += "&iSubType=" + subType;
    }
    subwin.src = urlPage;
}

//显示子类图片
function GetSubType(subtype)
{
	//获取类别参数
    var subwin = document.getElementById("subwin");
    var sHref  = subwin.src;
    var iType  = getUrlPara("iType",sHref);
    var urlPage = "";
    var iPos = sHref.indexOf("?");
    urlPage = sHref.substr(0, iPos);
    var iPdName = getUrlPara("iPdName",sHref);
    urlPage = urlPage + "?iPdName=" + iPdName + "&iType=" + iType + "&iSubType=" + subtype;
    subwin.src = urlPage;

}

//根据性别显示图片
function GetSex(sex)
{
    //获取类别参数
    var subwin = document.getElementById("subwin");
    var sHref  = subwin.src;
    var iType  = getUrlPara("iType",sHref);
    var urlPage = "";
    var iPos = sHref.indexOf("?");
    urlPage = sHref.substr(0, iPos);
    var iPdName = getUrlPara("iPdName",sHref);
    urlPage = urlPage + "?iPdName=" + iPdName + "&iType=" + iType + "&iSex=" + sex;
    subwin.src = urlPage;
}

//根据名称和服务器查询图片
function searchPhoto()
{
    //获取类别参数
    var subwin = document.getElementById("subwin");
    var sHref  = subwin.src;
    var iType  = getUrlPara("iType",sHref);
    var urlPage = "";
    var iPos = sHref.indexOf("?");
    urlPage = sHref.substr(0, iPos);
    var iPdName = getUrlPara("iPdName",sHref);
    urlPage = urlPage + "?iPdName=" + iPdName + "&iType=" + iType; //+ "&iSex=" + sex;
    
    //图片名称
    var sPicTitle= document.getElementById("sPicTitle");
    if( typeof(sPicTitle) !== "undefined" )
    {
        urlPage += "&sPicTitle=" + sPicTitle.value;
    }
    if( typeof(sServerName)!== "undefined" )
    {
        urlPage += "&sServerName=" + sServerName.value;
    }
    
    subwin.src = urlPage;
}
