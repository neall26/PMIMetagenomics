var mongoose= require('mongoose')
   ,Schema= mongoose.Schema
   ,ObjectId = Schema.ObjectId;




var bacterialTestSchema = new Schema({
	id: {type: String, default: null},
	consensus: {type: String, default: null},
	lineage: {type: String, default: null},
	tree: {type: String, default: null}
});

var bacterialTest = mongoose.model('bacterialTest', bacterialTestSchema);
module.exports = bacterialTest;
