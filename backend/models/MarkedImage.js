const mongoose = require('mongoose');

const markedImageSchema = new mongoose.Schema({
    imageData: {
        type: String,
    },
    totalPixels: {
        type: Number,
      
    },
});

const MarkedImage = mongoose.model('MarkedImage', markedImageSchema);

module.exports = MarkedImage;
