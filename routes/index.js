
/*
 * GET home page.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var speciesCharacteristics  = require('../models/speciesCharacteristics.js');
var sampleMetadata = require('../models/sampleMetadata.js');
var studyMetadata = require('../models/studyMetadata.js');
var Forecast = require('forecast');

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
		console.log(item);
		res.send(200, item);
	});
};

exports.studyData = function(req, res) {
	studyMetadata.find({}, function(err, item){
		res.send(200, item);
	});
};

exports.weather = function(req, res) {
        var latitude = req.params.latitude;
	var longitude = req.params.longitude;
	var date = req.params.samplingDate;
	var forecast = new Forecast({
                service: "forecast.io",
                key: "7f182039e8e04bc3d28f255513be4726",
                units: "celcius",
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
                        console.dir(weather);
			res.send(200, weather);
                }
         });
};

exports.newWeather = function(req, res) {
	var forecast = new Forecast({
	  service: 'forecast.io',
	  key: '7f182039e8e04bc3d28f255513be4726',
	  units: 'celcius',
	  cache: true,     
	  ttl: {
	    minutes: 27,
	    seconds: 45
	    }
	});

	forecast.get([-33.8683, 151.2086], function(err, weather) {
	  if(err) {
		console.dir(err);
		res.send(502, err);
	  } else {
	  	console.dir(weather);
		res.send(200, weather);
	  }
	});
	
}

