const mongoose = require("mongoose");

const connectDB = async () => {

  const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.DB_STRING
  
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host} on port ${process.env.PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports =  connectDB
