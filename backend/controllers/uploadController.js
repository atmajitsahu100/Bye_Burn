const File = require("./../models/FileModel");
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');

//const inceptionv3 = require('@tensorflow-models/inceptionv3');
// Set up multer for handling multipart/form-data (file uploads)
const upload = multer({ dest: 'uploads/' });

// Load the MobileNet model
let model;
const ALPHA = 1.0; 
mobilenet.load().then(m => {
  model = m;
  console.log('MobileNet version 2 loaded');
});

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Load the image file
    const imageBuffer = req.file.buffer;
    const decodedImage = tf.node.decodeImage(imageBuffer);

    // Resize and normalize the image
    const resizedImage = tf.image.resizeBilinear(decodedImage, [224, 224]);
    const normalizedImage = resizedImage.toFloat().div(tf.scalar(127.5)).sub(tf.scalar(1));
    const input = normalizedImage.expandDims();

    // Perform prediction
    const prediction = await model.classify(input);

    // Send the prediction back to the client
    res.json({ prediction: prediction[0].className});

    // Dispose tensors to free up memory
    tf.dispose([decodedImage, resizedImage, normalizedImage, input]);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Error processing image' });
  }
};
