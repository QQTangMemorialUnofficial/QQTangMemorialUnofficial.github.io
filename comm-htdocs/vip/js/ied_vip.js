//全局数据定义
var IED_VIP_First_menu="qd";
var IED_VIP_Default_price=10;
var IED_VIP_Default_Cft_Discount=8.8
var IED_VIP_Default_Bank_Discount=9
var IED_VIP_Default_entrance="comm_web";
var IED_VIP_Default_pay_msg="IED_VIP_Default_pay_msg";
var IED_VIP_Default_succ_msg="IED_VIP_Default_succ_msg";
var IED_VIP_Default_fail_msg="IED_VIP_Default_fail_msg";


//总的业务支付渠道，供给活动用，以后如有添加新的渠道，需要在这里相应的添加
var IED_VIP_AllCHANNEL = [
{"id":"qd","desc":"Q点/Q币开通"},
{"id":"cft","desc":"财付通/银行卡开通"},
{"id":"tr","desc":"他人支付/赠送他人"},
{"id":"sj","desc":"手机语音开通"},
{"id":"qbk","desc":"QQ卡开通"},
{"id":"sj_ydsj","desc":"移动手机开通"},
{"id":"gddh","desc":"固定电话开通"},
{"id":"wb","desc":"网吧开通"},
{"id":"szx","desc":"手机充值卡充值"},
{"id":"jt","desc":"家庭宽带开通"}];
	
