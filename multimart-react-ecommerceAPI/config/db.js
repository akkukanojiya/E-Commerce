const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error('❌ MONGO_URL is not defined in environment variables.');
    }

    const conn = await mongoose.connect(process.env.MONGO_URL); // ✅ No extra options needed

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
