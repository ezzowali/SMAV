
const mongoose = require('mongoose');

const Schema = mongoose.Schema;



var smav2Schema =new Schema({


  firstName_En:String,
  middleName_En:String,
  lastName_En:String,
  email:{ type: String, required: true, unique: true },
  phone:Number,
  gender:String,
  age:Number,
  city:Array,
  university:String,
  EducationLevel:Array,
  Specialty:Array,
  SCFHS:String,
  times:String,
  accept:String,
  identity_id:Number

 
  

});





module.exports = mongoose.model('samvHajjUsers', smav2Schema);