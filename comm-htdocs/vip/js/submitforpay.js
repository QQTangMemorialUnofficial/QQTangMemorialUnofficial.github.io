/**
 * @author tiantian
 */
document.domain="qq.com";
(function(){
	getCookie = function(name){
		var arr,reg=new RegExp("(^|; )"+name+"=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)){
			return unescape(arr[2]);
		}else {
			return null;
		}
	};
	setCookie = function(name,value,expiresd,path,domain,secure){
		var expdate = new  Date();
		var expires = arguments[2] || null;
		var  path  =  arguments[3] || "/";
		var  domain  =  arguments[4] || null;
		var  secure  =  arguments[5] || false;
		if(expires){
			expdate.setMinutes(expdate.getMinutes() + parseInt(expires));
		}
		var cookietemp =escape(name) + '=' + escape(value) + (expires ? '; expires=' + expdate.toGMTString() : '') + (path ? '; path=' + path : '')+ (domain ? '; domain=' + domain : '')+(secure ? '; secure' : '');
		document.cookie=cookietemp;
	};
	createScript = function(url, sid){
		var script = null;
		if(document.getElementById(sid)){
			script = document.getElementById(sid);
		}else{
			script = document.createElement('script');
			var head = null;
			if(document.getElementsByTagName){
				head = document.getElementsByTagName('head')[0] || document.documentElement;
			}else{
				head = document.documentElement;
			}
			head.insertBefore(script, head.firstChild);
		}
		{//设置属性
			script.setAttribute('type', 'text/html');
			script.setAttribute('charset', 'gb2312');
			script.setAttribute('id', sid);
			script.setAttribute('src', url);
		}
		return script;
	};
	getUserQQ = function(){
		var str = getCookie("uin");
		if(!str){
			return '';
		}
		str = str.replace(/^[o|0]*/ig,"");
		if(!isNaN(str)){
			return str;
		}else{
			return '';
		}
	};
	getGameId = function(){
	    var _url = window.location.href + '';
	    _url.match(/t=([^&]*)(&|$)/);
	    var _gameId = RegExp.$1;
	    if(!(/^[A-Za-z0-9]+$/img).test(_gameId)){
	    	_gameId = '';
	    }
      if(!_gameId){
          _url.match(/\/\/(\S*).qq.com/);
          _gameId = RegExp.$1;
      }
      return (_gameId || '').toLowerCase();
	};
	serviceTypeMap = {
		'dnf' : 'DNFHZ',
		'pet' : 'PETVIP',
		'x5' : 'QQXWZZ',
		'speed' : 'QQFCZZ',
		'r2' : 'QQR2BY',
		'qqtang' : 'XXQQT',
		'cf' : 'CFCLUB',
		'11' : 'XXQGAME',
		'xx' : 'XXVIP'			
	};
	submitData = function(gameId){
		if(!gameId){
			return;
		}
		gameId = gameId.toLowerCase();
		
		if(typeof(serviceTypeMap[gameId]) == 'undefined'){
			return;
		}
		var serviceType = serviceTypeMap[gameId];
		var uin = getUserQQ();
		
		if(!serviceType || !uin){
			return;
		}
		
		setCookie('pay_'+serviceType+'_aid', 'pay.qqvip-v2', null, '/', 'qq.com');
		createScript('http://pay.qq.com/cgi-bin/account/LoginStatics.cgi?servicetype=' + serviceType, serviceType.toLowerCase());
	};
	setSubmitDataForPay = function(){
		try{
			var gameId = getGameId();
    		if(!gameId){
    	        return;
    	    }
			submitData(gameId);
		}catch(e){}		
	};
	setChangePageToPay = function(){
		var gameId = getGameId();
		if(!gameId){
	        return;
	    }

		var aidMap = {
			'dnf' : 'ied.dnf',
			'pet' : 'ied.pet',
			'x5' : 'ied.x5',
			'speed' : 'ied.speed',
			'r2' : 'ied.r2',
			'qqtang' : 'ied.qqtang',
			'cf' : 'ied.cf',
			'xx' : 'ied.xx'
		};
		var aidStr = aidMap[gameId];
		
		if(!aidStr){
			return;
		}

		var _temp = Math.floor(Math.random()*100);
		
		{//特殊处理
			if(gameId == 'xx'){
				_temp = 0;//寻仙跳转
			}
			if(gameId == 'speed'){
				_temp = 100;//飞车留存
			}
			
			_temp = 0; //表示全切
		}

		if(_temp > 50){
			var uin = getUserQQ();
			var serviceType = serviceTypeMap[gameId];
			aidStr = 'game.' + aidStr;
			if(!uin || !serviceType){
				return;
			}
			createScript('http://pay.qq.com/cgi-bin/account/LoginStatics.cgi?servicetype=' + serviceType + '&uin=' + uin + '&aid=' + aidStr, serviceType.toLowerCase()+uin);
			return;
		}
		window.location.href = "http://pay.qq.com/"+gameId+"/index.shtml?aid=" + aidStr;
	};
})();

setChangePageToPay();//设置灰度跳转/*  |xGv00|c1bfe5592737079176320bda4805f0ff */