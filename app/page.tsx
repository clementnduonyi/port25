
import Head from "next/head";
import Link from 'next/link'
import Navbar from '@/app/ui/navbar';
import BlogCard from '@/app/ui/blog/blog-card';
import ProjectCard from '@/app/ui/project/project-card';
import Contact from "./ui/contact";
import Hero from './ui/hero'

export default function Home() {
  

  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>John Doe - Software Developer</title>
        <meta name="description" content="Professional portfolio of John Doe, a software developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <Navbar />
      </nav>
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <Hero />
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="mt-4 text-gray-600">
              Hi, I&apos;m <span className="font-semibold text-blue-600">Clement Nduonyi</span>, a skilled software developer
              with expertise in modern web technologies. I enjoy solving complex problems and delivering seamless
              user experiences.
            </p>
            <Link
            href="#about"
            className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition animate-bounce"
          >
            Read more...
          </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-12 bg-white">
          <ProjectCard />
        </section>

        {/* Blog Section */}
        <section id="blogs" className="py-12 bg-gray-50">
          <BlogCard />
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <Contact />
        </section>
      </main>
    </div>
  );
}