//1、开通<span class="color_7fb400"><strong>3-6</strong></span>个月粉钻，赠送1个月粉钻；开通<span class="color_7fb400"><strong>7-11</strong></span>个月粉钻，赠送3个月粉钻；开通<span class="color_7fb400"><strong>12</strong></span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个月粉钻，赠送8个月粉钻；<br />2、活动时间：<span class="color_7fb400"><strong>2008-9-1</strong></span>到<span class="color_7fb400"><strong>2008-10-16</strong></span>。以上优惠只支持Q币/Q点帐户开通和他人<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付/赠送他人方式。
var IED_VIP_Product_info=[
{//dnf
    product:"dnf",
    no_channel:["sj","jt","gddh","sj_ydsj"],
    desc:"DNF黑钻贵族",
    price:20,
    service_code:"DNFHZ",
    first_menu:"qd",
    clause_url:"dnf/dnf_xieyi.htm",
    szx_url:"http://ka.tenpay.com/qqdnfhz/tenpayService.htm",
    pay_msg:{comm:'1、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，20元/月。<br>\
        2、首次开通黑钻的用户，请重新登录DNF游戏，才能享受黑钻贵族特权。 <br>\
        3、腾讯客服热线：0755 - 86013666。'},
    succ_msg:{comm:'恭喜您已经成功开通黑钻，将享受到DNF带来的至尊体验！更多精彩请点击<a href="http://dnf.qq.com" target="_blank">http://dnf.qq.com</a>'},
    fail_msg:{comm:'非常抱歉，本次开通失败！推荐您尝试其他支付方式。'}
},
{//r2
    product:"r2",
    no_channel:["wb","sj_ydsj"],
    desc:"QQ音速紫钻贵族",
    service_code:"QQR2",
    clause_url:"r2/r2_xieyi.htm",
    szx_url:"http://service.ka.tenpay.com/qqr2/tenpayService.jsp",
    vnet_province:{surport:[35,12,23,18,20,4,1,27,1301]},
    pay_msg:{comm:'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(\'http://app.r2.qq.com/cgi-bin/card/check_vip.cgi\',\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=500, height=530\');void 0;"><img src="http://ossweb-img.qq.com/images/commweb/r2_card_get_b.gif" align="absmiddle" /></a>\
        <br><br>&nbsp;&nbsp;&nbsp;开通紫钻后请务必领取紫钻卡，装备紫钻卡后才可以享受游戏内紫钻的相应特权'},
    succ_msg:{comm:'开通紫钻后请务必领取紫钻卡，装备紫钻卡后才可以享受游戏内紫钻的相应特权<br><a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(\'http://app.r2.qq.com/cgi-bin/card/check_vip.cgi\',\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=450, height=450\');void 0;"><img src="http://ossweb-img.qq.com/images/commweb/r2_card_get_b.gif" align="absmiddle" /></a>'},
    fail_msg:{comm:'1、您可以使用财付通/银行卡来支付，享受88折！<br>\
        2、移动用户拨<span class="color_7fb400"><strong>1259088186</strong></span>后按<span class="color_7fb400"><strong>6</strong></span>键，联通用户拨<span class="color_7fb400"><strong>10159088186</strong></span>后按<span class="color_7fb400"><strong>6</strong></span>键，立即获赠紫钻贵族服务！'}
},
{//CF
    product:"cf",
    no_channel:["sj","gddh","jt","wb","sj_ydsj"],
    desc:"CF会员",
    price:30,
    service_code:"CFCLUB",
    szx_url:"http://ka.tenpay.com/cfvip/tenpayService.htm",
    clause_url:"cf/cf_xieyi.htm",
    pay_msg:{comm:'<img src="http://ossweb-img.qq.com/upload/cf/CommNews/1228991800_-405729108_27640_sPhoto0.jpg" align="absmiddle" /><br>腾讯客服热线：0755 - 86013666',
             cft:'腾讯客服热线：0755 - 86013666'},
    succ_msg:{comm:'去逛逛穿越火线道具商城<a href="http://cf.qq.com/market/" target="_blank">http://cf.qq.com/market/</a>'},
    fail_msg:{comm:'推荐您使用网银开通，享受88折优惠。'}
},
    {product:"speed",no_channel:["gddh","wb","sj_ydsj"],desc:"QQ飞车紫钻贵族",service_code:"QQFCZZ",clause_url:"speed/speed_xieyi.htm",szx_url:"http://service.ka.tenpay.com/qqspeed/tenpayService.jsp",
        vnet_province:{surport:[23,18,27]},
        pay_msg:{comm:'1、Q点/Q币开通方式每开通一个月飞车紫钻，就可获赠一次紫钻贵族礼包(获得之日起三十天内有效，请及时领取)<a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(top.GetSpeedGiftUrl(),\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=450, height=450\');void 0;">点击领取&gt;&gt; </a><br>\
                       2、一个月中无论使用家庭宽带开通、关闭多少次，我们只扣费一次。<br>\
                       3、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，10元/月。<br>\
                       4、腾讯客服热线：0755 - 86013666。'
                },
        succ_msg:{comm:'每开通一个月飞车紫钻，就可获赠一次紫钻贵族礼包(获得之日起三十天内有效，请及时领取)<a onclick="javascript:oEvent=event;with(parent){StatCheckLogin(oEvent);}" href="javascript:window.open(top.GetSpeedGiftUrl(),\'\',\'toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no, width=450, height=450\');void 0;">点击领取&gt;&gt; </a>'},
        fail_msg:{comm:'推荐您使用网银开通，享受88折优惠。'}},
    {product:"qqtang",no_channel:["wb","sj","szx","gddh","sj_ydsj"],desc:"QQ堂紫钻贵族",service_code:"QQTANG",clause_url:"qqtang/qqtang_xieyi.htm",
        vnet_province:{unsurport:[17,10]},
        pay_msg:{comm:'1、一个月中无论使用家庭宽带开通，关闭多少次，我们只扣费一次。<br>\
                       2、选择个人账号开通方式的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，10元/月。<br>\
                       3、腾讯客服热线：0755 - 86013666'
                 },
        succ_msg:{comm:'开通紫钻贵族服务，享受紫钻贵族特权。'},
        fail_msg:{comm:'开通紫钻失败，您可以尝试其他开通方式。'}},
{product:"sg",no_channel:["sj","gddh","jt","wb","szx","sj_ydsj"],desc:"QQ三国会员",service_code:"QQSG",clause_url:"sg/sg_xieyi.htm",
pay_msg:{comm:'1、开通<span class="color_7fb400"><strong>3-6</strong></span>个月粉钻，赠送1个月粉钻；开通<span class="color_7fb400"><strong>7-11</strong></span>个月粉钻，赠送3个月粉钻；开通<span class="color_7fb400"><strong>12</strong></span>个月粉钻，赠送8个月粉钻；<br />\
2、活动时间：<span class="color_7fb400"><strong>2008-9-1</strong></span>到<span class="color_7fb400"><strong>2008-10-16</strong></span>。以上优惠只支持Q币/Q点帐户开通和他人支付/赠送他人方式。'
},
succ_msg:{comm:''},
fail_msg:{comm:''}},
    {product:"pet",no_channel:["wb"],desc:"QQ宠物粉钻贵族",service_code:"QQPET",clause_url:"pet/pet_xieyi.htm",szx_url:"http://service.ka.tenpay.com/qqpet/tenpayService.jsp",
        vnet_province:{surport:[35,12,23,18,4,1,27,1301]},
        pay_msg:{comm:' 1、您只能为与您手机同省的QQ号码送出QQ宠物粉钻服务；<br>\
                        2、每部手机每月只能给一个QQ用户送出为期一个月（31天）的粉钻；<br>\
                        3、每个QQ号码每月只能通过一部手机开通为期一个月（31天）的粉钻；<br>\
                        4、移动用户拨打时间满6分钟，即可获得1个月（31天）的粉钻服务；<br>\
						5、如手机出现欠费停机状态，通过该手机开通的宝钻可能会被冻结，充值后拨打客服热线：0755-83765566 即可激活被冻结的宝钻；<br>\ 																		6、本服务信息费2元/分钟，通信费忙时0.3元/分钟，闲时0.15元/分钟(闲时为23：00-7：00，其余时段为忙时)；移动用户每月拨打1259056***号段信息费上限为50元，如超出此限额则无法正常使用；<br>\
						7、活动范围：本活动暂不支持北京、福建、山西地区的移动用户；<br>\
						8、如您拨打时听到超过限制或提示挂机的提示，这部分内容不会收取信息费用；客服热线0755-83765566。'
                 },
        succ_msg:{comm:'粉钻用户可以免费<a target="_blank" href="http://pet.qq.com/vip_get_pet/vip_get_pet.html">领养企鹅</a>'},
        fail_msg:{comm:' 移动手机拨<span class="color_7fb400"><strong>12590 88 882</strong></span>，联通手机拨<span class="color_7fb400"><strong>10159 088 186</strong></span>后按<span class="color_7fb400"><strong>4</strong></span>键，就可以获赠粉钻贵族服务哦！'}},
    {product:"x5",no_channel:["sj","gddh","szx","sj_ydsj"],desc:"炫舞紫钻贵族",price:20,service_code:"QQXWZZ",clause_url:"x5/x5_xieyi.htm",cft_discount:10,bank_discount:10,
    	  vnet_province:{surport:[20,11]},
        pay_msg:{comm:'1、炫舞紫钻的尊贵图标只能在QQ2009正式版本SP1以上显示。<br>\
                       2、每次支付炫舞紫钻，均可获得紫钻贵族礼包。价格不菲的超值大礼将定期更新哦！<br>\
                       3、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，20元/月。<br>\
                       4、所有渠道的紫钻自动续费（除宽带、网吧、小钱包支付外），可获取紫钻礼包。<br>\
                       5、一个月中无论使用家庭宽带开通、关闭多少次，我们只扣费一次。<br>\
                       6、腾讯客服热线：0755 - 86013666。',
                 jt:'  1、由于支付渠道受限因素，家庭宽带开通或续费紫钻的用户，目前无法获取紫钻礼包，目前也只能覆盖到广东和江苏两地，其他省市目前暂时无法支持，敬请谅解。<br>\
                       2、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，20元/月。<br>\
                       3、腾讯客服热线：0755 - 86013666。',
                 wb:'  1、由于支付渠道受限因素，网吧开通或续费紫钻的用户，目前无法获取紫钻礼包，敬请谅解。<br>\
                       2、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，20元/月。<br>\
                       3、腾讯客服热线：0755 - 86013666。'
                 },
        succ_msg:{comm:'开通QQ炫舞紫钻，尽享尊贵特权！'},
        fail_msg:{comm:'开通QQ炫舞紫钻，尽享尊贵特权！'}},
    {product:"xx",no_channel:["sj","gddh","jt","wb","szx","sj_ydsj"],desc:"寻仙会员",price:20,service_code:"XXVIP",clause_url:"xx/xx_xieyi.htm",
        pay_msg:{comm:'1、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，20元/月。<br>\
        	             2、腾讯客服热线：0755 - 86013666。'
                },
        succ_msg:{comm:'开通寻仙VIP包月服务，尽享尊贵特权！'},
        fail_msg:{comm:'开通寻仙VIP包月服务，尽享尊贵特权！'}}
/********************************************avaStart******************************************/
/**
 * {qd:Q点/Q币开通}{cft:财付通/银行卡开通}{tr:他人支付/赠送他人}{sj:手机语音开通}{qbk:QQ卡开通}{sj_ydsj:移动手机开通}
 * {gddh:固定电话开通}{wb:网吧开通}{szx:手机充值卡充值}{jt:家庭宽带开通}{cftgame:财付通游戏账户}
 */

/*
{
product:"ava",
no_channel:["cft","tr","sj","sj_ydsj","gddh","wb","szx","jt"],
desc:"AVA联合VIP",
price:0,
service_code:"AVAVIP",
clause_url:"http://ava.qq.com/web200906/agreement.htm",
pay_msg:{comm:'1、选择了个人帐户的“自动续费”或其它方式的包月，我们会在服务到期日每月扣取您的下月费用，0元/月。<br />2、首次开通AVA联合VIP的用户，请重新登陆AVA游戏，才能享受AVA联合VIP特权。<br />3、腾讯客服热线：0755 - 86013388。',
		 qd:'<img width="450" height="65" src="http://ossweb-img.qq.com/images/commweb/tips_ava.jpg" /><br />腾讯客服热线：0755 - 86013388。'
		},
succ_msg:{comm:'开通AVA联合VIP包月服务，尽享尊贵特权！'},
fail_msg:{comm:'开通AVA联合VIP包月服务，尽享尊贵特权！'}
}
*/
/********************************************avaEnd******************************************/
];

