// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type UserData = {
    _id: string; // UUID
    name: string;
    email: string;
    password: string;
    profilePictureUrl?: string; // Optional property
  };
  
  export type ProjectData = {
    _id: string; // UUID
    userId: string; // UUID of the user who owns the project
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    liveLink: string;
    technologies: string[];
    role: string;
    projectContent: string;
  };
  
  export type BlogData = {
    _id: string; // UUID
    userId: string; // UUID of the author
    title: string;
    content: string;
    coverImageUrl: string;
  };
  
 