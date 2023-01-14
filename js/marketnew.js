/******************************************************************************
* Cookie functions.                                                           *
******************************************************************************/

function setCookie (name, value) {

  //document.cookie = name + "=" + escape(value) + "; path=/; domain=qqshow.qq.com";
  document.cookie = name + "=" + value + "; path=/; domain=qq.com";//expires=Sunday,30��Oct��2005 23:12:00 GMT";
  //alert(document.cookie);
}

function getCookie(name) {

  var search;

  search = name + "="
  offset = document.cookie.indexOf(search) 
  if (offset != -1) {
    offset += search.length ;
    end = document.cookie.indexOf(";", offset) ;
    if (end == -1)
      end = document.cookie.length;
    return unescape(document.cookie.substring(offset, end));
  }
  else
    return "";
}

function deleteCookie(name) {

  setCookie(name, "");
}

function checkExistItem(infoArray, cartLength)
{
  var tmpArray = new Array;
  for (var i = 0; i < cartLength; i++) 
  {
    tmpArray = getItemsInfo(i);
	if (tmpArray[0] == infoArray[0])
	return i;
  }

  if (i == cartLength)
	return -1;
}

function addItem(id , name ,price)
{  
	var infoArray = new Array;
	var cartLength = getCookie('cartLength');
	if(cartLength  == ""||cartLength==0) 
	{
	    cartLength = 0;
	    setCookie('cartLength', cartLength);
	}
	else
	{
		alert("�Ѿ�ѡ���˵���,һ��ֻ�ܹ���һ������!");
	    window.location.reload("/shopping/pay.htm");
		return;
	}
	
	setCookie('itemId', id);

	infoArray[0] = name;	
	infoArray[1] = price;
	var i = checkExistItem(infoArray, cartLength);
	
	if(i != -1)
	{
	    alert("�Ѿ������˵���!");
	    //window.location.reload();
		return;
	}

	saveItemsinfo(infoArray, cartLength);
	cartLength ++;
	setCookie('cartLength', cartLength);
	alert("��ȷ���Ƿ���õ���");
	window.location.reload("/shopping/pay.htm");
	
	//openCart();
	return ;
}

function saveItemsinfo(infoArray, i)
{
	var itemsinfo = infoArray[0];
	for (var j = 1; j< 2; j ++)
	{
		itemsinfo = itemsinfo + '|' + infoArray[j];
	}
    eval("setCookie('items["+i+"]', itemsinfo );");
	return;
}

function openCart() 
{
   var url="/shopping/pay.htm"
   var cart;

   cart =window.open(url,"���ﳵ","menubar=no,toolbar=no,location=no,directories=no,status=no,width=403,height=307,left=10,top=100,scrollbars=yes");
   /*cart.focus();*/
}


function getItemsInfo(i)
{
	eval("var itemsinfo = getCookie('items["+i+"]');");
	var infoArray= itemsinfo.split('|');

	if(infoArray.length != 2)
		return -1;

	return infoArray;
}

function delAll()
{

  var cartLength = getCookie('cartLength');
  if((cartLength  == "") || (cartLength == 0))
      return;

  for (var i = 0; i < cartLength; i ++)
  {
      eval("deleteCookie('items["+i+"]')");
  }
  cartLength = 0;
  setCookie('cartLength', cartLength);
  
  var itemid = getCookie('itemId');
  if((itemid  == "") || (itemid == 0))
  return;
  
  itemid = 0;
  setCookie('itemId', itemid);

  window.location.reload("/shopping/qcard.htm");
}
/************************************************
 * �˺������±ߵ�֡����ʾ���ﳵ�Լ����ﳵ�ϵĲ�Ʒ
 ***********************************************/
function displayCart()
{
  var s = '';
  var rate = 12500;
  var totalCost = 0;
  var singletotalCost = 0;
  var totalgamecoin = 0;
  var singletotalgamecoin = 0;
  var id,name, price,quantity;
  var cartLength = getCookie('cartLength'); 
  var infoArray = new Array;
  if ((cartLength == "") || (cartLength == 0))
      return;
  for (var i = 0; i < cartLength; i++)
  {
	infoArray = getItemsInfo(i);
	if(infoArray == -1)
	{
		alert("ȡ���ﳵ��Ϣ����!");
		deleteCookie('cartLength');
		return;
	}
	name = infoArray[0];
	price = infoArray[1];
	quantity = 1;
	singletotalCost = price*quantity;
	totalCost = singletotalCost;
	
	s = s + name;
	s = s + '<font color="#FF0000">';
	s = s + price + '</font>';
	s = s + 'Q��';
  }
  document.write(s);
}
function displayExInfo()
{
  var exrate = 5;
  var rate = 12500;
  var s = '';
  var totalCost = 0;
  var singletotalCost = 0;
  var totalgamecoin = 0;
  var singletotalgamecoin = 0;
  var id,name, price,flag, quantity , hzrole , hzset,hzzone;
  var cartLength = getCookie('cartLength');  
  var infoArray = new Array;
  if ((cartLength == "") || (cartLength == 0))
      return;
  for (var i = 0; i < cartLength; i++)
  {

	infoArray = getItemsInfo(i);
	if(infoArray == -1)
	{
		alert("ȡ���ﳵ��Ϣ����!");
		deleteCookie('cartLength');
		return;
	}
	id = infoArray[0];
	name = infoArray[1];
	price = infoArray[2];	
	quantity = infoArray[3];
	singletotalCost = (price*quantity)/10;
	totalCost = totalCost + singletotalCost*10;
  }
	totalCost = totalCost/10;
    document.write(s);
}
