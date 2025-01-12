import mongoose, { Document, Model, Schema } from 'mongoose';

// Blog Interface and Schema
export interface IBlog {
  userId: string; // Serialized as a string for client-side compatibility
  title: string;
  content: string;
  coverImageUrl: string;
  slug?: string;
}

export interface IBlogDocument extends Omit<IBlog, 'userId'>, Document {
  userId: mongoose.Types.ObjectId; // Original ObjectId type before serialization
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlogDocument>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    slug: { type: String },
    content: { type: String, required: true },
    coverImageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

// Ensure the model is created only once (for hot-reloading compatibility)
const Blog: Model<IBlogDocument> =
  mongoose.models?.Blog || mongoose.model<IBlogDocument>('Blog', BlogSchema);

export default Blog;
