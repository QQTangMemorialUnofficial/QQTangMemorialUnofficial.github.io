//ȫ�����ݶ���
var IED_VIP_First_menu="qd";
var IED_VIP_Default_price=10;
var IED_VIP_Default_Cft_Discount=8.8
var IED_VIP_Default_Bank_Discount=9
var IED_VIP_Default_entrance="comm_web";
var IED_VIP_Default_pay_msg="IED_VIP_Default_pay_msg";
var IED_VIP_Default_succ_msg="IED_VIP_Default_succ_msg";
var IED_VIP_Default_fail_msg="IED_VIP_Default_fail_msg";


//�ܵ�ҵ��֧��������������ã��Ժ���������µ���������Ҫ��������Ӧ�����
var IED_VIP_AllCHANNEL = [
{"id":"qd","desc":"Q��/Q�ҿ�ͨ"},
{"id":"cft","desc":"�Ƹ�ͨ/���п���ͨ"},
{"id":"tr","desc":"����֧��/��������"},
{"id":"sj","desc":"�ֻ�������ͨ"},
{"id":"qbk","desc":"QQ����ͨ"},
{"id":"sj_ydsj","desc":"�ƶ��ֻ���ͨ"},
{"id":"gddh","desc":"�̶��绰��ͨ"},
{"id":"wb","desc":"���ɿ�ͨ"},
{"id":"szx","desc":"�ֻ���ֵ����ֵ"},
{"id":"jt","desc":"��ͥ�����ͨ"}];
	
