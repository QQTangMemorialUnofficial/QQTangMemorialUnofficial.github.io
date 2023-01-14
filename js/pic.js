document.write('<STYLE TYPE="text/css">.imgTrans{ filter:revealTrans(duration=0,transition=22) }</STYLE>');

//Uncomment the next line for fading rollovers instead of dissolving:
//document.write('<STYLE TYPE="text/css">.imgTrans{ filter:blendTrans(duration=0.4) }</STYLE>');

var onImages=new Array();
function Rollover(imgName, imgSrc)
{
	onImages[imgName] = new Image();
	onImages[imgName].src = imgSrc;
}

function turnOn(imgName){ 
	if(document.images[imgName].filters != null)
		document.images[imgName].filters[0].apply();
	document.images[imgName].offSrc = document.images[imgName].src;
	document.images[imgName].src    = onImages[imgName].src;
	if(document.images[imgName].filters != null)
		document.images[imgName].filters[0].play();
}

function turnOff(imgName){ 
	if(document.images[imgName].filters != null)
		document.images[imgName].filters[0].stop();
	document.images[imgName].src = document.images[imgName].offSrc;
}

//Specify name of participating images, plus paths to their onMouseover replacements:
Rollover('new',  '/images/page2/1x.gif');
Rollover('exp',  '/images/page2/24x.gif');
Rollover('txt',  '/images/page2/25x.gif');
Rollover('tougao',  '/images/page2/8x.gif');

Rollover('actionday',  '/images/page2/button_06x.gif');
Rollover('actionmonth',  '/images/page2/button_05x.gif');
Rollover('actionall',  '/images/page2/button_04x.gif');

Rollover('download',  '/images/page2/button_11x.gif');
Rollover('tutorial', '/images/page2/button_12x.gif');
Rollover('operation', '/images/page2/button_13x.gif');
Rollover('double', '/images/page2/button_14x.gif');
Rollover('faq', '/images/page2/button_15x.gif');

Rollover('story',  '/images/page2/button_21x.gif');
Rollover('role', '/images/page2/button_22x.gif');
Rollover('map', '/images/page2/button_23x.gif');
Rollover('item', '/images/page2/button_24x.gif');
Rollover('rank', '/images/page2/button_25x.gif');
Rollover('mode', '/images/page2/button_26x.gif');

Rollover('article',  '/images/page2/button_31x.gif');
Rollover('pic', '/images/page2/button_32x.gif');
Rollover('wallpaper', '/images/page2/button_33x.gif');
Rollover('other', '/images/page2/button_34x.gif');
Rollover('bbs', '/images/page2/button_35x.gif');

Rollover('shopintro',  '/images/page2/button_51x.gif');
Rollover('qcard', '/images/page2/button_52x.gif');
Rollover('package', '/images/page2/button_53x.gif');