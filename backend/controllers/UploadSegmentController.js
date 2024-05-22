const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const bodyPix = require('@tensorflow-models/body-pix');

// Set up multer for handling multipart/form-data (file uploads)
const upload = multer({ dest: 'uploads/' });

let model;

// Load the BodyPix model asynchronously
// bodyPix.load().then(m => {
//   model = m;
//   console.log('BodyPix model loaded');
// }).catch(error => {
//   console.error('Error loading BodyPix:', error);
// });

exports.UploadSegment = async (req, res) => {
  try {
    // Validate input data
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Ensure that the BodyPix model is loaded
    if (!model) {
      return res.status(500).json({ error: 'BodyPix model not loaded yet' });
    }

    // Load the image file
    const imageBuffer = req.file.buffer;
    const decodedImage = tf.node.decodeImage(imageBuffer);
    // Resize and preprocess the image
const resizedImage = tf.image.resizeBilinear(decodedImage, [513, 513]);
const normalizedImage = resizedImage.toFloat().div(tf.scalar(127.5)).sub(tf.scalar(1));

// Convert the image to tensor and ensure correct shape
const input = normalizedImage.reshape([1, 513, 513, 3]); // Reshape to match the expected shape


    // Convert the image to tensor
    //const input = tf.image.resizeBilinear(decodedImage, [513, 513]).toFloat().div(tf.scalar(255)).expandDims();

    // Perform segmentation
    const segmentation = await model.segmentPerson(input);

    // Convert segmentation mask to base64-encoded image data
    const base64Segmentation = tf.node.encodePng(segmentation.mask);

    // Send the segmentation mask back to the client
    res.json({ segmentation: base64Segmentation });

    // Dispose tensors to free up memory
    tf.dispose([decodedImage, input]);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Error processing image' });
  }
};
