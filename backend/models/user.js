const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var schema = new Schema({
     firstname : {type:String,required:true},
     lastname : {type:String,required:true},
     email : {type:String,required:true},
     password : {type:String,required:true},
     creation_dt : {type:String,required:true}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashPassword){
    return bcrypt.compareSync(hashPassword, this.password);
}

module.exports = mongoose.model('User',schema);