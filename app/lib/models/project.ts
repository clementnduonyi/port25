import mongoose, { Schema, Document, Model } from 'mongoose';

// Project Interface and Schema
export interface IProject {
  userId: string; // Serialized as a string for client-side compatibility
  title: string;
  description: string;
  imageUrl?: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
  role?: string;
  projectContent?: string;
}

export interface IProjectDocument extends Omit<IProject, 'userId'>, Document {
  userId: mongoose.Types.ObjectId; // Original ObjectId type before serialization
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProjectDocument>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    githubLink: { type: String },
    liveLink: { type: String },
    technologies: { type: [String], required: true },
    role: { type: String },
    projectContent: { type: String },
  },
  { timestamps: true }
);

// Ensure the model is created only once (for hot-reloading compatibility)
const Project: Model<IProjectDocument> =
  mongoose.models?.Project || mongoose.model<IProjectDocument>('Project', ProjectSchema);

export default Project;
