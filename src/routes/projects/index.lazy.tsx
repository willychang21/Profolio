import { createLazyFileRoute } from '@tanstack/react-router';
import { projectDetail } from '../../data/projectData';
import ContentList from '../../components/ContentList';

export const Route = createLazyFileRoute('/projects/')({
    component: Projects,
});

function Projects() {
    return <ContentList content={projectDetail} basePath="/projects" />;
}

export default Projects;
