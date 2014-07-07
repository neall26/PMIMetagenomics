var lodash = require('lodash');
var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var speciesCharacteristics = require('../models/speciesCharacteristics.js');
var sampleMetadata = require('../models/sampleMetadata.js');

var treeArray = [];
var csv = require('csv');

var iterator = ';';
if(process.argv.length < 3){
	console.log('required input missing');
	process.exit(0);
}

var treeId = [];

sampleMetadata.find({}, function(err, item){
	if(err){
		console.log(err)
	}else{
		complete = true;
		for(var n=0; n<item.length; n++){
			treeId[item[n].sampleId] = item[n].id;
		}
		parser();
	}	
});


var parser = function(){
csv()
	.fromPath(process.argv[2], { delimiter: '\t'})
	.transform( function(row){
		return row;
	})
.on('data', function(row,index2){
	var newRow = new speciesCharacteristics;
	var speciesId;
	var lineage;
	var kingdom;
	var phylum;
	var sClass;
	var order;
	var family;
	var genus
	var species
	//lodash.forEach(row, function(column, index) {
	var index = 0;
async.eachSeries(row, function(column, done) {
	index = index + 1;
	if(index2 == 0){
		treeArray.push(column);
		done();
	}
	//console.log('Column # ' + index + ' : ' + column );
	if(index == 1){
		speciesId= column;
	}
	else if(index == 2){ 
		lineage= column;
		var lineageExpand = lineage.toString();
		if(lineageExpand.charAt(0) == '"'){
			lineageExpand = lineageExpand.substring(1);
		}
		lineageExpand = lineageExpand.substring(lineageExpand.indexOf(iterator)+1);
		var lineageSplit = lineageExpand.split(iterator);
		if(lineageExpand.indexOf('_') !== -1){
			for(var i=0; i<lineageSplit.length; i++){
				lineageSplit[i]= lineageSplit[i].substring(lineageSplit[i].indexOf('_')+2);
			}
		}
		kingdom= lineageSplit[0];
		phylum = lineageSplit[1];
		sClass = lineageSplit[2];
		order = lineageSplit[3];
		family= lineageSplit[4];
		genus = lineageSplit[5];
		species = lineageSplit[6];

	}
if(column > 0 && index>1){
			newRow.sampleId = treeId[treeArray[index-1]];
			newRow.speciesId = speciesId;
			newRow.lineage = lineage;
			newRow.abundance = column;
			newRow.kingdom = kingdom;
			newRow.phylum = phylum;
			newRow.sClass = sClass;
			newRow.order = order;
			newRow.family = family;
			newRow.genus = genus;
			newRow.species = species;
			newRow.save(function(err, item){
				if(err){
					//console.log(err);
					newRow = new speciesCharacteristics;
					done();
				}	
				else{
					//console.log(item);
					newRow = new speciesCharacteristics;
					done();
				}
			});
} else {
	done();
}
});
})
.on('end', function(count){
	console.log('Number of lines: ' + count);
	setTimeout(process.exit, 4000, 0);
})
.on('error', function(error){
	console.log(error.message);
})
};
