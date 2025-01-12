import mongoose from 'mongoose';
import { config } from 'config';



// Connect to the database
export default async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(config.mongoDbUri);
      console.log('Connected to MongoDB');
    }
}

// Disconnect from the database
export async function disconnectFromDatabase() {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    }
  }

