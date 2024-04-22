const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
 mobile:{
    type: Number,
    unique:true,
    trim: true,
 },
 age:{
    type: Number,
 },
 gender:{
    type:String,
 },
 weight:{
    type:Number,
 },
});

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });

module.exports = mongoose.model("Patient", patientSchema);
