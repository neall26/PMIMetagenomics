var mongoose = require('mongoose')
   ,Schema= mongoose.Schema;

function validateEmail(email){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);

};


var studyMetadataSchema = new Schema({
	studyName: {type: String, default: null, required: true},
	studyId: {type String, default: null, required: true},
	ncbiId: {type: Number, default: null},
	ncbiAccension: {type: String, default: null},
	ncbiName: {type: String, default: null},
	sequencingCenter: {type: String, default: null},
	funding: {type: String, default: null},
	contact: {type: String, default: null, required: true},
	email: {type: String, default: null validate: [validateEmail, 'email not valid'},
	published: {type: String, default: null},
	availability: {type: String, default: null, required: true},
	submissionDate: {type: Date, default: Date.now}
});


var studyMetadata = mongoose.model('studyMetadata', studyMetadataSchema);
module.exports= studyMetadata;
