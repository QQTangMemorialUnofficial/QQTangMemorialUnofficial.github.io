
//��ȡ�б�ģ��
function getPListTpl(channel)
{
    switch(channel)
    {
        case "1": return "showpic.htm";
        case "2": return "showpic.htm";
        default:  return "showpic.htm";
    }
}

//��ȡͼƬ��ϸ��ģ��
function getPDetailTpl(channel)
{
    switch(channel)
    {
        case "1": return "picdetail.htm";
        case "2": return "picdetail.htm";
        default:  return "picdetail.htm";
    }
}

//����
function GetOrder(order, formName)
{
	//��ȡ������
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

//��ʾ����ͼƬ
function GetSubType(subtype)
{
	//��ȡ������
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

//�����Ա���ʾͼƬ
function GetSex(sex)
{
    //��ȡ������
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

//�������ƺͷ�������ѯͼƬ
function searchPhoto()
{
    //��ȡ������
    var subwin = document.getElementById("subwin");
    var sHref  = subwin.src;
    var iType  = getUrlPara("iType",sHref);
    var urlPage = "";
    var iPos = sHref.indexOf("?");
    urlPage = sHref.substr(0, iPos);
    var iPdName = getUrlPara("iPdName",sHref);
    urlPage = urlPage + "?iPdName=" + iPdName + "&iType=" + iType; //+ "&iSex=" + sex;
    
    //ͼƬ����
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
