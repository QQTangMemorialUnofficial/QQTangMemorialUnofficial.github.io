/*
var curFile= 'http://bbmedia.qq.com/media/bb/qqcom.wmv';
var vWidth = 320;
var vHeight= 305;
var autoPlayFlag = 0;
*/

var objHTML0 = ("<SCRIPT LANGUAGE = 'JScript'  FOR = MediaPlayer EVENT = OpenStateChange(NewState)>");
objHTML0 += ("</SCRIPT>");

var objHTML1 = ("<OBJECT id=MediaPlayer codeBase=http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701 type=application/x-oleobject width='"+vWidth+"' height='"+vHeight+"' classid=CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6 standby='Loading Microsoft? Windows Media? Player components...'>");
objHTML1 += ("<PARAM NAME='URL' VALUE='&#13;&#10;");
var objHTML2 = ("'>");

objHTML2 += ("<PARAM NAME='AutoStart' VALUE='"+(autoPlayFlag?"1":"0")+"'>");
objHTML2 += ("<PARAM NAME='rate' VALUE='1'>");
objHTML2 += ("<PARAM NAME='balance' VALUE='0'>");
objHTML2 += ("<PARAM NAME='currentPosition' VALUE='0'>");
objHTML2 += ("<PARAM NAME='defaultFrame' VALUE=''>");
objHTML2 += ("<PARAM NAME='playCount' VALUE='1'>");
objHTML2 += ("<PARAM NAME='currentMarker' VALUE='0'>");
objHTML2 += ("<PARAM NAME='invokeURLs' VALUE='-1'>");
objHTML2 += ("<PARAM NAME='baseURL' VALUE=''>");
objHTML2 += ("<param name='volume' value='50'>");
objHTML2 += ("<PARAM NAME='mute' VALUE='0'>");
objHTML2 += ("<param name='uiMode' value='none'>");
objHTML2 += ("<param name='stretchToFit' value='1'>");
objHTML2 += ("<param name='windowlessVideo' value='0'>");
objHTML2 += ("<param name='enabled' value='-1'>");
objHTML2 += ("<param name='enableContextMenu' value='0'>");
objHTML2 += ("<param name='fullScreen' value='0'>");
objHTML2 += ("<PARAM NAME='SAMIStyle' VALUE=''>");
objHTML2 += ("<PARAM NAME='SAMILang' VALUE=''>");
objHTML2 += ("<PARAM NAME='SAMIFilename' VALUE=''>");
objHTML2 += ("<PARAM NAME='captioningID' VALUE=''>");
objHTML2 += ("<param name='enableErrorDialogs' value='0'>");
objHTML2 += ("<PARAM NAME='_cx' VALUE='8467'>");
objHTML2 += ("<PARAM NAME='_cy' VALUE='8467'>");
objHTML2 += ("<param name='AutoSize' value='1'>");
objHTML2 += ("</OBJECT>");

document.writeln(objHTML0);
document.writeln(objHTML1 + curFile + objHTML2);
