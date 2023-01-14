document.domain="qq.com";
function Pay_CheckLogin(){
    if(GetCookieUin()==""){
        parent.NeedAutoSubmit="yes";
        parent.Org_LoginedCallback=parent.LoginedCallback;
        parent.LoginedCallback=function (){
            top.Org_LoginedCallback();
            if(top.NeedAutoSubmit=="yes"){
                top.NeedAutoSubmit="no";
                top.LoginedCallback=top.Org_LoginedCallback;
                top.document.getElementsByTagName("iframe")["middle"].contentWindow.document.getElementById("pay_form").submit();
            }
        }
        parent.OpenLoginDiv("",true);
        return false;
    }
    return true;
}
/*为了支持支付页面单独对外提供，但是父窗体还是要加载ied_vip.js，且父页面的参数必须有：onlyusepay=1*/
Object.extend = function(destination, source) {
  for (property in source) {
    destination[property] = source[property];
  }
  return destination;
}
parent.IED_VIP_Url_param=Object.extend(parent.IED_VIP_Url_param,parent.ParseParam((window.location.search+"?").split("?")[1]));
if(parent.IED_VIP_Url_param["onlyusepay"] && parent.IED_VIP_Url_param["onlyusepay"]=="1") 
{
    Pay_CheckLogin=function(){
    if(GetCookieUin()==""){
        alert("您还没有登录，请您先登录");
        return false;
    }
    return true;
}
}
/*end*/
document.write('<link href="css/style_'+parent.IED_VIP_Url_param["t"]+'.css" rel="stylesheet" type="text/css" />');
document.write('<script type="text/javascript" src="/comm-htdocs/js/oss_base.js"></script>');

function GetCheckedRadio(sName){
    var oRadios=document.getElementsByName(sName);
    var len=oRadios.length;
    for(var i=0;i<len;i++){
        if(oRadios[i].checked) return oRadios[i];
    }
    return null;
}

Object.prototype.GetForm=function(){
    var pay_form=document.getElementById("pay_form");
    if(pay_form.service) pay_form.service.value=parent.IED_VIP_Product_info[parent.IED_VIP_Url_param["i"]]["service_code"];
    if(pay_form.entrance) 
    {
    	  if(pay_form.entrance.value == "game_web"){}
    	  else
    	  	pay_form.entrance.value=parent.IED_VIP_Product_info[parent.IED_VIP_Url_param["i"]]["entrance"]||parent.IED_VIP_Default_entrance;
    }
    return pay_form;
};

var QbQDianChl=new Object();
QbQDianChl.ChangeChl=function(chl)
{
    var oQbqd_prompt=document.getElementById("qbqd_prompt");
    if(chl == "qb")
    {
        oQbqd_prompt.innerHTML="当Q币余额不足时，使用Q点支付不足部分费用";
    }
    else
    {
        oQbqd_prompt.innerHTML="当Q点余额不足时，使用Q币支付不足部分费用";
    }
};
QbQDianChl.ChangeMonth=function(month)
{
    var pay_form=this.GetForm();
    if(month == "other")
    {
        pay_form.prepaymonth.disabled = false;
    }    
    else
    {
        pay_form.prepaymonth.value="";
        pay_form.prepaymonth.disabled = true;
    }
}
QbQDianChl.SubmitForm=function()
{   
    try{
    parent.window.location.href = "http://pay.qq.com/";
    return;
    }
    catch(e){}
    
    var pay_form=this.GetForm();
    pay_form.month.value = GetCheckedRadio("openmonth").value;
    if(pay_form.month.value == "other")
    {
        var o=pay_form.prepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }

	if(GetCheckedRadio("prepay").value == "qb") //Q币支付
    {
		//pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_account_prepay.cgi";
		pay_form.SatetyID.value=pay_form.service.value+"_QB";
    }
	else 
	{
		//pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_qpoint_prepay.cgi";
		pay_form.SatetyID.value=pay_form.service.value+"_QDIAN";
	}
	pay_form.action="http://gamevip.qq.com/comm-cgi-bin/iframe_encry_tool/safety_check.cgi";
	if(!Pay_CheckLogin()) return;
    pay_form.submit();
}

