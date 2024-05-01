const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/dbConnect");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoutes");
const uploadRouter = require("./routes/uploadRoutes");

//const tf = require('@tensorflow/tfjs-node');

const tf = require("@tensorflow/tfjs");
const tfn = require("@tensorflow/tfjs-node");
const handler = tfn.io.fileSystem("D:/mini project/Bye_Burn/backend/tf-models/wts.h5");



const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

const exp = require("constants");

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

async function loadModel() {
  const modelPath = 'D:/mini project/Bye_Burn/backend/tf-models/wts.h5';  // Corrected file path
  const model = await tf.loadLayersModel('file://' + modelPath);

  // Make predictions
  const input = tf.tensor2d([[1, 2, 3, 4]]);
  const output = model.predict(input);
  output.print();
}

// async function main() {
//   const model = await loadModel();

//   // Use the model for inference
//   // For example, make predictions on new data
//   const inputData = tf.tensor2d([[1, 2, 3]]);
//   const output = model.predict(inputData);
//   output.print();
// }

// main();

// loadModel();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", authRoute);
app.use("/api/upload", uploadRouter);


// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    const port = process.env.PORT || 4000;
    const server = http.createServer(app);

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start the server:", error);
  });