//1����ͨ<span class="color_7fb400"><strong>3-6</strong></span>���·��꣬����1���·��ꣻ��ͨ<span class="color_7fb400"><strong>7-11</strong></span>���·��꣬����3���·��ꣻ��ͨ<span class="color_7fb400"><strong>12</strong></span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;���·��꣬����8���·��ꣻ<br />2���ʱ�䣺<span class="color_7fb400"><strong>2008-9-1</strong></span>��<span class="color_7fb400"><strong>2008-10-16</strong></span>�������Ż�ֻ֧��Q��/Q���ʻ���ͨ������<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;֧��/�������˷�ʽ��
var IED_VIP_Product_info=[
{//dnf
    product:"dnf",
    no_channel:["sj","jt","gddh","sj_ydsj"],
    desc:"DNF�������",
    price:20,
    service_code:"DNFHZ",
    first_menu:"qd",
    clause_url:"dnf/dnf_xieyi.htm",
    szx_url:"http://ka.tenpay.com/qqdnfhz/tenpayService.htm",
    pay_msg:{comm:'1��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�20Ԫ/�¡�<br>\
        2���״ο�ͨ������û��������µ�¼DNF��Ϸ���������ܺ��������Ȩ�� <br>\
        3����Ѷ�ͷ����ߣ�0755 - 86013666��'},
    succ_msg:{comm:'��ϲ���Ѿ��ɹ���ͨ���꣬�����ܵ�DNF�������������飡���ྫ������<a href="http://dnf.qq.com" target="_blank">http://dnf.qq.com</a>'},
    fail_msg:{comm:'�ǳ���Ǹ�����ο�ͨʧ�ܣ��Ƽ�����������֧����ʽ��'}
},
{//r2
    product:"r2",
    no_channel:["wb","sj_ydsj"],
    desc:"QQ�����������",
    service_code:"QQR2",
    clause_url:"r2/r2_xieyi.htm",
    szx_url:"http://service.ka.tenpay.com/qqr2/tenpayService.jsp",
    vnet_province:{surport:[35,12,23,18,20,4,1,27,1301]},
    pay_msg:{comm:'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(\'http://app.r2.qq.com/cgi-bin/card/check_vip.cgi\',\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=500, height=530\');void 0;"><img src="http://ossweb-img.qq.com/images/commweb/r2_card_get_b.gif" align="absmiddle" /></a>\
        <br><br>&nbsp;&nbsp;&nbsp;��ͨ������������ȡ���꿨��װ�����꿨��ſ���������Ϸ���������Ӧ��Ȩ'},
    succ_msg:{comm:'��ͨ������������ȡ���꿨��װ�����꿨��ſ���������Ϸ���������Ӧ��Ȩ<br><a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(\'http://app.r2.qq.com/cgi-bin/card/check_vip.cgi\',\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=450, height=450\');void 0;"><img src="http://ossweb-img.qq.com/images/commweb/r2_card_get_b.gif" align="absmiddle" /></a>'},
    fail_msg:{comm:'1��������ʹ�òƸ�ͨ/���п���֧��������88�ۣ�<br>\
        2���ƶ��û���<span class="color_7fb400"><strong>1259088186</strong></span>��<span class="color_7fb400"><strong>6</strong></span>������ͨ�û���<span class="color_7fb400"><strong>10159088186</strong></span>��<span class="color_7fb400"><strong>6</strong></span>����������������������'}
},
{//CF
    product:"cf",
    no_channel:["sj","gddh","jt","wb","sj_ydsj"],
    desc:"CF��Ա",
    price:30,
    service_code:"CFCLUB",
    szx_url:"http://ka.tenpay.com/cfvip/tenpayService.htm",
    clause_url:"cf/cf_xieyi.htm",
    pay_msg:{comm:'<img src="http://ossweb-img.qq.com/upload/cf/CommNews/1228991800_-405729108_27640_sPhoto0.jpg" align="absmiddle" /><br>��Ѷ�ͷ����ߣ�0755 - 86013666',
             cft:'��Ѷ�ͷ����ߣ�0755 - 86013666'},
    succ_msg:{comm:'ȥ��䴩Խ���ߵ����̳�<a href="http://cf.qq.com/market/" target="_blank">http://cf.qq.com/market/</a>'},
    fail_msg:{comm:'�Ƽ���ʹ��������ͨ������88���Żݡ�'}
},
    {product:"speed",no_channel:["gddh","wb","sj_ydsj"],desc:"QQ�ɳ��������",service_code:"QQFCZZ",clause_url:"speed/speed_xieyi.htm",szx_url:"http://service.ka.tenpay.com/qqspeed/tenpayService.jsp",
        vnet_province:{surport:[23,18,27]},
        pay_msg:{comm:'1��Q��/Q�ҿ�ͨ��ʽÿ��ͨһ���·ɳ����꣬�Ϳɻ���һ������������(���֮������ʮ������Ч���뼰ʱ��ȡ)<a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(top.GetSpeedGiftUrl(),\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=450, height=450\');void 0;">�����ȡ&gt;&gt; </a><br>\
                       2��һ����������ʹ�ü�ͥ�����ͨ���رն��ٴΣ�����ֻ�۷�һ�Ρ�<br>\
                       3��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�10Ԫ/�¡�<br>\
                       4����Ѷ�ͷ����ߣ�0755 - 86013666��'
                },
        succ_msg:{comm:'ÿ��ͨһ���·ɳ����꣬�Ϳɻ���һ������������(���֮������ʮ������Ч���뼰ʱ��ȡ)<a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(top.GetSpeedGiftUrl(),\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=450, height=450\');void 0;">�����ȡ&gt;&gt; </a>'},
        fail_msg:{comm:'�Ƽ���ʹ��������ͨ������88���Żݡ�'}},
    {product:"qqtang",no_channel:["wb","sj","szx","gddh","sj_ydsj"],desc:"QQ���������",service_code:"QQTANG",clause_url:"qqtang/qqtang_xieyi.htm",
        vnet_province:{unsurport:[17,10]},
        pay_msg:{comm:'1��һ����������ʹ�ü�ͥ�����ͨ���رն��ٴΣ�����ֻ�۷�һ�Ρ�<br>\
                       2��ѡ������˺ſ�ͨ��ʽ�ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�10Ԫ/�¡�<br>\
                       3����Ѷ�ͷ����ߣ�0755 - 86013666'
                 },
        succ_msg:{comm:'��ͨ�����������������������Ȩ��'},
        fail_msg:{comm:'��ͨ����ʧ�ܣ������Գ���������ͨ��ʽ��'}},
{product:"sg",no_channel:["sj","gddh","jt","wb","szx","sj_ydsj"],desc:"QQ������Ա",service_code:"QQSG",clause_url:"sg/sg_xieyi.htm",
pay_msg:{comm:'1����ͨ<span class="color_7fb400"><strong>3-6</strong></span>���·��꣬����1���·��ꣻ��ͨ<span class="color_7fb400"><strong>7-11</strong></span>���·��꣬����3���·��ꣻ��ͨ<span class="color_7fb400"><strong>12</strong></span>���·��꣬����8���·��ꣻ<br />\
2���ʱ�䣺<span class="color_7fb400"><strong>2008-9-1</strong></span>��<span class="color_7fb400"><strong>2008-10-16</strong></span>�������Ż�ֻ֧��Q��/Q���ʻ���ͨ������֧��/�������˷�ʽ��'
},
succ_msg:{comm:''},
fail_msg:{comm:''}},
    {product:"pet",no_channel:["wb"],desc:"QQ����������",service_code:"QQPET",clause_url:"pet/pet_xieyi.htm",szx_url:"http://service.ka.tenpay.com/qqpet/tenpayService.jsp",
        vnet_province:{surport:[35,12,23,18,4,1,27,1301]},
        pay_msg:{comm:' 1����ֻ��Ϊ�����ֻ�ͬʡ��QQ�����ͳ�QQ����������<br>\
                        2��ÿ���ֻ�ÿ��ֻ�ܸ�һ��QQ�û��ͳ�Ϊ��һ���£�31�죩�ķ��ꣻ<br>\
                        3��ÿ��QQ����ÿ��ֻ��ͨ��һ���ֻ���ͨΪ��һ���£�31�죩�ķ��ꣻ<br>\
                        4���ƶ��û�����ʱ����6���ӣ����ɻ��1���£�31�죩�ķ������<br>\
						5�����ֻ�����Ƿ��ͣ��״̬��ͨ�����ֻ���ͨ�ı�����ܻᱻ���ᣬ��ֵ�󲦴�ͷ����ߣ�0755-83765566 ���ɼ������ı��ꣻ<br>\ 																		6����������Ϣ��2Ԫ/���ӣ�ͨ�ŷ�æʱ0.3Ԫ/���ӣ���ʱ0.15Ԫ/����(��ʱΪ23��00-7��00������ʱ��Ϊæʱ)���ƶ��û�ÿ�²���1259056***�Ŷ���Ϣ������Ϊ50Ԫ���糬�����޶����޷�����ʹ�ã�<br>\
						7�����Χ������ݲ�֧�ֱ�����������ɽ���������ƶ��û���<br>\
						8����������ʱ�����������ƻ���ʾ�һ�����ʾ���ⲿ�����ݲ�����ȡ��Ϣ���ã��ͷ�����0755-83765566��'
                 },
        succ_msg:{comm:'�����û��������<a target="_blank" href="http://pet.qq.com/vip_get_pet/vip_get_pet.html">�������</a>'},
        fail_msg:{comm:' �ƶ��ֻ���<span class="color_7fb400"><strong>12590 88 882</strong></span>����ͨ�ֻ���<span class="color_7fb400"><strong>10159 088 186</strong></span>��<span class="color_7fb400"><strong>4</strong></span>�����Ϳ��Ի�������������Ŷ��'}},
    {product:"x5",no_channel:["sj","gddh","szx","sj_ydsj"],desc:"�����������",price:20,service_code:"QQXWZZ",clause_url:"x5/x5_xieyi.htm",cft_discount:10,bank_discount:10,
    	  vnet_province:{surport:[20,11]},
        pay_msg:{comm:'1��������������ͼ��ֻ����QQ2009��ʽ�汾SP1������ʾ��<br>\
                       2��ÿ��֧���������꣬���ɻ���������������۸񲻷Ƶĳ�ֵ���񽫶��ڸ���Ŷ��<br>\
                       3��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�20Ԫ/�¡�<br>\
                       4�����������������Զ����ѣ�����������ɡ�СǮ��֧���⣩���ɻ�ȡ���������<br>\
                       5��һ����������ʹ�ü�ͥ�����ͨ���رն��ٴΣ�����ֻ�۷�һ�Ρ�<br>\
                       6����Ѷ�ͷ����ߣ�0755 - 86013666��',
                 jt:'  1������֧�������������أ���ͥ�����ͨ������������û���Ŀǰ�޷���ȡ���������ĿǰҲֻ�ܸ��ǵ��㶫�ͽ������أ�����ʡ��Ŀǰ��ʱ�޷�֧�֣������½⡣<br>\
                       2��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�20Ԫ/�¡�<br>\
                       3����Ѷ�ͷ����ߣ�0755 - 86013666��',
                 wb:'  1������֧�������������أ����ɿ�ͨ������������û���Ŀǰ�޷���ȡ��������������½⡣<br>\
                       2��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�20Ԫ/�¡�<br>\
                       3����Ѷ�ͷ����ߣ�0755 - 86013666��'
                 },
        succ_msg:{comm:'��ͨQQ�������꣬���������Ȩ��'},
        fail_msg:{comm:'��ͨQQ�������꣬���������Ȩ��'}},
    {product:"xx",no_channel:["sj","gddh","jt","wb","szx","sj_ydsj"],desc:"Ѱ�ɻ�Ա",price:20,service_code:"XXVIP",clause_url:"xx/xx_xieyi.htm",
        pay_msg:{comm:'1��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�20Ԫ/�¡�<br>\
        	             2����Ѷ�ͷ����ߣ�0755 - 86013666��'
                },
        succ_msg:{comm:'��ͨѰ��VIP���·��񣬾��������Ȩ��'},
        fail_msg:{comm:'��ͨѰ��VIP���·��񣬾��������Ȩ��'}}
/********************************************avaStart******************************************/
/**
 * {qd:Q��/Q�ҿ�ͨ}{cft:�Ƹ�ͨ/���п���ͨ}{tr:����֧��/��������}{sj:�ֻ�������ͨ}{qbk:QQ����ͨ}{sj_ydsj:�ƶ��ֻ���ͨ}
 * {gddh:�̶��绰��ͨ}{wb:���ɿ�ͨ}{szx:�ֻ���ֵ����ֵ}{jt:��ͥ�����ͨ}{cftgame:�Ƹ�ͨ��Ϸ�˻�}
 */

/*
{
product:"ava",
no_channel:["cft","tr","sj","sj_ydsj","gddh","wb","szx","jt"],
desc:"AVA����VIP",
price:0,
service_code:"AVAVIP",
clause_url:"http://ava.qq.com/web200906/agreement.htm",
pay_msg:{comm:'1��ѡ���˸����ʻ��ġ��Զ����ѡ���������ʽ�İ��£����ǻ��ڷ�������ÿ�¿�ȡ�������·��ã�0Ԫ/�¡�<br />2���״ο�ͨAVA����VIP���û��������µ�½AVA��Ϸ����������AVA����VIP��Ȩ��<br />3����Ѷ�ͷ����ߣ�0755 - 86013388��',
		 qd:'<img width="450" height="65" src="http://ossweb-img.qq.com/images/commweb/tips_ava.jpg" /><br />��Ѷ�ͷ����ߣ�0755 - 86013388��'
		},
succ_msg:{comm:'��ͨAVA����VIP���·��񣬾��������Ȩ��'},
fail_msg:{comm:'��ͨAVA����VIP���·��񣬾��������Ȩ��'}
}
*/
/********************************************avaEnd******************************************/
];

