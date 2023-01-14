function checkName(s)
{
	for (i=0; i<s.length; i++)
	{
		//n = s.substr(i, 1);
		//if (!isChinese(n))
		if(s.charCodeAt(i)<= 255)
		{
			return false;
		}
	}
	return true;
}
function CheckValue()
{	
	sName = document.formMain.sName;
	stmp1 = document.formMain.stmp1;
	stmp2 = document.formMain.stmp2;
	stmp3 = document.formMain.stmp3;
	iDentify = document.formMain.iDentify;
	sPhone = document.formMain.sPhone;
	iType = document.formMain.iType;	
	sAddress = document.formMain.sAddress;

	if (sName.value.length<1)
	{ 
		alert("请填写真实姓名！");
		sName.focus();
		return;
	}
	else if(!checkName(sName.value))
	{
		alert("真实姓名只能是中文，请您重新填写！");
		sName.focus();
		return;
	}
	else if (iType.value=="")
	{ 
		alert("请选择类别！");
		iType.focus();
		return;
	}
	else if (stmp1.value=="")
	{ 
		alert("请填写年龄！");
		stmp1.focus();
		return;
	}
	else if (iDentify.value=="")
	{ 
		alert("请填写身份证，身份证为16位或18位数字！");
		iDentify.focus();
		return;
	}
	else if (sPhone.value=="")
	{ 
		alert("请填写电话！");
		sPhone.focus();
		return;
	}
	else if (sAddress.value=="")
	{ 
		alert("请填写地址！");
		sAddress.focus();
		return;
	}	
	else if (stmp2.value=="")
	{ 
		alert("请选择是否为电信用户！");
		stmp2.focus();
		return;
	}	
	else if (stmp3.value=="")
	{ 
		alert("请填写参赛宣言！");
		stmp3.focus();
		return;
	}
	document.formMain.submit();
}