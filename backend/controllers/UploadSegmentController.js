const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const deeplab = require('@tensorflow-models/deeplab');

// Set up multer for handling multipart/form-data (file uploads)
const upload = multer({ dest: 'uploads/' });

// Load the DeepLab model
// let inputTensor ; // Shape: [1, 513, 513, 3]

// // Reshape the input tensor to match the expected shape
// inputTensor = tf.reshape(inputTensor, [1, -1, -1, 3]);

// Execute the DeepLab model with the corrected input tensor

// const predictions = await model.execute({ ImageTensor: inputTensor });
let model;
deeplab.load().then(m => {
  model = m;
  console.log('DeepLab model loaded');
}).catch(error => {
  console.error('Error loading DeepLab:', error);
});

exports.UploadSegment = async (req, res) => {
  try {
    // Validate input data
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Ensure that the DeepLab model is loaded
    if (!model) {
      return res.status(500).json({ error: 'DeepLab model not loaded yet' });
    }

    // Load the image file
    const imageBuffer = req.file.buffer;
    const decodedImage = tf.node.decodeImage(imageBuffer);

    // Resize and preprocess the image
    const resizedImage = tf.image.resizeBilinear(decodedImage, [513, 513]);
    const normalizedImage = resizedImage.toFloat().div(tf.scalar(127.5)).sub(tf.scalar(1));
    const input = normalizedImage.expandDims();
    input = tf.reshape(input, [1, 513, 513, 3]);

    // Perform segmentation
    const segmentation = await model.segment({ ImageTensor: input });

    // Convert segmentation mask to base64-encoded image data
    const base64Segmentation = await tf.node.encodePng(segmentation.rawSegmentationMask);

    // Send the segmentation mask back to the client
    res.json({ segmentation: base64Segmentation });

    // Dispose tensors to free up memory
    tf.dispose([decodedImage, resizedImage, normalizedImage, input]);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Error processing image' });
  }
};
