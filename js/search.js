document.write('<table width="300" border="1" cellpadding="1" cellspacing="0" align="center" bordercolorlight="#000000" bordercolordark="#FFFFFF" bgcolor="#0886EF"><form name="search1" onSubmit="return findInPage(this.Word.value);"><tr><td align="center"><input type="text"  name="Word" size="26" onChange="n = 0;" onFocus=window.document.search1.Word.value=""></td><td width="60" align="center"><input type="submit" name="Submit" value="搜索"></td></tr></form></table>');

function GetWord() 
{
	var tr
}

function FindWord(w)
{
	for (var i=0;i<WordList.options.length;i++)
		if (WordList.options[i].text==w) 
		{
			WordList.options[i].selected=true
			Output.value=WordExpln[i]
			RESULT.style.visibility="visible"
			return true
		}
	return false
}

/******************** Main Part ********************/

var canDrag=0,canGetWord=0
var oldtop=0,oldscrolltop=0
var WordExpln=new Array()
var G_xmlHTTP
document.onmousemove = GetWord

var NS4 = (document.layers);
var IE4 = (document.all);

var win = this;
var n   = 0;

function findInPage(str)
{
	var txt, i, found;
	if (str == "")
		return false;
	if (NS4)
	{
		if (!win.find(str))
		while(win.find(str, false, true))
			n++;
		else
		n++;
	if (n == 0) alert("您要找的：QQ号["+ str + "]不存在。\n \n请确认您的输入是否正确！");
	}

	if (IE4)
	{
		txt = win.document.body.createTextRange();
		for (i = 0; i <= n && (found = txt.findText(str)) != false; i++)
		{
			txt.moveStart("character", 1);
			txt.moveEnd("textedit");
		}
		if (found)
		{
		 txt.moveStart("character", -1);
		 txt.findText(str);
		 txt.select();
		 txt.scrollIntoView();
	 n++;		}
		else
		{
			if (n > 0)
			{
				n = 0;
				findInPage(str);
			}
			else
				alert("您要找的：QQ号["+ str + "]不存在。\n \n请确认您的输入是否正确！");
		}
	}
	return false;
}

self.onError=null;
	currentX = currentY = 0;  
	whichIt = null;   
    lastScrollX = 0; lastScrollY = 0;
	NS = (document.layers) ? 1 : 0;
	IE = (document.all) ? 1: 0;