const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    videoname : {type:String,required:true},
    tagline : {type:String,required:true},
    location : {type:String,required:true},
    genre : {type:String,required:true},
    description : {type:String,required:true},
    thumbUrl : {type:String,required:true},
    videoUrl : {type:String,required:true},
    creation_dt : {type:String,required:true}
});

module.exports = mongoose.model('Upload',schema);