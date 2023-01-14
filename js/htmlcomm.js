if(window.HTMLElement) {
    HTMLElement.prototype.__defineSetter__("outerHTML",function(sHTML){
        var r=this.ownerDocument.createRange();
        r.setStartBefore(this);
        var df=r.createContextualFragment(sHTML);
        this.parentNode.replaceChild(df,this);
        return sHTML;
        });

    HTMLElement.prototype.__defineGetter__("outerHTML",function(){
     var attr;
        var attrs=this.attributes;
        var str="<"+this.tagName.toLowerCase();
        for(var i=0;i<attrs.length;i++){
            attr=attrs[i];
            if(attr.specified)
                str+=" "+attr.name+'="'+attr.value+'"';
            }
        if(!this.canHaveChildren)
            return str+">";
        return str+">"+this.innerHTML+"</"+this.tagName.toLowerCase()+">";
        });
        
 HTMLElement.prototype.__defineGetter__("canHaveChildren",function(){
  switch(this.tagName.toLowerCase()){
            case "area":
            case "base":
         case "basefont":
            case "col":
            case "frame":
            case "hr":
            case "img":
            case "br":
            case "input":
            case "isindex":
            case "link":
            case "meta":
            case "param":
            return false;
        }
        return true;

     });
}


function $() {
    var element = arguments[0];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;
}



//获取页面url参数
function getUrlPara(paraName, sUrl )
{
    //alert(paraName);
    //if( typeof(sUrl) == undefined )
    if (typeof(sUrl)=='undefined')
    {
        sUrl = document.location.href;
    }
    
    var urlRegex = new RegExp(paraName+"=[^&]*", "igm");
    var para     = sUrl.match( urlRegex );
    //alert(urlRegex);
    //alert(para);
    if(!para)
    {
        //alert("return");
        return "";
    }
    var v=para[0];
    from = v.indexOf( "=" );
    var tpara = v.substr(from+1, v.length);
    tpara = repalceAll(tpara, "<", "");
    tpara = repalceAll(tpara, ">", "");

    tpara = repalceAll(tpara, "\"", "");
    tpara = repalceAll(tpara, "'", "");

    tpara = repalceAll(tpara, "script", "");
    return tpara;
}

//替换
function repalceAll(sStr, cStr, tStr)
{
    var objRegExp=new RegExp("&gt;","g");
    sStr = sStr.replace( objRegExp, ">");
    
    objRegExp=new RegExp("&lt;","g");
    sStr = sStr.replace( objRegExp, "<");
    
    objRegExp=new RegExp("%3E","g");
    sStr = sStr.replace( objRegExp, ">");
    
    objRegExp=new RegExp("%3C","g");
    sStr = sStr.replace( objRegExp, "<");
    
    objRegExp=new RegExp("%28","g");
    sStr = sStr.replace( objRegExp, "(");

    objRegExp=new RegExp("%29","g");
    sStr = sStr.replace( objRegExp, ")");
    
    while(sStr.indexOf(cStr) !== -1 )
    {
        sStr = sStr.replace( cStr, tStr);
    }
    
    return sStr;
}

//根据域名获取产品id
function getIPdNameFromUrl()
{
    var strUrl = document.domain;
    switch(strUrl)
    {
        case "demo.qq.com"  :   return "0";
        case "qqtang.qq.com":   return "1";
        case "fo.qq.com":       return "2";
        case "pet.qq.com":      return "3";
        case "sg.qq.com":       return "4";
        case "sgtest.qq.com":   return "4";
        case "r2.qq.com":       return "5";
        case "bear.pet.qq.com": return "6";
        case "xx.qq.com":       return "7";
        case "qqxx.qq.com":     return "7";        
        case "tgame.qq.com":    return "8";        
        case "game.qq.com":     return "9";        
        case "pig.pet.qq.com":  return "10";
        case "ffo.qq.com":      return "11";
        case "nana.qq.com":     return "12";
        case "nanatest.qq.com": return "12";
        case "speed.qq.com":    return "13";
        case "cf.qq.com":       return "14";
        case "x5.qq.com":       return "14";
        case "dnf.qq.com":      return "17";
        case "gamesafe.qq.com": return "18";
        case "webgame.qq.com":  return "20";
        case "sl.qq.com":       return "20";
        case "kx.qq.com":       return "21";
        default: return "4";
    }
}

var iPdName = "";
function getiPdName()
{
    iPdName = getUrlPara("iPdName");
    if(iPdName=="")
    {
        iPdName = getIPdNameFromUrl();
    }
}
getiPdName();
var iPdNameCondition = "&iPdName=" + iPdName;

function setElementsValue(cName, cValue)
{
    var c = document.getElementsByName(cName);
    for(var i=0; i<c.length; i++)
    {
        c[i].value = cValue;
    }
}

function setValueFromUrl(cName, urlParam)
{
    var c = document.getElementsByName(cName);
    var pvalue = getUrlPara( urlParam );
    for(var i=0; i<c.length; i++)
    {
        c[i].value = pvalue;
    }
}/*  |xGv00|20bb9c521d8d266fe91700d9ed54dc17 */