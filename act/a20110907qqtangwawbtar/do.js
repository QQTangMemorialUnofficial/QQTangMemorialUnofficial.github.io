//����������ã��Զ��塣
function checkAll(){
	followAll(["qqt"],function(){
		//alert('�����ɹ�');
		document.getElementById("st_title1").innerHTML="����΢��";
		document.getElementById("st_desc1").innerHTML="��л������QQ�ùٷ�΢�������ھ�ȥ��ȡ��Ʒ�ɣ�";
		TGDialogS('pop1');
	},function(){
		//alert('����ʧ�ܣ���ȷ�������˺��Ѿ���ͨ΢������û���뵽http://t.qq.com/reg/index.php��ͨ');
		document.getElementById("st_title2").innerHTML="����΢��";
		document.getElementById("st_desc2").innerHTML="����ʧ�ܣ���ȷ�������˺��Ѿ���ͨ΢������������Ŷ��<br><a href='http://t.qq.com/reg/index.php' target='_blank'><U>������ͨ΢��</U></a>";
		TGDialogS('pop2');
	})
}			
//΢��ת�������ʼ��
var share = new CommShare({
    id: 16, // �ID������ָ��
    editor: "" // �û��Զ���༭������ɲ�ָ��		
});

function SendToMicroblog()
{

	share.ShareMicroblog({
        contentid: 1, // ��̨¼��ı�ѡ�������
        content: "test", // �ֶ�ָ�����ݣ������� �û��ɱ༭���ݵĻ����˲�����ָ������contentid������Ч

        // ��������Ļص��������緵��false�������ֹĬ�ϵĴ�������������ʾ��
        complete: function(res) {
            if(res) {    
			    if(res.code == "-5")
                {
                    LoginManager.login();            
                }
		        else if(res.code == "0")
		        {
	                document.getElementById("st_title1").innerHTML="΢��ת��";
		            document.getElementById("st_desc1").innerHTML="ת���ɹ���";
		            TGDialogS('pop1');
		        }
		        else if(RES_SEND_JSON.code == "6")
		        {
	                document.getElementById("st_title2").innerHTML="΢��ת��";
		            document.getElementById("st_desc2").innerHTML="ת��ʧ�ܣ���ȷ�������˺��Ѿ���ͨ΢������������Ŷ��<br><a href='http://t.qq.com/reg/index.php' target='_blank'><U>������ͨ΢��</U></a>";
		            TGDialogS('pop2');
		        }
                else
                {
                    document.getElementById("st_title2").innerHTML="΢��ת��";
		            document.getElementById("st_desc2").innerHTML=res.msg;
		            TGDialogS('pop2');
                }
            } else {
                document.getElementById("st_title2").innerHTML="΢��ת��";
		        document.getElementById("st_desc2").innerHTML="�ǳ���Ǹ�����ڵ�ǰ�����������࣬ת��ʧ�ܣ����Ժ�����";
		        TGDialogS('pop2');
            }

            return false; // ��ֹĬ�ϴ�����
        }
    });
}