//��������/���߶���
var FBrowser=new Object();
FBrowser.isIE=((navigator.userAgent.indexOf('MSIE')==-1)?false:true);
FBrowser.isIE7=((FBrowser.isIE&&window.XMLHttpRequest)?true:false);
FBrowser.isIE6=((FBrowser.isIE&&!window.XMLHttpRequest&&window.ActiveXObject)?true:false);
FBrowser.isFirefox=((navigator.userAgent.indexOf('Firefox')==-1)?false:true);
FBrowser.isOpera=((navigator.userAgent.indexOf('Opera')==-1)?false:true);
function FloadJS(url,sucfn,failfn){
    var js=document.createElement("script");
    js.type="text/javascript";
    js.onerror=function(){
        if(!Fempty(failfn)&&'function'==typeof(failfn))
        failfn();
    }
    if(FBrowser.isIE){
        js.onreadystatechange=function(){
            if(this.readyState.toLowerCase()!="complete"&&this.readyState.toLowerCase()!="loaded") return;
            if(this.$funExeced!=true&&'function'==typeof(sucfn)){
                this.$funExeced=true;
                sucfn();
            }
        }
    }
    else if(FBrowser.isOpera){
        //if('function'==typeof(sucfn))   sucfn();
    }
    else{
        js.onload=function(){
            if('function'==typeof(sucfn))  sucfn();
        }
    }
    js.src=url;
    var h=document.getElementsByTagName('HEAD').item(0);
    h.appendChild(js);
    if(FBrowser.isOpera && 'function'==typeof(sucfn))   sucfn();
}
function $(){
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string')
            element = document.getElementById(element);
        if (arguments.length == 1)
            return element;
        elements.push(element);
    }
    return elements;
}
function ParseParam(sParams){
    var paramMap={};
    if(sParams.length>0) {
        var paramArray = sParams.split("&");
        for(var i=0;i<paramArray.length;++i) {
            var paramPair=paramArray[i].split("=");
            paramMap[paramPair[0]]=paramPair[1];
        }
    }
    return paramMap;
}
String.prototype.stripTags=function() {
    return this.replace(/<\/?[^>]+>/gi, '');
}
function StatCheckLogin(oEvent){if(GetCookieUin()==''){OpenLoginDiv('',true);try{oEvent.returnValue=false;}catch(e){oEvent.preventDefault();}}}

