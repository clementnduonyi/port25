import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '@/app/lib/definitions';

const ProjectDetail: React.FC<{ project: ProjectData }> = ({ project }) => {
  return (
    <div className="project-details container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:justify-between mb-8">
        
          <div className="flex-shrink-0 mr-4 md:mr-8">
            <Image
              src="/proj-image.avif" 
              alt={project.title}
              width={600}
              height={300}
              layout="intrinsic"
              objectFit="cover"
              priority
            />
          </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-700 mb-2">{project.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 text-sm mr-2">Your Role:</span>
            <span className="font-semibold text-gray-600">{project.role}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{project.description}</h2>
      {/* Project Content (Optional) */}
      {project.projectContent && (
        <p className="project-content text-gray-600 leading-relaxed mb-8 rounded-lg">
          {project.projectContent }
        </p>
      )}
      </div>
      {/* Project Links (Optional) */}
      {project.liveLink || project.githubLink ? (
        <div className="flex gap-4 mb-8">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Live View
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
              GitHub Repo
            </Link>
          )}
        </div>
      ) : null}

    </div>
  );
};

export default ProjectDetail;