import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Validate required environment variables
if (!process.env.mongoDbUri) {
  throw new Error('Missing required environment variable: MONGODB_URI');
}

export const config = {
  mongoDbUri: process.env.mongoDbUri,
};
