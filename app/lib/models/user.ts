import mongoose, { Document, Model, Schema } from 'mongoose';

// User Interface and Schema
export interface IUser {
  name: string;
  email: string;
  password: string;
  profilePictureUrl?: string;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePictureUrl: { type: String },
  },
  { timestamps: true }
);

// Ensure the model is created only once (for hot-reloading compatibility)
const User: Model<IUserDocument> =
  mongoose.models?.User || mongoose.model<IUserDocument>('User', UserSchema);

export default User;
