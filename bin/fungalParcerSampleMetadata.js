var lodash = require('lodash');
var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var uuid = require('uuid');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('connected successfully');
});

var sampleMetadata = require('../models/sampleMetadata.js');
var studyMetadata = require('../models/studyMetadata.js');
var header = [
        'sampleId',
        'sampleName',
	'sampleGoldId',
        'samplingDate',
        'domain',
	'analysisType',
	'ecosystemSubtype',
	'sampleGenomeSize',
	'sampleGeneCount',
	'sampleScaffoldCount',
        'siteId',
        'latitude',
        'longitude',
	'altitude',
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

var saveArray = [];
var csv = require('csv');
if(process.argv.length < 4){
	console.log('required input missing');
	process.exit(0);
}


studyMetadata.find({studyId: process.argv[2]}, function(err, item){
	if(err){
		console.log(err);
	}else{



csv()
.fromPath(process.argv[2], { delimiter: '\t'})
.transform( function(row){
  return row;
})
.on('data', function(row,index){
		newRow = new sampleMetadata();
		newObj = lodash.zipObject(header, row);
		lodash.assign(newRow, newObj);
		newRow.studyId = item[0].id;
		saveArray.push(newRow);
})
.on('end', function(count){
  saveArray.forEach(function(item, index){
	if(index +1 == saveArray.length){
		item.save(function(err,item){
			if(err) {
				console.log(err);
				process.exit(0);
			} else {
				console.log(item);
				process.exit(0);
			}
		});
	} else {
		item.save(function(err, item){
			if (err) {
				console.log(err);
			} else {
			}
		  });
	}
 });	

  console.log('Number of lines: '+count);
  
})
.on('error', function(error){
  console.log(error.message);
})


}
});
