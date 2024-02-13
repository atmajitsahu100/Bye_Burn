const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const connectDB = require('./config/dbConnect');
require("dotenv").config(); 
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoutes");

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/", authRoute);

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
