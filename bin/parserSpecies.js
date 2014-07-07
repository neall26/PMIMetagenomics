var lodash = require('lodash');
var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('connected successfully');
});

var speciesCharacteristics = require('../models/bacterialData.js');
var treeArray = [];
var csv = require('csv');
var complete = false;
	console.dir(complete);
var checkComplete = function() {
	console.dir(complete);
	if (complete === true ) {
		console.log('exiting');
		process.exit(0);
	} else {
		console.log('Still processing, sleeping for 2 seconds...');
		setTimeout(checkComplete, 2000);
	}
};
var iterator = ';';
if(process.argv.length < 3){
	console.log('required input missing');
	process.exit(0);
}
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
			 var test = lineageExpand.split(iterator);
			 if(lineageExpand.indexOf('_') !== -1){
			 	for(var i=0; i<test.length; i++){
				 	test[i]= test[i].substring(test[i].indexOf('_')+2);
			 	}
			 }
			 kingdom= test[0];
			 phylum = test[1];
			 sClass = test[2];
			 order = test[3];
			 family= test[4];
			 genus = test[5];
			 species = test[6];

		}
		if(column > 0 && index>2){
			newRow.speciesId = speciesId;
			newRow.lineage = lineage;
			newRow.abundance = column;
			newRow.kingdom = kingdom;
			newRow.phylum = phylum;
			newRow.class = sClass;
			newRow.order = order;
			newRow.family = family;
			newRow.genus = genus;
			newRow.species = species;
			newRow.treeId = treeArray[index-1];
			//console.log(column);
			//console.dir(newRow);
			newRow.save(function(err, item){
				if(err){
					console.log(err);
					newRow = new speciesCharacteristics;
					done();
				}
				else{
					newRow = new speciesCharacteristics;
					done();
				}
			});
		} else {
			done();
		}
  }, function(err) {
		console.dir('ended row - ' + index2);
		if (err) {
			console.dir('Error occured in async.each');
			console.dir(err);
		}else {
			console.dir('Done with all iterations');
		}
		complete = true;
		
	});
})
.on('end', function(count){
  console.log('Number of lines: '+count);
	//checkComplete();
	//process.exit(0);
	setTimeout(process.exit, 4000, 0);

	//process.exit(0);
})
.on('error', function(error){
  console.log(error.message);
});
