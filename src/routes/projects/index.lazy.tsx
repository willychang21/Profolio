import { createLazyFileRoute } from '@tanstack/react-router';
import { projectDetail } from '../../data/projectDate';
import Project from '../../components/Project';
import { Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/projects/')({
    component: Projects,
});

function Projects() {
    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            {projectDetail.map((yearlyProjects) => (
                <div key={yearlyProjects.year}>
                    <h2 className="text-2xl font-bold mb-4">{yearlyProjects.year}</h2>
                    <hr className="border-gray-200 mb-8" />
                    <div>
                        {yearlyProjects.projects.map((project) => (
                            <Link
                                key={project.title}
                                to="/projects/$projectId"
                                params={{ projectId: project.title }}
                                className="block mb-4"
                            >
                                <Project
                                    title={project.title}
                                    date={project.date}
                                    duration={project.duration}
                                    image={project.image}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
