var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var speciesCharacteristicsSchema = new Schema({
	sampleId: {type: ObjectId, default: null}
	speciesId: {type: String, default: null},
	lineage: {type: String, default: null},
	kingdon: {type: String, default: null},
	phylum: {type: String, default: null},
	class: {type: String, default: null},
	order: {type: String, default: null},
	family: {type: String, default: null},
	genus: {type: String, default: null},
	abundance: {type: Number, default: null}
});

var speciesCharacteristics = mongoose.model('speciesCharacteristics', speciesCharacteristicsShema);
module.exports = speciesCharacteristics
