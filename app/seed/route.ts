
import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import { users, projects, blogs } from '../lib/placeholder-data';
import User from '@/app/lib/models/user'
import Project from '@/app/lib/models/project'
import Blog from '@/app/lib/models/blog'
import { config } from 'config';



// MongoDB Connection


async function seedDatabase() {
  try {
    // Connect to the database
    await mongoose.connect(config.mongoDbUri);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Project.deleteMany({});
    await Blog.deleteMany({});
    console.log('Cleared existing data');

    // Hash user passwords and insert users
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10), // Hash password with salt rounds = 10
      }))
    );
    const insertedUsers = await User.insertMany(hashedUsers);
    console.log('Inserted users:', insertedUsers);

    // Map projects and blogs to their respective user IDs
    const userMap: { [email: string]: mongoose.Types.ObjectId } = insertedUsers.reduce(
      (acc, user) => ({ ...acc, [user.email]: user._id }),
      {}
    );
    
    const mappedProjects = projects.map((project) => ({
      ...project,
      userId: userMap[project.userId],
    }));
    
    const mappedBlogs = blogs.map((blog) => ({
      ...blog,
      userId: userMap[blog.userId],
    }));
    

    // Insert projects and blogs
    const insertedProjects = await Project.insertMany(mappedProjects);
    console.log('Inserted projects:', insertedProjects);

    const insertedBlogs = await Blog.insertMany(mappedBlogs);
    console.log('Inserted blogs:', insertedBlogs);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();