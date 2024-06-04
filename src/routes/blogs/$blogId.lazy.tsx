import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import { blogDetail } from '../../data/blogData';
import ContentDetail from '../../components/ContentDetail';

export const Route = createLazyFileRoute('/blogs/$blogId')({
    component: BlogDetail,
});

function BlogDetail() {
    const { blogId } = useParams({ from: '/blogs/$blogId' });

    const blog = blogDetail
        .flatMap((yearlyBlogs) => yearlyBlogs.items)
        .find(b => b.title === blogId);

    if (!blog) {
        console.log("Blog not found");
        return <div>Blog not found</div>;
    }

    const markdownPath = `/blogs/${blogId}.md`;

    return (
        <ContentDetail content={blog} markdownPath={markdownPath} basePath="/blogs" />
    );
} 

export default BlogDetail;
