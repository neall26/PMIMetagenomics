
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
	var latitude = req.params.lat;
	var longitude = req.params.lng;
	var date = req.params.date;
	var forecast2 = new Forecast({
		service: "forecast.io",
		key: "7f182039e8e04bc3d28f255513be4726",
		units: "fahrenheit",
		cache: true,
		ttl:{
					minutes: 27,
					seconds: 45
		}
	});
	forecast2.get([latitude, longitude, date], function(err, weather){
		if(err){
			console.log(err);
		} else {
			res.send(200, weather);
		}

	});
};



exports.weather = function(req, res) {
  var latitude = req.params.latitude;
	var longitude = req.params.longitude;
	var date = req.params.samplingDate;
	date = date.toString();
	date = date.substring(0,19);
	var apikey = "7f182039e8e04bc3d28f255513be4726";
	var url = "https://api.forecast.io/forecast/" + apikey + '/' + latitude + ',' + longitude + ',' + date;
	request(url, function(err, data){
		if(err){
			console.dir(err);
		} else {
			console.log(data.body);
			//res.send(200, data.body);
		}
	});
	
	
	/*var forecast = new Forecast({
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
         });*/
};


