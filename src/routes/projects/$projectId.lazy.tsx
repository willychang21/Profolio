import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import { projectDetail } from '../../data/projectData';
import ContentDetail from '../../components/ContentDetail';

export const Route = createLazyFileRoute('/projects/$projectId')({
    component: ProjectDetail,
});

function ProjectDetail() {
    const { projectId } = useParams({ from: '/projects/$projectId' });

    const project = projectDetail
        .flatMap((yearlyProjects) => yearlyProjects.items)
        .find(p => p.title === projectId);

    if (!project) {
        console.log("Project not found");
        return <div>Project not found</div>;
    }

    const markdownPath = `/projects/${projectId}.md`;

    return (
        <ContentDetail content={project} markdownPath={markdownPath} basePath="/projects" />
    );
}

export default ProjectDetail;
