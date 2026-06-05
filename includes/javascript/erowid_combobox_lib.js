/* copyright 2007 erowid.org */
var SelectDataOriginals = new Array();
var LastCheckedData = new Array();
var maxNumToShow = 1000;
var gUseTitleFieldForSearch = 1;
var gIsMSIE = 0;
var gSelectDataAlwaysShow  = new Array();
/*

-- text input box
  * as typing occurs, the select list is filtered
-- select
   * filtered based on text typed into input
   

A text field needs to be associated with a select using the eComboRegexpMatch event

<input type="text" id="move-image-topic-combo-text" onkeyup="eComboBoxRegexpMatch(event, 'move-image-topic-select')" size="15">&nbsp;
<select  name="/image-data/image/category" id="move-image-topic-select">
<option value="">- - - - - -</option>
<!-- populate select list -->
</select>
<input type="button" value="move" onclick="moveImage();">
</div>

Add New Tag: <input type="text" name="tag-new" value="" id="tag-new-text" size="60"><br>
Tag Combo Box
<input type="text" id="tag-combo-text" onkeypress="ifEnterThenDoSomething(event,'AddToTags()');" onkeyup="eComboBoxRegexpMatch(event, 'tag-combo-select')" size="15">&nbsp;
<select  name="tag-combo-select" id="tag-combo-select">
<option value="">- - - - - -</option>
<? foreach ($mFullTagList as $iTagName) { ?>
  <option value="<?=$iTagName?>"><?=$iTagName?></option>  
<? } ?>
</select>
<input type="button" value="Add To Tags" onclick="AddToTags();">
</div>


*/


/*
onkeypress="ifEnterThenDoSomething(event,'AddToTags()');"

*/
function ifEnterThenDoSomething(mEvent, mFunctionName) {

  if (IsEnterKey(mEvent)) {
  	eval(mFunctionName);
  }
  return false;
}


  
function eComboBoxShowError(Err)
{
  	alert("Erowid ComboBox Error: " + Err);
}

/**
 prepareComboBox is called automatically when eComboBoxRegexpMatch is called

**/
function eComboBoxPrepare(SelectName) {


    //    alert("eComboBoxPrepare(" + SelectName + ") ");

  	//var SelectName = ParentName + '.select';	

    var MySelect = document.getElementById(SelectName);
  // if we're the first one to do anything, let's build the list of options.
  if (!MySelect) { eComboBoxShowError("Select not found : " + SelectName); return; }
	if ( ! SelectDataOriginals[SelectName])    { 

		var Length = MySelect.options.length;
//		alert(SelectName + " length: " + Length);
		var myData = new Array();

		gSelectDataAlwaysShow[SelectName] = new Array();;
		for (var i = 0; i < Length ; i++)
		{
		  	var mySearchString = MySelect.options[i].text;
			
			myData[i] = new Array();
			myData[i]['Text'] = MySelect.options[i].text;
			myData[i]['Value'] = MySelect.options[i].value;
			myData[i]['title'] = "";

			//@@@@
			if (MySelect.options[i].getAttribute('title') ) {
				if (gUseTitleFieldForSearch) {
					mySearchString += " " + MySelect.options[i].getAttribute('title');
				}
				myData[i]['title'] = MySelect.options[i].getAttribute('title');
			}
			if (gIsMSIE) {
			    myData[i]['object'] = MySelect.options[i];
			}
			else {

			    myData[i]['object'] = MySelect.options[i].cloneNode(true);
			}
			if (MySelect.options[i].getAttribute("comboskip") =="true") {
			  		  mySearchString = "";
			}

			   gSelectDataAlwaysShow[SelectName][i] = 0;
			if (MySelect.options[i].getAttribute("alwaysshow") =="true") {

			   gSelectDataAlwaysShow[SelectName][i] = 1;
			}
	//		if (MySelect.options[i].value == 268) {		  	alert(" MySearchString :  " + myString); }
			myData[i]['SearchText'] = mySearchString;
			
		}
		SelectDataOriginals[SelectName] = myData;
//			alert("hmm entry 1 : " + SelectDataOriginals[SelectName][1]);

    }
//	alert("preparing : " + SelectName);

}

function eComboBoxResetSelect(mSelectID, mTextFieldID) {
  
  	var mTextField = document.getElementById(mTextFieldID);
	 mTextField.value = "";
	 return eComboBoxFilter(mSelectID, mTextFieldID,""); 
}

