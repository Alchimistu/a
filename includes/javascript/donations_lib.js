

function GetSelectCurrentValue(SelectObject)
{		var Rval = null;
  		var SelIndex = SelectObject.selectedIndex;
		if (SelIndex >= 0)
		  	Rval = SelectObject.options[SelIndex].value;
		return Rval;
}
function SetRadioChecked(TargetValue)
{	
	var RadioObject = document.OrderForm.op1;
	return setRadioObjectCheckedValue(RadioObject, TargetValue);
}
function setRadioObjectCheckedValue(RadioObject, TargetValue) {
    var Rval = null;
//    alert("here: " + RadioObject.length);
	for (var i = 0; i < RadioObject.length; i++)  	
	{	var v1 = RadioObject[i].value;
//		alert("here: " + i + " : " + RadioObject[i].value);
	  	if (v1 == TargetValue)
		{       RadioObject[i].checked = true;
			  break;
		}
	}
	return Rval;
}
	
	function SetRadioCurrentValue(RadioObject, NewValue)
	{       var Rval = -1;
                for (var i = 0; i < RadioObject.length; i++)  
                {       var rchecked = RadioObject[i].checked;
                        if (rchecked == true)
                        {       RadioObject[i].value = NewValue;
				Rval = 1;
                                break;
                        }
                }
                return Rval;
      	}

		
		
		
	function GetCheckboxCurrentValue(Object, DefaultVal)
	{
	  var Rval = DefaultVal;
	  if (Object.checked == true) Rval = Object.value;
	  //alert("GetCheckboxCurrentValue: " + Rval);
	  return Rval;
	  
	}
	function GetRadioCurrentValue(RadioObject)
	{	var Rval = null;
		for (var i = 0; i < RadioObject.length; i++)
		{	var rchecked = RadioObject[i].checked;
			if (rchecked == true)
			{	Rval = RadioObject[i].value;
				break;
			}
		}
		return Rval;
	
	}

	function Select_GetStringFromValue(SelectObject,Value)
	{
	  	var Rval = "?????";
		var Index = GetSelectIndexByVal(SelectObject,Value);
		if (Index >= 0 )
		{	Rval = SelectObject.options[Index].text;
		}
		return Rval;
	}
	

	function GetSelectIndexByVal(SelectObject,Value)
		{
		  	var Rval = -1;
			var Len = SelectObject.length;
			for (var i = 0 ; i < Len ; i++)
			{	if (SelectObject.options[i].value == Value)
			  {	Rval = i; 
					break;
			  }
			}
			return Rval;
		}

	function SetSelectIndexByVal(SelectObject,Value)
	{
	  	var Rval = 0;
		var Len = SelectObject.length;
		for (var i = 0 ; i < Len ; i++)
		{
//alert("checking: " + SelectObject.options[i].value + " == " + Value);
			if (SelectObject.options[i].value == Value)
		  	{	SelectObject.selectedIndex = i;
				Rval = 1;
				break;
			}
		}
		return Rval;
	}

	function SetDonationSelectByVal(SelectObject,Value) 
	{
	  	var Rval = 0;
		var Len = SelectObject.length;
		for (var i = 0 ; i < Len ; i++)
		{
		  var myRegExp = new RegExp(".*\\^" + Value + "\\^\\d");
//alert("regexp: " + myRegExp + " against " + SelectObject.options[i].value);
			if (myRegExp.test(SelectObject.options[i].value) )
		  	{	SelectObject.selectedIndex = i;
				Rval = i;
				break;
			}
		}
		return Rval;

	}

function URLDecode(psEncodeString)
{
  // Create a regular expression to search all +s in the string
  var lsRegExp = /\+/g;
  // Return the decoded string
  return unescape(String(psEncodeString).replace(lsRegExp, " "));
}

	var _GET = new Array();
	function parseQueryString() {
	  var query = window.location.search.substring(1);
	  var parms = query.split('&');
	  for (var i=0; i<parms.length; i++) {
	  	var pos = parms[i].indexOf('=');
		if (pos > 0) {
		      var key = parms[i].substring(0,pos).toLowerCase();
		      var val = parms[i].substring(pos+1);
		      _GET[key] = URLDecode(val);
//alert("here1: " + key + " = "  + _GET[key]);			
		}
	   }
	}


		function GetFreeDivID(TargetDivID, StartingID, MaxID)
		{
				var Rval = -1;
				var iID, NewID;
				for (iID = StartingID; iID <= MaxID; iID++)
				{	NewID = TargetDivID + "-" + iID;
					var Element = document.getElementById(NewID);
					if (Element) { 
					  //alert("Found Element Already: " + Element.id + " OrderID: " + OtherRow.getAttribute("OrderID")); 
						continue; 
					}
					Rval = iID;
					break;
				}
				return Rval;
		}

		function GetAvailableIndex(TargetDivID, MaxIndices)
		{
		  	var Rval = -1;
			var i,NewDivID;
			
			for (i = 1; i < MaxIndices; i++)
			{	NewDivID = TargetDivID + i;
			//  alert("looking at newDivID: " + NewDivID );
				if (document.getElementById(NewDivID)) continue;
				Rval = i;
				break;
			}
			return Rval;
		}
		
		function Reload()
		{
		  	location.reload();
		}


	function SetRadioElementChecked(mElementID, mTrueFalse)
	{  
	  	var mRadioElement = document.getElementById(mElementID);
		if (mRadioElement) {
		  mRadioElement.checked = mTrueFalse;
		}
    }

