var mongoose=require('./db');
var schema=mongoose.Schema;
var gallerySchema=new schema({
	name:String,
	imgs:[],
	tags:[]
});
var gallery=mongoose.model('gallery',gallerySchema);
module.exports=gallery;

