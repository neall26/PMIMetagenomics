
/*
 * GET home page.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var speciesCharacteristics  = require('../models/speciesCharacteristics.js');
var sampleMetadata = require('../models/sampleMetadata.js');
var studyMetadata = require('../models/studyMetadata.js');
var request = require('request');






exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.details = function(req, res) {
  var objID = req.params.id;  
  speciesCharacteristics.find({sampleId: objID}, function(err, item){
		res.send(200, item);
	});
};

exports.map = function(req, res) {
	res.render('map');
};

exports.mapData = function(req, res) {
	var objID = req.params.id;
	sampleMetadata.find({studyId: objID}, function(err, item){
		res.send(200, item);
	});
};
exports.sampleData = function(req, res) {
	var objID = req.params.id;
	sampleMetadata.find({_id: objID}, function(err, item){
		res.send(200, item);
	});
};

exports.studyData = function(req, res) {
	studyMetadata.find({}, function(err, item){
		res.send(200, item);
	});
};

exports.forecast = function(req, res) {
	var apikey= "7f182039e8e04bc3d28f255513be4726";
	//var lat = '-33.8683';
	//var lng = '151.2086';
	//var time = '2013-05-06';
	var lat = req.params.latitude;
	var lng = req.params.longitude;
	var time = req.params.samplingDate;
	console.log(time);
	console.log(new Date(timestamp(time)));
	



	var url = 'https://api.forecast.io/forecast/' + apikey + '/'
	        + lat +','+lng+',790905600';



	request(url, function(err, data) {
	        if (err) {
	                console.dir(err);
	        } else {
	                console.dir(data.body);
	        }

	});	


};



exports.weather = function(req, res) {
  var latitude = req.params.latitude;
	var longitude = req.params.longitude;
	var date = req.params.samplingDate;
	date = date.toString();
	date = date.substring(0,10);
	date = date.replace(/-/g,'');
	//var apikey = "f5174f9a4c9b08d9";
	//console.log(date);
	//console.log(longitude);
	//console.log(latitude);
	//var apikey = "7f182039e8e04bc3d28f255513be4726";
	//var url = "https://api.forecast.io/forecast/" + apikey + '/' + latitude + ',' + longitude + ',' + date;
	var url = "http://api.wunderground.com/api/f5174f9a4c9b08d9/history_" + date + "/q/" + latitude + "," + longitude + ".json"
	request(url, function(err, weather){
		if(err){
			console.dir(err);
		} else {
			console.dir(weather.body);
			res.send(200, weather);
		}
	});
};

exports.uploadRender = function(req, res) {
	res.render('uploader');
};

