var mongoose= require('mongoose')
   ,Schema= mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var bacterialTestSchema = new Schema({
	speciesId: {type: String, default: null},
	lineage: {type: String, default: null},
	treeId: {type: String, default: null},
	kingdom: {type: String, default: null},
	phylum: {type: String, default: null},
	class: {type: String, default: null},
	order: {type: String, default: null},
	family: {type: String, default: null},
	abundance: {type: Number, default: 0}
});

module.exports = mongoose.model('bacterialTest', bacterialTestSchema);
