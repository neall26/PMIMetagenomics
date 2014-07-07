var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var speciesCharacteristicsSchema = new Schema({
	sampleId: {type: ObjectId, default: null, required: true},
	speciesId: {type: String, default: null, required: true},
	lineage: {type: String, default: null, required: true},
	kingdom: {type: String, default: null},
	phylum: {type: String, default: null},
	sClass: {type: String, default: null},
	order: {type: String, default: null},
	family: {type: String, default: null},
	genus: {type: String, default: null},
	species: {type: String, default: null},
	abundance: {type: Number, default: null}
});

var speciesCharacteristics = mongoose.model('speciesCharacteristics', speciesCharacteristicsSchema);
module.exports = speciesCharacteristics