var SendChl=new Object();
SendChl.ChangeMonth=function(month)
{
    var pay_form=this.GetForm();
    if(month == "other")
    {
        pay_form.sendprepaymonth.disabled = false;
    }    
    else
    {
        pay_form.sendprepaymonth.value="";
        pay_form.sendprepaymonth.disabled = true;
    }
}
SendChl.ChangeChl=function(chl)
{
    var oQbqd_prompt=document.getElementById("qbqd_prompt");
    if(chl == "qb")
    {
        oQbqd_prompt.innerHTML="当Q币余额不足时，使用Q点支付不足部分费用";
    }
    else
    {
        oQbqd_prompt.innerHTML="当Q点余额不足时，使用Q币支付不足部分费用";
    }
}
SendChl.SubmitForm=function()
{   
    try{
    parent.window.location.href = "http://pay.qq.com/";
    return;
    }
    catch(e){}
    var pay_form=this.GetForm();
    pay_form.pay.value="send";
    pay_form.channel.value=GetCheckedRadio("prepay").value;
    pay_form.month.value = GetCheckedRadio("sendmonth").value;
    if(pay_form.month.value == "other")
    {
        var o=pay_form.sendprepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }
    if(!pay_form.senduin.value.isQQ())
    {
        alert('请输入正确的受赠方号码！');
        pay_form.senduin.focus();
        return;
    } 
	if ( pay_form.liuyansend.value.getByteLength() > 32 ) 
	{
		alert("留言过长，请重新填写");
		pay_form.liuyansend.focus();
		return;
	}
	pay_form.SatetyID.value=pay_form.service.value+"_SEND";
	pay_form.ProvideUin.value=pay_form.senduin.value;
	pay_form.action="http://gamevip.qq.com/comm-cgi-bin/iframe_encry_tool/safety_check.cgi";
	//pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_send_pay.cgi";
	if(!Pay_CheckLogin()) return;
    pay_form.submit();
}

var AskforChl=new Object();
AskforChl.ChangeMonth=function(month)
{
    var pay_form=this.GetForm();
    if(month == "other")
    {
        pay_form.askforprepaymonth.disabled = false;
    }    
    else
    {
        pay_form.askforprepaymonth.value="";
        pay_form.askforprepaymonth.disabled = true;
    }
}
AskforChl.SubmitForm=function()
{   
    try{
    parent.window.location.href = "http://pay.qq.com/";
    return;
    }
    catch(e){}

    var pay_form=this.GetForm();
    pay_form.pay.value="askfor";
    pay_form.month.value = GetCheckedRadio("askformonth").value;
    if(pay_form.month.value == "other")
    {
        var o=pay_form.askforprepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }
    if(!pay_form.payuin.value.isQQ())
    {
        alert('请输入正确的付费方号码！');
        pay_form.payuin.focus();
        return;
    } 
	if ( pay_form.liuyanask.value.getByteLength() > 32 ) 
	{
		alert("留言过长，请重新填写");
		pay_form.liuyanask.focus();
		return;
	}
	pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_askfor_step1.cgi";
	if(!Pay_CheckLogin()) return;
    pay_form.submit();
}

function GetCookieUin()
{
    var c=getCookie("uin")
    if(c==null || c=="")
        return "";
    return c.replace(/^[^1-9]*/ig,"");
}

