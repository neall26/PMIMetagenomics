
/*
 * GET home page.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var speciesCharacteristics  = require('../models/speciesCharacteristics.js');
var sampleMetadata = require('../models/sampleMetadata.js');
var studyMetadata = require('../models/studyMetadata.js');

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

exports.studyData = function(req, res) {
	studyMetadata.find({}, function(err, item){
		res.send(200, item);
	});
};
