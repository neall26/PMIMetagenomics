var lodash = require('lodash');
var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('connected successfully');
});

var bacterialTest = require('../models/bacterialData.js');
var treeArray = {"8":"E.M.N.01","9":"E.M.N.02","10":"E.M.N.03","11":"E.M.N.04","12":"E.M.N.05","13":"E.M.N.06","14":"E.M.N.07","15":"E.M.N.08","16":"E.M.N.09","17":"E.M.N.10","18":"E.M.N.11","19":"E.M.T.03","20":"E.M.T.04","21":"E.M.T.05","22":"E.M.T.06","23":"E.M.T.07","24":"E.M.T.08","25":"E.M.T.10","26":"E.M.T.11","27":"E.M.T.5B","28":"E.M.T.9A","29":"E.S.N.01","30":"E.S.N.02","31":"E.S.N.04","32":"E.S.N.05","33":"E.S.N.06","34":"E.S.N.07","35":"E.S.N.08","36":"E.S.N.09","37":"E.S.N.10","38":"E.S.N.11","39":"E.S.T.03","40":"E.S.T.04","41":"E.S.T.05","42":"E.S.T.07","43":"E.S.T.08","44":"E.S.T.2B","45":"E.S.T.5B","46":"R.M.N.01","47":"R.M.N.02","48":"R.M.N.03","49":"R.M.N.04","50":"R.M.N.05","51":"R.M.N.06","52":"R.M.N.07","53":"R.M.N.08","54":"R.M.N.09","55":"R.M.N.10","56":"R.M.N.11","57":"R.M.T.03","58":"R.M.T.04","59":"R.M.T.05","60":"R.M.T.06","61":"R.M.T.07","62":"R.M.T.08","63":"R.M.T.09","64":"R.M.T.10","65":"R.M.T.11","66":"R.M.T.2B","67":"R.M.T.5B","68":"R.M.T.9A","69":"R.S.N.01","70":"R.S.N.02","71":"R.S.N.03","72":"R.S.N.04","73":"R.S.N.05","74":"R.S.N.06","75":"R.S.N.07","76":"R.S.N.08","77":"R.S.N.09","78":"R.S.N.10","79":"R.S.N.11","80":"R.S.T.03","81":"R.S.T.04","82":"R.S.T.05","83":"R.S.T.06","84":"R.S.T.07","85":"R.S.T.08","86":"R.S.T.09","87":"R.S.T.10","88":"R.S.T.11","89":"R.S.T.2B","90":"R.S.T.5B","91":"R.S.T.9A"};
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
csv()
.fromPath(__dirname+'/Bacterial_otu_table_2010.csv', { delimiter: '\t'})
.toPath(__dirname+'/sample.out')
.transform( function(row){
  return row;
})
.on('data', function(row,index2){
		var newRow = new bacterialTest;
		var speciesId;
		var lineage;
		var kingdom;
		var phylum;
		var sClass;
		var order;
		var family;
  //lodash.forEach(row, function(column, index) {
	var index = 0;
  async.eachSeries(row, function(column, done) {
		index = index + 1;
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

		}
		if(column > 0 && index>8){
			newRow.speciesId = speciesId;
			newRow.lineage = lineage;
			newRow.abundance = column;
			newRow.kingdom = kingdom;
			newRow.phylum = phylum;
			newRow.class = sClass;
			newRow.order = order;
			newRow.family = family;
			newRow.treeId = treeArray[index];
			//console.log(column);
			//console.dir(newRow);
			newRow.save(function(err, item){
				if(err){
					console.log(err);
					newRow = new bacterialTest;
					done();
				}
				else{
					console.log(item);
					newRow = new bacterialTest;
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
	setTimeout(process.exit, 4000, 0);

	//process.exit(0);
})
.on('error', function(error){
  console.log(error.message);
});
