
/*
 * GET home page.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var speciesCharacteristics  = require('../models/speciesCharacteristics.js');
var sampleMetadata = require('../models/sampleMetadata.js');
var studyMetadata = require('../models/studyMetadata.js');
var Forecast = require('forecast');
var request = require('request');






exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.details = function(req, res) {
  var objID = req.params.id;  
//var totalSearchParam = {};
//  var searchSampleID = 'ObjectId("53bd9f2360427cf470097cbe")';
  //totalSearchParam['sampleId'] = ObjectId("53bd9f2360427cf470097cf2");
  //console.dir(totalSearchParam);	
  //speciesCharacteristics.find(totalSearchParam, function(err, item){
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
	
	       // + lat +','+lng+',2013-05-06T12:00:00-0400';



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
	var forecast = new Forecast({
                service: "forecast.io",
                key: "7f182039e8e04bc3d28f255513be4726",
                units: "fahrenheit",
                cache: true,
                ttl:{
                        minutes: 27,
                        seconds: 45
                }
         });
        forecast.get([latitude, longitude, date], function(err, weather) {
                if(err) {
                        return console.dir(err);
                } else {
                		console.dir(weather.currently);
										res.send(200, weather);
                }
         });
};


