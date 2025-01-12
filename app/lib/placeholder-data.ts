export const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // Plaintext; will be hashed
    profilePictureUrl: 'https://example.com/john.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'securepass456', // Plaintext; will be hashed
    profilePictureUrl: 'https://example.com/jane.jpg',
  },
];

export const projects = [
  {
    userId: 'john@example.com', // Corresponds to John's email
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my work and skills.',
    imageUrl: 'https://pixabay.com/illustrations/man-laptop-computer-male-office-8702916/',
    githubLink: 'https://github.com/johndoe/portfolio',
    liveLink: 'https://johndoe.dev',
    technologies: ['React', 'Next.js', 'TailwindCSS'],
    role: 'Full stack developer',
    projectContent: 'A portfolio website built with MERN stack'
  },
  {
    userId: 'jane@example.com', // Corresponds to Jane's email
    title: 'E-commerce Platform',
    description: 'An online platform for buying and selling products.',
    imageUrl: 'https://pixabay.com/photos/laptop-wordpress-wordpress-design-593673/',
    githubLink: 'https://github.com/janesmith/ecommerce',
    liveLink: 'https://janesmith.dev',
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify'],
  },
];

export const blogs = [
  {
    userId: 'john@example.com', // Corresponds to John's email
    title: 'Introduction to Web Development',
    slug: 'Introduction-to-web development',
    content: 'This blog covers the basics of HTML, CSS, and JavaScript.',
    coverImageUrl: 'https://pixabay.com/photos/web-design-laptop-html-design-2038872/',
    
  },
  {
    userId: 'jane@example.com', // Corresponds to Jane's email
    title: 'Advanced JavaScript Techniques',
    slug: 'Introduction-to-web development',
    content: 'Exploring closures, prototypes, and asynchronous programming in JavaScript.',
    coverImageUrl: 'https://pixabay.com/photos/technology-computer-code-javascript-1283624/',
  },
];
