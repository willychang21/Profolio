import { createLazyFileRoute } from '@tanstack/react-router';
import { blogDetail } from '../../data/blogData';
import ContentList from '../../components/ContentList';

export const Route = createLazyFileRoute('/blogs/')({
  component: Blogs,
});

function Blogs() {
  return <ContentList content={blogDetail} basePath="/blogs" />;
}

export default Blogs;
