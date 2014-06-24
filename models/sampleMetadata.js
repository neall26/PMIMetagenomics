var mongoose= require('mongoose')
   ,Schema= mongoose.Schema
   ,ObjectId = Schema.ObjectId;


var sampleMetadataSchema = new Schema({
	studyId: {type: ObjectId, default: null},
	sampleId: {type: Schema.Types.Mixed, default: null, required: true},
	sampleName: {type: String, default: null, required: true},
	samplingDate: {type: Date, default:Date.now, required: true},  
	domain: {type: String, default: null },
	siteId: {type: String, default: null},
	latitude: {type: String, default: null, required: true}, 
	longitude: {type: String, default: null, required: true},
	hostName: {type: String, default: null},
	hostTissue: {type: String, default: null},
	taxonId: {type: Number, default: null},
	dbh: {type: Number, default: null},
	distanceToRiver: {type: Number, default: null},
	distanceToPopulus: {type: Schema.Types.Mixed, default: null},
	distanceToRoots: {type: Number, default: null},
	proximalTrees: {type: Number, default: null},
	proximalPoplarTrees: {type: Number, default: null},
	canopyWidth: {type: Number, default: null},
	basalArea: {type: Number, default: null},
	basalAreaPerHectareTree: {type: Number, default: null},
	basalAreaPerHectarePopulus: {type: Number, default: null},
	basalAreaDominance: {type: Number, default: null},
	soilMoisture: {type: Number, default: null},
	caco3: {type: Number, default: null},
	cacl2: {type: Number, default: null},
	waterPh: {type: Number, default: null},
	sand: {type: Number, default: null},
	silt: {type: Number, default: null},
	clay: {type: Number, default: null},
	carbon: {type: Number, default: null},
	nitrogen: {type: Number, default: null},
	oM: {type: Number, default: null},
	calcium: {type: Number, default: null},
	potassium: {type: Number, default: null},
	magnesium: {type: Number, default: null},
	manganese: {type: Number, default: null},
	phosphorus: {type: Number, default: null},
	zinc: {type: Number, default: null}
});

module.exports = mongoose.model('sampleMetadata', sampleMetadataSchema);
