function AjaxObject(method,url,async)
{
  this.requestObj=false;
  this.createObj=_getRequest;
  this.requestObj=this.createObj();
  if(typeof method  == "undefined" || method=="")
  {
    this.method="GET";
  }
  else
  {
    if(method.toUpperCase() !="POST" && method.toUpperCase() !="GET")
	{
	  this.method="GET";
	}
	this.method=method;
  }
  if(typeof url  == "undefined")
  {
    this.url="";
  }
  else
  {
	this.url=url;
  }
  if(typeof async =="undefined")
  {
    this.async=true;
  }
  else
  {
    if(typeof async!="boolean")
	{
	  this.async=true;
	}
  }
  this.argvs="";
  this.onChange=null;
  //this.onComplate=null;
  this.send=_sendRequest;
}
function _getRequest()
{
    //alert("开始创建XMLHttpRequet对象");
    var req = false;
    // branch for native XMLHttpRequest object
    if(window.XMLHttpRequest) 
    {
    	try 
    	{
			req = new XMLHttpRequest();
        } 
        catch(e) 
        {
			req = false;
        }
    } 
    // branch for IE/Windows ActiveX version
    else if(window.ActiveXObject)
    {
       	try 
       	{
        	req = new ActiveXObject("Msxml2.XMLHTTP");
      	} 
      	catch(e) 
      	{
        	try 
        	{
          		req = new ActiveXObject("Microsoft.XMLHTTP");
        	} 
        	catch(e) 
        	{
          		req = false;
        	}
	    }
    }
    return req;
}
/*
AjaxObject.prototype._stateChange=function ()
{
  alert("in _stateChange "+  this.statusText);
  var obj=this.requestObj;
  if(obj.readyState==4)
  {      
    if(obj.status==200)
    {
      this.onComplate();
    }
    else
    {
      alert(obj.statusText);//出错
    }
  }
}*/
function _sendRequest()
{
  //alert("开始发送ajax数据");
  var request=this.requestObj;
  //alert("state:"+request.readyState);
  //alert(0);
  if(typeof request!="object")
  {
    return -1;
  }
  //alert(1);
  if(this.url=="")
  {
    return -2;
  }
  if(this.async==true)
  {
    //alert(typeof this.onComplate +":"+ typeof this.onChange)
	/*if((typeof this.onComplate !="function") && (typeof this.onChange !="function"))
    {
      return -3;
    }*/
	if(typeof this.onChange =="function")
	{
   	  request.abort();
	  request.onreadystatechange=this.onChange;
	}
	else
	{
	  return -3;
	}
	/*else
	{
	  request.onreadystatechange=this.onChange;
    }*/
  }
  //alert(this.method);
  //alert(this.url);
  //alert(this.async);
  request.open(this.method,this.url,this.async);
  //alert(2);
  //alert(this.argvs+":"+this.method.toUpperCase()+":"+this.method);
  if(this.method.toUpperCase()=="POST")
  {
    //argvs=URLEncoding(argvs);
    request.setRequestHeader("Content-Length",this.argvs.length);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  }
  if(this.method.toUpperCase()=="POST")
  {   
    request.send(this.argvs);
  }
  else
  {
    request.send(null);
  }
  return 0;
}