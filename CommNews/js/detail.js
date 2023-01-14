var txtid = getUrlPara("fid");
var durl  = getDataUrlOfId(txtid);
document.writeln("<script language='javascript' src='"+durl+"'><\/script>");

function getUrlPara(paraName, sUrl )
{
    if (typeof(sUrl)=='undefined')
    {
        sUrl = document.location.href;
    }
    
    var urlRegex = new RegExp(paraName+"=[^&]*", "igm");
    var para     = sUrl.match( urlRegex );
    if(!para)
    {
        return "";
    }
    var v=para[0];
    from = v.indexOf( "=" );
    var tpara = v.substr(from+1, v.length);
    tpara = repalceAll(tpara, "<", "");
    tpara = repalceAll(tpara, ">", "");
    tpara = repalceAll(tpara, "script", "");
    
    tpara = parseInt(tpara);   
	if(isNaN(tpara ))tpara =1;

    return tpara;
}

//显示文件中的数据
function display()
{
    if (typeof(newsContent)=='undefined')
    {
      alert("抱歉,未找到对应的新闻!");
      return;
    }
    
    //显示新闻信息
    try{$("Ftitle").innerText      = unescape(newsContent.Ftitle);      }catch(e){}
    try{$("Fowner").innerText      = newsContent.Fowner;      }catch(e){}
    try{$("Freleasetime").innerText= newsContent.Freleasetime;}catch(e){}
    try{$("Fcontent").innerHTML    = unescape(newsContent.Fcontent);    }catch(e){}

    document.writeln("<script src=\"/time/news/list/_"+ newsContent.channel + "_" + newsContent.subType + "_0.js\"></script>");
    //document.writeln("<script src=\"/cgi-bin/CommNews/news_click.cgi?iPdName="+getUrlPara("iPdName") +"&fid=" + getUrlPara("fid") +"\"></script>");
    
    
}

function LoadRelateNews( tplName, n)
{
	
	this.outPutNum = 0;
	this.tpl = $(tplName).outerHTML;
	$(tplName).style.display = "none";
	
	this.show = function(xmlData)
    {
        
        if(typeof(newsListData)=='undefined')
        {
          $(tplName).style.display= "none";
          document.writeln("");
          return;
        }
        else
        {
           for(var i=1; i<newsListData.length; i++)
           {
                if( newsContent.keyWord == newsListData[i].Fkey)
                {
                    document.writeln( DataToHtml(this.tpl, newsListData[i]) );
                    this.outPutNum = this.outPutNum+1;
                    if( this.outPutNum >= n)
                    {
                        break;
                    }
                }
            }
            
            if(this.outPutNum < n)
            {
                for(var i=1; i<newsListData.length; i++)
                {
                    if( newsContent.keyWord !== newsListData[i].Fkey)
                    {
                        document.writeln( DataToHtml(this.tpl, newsListData[i]) );
                        this.outPutNum = this.outPutNum+1;
                        if( this.outPutNum >= n)
                        {
                            break;
                        }
                    }
                }
            }
        }
       
    }
    
    this.fError = function()
    {
        alert("e");
        $(tplName).style.display = "none";
    }
    
}


function LoadRelateNews1( tplName, n)
{
	
	this.outPutNum = 0;
	this.tpl = $(tplName).innerHTML;
	$(tplName).style.display = "none";
	
	this.show = function(xmlData)
    {
        
        if(typeof(newsListData)=='undefined')
        {
          $(tplName).style.display= "none";
          document.writeln("");
          return;
        }
        else
        {
           for(var i=1; i<newsListData.length; i++)
           {
                if( newsContent.keyWord == newsListData[i].Fkey)
                {
                    document.writeln( DataToHtml(this.tpl, newsListData[i]) );
                    this.outPutNum = this.outPutNum+1;
                    if( this.outPutNum >= n)
                    {
                        break;
                    }
                }
            }
            
            if(this.outPutNum < n)
            {
                for(var i=1; i<newsListData.length; i++)
                {
                    if( newsContent.keyWord !== newsListData[i].Fkey)
                    {
                        document.writeln( DataToHtml(this.tpl, newsListData[i]) );
                        this.outPutNum = this.outPutNum+1;
                        if( this.outPutNum >= n)
                        {
                            break;
                        }
                    }
                }
            }
        }
       
    }
    
    this.fError = function()
    {
        alert("e");
        $(tplName).style.display = "none";
    }
    
}


//由数据转换成html
function DataToHtml(tpl, ndata)
{
    var detailTpl = getDetailTpl( ndata.Fchannel_id );
    var tmpTpl = repalceAll( tpl, "<%$Ftitle$%>", unescape(ndata.Ftitle) );
    tmpTpl     = repalceAll( tmpTpl, "#Ftitle", unescape(ndata.Ftitle) );
    
    //文章链接
    if( ndata.iUrl == "1" )
    {
        tmpTpl = repalceAll( tmpTpl, "<%$url$%>", ndata.Furl );
        tmpTpl = repalceAll( tmpTpl, "#url", ndata.Furl );
    }
    else
    {
        tmpTpl = repalceAll( tmpTpl, "<%$url$%>", "/CommNews/static/"+detailTpl+"?fid=" + ndata.Fid + iPdNameCondition );
        tmpTpl = repalceAll( tmpTpl, "#url", "/CommNews/static/"+detailTpl+"?fid=" + ndata.Fid + iPdNameCondition );
    }
    return tmpTpl;
}/*  |xGv00|5f727a436e3b8b796886d81bbcb8e13d */