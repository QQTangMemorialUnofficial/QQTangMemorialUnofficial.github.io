function checkradio(radioobj)
{
  var len=radioobj.length;
  var flag=0;
  try
  {
    var s=radioobj[0].value;
  }
  catch(err)
  {
    flag=1;
  }
  if(flag)
  {
    if(radioobj.checked==true)
    {
      return true;
    }
  }
  else
  {
    for(var i=0;i<len;i++)
    {
      if(radioobj[i].checked==true)
        return true;
    }
  }
  return false;
}
function getradiovalue(radioobj)
{
  var len=radioobj.length;
  for(var i=0;i<len;i++)
  {
    if(radioobj[i].checked==true)
      return radioobj[i].value;
  }
  return null;
}
function checkemail(svalue)
{
  var re=/^[\w.-_]+@([0-9a-z][\w-_]+\.)+[a-z]{2,3}$/i;
  if(re.test(svalue))
  {
    return true;
  }
  else
  {
    return false;
  }
}
function checkmobile(svalue)
{
  var re=/^(13[0-9]{9})$/;
  if(re.test(svalue))
  {
    return true;	
  }
  else
  {
    return false;	
  }
}
function checktel(svalue)
{
  var re=/^(((\d{3,4}-)|\d{3,4})?\d{7,8})$/;
  if(re.test(svalue))
  {
    return true;	
  }
  else
  {
    return false;	
  }
}
function checkidentity(svalue)
{
  var re=/^[0-9]{15}|([0-9]{17}[0-9a-z])$/i;
  if(re.test(svalue))
  {
    return true;
  }
  else
  {
    return false;
  }
}
function checknum(svalue)
{
  var re=/^[0-9]+$/;
  if(re.test(svalue))
  {
    return true;	
  }
  else
  {
    return false;	
  }
}
function checkobj(objarr)
{
  var objtype=objarr[0].type;
  var len=objarr.length;
  if(objtype=="radio")
  {
    for(var i=0;i<len;i++)
    {
      if(objarr[i].checked==true)
      {
        return true;
      }
    }
    alert("您还有未回答的题");
    objarr[0].focus();
    return false;
  }
  else if(objtype=="checkbox")
  {
    for(var i=0;i<len;i++)
    {
      if(objarr[i].checked==true)
      {
        return true;
      }
    }
    alert("您还有未回答的题");
    objarr[0].focus();
    return false;
  }
  else if(objtype=="text"||objtype=="textarea")
  {
      if(objarr[0].value!="")
      {
        return true;
      }
      alert("主观题不能为空");
      objarr[0].focus();
      return false;
  }
  else
  {
    return true;
  }
}
function checkform(formobj)
{
  var inum=formobj.length;
  var arr;
  var objtype;
  for(var i=0;i<inum;i++)
  {
    objtype=formobj.elements[i].type;
    if(objtype=="radio"||objtype=="checkbox"||objtype=="text"||objtype=="textarea")
    {
      arr=document.getElementsByName(formobj.elements[i].name);
      if(!checkobj(arr))
      {
        return false;
      }
      i+=arr.length-1;
    }
  }
  return true;
}
function getcookie(Name)
{
  var offset;
  var search=Name+"=";
  var cval;
  offset=document.cookie.indexOf(search);
  if(-1!=offset)
  {
    var end=document.cookie.indexOf(";",offset+search.length);
    if (end == -1)
    {
      end = document.cookie.length;
    }
    cval=document.cookie.substring(offset+search.length,end);
    return cval==""?null:cval;   
  }
  else return null;
}

function checklogin()
{
  var uin;
  uin=getcookie("uin");
  if(uin==null)
  {
    return false;
  }
  else 
  {
    return true;
  }
}