var PayBankChl=new Object();
PayBankChl.ChangeMonth=function(month)
{
    var pay_form=this.GetForm();
    if(month == "other")
    {
        pay_form.prepaymonth.disabled = false;
    }    
    else
    {
        pay_form.prepaymonth.value="";
        pay_form.prepaymonth.disabled = true;
    }
}
PayBankChl.SubmitForm=function()
{   
    var app=parent.IED_VIP_Product_info[parent.IED_VIP_Url_param["i"]]["service_code"];
    if(parent.IED_VIP_Url_param["t"]=="pet") app="PETVIP";
    else if(parent.IED_VIP_Url_param["t"]=="r2") app="QQR2BY";
    else if(parent.IED_VIP_Url_param["t"]=="qqtang") app="XXQQT";
    var pay_form=this.GetForm();
    pay_form.month.value = GetCheckedRadio("openmonth").value;
    if(pay_form.month.value == "other")
    {
        var o=pay_form.prepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }
    if(!pay_form.qq1.value.isQQ())
    {
        alert('请输入正确的QQ号码！');
        pay_form.qq1.focus();
        return;
    } 
    if(pay_form.qq1.value != pay_form.qq2.value)
    {
        alert("您2次输入的QQ号不匹配！");
        pay_form.qq2.focus();
        return;
    }
    var count=pay_form.month.value * 1000;
    var uin=pay_form.qq1.value;
	var vBaseUrl ="http://pay.qq.com/zft/paycenter_service_bankc.shtml?ver=1";
    var vUrl = vBaseUrl + "&first4=" + "GAME" + "&uin=" + uin + "&count=" + count + 
    			"&app="+app+"&bank=&p1=&p2=&p3=&p4=";
    window.open(vUrl);
}
PayBankChl.SubmitForm=function(cmd)//add by chenghu/2009/03/06
{   
	var app=parent.IED_VIP_Product_info[parent.IED_VIP_Url_param["i"]]["service_code"];
    if(parent.IED_VIP_Url_param["t"]=="pet") app="PETVIP";
    else if(parent.IED_VIP_Url_param["t"]=="r2") app="QQR2BY";
    else if(parent.IED_VIP_Url_param["t"]=="qqtang") app="XXQQT";
    	
    cmd=GetCheckedRadio("channel").value
    
    var pay_form=this.GetForm();
    pay_form.month.value = GetCheckedRadio("openmonth").value;
    if(pay_form.month.value == "other")
    {
        var o=pay_form.prepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }
    if(!pay_form.qq1.value.isQQ())
    {
        alert('请输入正确的QQ号码！');
        pay_form.qq1.focus();
        return;
    } 
    if(pay_form.qq1.value != pay_form.qq2.value)
    {
        alert("您2次输入的QQ号不匹配！");
        pay_form.qq2.focus();
        return;
    }
    /*if(cmd!="1" && !pay_form.cft_acct.value.isQQ())
    {
        pay_form.cft_acct.value=pay_form.qq1.value
    }*/
    if(cmd!="1" && pay_form.cft_acct.value!=pay_form.qq1.value)
    {
        pay_form.auto.checked=false;
    }
    pay_form.bankid.value=GetCheckedRadio("channel_subid").value;

    var nowtime=new Date();
    var datestr=String(nowtime.getFullYear());
    if(nowtime.getMonth()+1<10) datestr+="0";
    datestr+=String(nowtime.getMonth()+1);
    if(nowtime.getDate()<10) datestr+="0";
    datestr+=String(nowtime.getDate());
    var extendstr="";
    if(app=="QQFCZZ" && datestr<="20100831" && datestr>="20091211") 
    {
        extendstr="&ExtendField=MPRuleID%3DMP200905180003_pay"
    }
    else if(app=="QQXWZZ" && datestr<="20131231")
    {
        extendstr="&ExtendField=MPRuleID%3DMP200909250005"
    }
    else if(app=="PETVIP" && datestr<="20100831")
    {
        extendstr="&ExtendField=MPRuleID%3DMP201005130008_buy"
    }
    else if(app=="QQR2BY" && datestr<="20100220")
    {
        extendstr="&ExtendField=MPRuleID%3DMP201002030005"
    }
    
    {//黑钻活动
	    if(app == "DNFHZ"){
	    	var _mpId = document.getElementById("_mpId");
	    	if(_mpId && _mpId.value){
	    		extendstr = "&ExtendField=MPRuleID%3D" + _mpId.value;
	    	}
	    }
    }

    if(cmd=="1")
    {
    	  var vUrl="http://bank.qq.com/cgi-bin/pay/pay_entry.cgi?ServiceCode="+app+"&PayInfo=PSEO&PayRemark=GAME&ProvideQQuin="
    	  	      +pay_form.qq1.value+"&QQUin="+pay_form.qq1.value+"&BuyCount="+pay_form.month.value+"&LoginFlag=0&BankId="+pay_form.bankid.value;
           vUrl+=extendstr;
    	  window.open(vUrl);
   
        return;    
    }
    else
    {
        var ReqCgi;
        var PayRemark;
        var PayInfo;
        var vUrl;
        var bankId=9999;
        
        if(cmd=="2" && pay_form.auto.checked==true)
        {
            ReqCgi="auto_pay_entry.cgi";
            PayRemark="BANK_AUTO";
            PayInfo=pay_form.qq1.value;
        }
        else
        {
        	  ReqCgi="pay_entry.cgi";
        	  PayRemark="GAME";
        	  PayInfo="PSEO";
        	  if(cmd=="3") bankId=8004;
        }
        vUrl="http://bank.qq.com/cgi-bin/pay/"+ReqCgi+"?ServiceCode="+app+"&PayInfo="
            +PayInfo+"&PayRemark="+PayRemark+"&ProvideQQuin="+pay_form.qq1.value
            +"&QQUin="+pay_form.cft_acct.value+"&BuyCount="+pay_form.month.value+"&LoginFlag=0&BankId="+bankId;
        vUrl+=extendstr;
        window.open(vUrl);
        return ;
    }
}

