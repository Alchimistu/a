/** Erowid Message Lib has basic cookie function and xml http request to tell the server if the cookie setting worked.
 * 
 *
 * @author  Earth
 * @version 1.0
 * @copyright 2004 erowid.org
 * @package ErowidLib-Utils
*/

var agt = navigator.userAgent.toLowerCase();
var is_ie = (agt.indexOf('msie') != -1);
var is_ie5 = (agt.indexOf('msie 5') != -1);

/** SendQuietRequest is the main public function
* @param URL The URL to send the QuietRequest to, automatically appends &QuietRequest=1
* @return String Returns the response text from the URL, can be absurdly long if the CGI returns the whole text of an HTML page.
*/
var XMLHTTP = null;
function SendQuietRequest(url) 
{
		XMLHTTP = InitHTTPRequestObject(DefaultHandler);
		var rval = null;
//		var UniqueID = (new Date).getTime() + (Math.random() * 1000);
		if (XMLHTTP) {
			DoHTTPGET(XMLHTTP, url + "&QuietRequest=1");
//			rval = XMLHTTP.responseText;
		}
		return rval;
}

function DefaultHandler() 
{
  // this function is handed off as a place holder for the onload and onerror and async 
  //alert(XMLHTTP.responseText);
}


/*  There's code highlighting for a number of languages.
InitHTTPRequestObject(Handler) is used internally and is not called by outside users of this library.
*/
function InitHTTPRequestObject(MyHandler) 
{
	var rval = null;
	if (window.XMLHttpRequest) {
		  rval = new XMLHttpRequest();
		  rval.onload = MyHandler;
		  rval.onerror = MyHandler;
	}
	else {
		try {   rval = new ActiveXObject("Microsoft.XMLHTTP");	}
		catch (e) { 
			try { rval = new ActiveXObject("Msxml2.XMLHTTP"); } 
			catch (e) { rval = false; } 
		}
	}
	if (rval) {
		rval.onreadystatechange = MyHandler;
	}
	if (! rval) { 
//alert("MSIE cannot use this function without enabling active scripting and activeX controls");
	}
//	alert("xmlhttp: " + rval);
	return rval;
}

function DoHTTPGET(XMLHTTP, url) 
{
  try {
//if (is_ie) { alert("here"); }
	  	XMLHTTP.open('GET', url, true); // true/false for async
		XMLHTTP.send(null);
//		var resp = XMLHTTP.responseText;
//		var PrintResponse = resp ? resp.substr(0,1024) : "";
			//alert("response: " + PrintResponse);
			//alert("status: " + XMLHTTP.status);
//			return PrintResponse; //??
return null;
// if (is_ie) { alert ("here"); }
  }
  catch (e) {
//    alert("DoHTTPGet: (Mozilla) - " + e);
    return null;
  }					
}


/**
 * Sets a cookie for N days
**/
function setCookieForDays(CookieName,CookieValue,expDays)
{
  var exp = new Date();
  exp.setTime(exp.getTime() + (expDays*86400000)); // milliseconds in a day ?
  var domain = document.domain;
  setCookie(CookieName, CookieValue,exp,"/", domain , null);
}	

function areCookiesWorking()
{
	var Rval = false;
	setCookieForDays("test_cookie","test_value",1);
	var MyVal = getCookie("test_cookie","invalid_value");
	if (MyVal == "test_value") {		Rval = true;
	}
	else{
		 //alert("cookie setting failed?");
	}
	return Rval;
}
			
/**
 * Sets a Cookie with the given name and value.
 *
 * name       Name of the cookie
 * value      Value of the cookie
 * [expires]  Expiration date of the cookie (default: end of current session)
 * [path]     Path where the cookie is valid (default: path of calling document)
 * [domain]   Domain where the cookie is valid
 *              (default: domain of calling document)
 * [secure]   Boolean value indicating if the cookie transmission requires a
 *              secure transmission
 */
function setCookie(name, value, expires, path, domain, secure)
{
//  alert("SetCookie: " + name + " = " + value);
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
//		alert(document.cookie);
}
	
	
/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 */
function getCookie(name, defaultValue)
{
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	var Rval = defaultValue;
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0) return Rval;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    Rval = unescape(dc.substring(begin + prefix.length, end));
	return Rval;
}
