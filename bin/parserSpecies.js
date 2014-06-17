var lodash = require('lodash');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('connected successfully');
});

var bacterialTest = require('./bacterialData.js');

var csv = require('csv');
csv()
.fromPath(__dirname+'/bacterialTest2.csv', { delimiter: '\t'})
.toPath(__dirname+'/sample.out')
.transform( function(row){
  row.unshift(row.pop());
  return row;
})
.on('data', function(row,index){
		var newRow = new bacterialTest;
		console.dir(newRow);
		var speciesId;
		var lineage
  lodash.forEach(row, function(column, index) {
		//console.log('Column # ' + index + ' : ' + column );
		if(index == 1){
			speciesId= column;
		}
		if(index == 2){
			 lineage= column;
		}
		if(column > 0 && index>7){
			newRow.speciesId = speciesId;
			newRow.lineage = lineage;
			newRow.abundance = column;
			newRow.save(function(err, item){
				
				console.log(column + " " + index);

				if(err){
					console.log(err);
				}
				else{
					console.log(item);
				}
			});

	
		}
  });
})
.on('end', function(count){
  console.log('Number of lines: '+count);
	process.exit(0);
})
.on('error', function(error){
  console.log(error.message);
});
