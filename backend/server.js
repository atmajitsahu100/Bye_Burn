const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/dbConnect");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoutes");
const uploadRouter = require("./routes/uploadRoutes");

const exp = require("constants");

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
