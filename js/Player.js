function getObj(objName)
{
        try
		{
			if (document.getElementById)
			{
					return eval('document.getElementById("'+objName+'")');
			}
			else
			{
					return eval('document.all.'+objName);
			}
		}
		catch(e)
		{}
}

function getOLeft(myObj)
{
        curObj = myObj;
        var objLT = curObj.offsetLeft;
        while(curObj!=curObj.offsetParent && curObj.offsetParent){
                curObj=curObj.offsetParent;
                if(curObj.tagName=="DIV" || curObj.tagName=="TABLE" || curObj.tagName=="TR" || curObj.tagName=="TD"){
                        objLT += curObj.offsetLeft;
                }

        }
        return objLT;
}

//truncation string
function trunStr(str)
{
	if (str.length > 12)
		return	str.substr(0,12) + " … ";
	else
		return str;
}

function toPlay()
{
		if (getObj("MediaPlayer").playState != 3)
		{
			if (getObj("MediaPlayer").controls.isAvailable('Play'))
			{
				getObj("MediaPlayer").controls.play();
				getObj("playControl").src="http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_22.gif";
				getObj("mediaInfo").innerText="缓冲";
			}
		}
		else
		{
			toPause();
		}
}

function toPause()
{
        if (getObj("MediaPlayer").currentMedia.duration > 0)
        {
                infoChange = 1;
				getObj("MediaPlayer").controls.Pause();
                getObj("playControl").src="http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_09.gif";
				getObj("statImg").src="http://ossweb-img.qq.com/images/r2/200604web/video/pause.gif";
				getObj("mediaInfo").innerText="已暂停";
        }
}

function toStop()
{
        if (getObj("MediaPlayer").currentMedia.duration > 0)
        {
				getObj("MediaPlayer").controls.Stop();
                getObj("playControl").src="http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_09.gif";
				getObj("statImg").src="http://ossweb-img.qq.com/images/r2/200604web/video/stop.gif";
				getObj("mediaInfo").innerText="已停止";
				
        }
}

function toMute()
{
        if(getObj("MediaPlayer").settings.mute.toString().toLowerCase()=='true')
        {
                getObj("MediaPlayer").settings.mute='False';
                getObj("muteControl").src = "http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_13.gif";
                getObj("muteControl").alt = "关闭声音";
        }else{
                getObj("MediaPlayer").settings.mute='True';
                getObj("muteControl").src = "http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_21.gif";
                getObj("muteControl").alt = "打开声音";
        }
}

function fullScreen()
{
        try
		{
			if(getObj("MediaPlayer").currentMedia.duration > 0)
			{
					getObj("MediaPlayer").fullScreen = true;
			}
		}
		catch(e)
		{}
}

var isPorV = 0;
function mouseDown(objSign)
{
        isPorV = objSign;
        if(isPorV==0){
                if(getObj("MediaPlayer").currentMedia.duration > 0)
                {
                        pFlag = true;
                        if(window.event.srcElement.id!="pZone") 
                                getObj("pBox").style.left = getObj("pBox").offsetLeft -1;
                        else 
                                getObj("pBox").style.left = (window.event.x-12);
                }
        }
        else if(isPorV==1)
        {
                vFlag = true;
                if(window.event.srcElement.id!="vZone") 
                        getObj("vBox").style.left = getObj("vBox").offsetLeft;
                else 
                        getObj("vBox").style.left = (window.event.x-3);
        }
}

function mouseMove()
{
        if(isPorV==0)
        {
                if(getObj("MediaPlayer").currentMedia.duration > 0)
                {
                        if(pFlag) getObj("pBox").style.left = window.event.clientX - getOLeft(getObj("pZone")) - 12 +"px";
                        if (parseInt(getObj("pBox").style.left.replace("px","")) > pZoneWidth) getObj("pBox").style.left=pZoneWidth +"px";
                        if (parseInt(getObj("pBox").style.left.replace("px","")) < -5) getObj("pBox").style.left=-5 +"px";
                }

        }
        else if(isPorV==1)
        {
                if(vFlag) getObj("vBox").style.left = window.event.clientX - getOLeft(getObj("vZone")) - 4 +"px";
                if (parseInt(getObj("vBox").style.left.replace("px","")) > 56) getObj("vBox").style.left=56 +"px";
                if (parseInt(getObj("vBox").style.left.replace("px","")) < 10) getObj("vBox").style.left=10 +"px";
                
                if(isPorV==1)
                {
                        if (vFlag)
                        {
                                tempVol = (parseInt(getObj("vBox").style.left) -9)*1.7;
                                getObj("MediaPlayer").settings.volume=Math.round(tempVol);
                        }
                }
                
        }
}
        
