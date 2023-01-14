//向页面加载数据
writeDataJs();

//向页面写js路径
function writeDataJs()
{
    document.writeln("<script src=\"http://qqtang.qq.com/time/a20100526hero2010/indexPerson.js\"></script>");
    document.writeln("<script src=\"http://qqtang.qq.com/time/a20100526hero2010/indexTeam.js\"></script>");
}

function writePersonJs( ListTplName )
{
  if (typeof(newsPersonData)=='undefined')
   {
      $(ListTplName).style.display= "none";
      document.writeln("");
      return;
   }

   var trTpl = $(ListTplName);
     
   var tpl   = $(ListTplName).outerHTML;
   
   for( var i=1; i<newsPersonData.length; i++ )
   {  
   var tmpTpl = tpl.replace("#iRank", newsPersonData[i].iRank);
   tmpTpl = repalceAll(tmpTpl,"#iMatchPoint", newsPersonData[i].iMatchPoint);
   tmpTpl = repalceAll(tmpTpl,"#iUin", newsPersonData[i].iUin);

   document.writeln( tmpTpl );
}
	//隐藏模板
	trTpl.style.display= "none";
}

function writeTeamJs( ListTplName )
{
  if (typeof(newsTeamData)=='undefined')
   {
      $(ListTplName).style.display= "none";
      document.writeln("");
      return;
   }

   var trTpl = $(ListTplName);
     
   var tpl   = $(ListTplName).outerHTML;
   
   for( var i=1; i<newsTeamData.length; i++ )
   {  
   var tmpTpl = tpl.replace("#iRank", newsTeamData[i].iRank);
   tmpTpl = repalceAll(tmpTpl,"#iMatchPoint", newsTeamData[i].iMatchPoint);
   tmpTpl = repalceAll(tmpTpl,"#sTeamName", newsTeamData[i].sTeamName);

   document.writeln( tmpTpl );
}
	//隐藏模板
	trTpl.style.display= "none";
}/*  |xGv00|ad8ade9aa76e123141d66977b1d6c10c */