function sendMBlog(){
	if (LoginManager.getUserUin() == ""){
	    LoginManager.login();
	    return;
	}
    var _url = "http://qqtang.qq.com/act/a20110907qqtangwawbtar/index.htm";
	var _content = "�Ҹո�������QQ��΢��������ת����������10QB������ӣ�"+_url+"�Ͽ�ȥ����ɣ�";
    FileLoadManager.ajaxRequest({
	    'url' : 'http://apps.game.qq.com/commShare/php/shareMicroBlogNodb.php?iPId=16&sUserContent='+encodeURIComponent(_content)+'&url='+encodeURIComponent(_url)+'&r='+Math.random(),
	//'charset' : 'gb2312',
	//'cache' : false,
	//'postType' : 'get', //�ύ��Ϣ�ķ�ʽ
	'dataType' : 'object', //���ص��������ͣ�object, function
	'dataTypeName' : 'RES_SEND_JSON', //���dataTypeName�趨�ɹ��Ժ�ķ���
	'showLoadingStr' : '', //��ʾ���ڼ�����ʾ��Ϣ
	//'isUseDefaultLoadType' : false, //�Ƿ�ʹ��Ĭ�ϵļ��ط����������ڵ�������ajax���ִ����ʱ��
	//'onLoadStartEvent' : null, //����ǰ�ķ���
	//'onLoadingEvent' : null, //����ʱ�ķ���
	'onLoadSuccessEvent' : null, //���سɹ��Ժ�ķ���
	'onLoadErrorEvent' : null, //����ʧ���Ժ�ķ���
	'onLoadCompleteEvent' : null //��������Ժ�ķ���
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
				'-135' : '�Բ���������ȡ��������������ظ���ȡ��',
				'-113' : '�Բ���������ȡ��������������ظ���ȡ��',
				'-111' : '�ܱ�Ǹ����û�л����ȡ��������ʸ�',
				'-103' : '�ܱ�Ǹ����������ԭ�������ȡʧ�ܣ�',
				'-102' : '�ܱ�Ǹ����������ԭ�������ȡʧ�ܣ�',
				'1' : '����̫�ź��ˣ���û�г�ȡ�������лл���룡',
				'2' : '����̫�ź��ˣ���û�г�ȡ�������лл���룡',
				'4' : '����̫�ź��ˣ���û����ȡ�������лл���룡',
				'5' : '�ܱ�Ǹ������δ����QQ�ùٷ�΢������ȷ����������������Ŷ��',
				'6' : '�ܱ�Ǹ�����Ѿ���ȡ��������������ظ���ȡŶ��',
				'7' : '�ܱ�Ǹ�����Ѿ���ȡ��������������ظ���ȡŶ��',
				'8' : '����̫�ź��ˣ����Ѿ��ﵽ����˻�Ĵ��������ˣ�лл���Ĳ��룡'
			};
			if(errorInfo[''+retInf.retCode]){
				//alert(errorInfo[''+retInf.retCode]);
				document.getElementById("st_title2").innerHTML="��ȡ��Ʒ";
		        document.getElementById("st_desc2").innerHTML=errorInfo[''+retInf.retCode];
		        TGDialogS('pop2');
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="��ȡ��Ʒ";
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
				var str = "��ϲ������˼�ֵ60Q�ҵġ�QQ�ô������!";
				if(isRealGoods){
					str += "����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����";
				}else{
					str += "<br>��Ʒ����24Сʱ�ڵ��ˣ��뵽��Ϸ�е����̳ǡ��ҵĵ����䡱���գ�";
				}
				//alert(str);
				document.getElementById("st_title3").innerHTML="��ȡ��Ʒ";
		        document.getElementById("st_desc3").innerHTML=str;
		        TGDialogS('pop3');
				if(isRealGoods){
					if(typeof(window["personInfo_1519"]) != 'undefined' && window["personInfo_1519"] instanceof LotteryManager.PersonInfo){
						window["personInfo_1519"].show();
					}
				}
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="��ȡ��Ʒ";
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
				'-135' : '�Բ���������ȡ��������������ظ���ȡ��',
				'-113' : '�Բ���������ȡ��������������ظ���ȡ��',
				'-111' : '�ܱ�Ǹ����û�л����ȡ��������ʸ�',
				'-103' : '�ܱ�Ǹ����������ԭ�򣬳齱ʧ�ܣ������Ժ�����',
				'-102' : '�ܱ�Ǹ����������ԭ�򣬳齱ʧ�ܣ������Ժ�����',
				'1' : '���ϧ����û���н����������עQQ��΢�����ྫ�ʻ��',
				'2' : '���ϧ����û���н����������עQQ��΢�����ྫ�ʻ��',
				'4' : '���ϧ����û���н����������עQQ��΢�����ྫ�ʻ��',
				'5' : '�ܱ�Ǹ��ֻ��������QQ�ùٷ�΢��������ת���ҳ��ķ������ݣ����ܲμӳ齱Ŷ��',
				'6' : '�ܱ�Ǹ�����Ѿ��μӹ��齱��ÿλ�û�ֻ�ܲ���һ�γ齱Ŷ��',
				'7' : '�ܱ�Ǹ�����Ѿ��μӹ��齱��ÿλ�û�ֻ�ܲ���һ�γ齱Ŷ��',
				'8' : '�ܱ�Ǹ�����Ѿ��μӹ��齱��ÿλ�û�ֻ�ܲ���һ�γ齱Ŷ��'
			};
			if(errorInfo[''+retInf.retCode]){
				//alert(errorInfo[''+retInf.retCode]);
				document.getElementById("st_title2").innerHTML="��ȡ��Ʒ";
		        document.getElementById("st_desc2").innerHTML=errorInfo[''+retInf.retCode];
		        TGDialogS('pop2');
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="��ȡ��Ʒ";
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
				var str = "��Ʒ�󱬷��������QQ���ṩ��10QB�󽱣�<br>��������24Сʱ�ڷ�������QQ�ʺţ���ע����գ�";
                sendMBlog();
				//alert(str);
				document.getElementById("st_title3").innerHTML="��ȡ��Ʒ";
		        document.getElementById("st_desc3").innerHTML=str;
		        TGDialogS('pop3');
		        
			}else{
				//alert(retInf.retStr);
				document.getElementById("st_title2").innerHTML="��ȡ��Ʒ";
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