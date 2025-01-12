
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'antd';
import fetchProjects from '@/app/lib/data';



export default async function ProjectCard() {
  const projects = await fetchProjects();

  // Ensure the projects are serialized correctly before using them
  const serializedProjects = projects.map(project => ({
    ...project,
    _id: project._id.toString(),
  }));

  const sliderStyle: React.CSSProperties = { 
    height: 400, // Number for height
    color: '#fff',
    lineHeight: '400px', // or a number
    textAlign: 'center',
    backgroundColor: '#364d79', // Correct property name
    overflow: 'hidden',
    display: 'flex', // Add flexbox for centering
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = { 
    height: 400, // Number for height
    textAlign: 'center',
    display: 'flex', // Add flexbox for centering
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  if (!serializedProjects || serializedProjects.length === 0) {
    return <div className="text-center py-8">No projects found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Featured Projects
        <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      </h1>
      
      {serializedProjects.length > 3 ? (
        <Carousel autoplay>
          {serializedProjects.map((project) => (
            <div key={project._id} style={sliderStyle}>
              <Link href={`/project/${project._id}`} legacyBehavior passHref>
                <div className="flex flex-col md:flex-row h-full w-full p-8 items-center justify-center cursor-pointer">
                 
                    <div className="relative h-64 w-full md:w-1/2 md:mr-8">
                      <Image src="/proj-image.avif" alt={project.title} layout="fill" objectFit="contain" />
                    </div>
                 
                  <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        <>
          {serializedProjects.map((project) => (
            <div key={project._id} style={contentStyle}>
              <div className="flex flex-col md:flex-row h-full w-full p-8 items-center justify-center">
                
                  <div className="relative h-64 w-full md:w-1/2 md:mr-8">
                    <Image src="/proj-image.avif" alt={project.title} layout="fill" objectFit="contain" />
                  </div>
                
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/project/${project._id}`}
                    className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition animate-bounce"
                  >
                    Learn More...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      ) }
    </div>
  );
};