function GetSpeedGiftUrl(){
    return "http://ptlogin2.qq.com/qqspeed_vipgift?clientuin="+String(Number(GetCookieUin().replace("o","")))+"&skey="+Cookie.get("skey")+"&type=1";  
}

//��indexҳ�桢css��ȫ�ֱ�����ϵĺ���
function IED_VIP_FreshMenu(o){
    var menus=o.parentNode.parentNode.childNodes;
    var size=menus.length;
    for(var i=0;i<size;i++){
        if(menus[i].tagName=="DIV" && menus[i]["className"].indexOf("unsel")==-1) {
            menus[i]["className"]="un"+menus[i]["className"];
        }
    }
    o.parentNode.className=o.parentNode.className.replace("unsel","sel");
}
function IED_VIP_Get_this_chl(){
    var menus=$("qd_channel").parentNode.childNodes;
    var size=menus.length;
    for(var i=0;i<size;i++){
        if(menus[i].tagName=="DIV" && menus[i].style.display!="none" && menus[i]["className"].indexOf("unsel")==-1) {
            return menus[i].id.replace("_channel","");
        }
    }
    return "qd";
}
function IED_VIP_Change_css(){
    document.write('<link href="css/style_'+IED_VIP_Url_param["t"]+'.css" rel="stylesheet" type="text/css" />');    
}
function IED_VIP_Change_title(){
    window.document.title=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["desc"]+"֧��";
}
function IED_VIP_Change_top(){
    $(IED_VIP_Url_param["t"]+"_top_p").className="t32";
    $(IED_VIP_Url_param["t"]+"_top_p").innerHTML=$(IED_VIP_Url_param["t"]+"_top_p").innerHTML.stripTags();
}
function IED_VIP_Change_clause(){
    $("clause").innerHTML=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["desc"]+"����";
    $("clause").href=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["clause_url"];
}
function IED_VIP_Change_price(){
    var p=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["price"]||IED_VIP_Default_price;
    $("price").innerHTML='<span class="color_h">'+p*10+'Q��</span></strong>��<strong class="color_h">'+p+'Q��';
}
function IED_VIP_Change_menu(channel){
    var fm=channel||IED_VIP_Url_param["fm"]||IED_VIP_Product_info[IED_VIP_Url_param["i"]]["first_menu"]||IED_VIP_First_menu;
    IED_VIP_FreshMenu($(fm+"_channel").firstChild);
    if(fm=="szx") {
        document.getElementsByTagName("iframe")["middle"].src=IED_VIP_Product_info[IED_VIP_Url_param["i"]].szx_url;
    }else {
        document.getElementsByTagName("iframe")["middle"].src=(fm=="sj" || fm=="sj_ydsj" ||fm=="wb"||fm=="gddh"?IED_VIP_Url_param["t"]+"/":"")+"kt"+fm+".htm";
    }
}
function IED_VIP_Change_right(){
    document.getElementsByTagName("iframe")["right"].src=IED_VIP_Url_param["t"]+"/right_"+IED_VIP_Url_param["t"]+".htm";
}
function IED_VIP_Init_menu(){
    var menus=$("qd_channel").parentNode.childNodes;
    var cs=IED_VIP_Product_info[IED_VIP_Url_param["i"]].no_channel||[];
    for(var i=0;i<cs.length;i++){
        $(cs[i]+"_channel").style.display="none";
        $(cs[i]+"_channel").parentNode.removeChild($(cs[i]+"_channel"));
    }
    var size=menus.length;
    var last=-1;
    var first=-1;
    for(var i=0;i<size;i++){
        if(menus[i].tagName=="DIV" && menus[i].style.display!="none") {
            if(first==-1) first=i;
            last=i;
        }
    }
    if(menus[first]["className"].indexOf("sel_top")==-1){
        menus[first]["className"]=menus[first]["className"].replace("sel","sel_top");
    }
    if(menus[last]["className"].indexOf("sel_bottom")==-1){
        menus[last]["className"]=menus[last]["className"].replace("sel","sel_bottom");
    }
    if(menus[last]["className"].indexOf("two_line")!=-1){
        menus[last]["className"]=menus[last]["className"].replace("two_line","two_line_click");
    }
    var cft_discount=IED_VIP_Default_Cft_Discount+"��",bank_discount=IED_VIP_Default_Bank_Discount+"��";
    var tmp;
    if(IED_VIP_Product_info[IED_VIP_Url_param["i"]].cft_discount)
    {
        tmp=IED_VIP_Product_info[IED_VIP_Url_param["i"]].cft_discount;
        if(tmp==10)
            cft_discount=""
        else
            cft_discount=tmp+"��"   
    }
    if(IED_VIP_Product_info[IED_VIP_Url_param["i"]].bank_discount)
    {
        tmp=IED_VIP_Product_info[IED_VIP_Url_param["i"]].bank_discount;
        if(tmp==10)
            bank_discount="����"
        else
            bank_discount=tmp+"��"   
    }
    
	try{
		$("cft_channel_a").innerHTML="�Ƹ�ͨ"+cft_discount+"/���п�"+bank_discount+"��ͨ";
	}catch(e){}
}
function IED_VIP_OnLogined(){
    
}
function IED_VIP_OnLoginout(){
    
}
function IED_VIP_Wr_msg(msg_type){
    var str=null;
    try{
        var chl=IED_VIP_Get_this_chl();
        str=IED_VIP_Product_info[IED_VIP_Url_param["i"]][msg_type][chl];
    }catch(e){}
    if(!str) try{str=IED_VIP_Product_info[IED_VIP_Url_param["i"]][msg_type]["comm"];}catch(e){}
    return (str||eval("IED_VIP_Default_"+msg_type));
}//�˺�������iframe�ڵ�֧��ҳ��Ƭ����
function IED_VIP_Wr_pay_msg(){
    return IED_VIP_Wr_msg("pay_msg");
}//�˺�������iframe�ڵ�֧��ҳ��Ƭ����
function IED_VIP_Wr_succ_msg(){
    return IED_VIP_Wr_msg("succ_msg");
}//�˺�������iframe�ڵ�֧��ҳ��Ƭ����
function IED_VIP_Wr_fail_msg(){
    return IED_VIP_Wr_msg("fail_msg");
}//�˺�������iframe�ڵ�֧��ҳ��Ƭ����

//���¿�ʼΪ����ִ�в���
(function(){
	document.domain="qq.com";
	var IED_VIP_Url_param=ParseParam((window.location.search+"?").split("?")[1].replace(/<\/?[^>]+>/gi, '').replace(/[\'\"]/g,''));
	var isFind = false;
	for(var i=0;i<IED_VIP_Product_info.length;i++){
	    if(IED_VIP_Product_info[i]["product"]==IED_VIP_Url_param["t"]) {
	        IED_VIP_Url_param["i"]=i;
	        isFind = true;
	        break;
	    }
	}
	if(!isFind){
		alert("ҳ�����");
		window.close();
		return;
	}
	if(!(IED_VIP_Url_param["onlyusepay"] && IED_VIP_Url_param["onlyusepay"]=="1")){
	    IED_VIP_Change_css();
	}
})();
/*  |xGv00|a291d51354af0ab1061519bddc7c46f2 */