function mouseUp()
{
        if(isPorV==0){
                if(getObj("MediaPlayer").currentMedia.duration > 0){
                        if (pFlag){
                                var duration = getObj("MediaPlayer").currentMedia.duration;
                                getObj("MediaPlayer").controls.CurrentPosition=duration * (parseInt(getObj("pBox").style.left)/pZoneWidth);
                        }
                        pFlag = false;
                }
        }else if(isPorV==1){
                if (vFlag){
                        tempVol = (parseInt(getObj("vBox").style.left) -9)*1.7;
                        getObj("MediaPlayer").settings.volume=Math.round(tempVol);
                }
                vFlag = false;
        }
}

function mouseEnd()
{
        window.event.returnValue = false;
}

function OnloadFun()
{
        startdrag();
        setInterval("FixPos()",1000);
}

var fFlag= false;

//drag func
var pFlag = false;
var pZoneWidth = 320 - 29;
var infoChange = 1;

var bufferingProgress;
var downloadProgress;
var bitRate;
var currentPositionString;
var mediaTitle;
var itemTitle;


var mediaInfo = getObj("mediaInfo");

function startdrag()
{
        if(getObj("MediaPlayer").currentMedia.duration||(!isNaN(getObj("MediaPlayer").currentMedia.duration))){
                window.document.onmousemove = mouseMove;
                window.document.ondragstart = mouseEnd;
                window.document.onmouseup = mouseUp;
        }
}

function FixPos()
{
        if(getObj("MediaPlayer").currentMedia.duration>0)
		{
                var duration = getObj("MediaPlayer").currentMedia.duration;
                var pos = getObj("MediaPlayer").controls.CurrentPosition;
                if (pos == 0)
                {
                        var pBoxPos = Math.round(pos/duration*pZoneWidth)+5;
                }
                else
                {
                        var pBoxPos = Math.round(pos/duration*pZoneWidth)+5;
                }
                if (!isNaN(pBoxPos)) 
                {
                        getObj("pBox").style.left = pBoxPos;
                }
                if(getObj("MediaPlayer").playState == 1) 
                {
                        getObj("playControl").src="http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_09.gif";
						getObj("pBox").style.left = 5;
						getObj("statImg").src="http://ossweb-img.qq.com/images/r2/200604web/video/stop.gif";
						mediaInfo.innerText="已停止";
                }
						
				
				bufferingProgress = getObj("MediaPlayer").network.bufferingProgress;
				downloadProgress = parseInt(getObj("MediaPlayer").network.downloadProgress);
				bitRate = getObj("MediaPlayer").network.bitRate;
				currentPositionString = getObj("MediaPlayer").Controls.currentPositionString;
				mediaTitle = getObj("MediaPlayer").currentPlaylist.item(0).getItemInfo("Title");
				itemTitle = getObj("MediaPlayer").currentPlaylist.getItemInfo("Title");
				
				getObj("mediaTime").innerText = currentPositionString.toString();
				
				
				switch(getObj("MediaPlayer").playState)
				{
						case 7:
						{
								mediaInfo.innerText="准备就绪";		
						}
						break;
						
						case 6:
						{
								getObj("statImg").src="http://ossweb-img.qq.com/images/r2/200604web/video/play.gif";						
				                                getObj("playControl").src="http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_22.gif";
								if ( parseInt(bufferingProgress) > 0 && parseInt(bufferingProgress) < 100 )
								{
										mediaInfo.innerText="缓冲处理: 完成 "+bufferingProgress.toString()+"%";
								}
								else
								{
										mediaInfo.innerText="缓冲处理";
								}
						}
						break;
						
						case 3:
						{
								getObj("statImg").src="http://ossweb-img.qq.com/images/r2/200604web/video/play.gif";
				                                getObj("playControl").src="http://ossweb-img.qq.com/images/r2/200604web/video/chattingroom2_22.gif";
								if ( downloadProgress == 0 )
								{
										mediaInfo.innerText="正在播放";	
								}
								showPlayInfo();
						}
						break;
				}
        }
}

function showPlayInfo()
{
		if ( infoChange ==1 )
		{
				if ( downloadProgress < 100 )
				{
						mediaInfo.innerText="正在播放: "+downloadProgress.toString()+"% 已下载";
				}
				else
				{
						mediaInfo.innerText="正在播放: "+Math.round(bitRate/1000)+" 千比特/秒";			
				}
				if ( downloadProgress == 0 )
				{
						mediaInfo.innerText="正在播放";	
				}
		}
	
		if ( infoChange ==4 )
		{		
				mediaInfo.innerText="播放列表: "+itemTitle.toString();
		}
	
		if ( infoChange ==8 )
		{
				mediaInfo.innerText="剪辑: "+trunStr(mediaTitle).toString();		
		}
		if ( infoChange < 11 )
		{
				infoChange += 1;
		}
		else
		{
				infoChange = 1;
		}
}

OnloadFun();
