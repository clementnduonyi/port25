'use server';
import User from '@/app/lib/models/user';
import Project from '@/app/lib/models/project';
import Blog from '@/app/lib/models/blog';
import connectToDatabase from '@/app/lib/db';




// Fetch all users
export async function fetchUsers() {
  try {
    await connectToDatabase();
    const users = await User.find().lean();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Fetch all projects
export default async function fetchProjects() {
  try {
    await connectToDatabase();
    const projects = await Project.find().populate('userId').lean();
    return projects.map(project => ({
      ...project, userId: project.userId ? project.userId : null,
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

// Fetch all blogs
export async function fetchBlogs() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find().populate('userId').lean();
    return blogs.map(blog => ({
      ...blog, userId: blog.userId ? blog.userId : null,
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

// Fetch a user by ID
export async function fetchUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findById(userId).lean();
    return user;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
}

// Fetch a project by ID
export async function fetchProjectById(projectId: string) {
  try {
    await connectToDatabase();
    const project = await Project.findById(projectId).populate('userId').lean();
    return {
      ...project, userId: project?.userId ? project.userId : null,
    };
  } catch (error) {
    console.error(`Error fetching project with ID ${projectId}:`, error);
    throw error;
  }
}

// Fetch a blog by ID
export async function fetchBlogById(blogId: string) {
  try {
    await connectToDatabase();
    const blog = await Blog.findById(blogId).populate('userId').lean();
    return {
      ...blog, userId: blog?.userId ? blog.userId : null,
    };
  } catch (error) {
    console.error(`Error fetching blog with ID ${blogId}:`, error);
    throw error;
  }
}
