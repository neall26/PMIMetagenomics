var mongoose = require('mongoose')
   ,Schema= mongoose.Schema;
var validate = require('mongoose-validate');



var studyMetadataSchema = new Schema({
	studyName: {type: String, default: null, required: true},
	studyId: {type: String, default: null, required: true},
	studyGoldId: {type: String, default: null},
	studyLegacyGoldId: {type: String, default: null},
	ncbiId: {type: Number, default: null},
	ncbiAccension: {type: String, default: null},
	ncbiName: {type: String, default: null},
	sequencingCenter: {type: String, default: null},
	funding: {type: String, default: null},
	contact: {type: String, default: null, required: true},
	email: {type: String, default: null, validate: [validate.email, 'email not valid'], required: true },
	published: {type: String, default: null},
	availability: {type: String, default: null, required: true},
	submissionDate: {type: Date, default: Date.now}
});


module.exports = mongoose.model('studyMetadata', studyMetadataSchema);
