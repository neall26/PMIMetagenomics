
/*
 * GET home page.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var speciesCharacteristics  = require('../models/speciesCharacteristics.js');
var sampleMetadata = require('../models/sampleMetadata.js');

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
	console.dir(item);
	res.render('details', {speciesCharacteristics: item});
  }).sort({abundance : 1});
};

exports.map = function(req, res) {
	res.render('map');
};

exports.mapData = function(req, res) {
	sampleMetadata.find({}, function(err, item){
		res.send(200, item);
	});
};
