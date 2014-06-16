
var markers;
var map;
var sites = [];
var infoTabs = [];
var htmls = [];

var n = 1;

function sendBack(marker,b) {
	return GOverlay.getZIndex(marker.getPoint().lat())-n*10000;
	}

function soilmore() {
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","soilDetails.jsp",false);
	xmlhttp.send(null);
	
	var resText = xmlhttp.responseText;
	document.getElementById("center").innerHTML = resText;
	
}

function microbesmore() {
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","microbesDetails.jsp",false);
	xmlhttp.send(null);
	
	var resText = xmlhttp.responseText;
	document.getElementById("center").innerHTML = resText;
	
}

function plantsMore() {
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","plantDetails.jsp",false);
	xmlhttp.send(null);
	
	var resText = xmlhttp.responseText;
	document.getElementById("center").innerHTML = resText;
	
}


function addMarker( latitude, longitude, description, id)
{
	
	var markerIcon = new GIcon();
	markerIcon.image = 'images/image.png';
	markerIcon.printImage = 'images/printImage.gif';
	markerIcon.mozPrintImage = 'images/mozPrintImage.gif';
	markerIcon.iconSize = new GSize(32,37);
	markerIcon.shadow = 'images/shadow.png';
	markerIcon.transparent = 'images/transparent.png';
	markerIcon.shadowSize = new GSize(51,37);
	markerIcon.printShadow = 'images/printShadow.gif';
	markerIcon.iconAnchor = new GPoint(0,37);
	markerIcon.infoWindowAnchor = new GPoint(16,0);
	markerIcon.imageMap = [29,0,30,1,31,2,31,3,31,4,31,5,31,6,31,7,31,8,31,9,31,10,31,11,31,12,31,13,31,14,31,15,31,16,31,17,31,18,31,19,31,20,31,21,31,22,31,23,31,24,31,25,31,26,31,27,31,28,31,29,30,30,29,31,23,32,22,33,21,34,20,35,19,36,12,36,11,35,10,34,9,33,8,32,2,31,1,30,0,29,0,28,0,27,0,26,0,25,0,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,0,16,0,15,0,14,0,13,0,12,0,11,0,10,0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,1,1,2,0];

	
	 
	var marker = new GMarker(new GLatLng(latitude, longitude), {icon:markerIcon, zIndexProcess:sendBack, title:"hello"});
	map.addOverlay(marker);
	 
	sites[id] = marker;
		
	htmls[id] = description;

	
	
	var tab1 = new GInfoWindowTab("General", '<div id="tab1" class="data2" style="width:450px;"> '+description+' </div>');
	var tab2 = new GInfoWindowTab("Soil", '<div id="detailmap" style="font-size:1.3em;"><div class="normalHeader">Soil Characteristics</div><div><img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Data</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Caney Fork Soil Data &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Soil Description  &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Soil Samples<br/><br/> <img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Analysis</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Gravimetric Analysis  &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Pair-wise Correlation  &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Integration <br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Regression  &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Soil Fertility Comparison <br/><br/><img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Download</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Raw Data &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Analysis Data &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Images  </div><div style="float:right;"><a href="javascript:soilmore();"><img src="images/more_01.gif" style="text-align:right;"/></a></div></div>');
	var tab3 = new GInfoWindowTab("Weather", '<div id="detailmap"><div class="normalHeader">Weather Data</div><div>      </div><div style="float:right;"><a href="javascript:weatherMore();"><img src="images/more_01.gif" style="text-align:right;"/></a></div></div>');
	var tab4 = new GInfoWindowTab("Plant", '<div id="detailmap"><div class="normalHeader">Plant Data</div>   <div><img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Data</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Poplar Root Ids, Weights, Locations </div>         <div style="float:right;"><a href="javascript:plantsMore();"><img src="images/more_01.gif" style="text-align:right;"/></a></div></div>');
	var tab5 = new GInfoWindowTab("Microbes", '<div id="detailmap" style="font-size:1.3em;"><div class="normalHeader">Microbes (Rhizosphere and Endophytes)</div><div><img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Data</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Community Structure &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> 454 Sequence &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Isolate PDO1-076 <br/><br/> <img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Analysis</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> ANOVA  &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Correlation  &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Regression <br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Hierarchical Clustering <br/><br/><img src="images/pointer.gif" style="vertical-align:middle;"/> &nbsp; <b>Download</b><br/> &nbsp; &nbsp; <img src="images/Pointer.png"  style="vertical-align:middle;" /> Isolate PDO1-076 &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> 454 Sequence Data &nbsp; &nbsp; <img src="images/Pointer.png" style="vertical-align:middle;"/> Analysis Data  </div><div style="float:right;"><a href="javascript:microbesmore();"><img src="images/more_01.gif" style="text-align:right;"/></a></div></div>');
	infoTabs[id] = [tab1,tab2,tab3, tab4, tab5];

	GEvent.addListener( marker, 'click', function() {
		marker.openInfoWindowTabsHtml(infoTabs[id]);}
	);
}

function showInfoWindow(id) {
	sites[id].openInfoWindowTabsHtml(infoTabs[id]);
	
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","generalDetails.html",false);
	xmlhttp.send(null);
	
	var resText = xmlhttp.responseText;
	document.getElementById("center").innerHTML = resText;
	
}

String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}



function init() {
	var startzoom = 13;
	
	
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","locateBackend.jsp",false);
	xmlhttp.send(null);
	
	var resText = xmlhttp.responseText;
	resText = resText.trim();
	//alert(resText);
	markers = eval('(' + resText + ')');
	
	
    var location = new GLatLng(markers[1].latitude, markers[1].longitude);
 	map = new GMap2(document.getElementById("map"));
	map.setCenter(location, startzoom);
	map.addControl(new GSmallMapControl());
	map.addControl(new GMapTypeControl());
	map.addMapType(G_PHYSICAL_MAP);
	map.enableContinuousZoom();
	map.enableScrollWheelZoom();	
	
	for( id in markers)
	{
		addMarker(markers[id].latitude, markers[id].longitude, markers[id].html, id);
		document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + "<li><a href='javascript:showInfoWindow("+id+");' title='title'>"+markers[id].locationTitle+"</a></li>"; 
	}
}

window.onload = init;
window.onunload = GUnload;