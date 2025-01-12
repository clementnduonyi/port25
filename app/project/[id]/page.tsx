
import fetchProjects from "@/app/lib/data";
import { fetchProjectById } from '@/app/lib/data';
import ProjectDetail from '@/app/ui/project/project-detail';

export async function generateStaticParams() {
    const projects = await fetchProjects()
   
    return projects.map((project) => ({
      id: String(project._id)
    }))
}



export default async function ProjectDetailPage({params}: {params: Promise<{ id: string }>}) {
    const projectId = (await params).id
    const project = await fetchProjectById(projectId)

    return(
      <ProjectDetail project={project} />
    )
  }
