/* Copyright © 2008  WOT Services Oy <info@mywot.com> */
var wotprotocol = (document.location.protocol == "https:") ? "https://" : "http://";
var wotbase = wotprotocol + "api.mywot.com/widgets";
var wotinject = function(src) {
	document.write("<script type=\"text/javascript\" src=\"" + wotbase + "/" + src + ".js\"></script>");
};
var wotjquery = typeof(jQuery) != "undefined";
if (!wotjquery) {
	wotinject("jquery");
}
wotinject("ratingwidget");
