function expandContractExp( whichLayer ) {
  if (document.getElementById(whichLayer).style.display == 'block')
  {
    document.getElementById(whichLayer).style.display = 'none'; 
    var eleStr = whichLayer + "Img";
    var element = document.getElementById(eleStr);
    element.src = "images/Pointer.png";
  }else{  
    document.getElementById(whichLayer).style.display = 'block';
    var eleStr2 = whichLayer + "Img";
    var element2 = document.getElementById(eleStr2);
    element2.src = "images/PointerDown.png";
    
  }
}

function justShow( whichLayer ) {
  document.getElementById(whichLayer).style.display = 'block';
}

function calcHeight()
{
	var the_height=document.getElementById('iframe1').contentWindow.document.body.scrollHeight;
	
	document.getElementById('iframe1').height = the_height;
	
}

function validateEmail(form_id,email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[form_id].elements[email].value;
   if(reg.test(address) == false) {
      return false;
   }
}

function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus();
		return false;
	}
	return true;
}

function notChecked( elem, helperMsg) {
	var checked=false;
	for (i=0; i< elem.length; i++){
		if (elem[i].checked==true){
			checked=true;
		}
	}
	if (checked == false) {
		alert(helperMsg);
		return false;
	}
	return true;
}

function notCheckedSilent( elem, helperMsg) {
	var checked=false;
	for (i=0; i< elem.length; i++){
		if (elem[i].checked==true){
			checked=true;
		}
	}
	if (checked == false) {		
		return false;
	}
	return true;
}
