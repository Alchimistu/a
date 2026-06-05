
function trim(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
	if (/\S/.test(str.charAt(i))) {
	    str = str.substring(0, i + 1);
	    break;
	}
    }
    return str;
}
function trim1(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function IsEnterKey(e)
{
        var thing;
        if (typeof (e.which) != "undefined") { thing = e.which; }
        else if (typeof (window.event.keyCode) != "undefined")   { thing = window.event.keyCode; }
        var Rval = false;
		if (thing == 13) // 13 = return
        {       Rval = true;  }
        return Rval;
}

function eroShowHide(mId, mForce) {
  var mElement = document.getElementById(mId);
  var mDisplayStyle = "block";
  if (mForce ) {
	mElement.style.display = mForce;
  }
  else {
	mElement.style.display = (! mElement.style.display || mElement.style.display != 'block') ?  'block': 'none' ;
  }
}

var gShowBlockType = "block";

function eroShowHide2(mId, mBlockType, mForce) {
  var mElement = document.getElementById(mId);
  var mDisplayStyle = mBlockType;
  if (mForce ) {
	mElement.style.display = mForce;
  }
  else {
    mElement.style.display = (! mElement.style.display || mElement.style.display != mBlockType) ?  mBlockType : 'none' ;
  }
}
