const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    trim: true,
  },
  mimetype: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^image\/(jpeg|png|gif)$/.test(value);
      },
      message: "The format is not valid",
    },
  },
  size: {
    type: Number,
  },
  data: {
    type: Buffer,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
