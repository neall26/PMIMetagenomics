var lodash = require('lodash');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var studyMetadata = require('../models/studyMetadata.js');
var csv = require('csv');
csv()
.fromPath(__dirname+ '/filename.csv', {delimiter: '\t'})
toPath(__dirname+'filename.out');
.transform(function(row){
	return row;
});
.on('data', function(row, index2){

})
