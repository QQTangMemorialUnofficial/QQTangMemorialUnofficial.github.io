function CheckValue()
	{	
          var flag=false;
          for(var i=0;i<document.FormMain.rdAnsw.length;i++)
		{
			if(document.FormMain.rdAnsw[i].checked)
			{
				flag = true;
				break
			}
		}
		if(flag)
		{
			document.FormMain.submit();
		}
		else
		{
			alert("请选择调查选项!");
			return;
		}
	}
	
function OpenSurveyWin()
{ 
window.open("", 'surveywin', 'left=400, top=50, width=300,height=235,resizable=0,status=0,menubar=0,scrollbars=0');
}