//基础方法/工具定义
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

//与index页面、css、全局变量耦合的函数
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
    window.document.title=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["desc"]+"支付";
}
function IED_VIP_Change_top(){
    $(IED_VIP_Url_param["t"]+"_top_p").className="t32";
    $(IED_VIP_Url_param["t"]+"_top_p").innerHTML=$(IED_VIP_Url_param["t"]+"_top_p").innerHTML.stripTags();
}
function IED_VIP_Change_clause(){
    $("clause").innerHTML=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["desc"]+"条款";
    $("clause").href=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["clause_url"];
}
function IED_VIP_Change_price(){
    var p=IED_VIP_Product_info[IED_VIP_Url_param["i"]]["price"]||IED_VIP_Default_price;
    $("price").innerHTML='<span class="color_h">'+p*10+'Q点</span></strong>或<strong class="color_h">'+p+'Q币';
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
    var cft_discount=IED_VIP_Default_Cft_Discount+"折",bank_discount=IED_VIP_Default_Bank_Discount+"折";
    var tmp;
    if(IED_VIP_Product_info[IED_VIP_Url_param["i"]].cft_discount)
    {
        tmp=IED_VIP_Product_info[IED_VIP_Url_param["i"]].cft_discount;
        if(tmp==10)
            cft_discount=""
        else
            cft_discount=tmp+"折"   
    }
    if(IED_VIP_Product_info[IED_VIP_Url_param["i"]].bank_discount)
    {
        tmp=IED_VIP_Product_info[IED_VIP_Url_param["i"]].bank_discount;
        if(tmp==10)
            bank_discount="渠道"
        else
            bank_discount=tmp+"折"   
    }
    
	try{
		$("cft_channel_a").innerHTML="财付通"+cft_discount+"/银行卡"+bank_discount+"开通";
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
}//此函数仅供iframe内的支付页面片调用
function IED_VIP_Wr_pay_msg(){
    return IED_VIP_Wr_msg("pay_msg");
}//此函数仅供iframe内的支付页面片调用
function IED_VIP_Wr_succ_msg(){
    return IED_VIP_Wr_msg("succ_msg");
}//此函数仅供iframe内的支付页面片调用
function IED_VIP_Wr_fail_msg(){
    return IED_VIP_Wr_msg("fail_msg");
}//此函数仅供iframe内的支付页面片调用

//以下开始为调用执行部分
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
		alert("页面出错！");
		window.close();
		return;
	}
	if(!(IED_VIP_Url_param["onlyusepay"] && IED_VIP_Url_param["onlyusepay"]=="1")){
	    IED_VIP_Change_css();
	}
})();
/*  |xGv00|a291d51354af0ab1061519bddc7c46f2 */