var QbCardChl=new Object();
QbCardChl.SubmitForm=function()
{
    var pay_form=this.GetForm();
    pay_form.month.value = GetCheckedRadio("openmonth").value;
    if(pay_form.month.value == "other")
    {
        var o=pay_form.prepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }
	
	//检验用户输入    	    	
	if(pay_form.qbuin.value=="" || isNaN(pay_form.qbuin.value) == true) 
	{
        alert("请输入正确的Q币卡号");
        pay_form.qbuin.focus();
        return;
    }
    if(pay_form.qbpasswd.value=="") {
        alert("请输入密码");
        pay_form.qbpasswd.focus();
        return;
    }
	if(!Pay_CheckLogin()) return;
    pay_form.submit();
}

var VnetChl=new Object();
VnetChl.SubmitForm=function(cmd)
{
    var pay_form=this.GetForm();
    if(pay_form.pay.value == "")
    {
        alert("请选择支付方式");
        return;
    }
    else if(pay_form.pay.value.indexOf("vnetctc")!=-1)
    {
        if(pay_form.province_id.value == "" )
        {
            alert('请选择省份！');
            return;
        }

        if(cmd==2)
        {
        	if(pay_form.province_id.value == "20" )
	        {
				window.open("http://gd.chinavnet.com/inc/leftService.jsp?flag=0");
				return;
	        }
        	pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_vnetctc_close.cgi";
        	pay_form.pay.value = "vnetctc_close";               
        }
        else
        {
            pay_form.pay.value = "vnetctc_open";
            pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_vnetctc_pay.cgi";   
        }
    }
    else if(pay_form.pay.value.indexOf("vnetcnc")!=-1)
    {
    	if(pay_form.region_id.value == "" )
        {
            alert('请选择省份！');
            return;
        }
              
        if(cmd==2)
        {
            if(pay_form.region_id.value == "16") //山东地区
            {
            		window.open( "http://self.bdchina.com/searchMySubscription.do");
            		return;
            }
            else if(pay_form.region_id.value == "17") //河南地区
            {
            		window.open( "http://www.kuandai.ha.cn/index.jsp");
            		return;
            }
            else if(pay_form.region_id.value == "9") //吉林地区
            {
            		window.open( "http://www.jlcnc.cn");
            		return;
            }
            pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_vnetcnc_close.cgi";  
            
            pay_form.pay.value = "vnetcnc_close";                        
        }
        else
        {
            pay_form.pay.value = "vnetcnc_open";     
            pay_form.action="http://gamevip.qq.com/cgi-bin/payportal_vnetcnc_pay.cgi";   
        }
    }    
	if(!Pay_CheckLogin()) return;
    pay_form.submit();
}

