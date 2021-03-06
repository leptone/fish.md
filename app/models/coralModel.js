var mongoose = require('mongoose'),
	Schema = mongoose.Schema
	
var CoralSchema = new Schema({
	productCode: String,
	
	type: String,
	genius: String,
	
	thumbnailImg: String,
	fullImg: String,
	
	commonName: String,
	scientificName: String,
	origin: String,
	care: String,
	behavior: String,
	diet: String,
	habitat: String,
	light: String
})



mongoose.model('Coral', CoralSchema)