/**

**/
function eComboBoxRegexpMatch(event, SelectName) {

    var controller = (event.target) ? event.target : event.srcElement;
    if (! event.target) { gIsMSIE = 1;} 
	var ParentName = controller.id;
	//var SelectName = controller.id + '.select';
//	alert ("regexpMatch: parentName: " + ParentName + " SelectName: " + SelectName);	
    var mySelect = document.getElementById(SelectName);
	if (! mySelect)	{
	  	alert("ErowidComboBox: Not sure why, but the ComboBox didn't initialize.. :( ");
		return false;
	}
	
	var keycode = event.keyCode;
	//alert("keycode: " + keycode);
	if (keycode == 38) 
	    {if (mySelect.selectedIndex > 0) {
		    mySelect.selectedIndex--;
		    mySelect.onchange();
		}
	  return false;
	}
	else if (keycode == 40)
	{
	    if (mySelect.selectedIndex < (mySelect.length -1 ) ) { 
		mySelect.selectedIndex++;
		mySelect.onchange();
	    }
	  return false;
	}
	
    var text = controller.value;
	return eComboBoxFilter(SelectName, controller.id, text);
}	

/**
	Filter the select list identified by the ID by the text supplied.
**/
function eComboBoxFilter(mSelectID, mTextFieldID, mFilterText)
{

  	var NumMatchesField = document.getElementById(mTextFieldID+'.matches');
    var SearchPattern = document.getElementById(mTextFieldID+'.pattern');
  	var mComboSelect = document.getElementById(mSelectID);
	
	if (! SelectDataOriginals[mSelectID] ) { eComboBoxPrepare(mSelectID); }
	if (! SelectDataOriginals[mSelectID])
	{
		alert("ErowidComboBox: Not sure why, but the ComboBox didn't initialize.. :( ");
		return false;
	}
	
	// if we've already checked this, ignore.
	if (! LastCheckedData[mSelectID] ) 
	{	LastCheckedData[mSelectID] = mFilterText;
	}
	else if (LastCheckedData[mSelectID] == mFilterText) 
	{// alert("already checked this..");
	  return false; 
	}
	LastCheckedData[mSelectID] = mFilterText;

    if (!mFilterText)
    {
        mFilterText = ".\*";
    }
//	alert("regexpMatch: " + mFilterText);


    var re = new RegExp(mFilterText,"i");
    if (SearchPattern) SearchPattern.firstChild.nodeValue = re;
	
	var MyOriginalData = SelectDataOriginals[mSelectID];
//    matches = MyOriginalData.childNodes.length;
    mComboSelect.innerHTML="";

	var NumMatches = 0;
	var OrigLength = MyOriginalData.length;
//	alert("OrigLength " + OrigLength);
	while (mComboSelect.length > 0) {
	    mComboSelect.remove(0);
	}
	//	mComboSelect.length = 0;

	var Text = null;
	var Val = null;
	if (gIsMSIE) {
	    //	        alert("combo len: " + mComboSelect.length);
	    //	    mComboSelect.appendChild(MyOriginalData[0]['object']);
	}
	for (var i= 0; i < OrigLength; i++)
	{
	  	var SelectSearch = MyOriginalData[i]['SearchText'];
		//alert("SelectEntry " + i + " ] " + SelectEntry);

        if(gSelectDataAlwaysShow[mSelectID][i] == 1 || re.test(SelectSearch))
        {	//Val = MyOriginalData[i]['Value'];
		  	//Text = MyOriginalData[i]['Text'];
		        // old mComboSelect.options[NumMatches] = new Option(Text,Val);
				//			mComboSelect.options[NumMatches].setAttribute("title", SelectSearch);
				//			mComboSelect.options[NumMatches].setAttribute("title", MyOriginalData[i]['title']);

	    //	    	    				mComboSelect.options[NumMatches] = MyOriginalData[i]['object']; //(ie 6 doesn't like this)
	    if (gIsMSIE) { // gawd msie sucks
			mComboSelect.add(MyOriginalData[i]['object'])
			    }
			else {
			    mComboSelect.appendChild(MyOriginalData[i]['object']);
			}
		        NumMatches++;
			// stop if max length is reached.
			if(NumMatches == maxNumToShow)
			{
			  break;
			}
        }
    }

	if (mComboSelect.options.length > 0)  { 
	  	mComboSelect.options[0].selected = true;
		if (mComboSelect.onchange) {
		    mComboSelect.onchange();
		}
	}
	if (mComboSelect.options.length == 0) {
	    var mNoMatchOption = new Option("No Match","");
	    // mComboSelect.appendChild(mNoMatchOption);
	    mComboSelect.options[0] = new Option("No Match",""); //ie6 doesn't like it
	}
	
	 if (NumMatchesField) NumMatchesField.firstChild.nodeValue = NumMatches;
//alert("Num Matches: " + NumMatches);
	return true;
}


