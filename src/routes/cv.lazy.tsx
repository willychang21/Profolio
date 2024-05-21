import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cv')({
    component: CV
})

function CV() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Curriculum Vitae</h1>
            <iframe
                src="Chun_Chieh_Chang_Resume.pdf"
                className="w-full h-screen border-0"
                title="Chun Chieh Chang's Resume"
            />
        </div>
    );
}
