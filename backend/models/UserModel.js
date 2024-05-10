const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
     required: true,
  },
  specialization:{
    type:String,
    required:true,
  },
  licenseNumber:{
    type:String,
    required:true,
  },

});

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });

module.exports = mongoose.model("User", userSchema);
