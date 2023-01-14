//收听具体调用，自定义。
function checkAll(){
	followAll(["qqt"],function(){
		//alert('收听成功');
		document.getElementById("st_title1").innerHTML="收听微博";
		document.getElementById("st_desc1").innerHTML="感谢您收听QQ堂官方微博，现在就去领取礼品吧！";
		TGDialogS('pop1');
	},function(){
		//alert('收听失败，请确认您的账号已经开通微博，如没有请到http://t.qq.com/reg/index.php开通');
		document.getElementById("st_title2").innerHTML="收听微博";
		document.getElementById("st_desc2").innerHTML="收听失败，请确认您的账号已经开通微博后再来尝试哦！<br><a href='http://t.qq.com/reg/index.php' target='_blank'><U>立即开通微博</U></a>";
		TGDialogS('pop2');
	})
}			
//微博转播分享初始化
var share = new CommShare({
    id: 16, // 活动ID，必须指定
    editor: "" // 用户自定义编辑框，无则可不指定		
});

function SendToMicroblog()
{

	share.ShareMicroblog({
        contentid: 1, // 后台录入的备选内容序号
        content: "test", // 手动指定内容，适用于 用户可编辑内容的活动，如此参数已指定，则contentid参数无效

        // 分享结束的回调函数，如返回false，则会阻止默认的处理函数（弹出提示）
        complete: function(res) {
            if(res) {    
			    if(res.code == "-5")
                {
                    LoginManager.login();            
                }
		        else if(res.code == "0")
		        {
	                document.getElementById("st_title1").innerHTML="微博转播";
		            document.getElementById("st_desc1").innerHTML="转播成功！";
		            TGDialogS('pop1');
		        }
		        else if(RES_SEND_JSON.code == "6")
		        {
	                document.getElementById("st_title2").innerHTML="微博转播";
		            document.getElementById("st_desc2").innerHTML="转播失败，请确认您的账号已经开通微博后再来尝试哦！<br><a href='http://t.qq.com/reg/index.php' target='_blank'><U>立即开通微博</U></a>";
		            TGDialogS('pop2');
		        }
                else
                {
                    document.getElementById("st_title2").innerHTML="微博转播";
		            document.getElementById("st_desc2").innerHTML=res.msg;
		            TGDialogS('pop2');
                }
            } else {
                document.getElementById("st_title2").innerHTML="微博转播";
		        document.getElementById("st_desc2").innerHTML="非常抱歉，由于当前访问人数过多，转播失败！请稍后再试";
		        TGDialogS('pop2');
            }

            return false; // 阻止默认处理函数
        }
    });
}

function sendMBlog(){
	if (LoginManager.getUserUin() == ""){
	    LoginManager.login();
	    return;
	}
    var _url = "http://qqtang.qq.com/act/a20110907qqtangwawbtar/index.htm";
	var _content = "我刚刚收听了QQ堂微博，参与转播活动，获得了10QB！活动链接："+_url+"赶快去参与吧！";
    FileLoadManager.ajaxRequest({
	    'url' : 'http://apps.game.qq.com/commShare/php/shareMicroBlogNodb.php?iPId=16&sUserContent='+encodeURIComponent(_content)+'&url='+encodeURIComponent(_url)+'&r='+Math.random(),
	//'charset' : 'gb2312',
	//'cache' : false,
	//'postType' : 'get', //提交信息的方式
	'dataType' : 'object', //返回的数据类型：object, function
	'dataTypeName' : 'RES_SEND_JSON', //如果dataTypeName设定成功以后的方法
	'showLoadingStr' : '', //显示正在加载提示信息
	//'isUseDefaultLoadType' : false, //是否使用默认的加载方法，适用于当正常的ajax出现错误的时候。
	//'onLoadStartEvent' : null, //加载前的方法
	//'onLoadingEvent' : null, //加载时的方法
	'onLoadSuccessEvent' : null, //加载成功以后的方法
	'onLoadErrorEvent' : null, //加载失败以后的方法
	'onLoadCompleteEvent' : null //加载完成以后的方法
    });

	/* FloadJS('http://apps.game.qq.com/commShare/php/shareMicroBlogNodb.php?iPId=10&sUserContent='+encodeURIComponent(_content)+'&url='+encodeURIComponent(_url)+'&r='+Math.random(),
            handleSendMBlogSuc,
            Failure); */
}

