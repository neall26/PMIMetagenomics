var lodash = require('lodash');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var studyMetadata = require('../models/studyMetadata.js');

var header = [
		'studyName',
		'studyId',
		'studyGoldId',
		'studyLegacyGoldId',
		'ncbiId',
		'ncbiAccension',
		'ncbiName',
		'sequencingCenter',
		'funding',
		'contact',
		'email',
		'published',
		'availability'
		//'submissionDate'
];

if(process.argv.length < 3){
	console.log('required input missing');
	process.exit(0);
};
var saveArray = [];
var csv = require('csv');
csv()
.fromPath(process.argv[2], {delimiter: '\t'})
.transform(function(row){
	return row;
})
.on('data', function(row, index2){
	newRow = new studyMetadata();
	newObj = lodash.zipObject(header, row);
	lodash.assign(newRow, newObj);
	saveArray.push(newRow);
})
.on('end', function(count){
	saveArray.forEach(function(item, index){
		if(index +1 == saveArray.length){
			item.save(function(err, item){
				if(err){
					console.log(err);
					process.exit(0);
				} else{
					console.log(item);
					process.exit(0);
				}
			});
		} else {
			item.save(function(err, item){
				if(err){
					console.log(err);
				} else {
					console.log(item);
				}
			});
		}
	});

	console.log('Number of lines: ' + count);

})
.on('error', function(error){
	console.log(error.message);
});