VnetChl.SetVnetProvince=function(id)
{
    var pay_form=this.GetForm();
    pay_form.province_id.value = id;
    pay_form.pay.value = 'vnetctc';
}

VnetChl.SetRegionId=function(id)
{
    var pay_form=this.GetForm();
    pay_form.region_id.value = id;
    pay_form.pay.value = 'vnetcnc';
}
/*
VnetChl.SetPayTypeClose=function()
{
    var pay_form=this.GetForm();
    
    if(pay_form.pay.value == "vnetctc_open")
    {
        pay_form.pay.value = "vnetctc_close";
    }
    else if(pay_form.pay.value == "vnetcnc_open")
    {
        pay_form.pay.value = "vnetcnc_close";
    }
}*/
VnetChl.HideProvince=function(obj){
    if(!obj) return ;
    var pay_form=this.GetForm();
    var radios=pay_form.provinceid;
    if(obj.surport){
        for(var i=0;i<radios.length;i++){
            var j;
            for(j=0;j<obj.surport.length;j++){
                if(radios[i].value==obj.surport[j]) break;
            }
            if(obj.surport.length==j) radios[i].disabled=true;
        }
    }
    if(obj.unsurport){
        for(var i=0;i<radios.length;i++){
            var j;
            for(j=0;j<obj.unsurport.length;j++){
                if(radios[i].value==obj.unsurport[j]) break;
            }
            if(obj.unsurport.length!=j) radios[i].disabled=true;
        }
    }
}

var CFTGameChl = {};
CFTGameChl.SubmitForm = function(){
    var pay_form = this.GetForm();
    pay_form.month.value = GetCheckedRadio("openmonth").value;
    if(pay_form.month.value == "other")
    {
        var o = pay_form.prepaymonth;
        var oI=parseInt(o.value,10);
        if( o.value== "" || isNaN(oI) || oI>12 || oI<1)
        {
            alert('请输入1~12的开通月数！');
            o.focus();
            return;
        }
        pay_form.month.value = oI;
    }
	
	if(!Pay_CheckLogin()) return;
    pay_form.submit();
};
CFTGameChl.ChangeMonth = function(){
	var pay_form = this.GetForm();
	var month = GetCheckedRadio("openmonth").value;
	var _price = "";
    if(month == "other"){
        pay_form.prepaymonth.disabled = undefined;
        CFTGameChl.ShowPrice();
    }else{
        pay_form.prepaymonth.value = "";
        pay_form.prepaymonth.disabled = "disabled";
        CFTGameChl.ShowPrice(month);
    }
};
CFTGameChl.ShowPrice = function(month){
	var _price = 0;
	if(arguments.length == 0){
		
	}else{
		var productInfo = parent.IED_VIP_Product_info[parent.IED_VIP_Url_param["i"]];
		var cft_discount_int = parent.IED_VIP_Default_Cft_Discount;
		var product_price_int = parent.IED_VIP_Default_price;
		if(productInfo.cft_discount && !isNaN(productInfo.cft_discount)){
	        cft_discount_int = productInfo.cft_discount;
	    }
	    if(productInfo.price && !isNaN(productInfo.price)){
	        product_price_int = productInfo.price;
	    }
		_price = cft_discount_int*10*Number(month)*(product_price_int)/100;
	}
	$("total_price").innerHTML = _price + "";
};
/*  |xGv00|5f1867c47a1f04bfa7d91db48e406c46 */