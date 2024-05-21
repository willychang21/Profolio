import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog')({
    component: Blog
})

function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <p>This is the blog page.</p>
        </div>
    );
}