var opt_1519 = {
	'activityId' : 1519,
	'hasCheckLogin' : true,
	'hasGetGiftMain' : true,
	'hasCarousel' : false,
	'hasPersonInfo' : false,
	'hasMyGiftList' : false,
	'hasGetGiftCenter' : false,
	
	'GetGiftMainOption' : {
	'isQueryRole' : true,
		'onGetGiftFailureEvent' : function(retInf){
			var errorInfo = {
				'-135' : '对不起，您已领取过该礼包，请勿重复领取！',
				'-113' : '对不起，您已领取过该礼包，请勿重复领取！',
				'-111' : '很抱歉，您没有获得领取该礼包的资格！',
				'-103' : '很抱歉，由于网络原因，礼包领取失败！',
				'-102' : '很抱歉，由于网络原因，礼包领取失败！',
				'1' : '真是太遗憾了，您没有抽取到礼包！谢谢参与！',
				'2' : '真是太遗憾了，您没有抽取到礼包！谢谢参与！',
				'4' : '真是太遗憾了，您没有领取到礼包！谢谢参与！',
				'5' : '很抱歉，您尚未收听QQ堂官方微博，请确认收听后再来尝试哦！',
				'6' : '很抱歉，您已经领取过该礼包，不能重复领取哦！',
				'7' : '很抱歉，您已经领取过该礼包，不能重复领取哦！',
				'8' : '真是太遗憾了，您已经达到参与此活动的次数限制了！谢谢您的参与！'
			};
			if(errorInfo[''+retInf.retCode]){
				//alert(errorInfo[''+retInf.retCode]);
				document.getElementById("st_title2").innerHTML="领取奖品";
		        document.getElementById("st_desc2").innerHTML=errorInfo[''+retInf.retCode];
		        TGDialogS('pop2');
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="领取奖品";
		        document.getElementById("st_desc2").innerHTML=retInf.retStr;
		        TGDialogS('pop2');
			}
		},
		'onGetGiftSuccessEvent' : function(retInf){
			if(retInf.packageName){
				var isRealGoods = false;
				if(retInf.isRealGoods && retInf.isRealGoods == "1"){
					isRealGoods = true;
				}
				var str = "恭喜您获得了价值60Q币的“QQ堂大礼包”!";
				if(isRealGoods){
					str += "请您准确填写个人信息，官方将有工作人员联系您。";
				}else{
					str += "<br>物品将在24小时内到账，请到游戏中道具商城“我的道具箱”查收！";
				}
				//alert(str);
				document.getElementById("st_title3").innerHTML="领取奖品";
		        document.getElementById("st_desc3").innerHTML=str;
		        TGDialogS('pop3');
				if(isRealGoods){
					if(typeof(window["personInfo_1519"]) != 'undefined' && window["personInfo_1519"] instanceof LotteryManager.PersonInfo){
						window["personInfo_1519"].show();
					}
				}
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="领取奖品";
		        document.getElementById("st_desc2").innerHTML=retInf.retStr;
		        TGDialogS('pop2');
			}
		}
	},
	'CarouselOption' : {
		
	},
	'PersonInfoOption' : {
		'contentId' : 'personInfoContent',
		'buttonId' : 'personSubmitBtn'
	},
	'MyGiftListOption' : {
		
	},
	'GetGiftCenterOption' : {
		
	}
};

LotteryManager.init(opt_1519);

var opt_1529 = {
	'activityId' : 1529,
	'hasCheckLogin' : true,
	'hasGetGiftMain' : true,
	'hasCarousel' : true,
	'hasPersonInfo' : false,
	'hasMyGiftList' : false,
	'hasGetGiftCenter' : false,
	
	'GetGiftMainOption' : {
	    'isQueryRole' : false,
		'onGetGiftFailureEvent' : function(retInf){
			var errorInfo = {
				'-135' : '对不起，您已领取过该礼包，请勿重复领取！',
				'-113' : '对不起，您已领取过该礼包，请勿重复领取！',
				'-111' : '很抱歉，您没有获得领取该礼包的资格！',
				'-103' : '很抱歉，由于网络原因，抽奖失败！请您稍后再试',
				'-102' : '很抱歉，由于网络原因，抽奖失败！请您稍后再试',
				'1' : '真可惜，您没有中奖，请继续关注QQ堂微博更多精彩活动！',
				'2' : '真可惜，您没有中奖，请继续关注QQ堂微博更多精彩活动！',
				'4' : '真可惜，您没有中奖，请继续关注QQ堂微博更多精彩活动！',
				'5' : '很抱歉，只有收听了QQ堂官方微博，并且转发活动页面的分享内容，才能参加抽奖哦！',
				'6' : '很抱歉，你已经参加过抽奖，每位用户只能参与一次抽奖哦！',
				'7' : '很抱歉，你已经参加过抽奖，每位用户只能参与一次抽奖哦！',
				'8' : '很抱歉，你已经参加过抽奖，每位用户只能参与一次抽奖哦！'
			};
			if(errorInfo[''+retInf.retCode]){
				//alert(errorInfo[''+retInf.retCode]);
				document.getElementById("st_title2").innerHTML="领取奖品";
		        document.getElementById("st_desc2").innerHTML=errorInfo[''+retInf.retCode];
		        TGDialogS('pop2');
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="领取奖品";
		        document.getElementById("st_desc2").innerHTML=retInf.retStr;
		        TGDialogS('pop2');
			}
		},
		'onGetGiftSuccessEvent' : function(retInf){
			if(retInf.packageName){
				var isRealGoods = false;
				if(retInf.isRealGoods && retInf.isRealGoods == "1"){
					isRealGoods = true;
				}
				var str = "人品大爆发！获得了QQ堂提供的10QB大奖！<br>奖励将在24小时内发到您的QQ帐号，请注意查收！";
                sendMBlog();
				//alert(str);
				document.getElementById("st_title3").innerHTML="领取奖品";
		        document.getElementById("st_desc3").innerHTML=str;
		        TGDialogS('pop3');
		        
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="领取奖品";
		        document.getElementById("st_desc2").innerHTML=retInf.retStr;
		        TGDialogS('pop2');
			}
		}
	},
	'CarouselOption' : {
		
	},
	'PersonInfoOption' : {
		'contentId' : 'personInfoContent',
		'buttonId' : 'personSubmitBtn'
	},
	'MyGiftListOption' : {
		
	},
	'GetGiftCenterOption' : {
		
	}
};

LotteryManager.init(opt_1529);
/*  |xGv00|547fa20b0f0e65f36fb7452685bad650 */