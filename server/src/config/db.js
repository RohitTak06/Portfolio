import mongoose from 'mongoose';

/**
 * Connect to MongoDB with retry logic and event monitoring.
 * @param {string} [customUri] - Optional custom URI (e.g. for testing)
 * @returns {Promise<typeof mongoose | null>}
 */
export const connectDB = async (customUri) => {
  const uri = customUri || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rohit_portfolio';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`[Database] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Initial connection failed: ${error.message}`);
    // In production or development without local daemon, keep server running so health and resume endpoints work
    return null;
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn('[Database] MongoDB disconnected.');
});

mongoose.connection.on('reconnected', () => {
  console.log('[Database] MongoDB reconnected.');
});

export const isDatabaseConnected = () => {
  return mongoose.connection.readyState === 1;
};

export const closeDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
    console.log('[Database] Connection closed.');
  }
};
