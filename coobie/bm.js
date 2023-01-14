var pic1= "bm.gif";
var pic2= "bm.gif";
var speed=80;
var move=0;
var stop=0;
var brOK=false;
var mie=false;
var aver=parseInt(navigator.appVersion.substring(0,1));
var aname=navigator.appName; var vmin=2;
var vmax=5;
var vr=2;
var timer1;
var allyes;
var ns = (document.layers) ? 1 : 0;
var ie = (document.all) ? 1 : 0;
var num=0;

function MM_swapImgRestore()
{
	var i,x,a=document.MM_sr;
	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d)
{
	var p,i,x;
	if(!d) d=document;
	if((p=n.indexOf("?"))>0&&parent.frames.length)
	{
		d=parent.frames[n.substring(p+1)].document;
		n=n.substring(0,p);
	}
	if(!(x=d[n])&&d.all)
	x=d.all[n];
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for (i=0;!x&&d.layers&&i<d.layers.length;i++) x= MM_findObj(n,d.layers[i].document);
	return x;
}

function MM_swapImage()
{
	var i,j=0,x,a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0;i<(a.length-2);i+=3) if ((x=MM_findObj(a[i]))!=null)
	{
		document.MM_sr[j++]=x;
		if(!x.oSrc) x.oSrc=x.src;
		x.src=a[i+2];
	}
}

function mouseMove()
{
	if(move)
	{
		document.all.dragObj.style.left=window.event.x-25;
		document.all.dragObj.style.top=window.event.y+6;
	}
}

function winopen()
{
	window.open("http://qqtang.qq.com/coobie/baoming.htm");
}

function checkbrOK()
{
	if(aname.indexOf("Internet Explorer")!=-1)
	{
		if(aver>=4) brOK=navigator.javaEnabled();
		mie=true;
	}
	if(aname.indexOf("Netscape")!=-1)
	{
		if(aver>=4) brOK=navigator.javaEnabled();
	}
}

function Chip(chipname,width,height)
{
	this.named=chipname;
	this.vx=vmin+vmax*Math.random();
	this.vy=vmin+vmax*Math.random();
	this.w=width;
	this.h=height;
	this.xx=0;
	this.yy=0;
	this.timer1=null;
}

function movechip(chipname)
{
	if (stop!=1)
	{
		if(brOK)
		{
			eval("chip="+chipname);
			if(!mie)
			{
				pageX=window.pageXOffset;
				pageW=window.innerWidth;
				pageY=window.pageYOffset;
				pageH=window.innerHeight;
			}else{
				pageX=window.document.body.scrollLeft;
				pageW=window.document.body.offsetWidth-8;
				pageY=window.document.body.scrollTop;
				pageH=window.document.body.offsetHeight;
			}
			chip.xx=chip.xx+chip.vx;
			chip.yy=chip.yy+chip.vy;
			//chip.vx+=vr*(Math.random()-0.5);
			//chip.vy+=vr*(Math.random()-0.5);
			//if(chip.vx>(vmax+vmin))	chip.vx=(vmax+vmin)*2-chip.vx;
			//if(chip.vx<(-vmax-vmin)) chip.vx=(-vmax-vmin)*2-chip.vx;
			//if(chip.vy>(vmax+vmin)) chip.vy=(vmax+vmin)*2-chip.vy;
			//if(chip.vy<(-vmax-vmin)) chip.vy=(-vmax-vmin)*2-chip.vy;
			
			//if(chip.xx<=pageX)
			{
				chip.xx=pageX;
				chip.vx=vmin+vmax*Math.random();
			}
			//if(chip.xx>=pageX+pageW-chip.w)
			{
				chip.xx=pageX+pageW-chip.w;
				chip.vx=-vmin-vmax*Math.random();
			}
			if(chip.yy<=pageY)
			{
				chip.yy=pageY;
				chip.vy=vmin+vmax*Math.random();
			}
			if(chip.yy>=pageY+pageH-chip.h)
			{
				chip.yy=pageY+pageH-chip.h;
				chip.vy=-vmin-vmax*Math.random();
			}
			if(!mie)
			{
				eval("document."+chip.named+".top ="+chip.yy);
				eval("document."+chip.named+".left="+chip.xx);
			}else{
				eval("document.all."+chip.named+".style.pixelLeft="+chip.xx);
				eval("document.all."+chip.named+".style.pixelTop ="+chip.yy);
			}
			chip.timer1=setTimeout("movechip('"+chip.named+"')",speed);
		}
	}else
	chip.timer1=setTimeout("movechip('"+chip.named+"')",speed);
	}
	function stopme(chipname)
	{
		if(brOK){ eval("chip="+chipname);
		if(chip.timer1!=null)
		{
			clearTimeout(chip.timer1)
		}
	}
}

function allyes1()
{
	if (num==0)
	{
		checkbrOK();
		allyes=new Chip("allyes",970,100);
		if(brOK)
		{
			movechip("allyes");
		}
	}
	num++;
}


if (ns)
{
	document.write("<layer name='allyes' visibility=\"show\" onload='allyes1()' >");
	document.write("<layer name='leftdown' visibility=\"hide\" onMouseOver='document.layers.allyes.visibility=\"hide\";document.layers.leftdown.visibility=\"show\";stop=1;' onMouseOut='document.layers.leftdown.visibility=\"hide\"; document.layers.allyes.visibility=\"show\";stop=0;'><a href='http://gamezone.qq.com/mini/mini.shtml' target='_blank'><dd><img src='" + pic2 + "'border='0'></a> </dd><dt></dt></layer>");
	document.write("<a HREF='http://qqtang.qq.com/coobie/baoming.htm' target='_blank' onMouseOut='MM_swapImgRestore();stop=0;document.layers.leftdown.visibility=\"hide\";document.layers.allyes.visibility=\"show\";stop=0;' onMouseOver='MM_swapImage(\"Image1\",\"\",\""+ pic2 + "\",1);stop=1;document.layers.leftdown.visibility=\"show\";document.layers.allyes.visibility=\"hide\";'><dd><img SRC='" + pic1 + "' border='0' name='Image1'></a></dd></layer>");
}else if (ie){
	document.write("<div ID='allyes' STYLE='position:absolute;'>");
	document.write("<div id='leftdown' style='position:absolute; left:0; top:0; z-index:1; visibility: hidden' onMouseOver='document.all.leftdown.style.visibility=\"visible\";document.all.allyes.style.visibility=\"hidden\";stop=1;document.all.dragObj.style.display=\"\";move=1;' onmousemove='mouseMove()' onMouseOut='document.all.leftdown.style.visibility=\"hidden\";document.all.allyes.style.visibility=\"visible\";stop=0;document.all.dragObj.style.display=\"none\"'><a href='http://qqtang.qq.com/coobie/baoming.htm' target='_blank'><dd><img src='"+ pic2 +"' onload='allyes1()' border='0'></a></dd><dt></dt></div>");
	document.write("<div id='dragObj' style='position: absolute; left:0; top:0; z-index:100;display:none;visibility:visible'><dd></dd></div>"); document.write("<a HREF='' target='_blank' onMouseOut='MM_swapImgRestore();stop=0;' onMouseOver='MM_swapImage(\"Image1\",\"\",\""+ pic2 +"\",1);stop=1;'><dd><img SRC='"+ pic1 +"' border='0' name='Image1' onMouseOver='document.all.leftdown.style.visibility=\"visible\";document.all.allyes.style.visibility=\"hidden\";stop=1;' onMouseOut='document.all.leftdown.style.visibility=\"hidden\";document.all.allyes.style.visibility=\"visible\";stop=0;'></a></dd></div>");
}