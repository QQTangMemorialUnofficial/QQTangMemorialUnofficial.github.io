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
		alert("����д��ʵ������");
		sName.focus();
		return;
	}
	else if(!checkName(sName.value))
	{
		alert("��ʵ����ֻ�������ģ�����������д��");
		sName.focus();
		return;
	}
	else if (iType.value=="")
	{ 
		alert("��ѡ�����");
		iType.focus();
		return;
	}
	else if (stmp1.value=="")
	{ 
		alert("����д���䣡");
		stmp1.focus();
		return;
	}
	else if (iDentify.value=="")
	{ 
		alert("����д���֤�����֤Ϊ16λ��18λ���֣�");
		iDentify.focus();
		return;
	}
	else if (sPhone.value=="")
	{ 
		alert("����д�绰��");
		sPhone.focus();
		return;
	}
	else if (sAddress.value=="")
	{ 
		alert("����д��ַ��");
		sAddress.focus();
		return;
	}	
	else if (stmp2.value=="")
	{ 
		alert("��ѡ���Ƿ�Ϊ�����û���");
		stmp2.focus();
		return;
	}	
	else if (stmp3.value=="")
	{ 
		alert("����д�������ԣ�");
		stmp3.focus();
		return;
	}
	document.formMain.submit();
}