const mongoose = require("mongoose");
require("dotenv").config();

const { DB_URL,LOCAL_DB } = process.env;

async function dbConnect() {

    
  mongoose
  .connect(LOCAL_DB, {
    
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    }
  )

.then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

}

module.exports = dbConnect;
