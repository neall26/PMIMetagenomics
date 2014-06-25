var lodash = require('lodash');
var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('connected successfully');
});

var sampleMetadata = require('../models/sampleMetadata.js');

var header = [
        'studyId',
        'sampleId',
        'sampleName',
        'samplingDate',
        'domain',
        'siteId',
        'latitude',
        'longitude',
        'hostName',
        'hostTissue',
        'taxonId',
        'dbh',
        'distanceToRiver',
        'distanceToPopulus',
        'distanceToRoots',
        'proximalTrees',
        'proximalPoplarTrees',
        'canopyWidth',
        'basalArea',
        'basalAreaPerHectareTree',
        'basalAreaPerHectarePopulus',
        'basalAreaDominance',
        'soilMoisture',
        'caco3',
        'cacl2',
        'waterPh',
        'sand',
        'silt',
        'clay',
        'carbon',
        'nitrogen',
        'oM',
        'calcium',
        'potassium',
        'magnesium',
        'manganese',
        'phosphorus',
        'zinc'
];


var csv = require('csv');
csv()
.fromPath(__dirname+'/sampleMetadata.csv', { delimiter: '\t'})
.transform( function(row){
  return row;
})
.on('data', function(row,index2){
		var newRow = new sampleMetadata();
		newRow = lodash.zipObject(header, row);
		console.log(newRow);
		newRow.save();
})
.on('end', function(count){
  console.log('Number of lines: '+count);
	process.exit(0);
})
.on('error', function(error){
  console.log(error.message);
});
