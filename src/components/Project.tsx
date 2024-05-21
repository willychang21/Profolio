interface ProjectProps {
    title: string;
    date: string;
    duration: string;
    image: string;
}

const Project: React.FC<ProjectProps> = ({ title, date, duration, image }) => {
    return (
        <div className="flex items-start space-x-4 mb-8">
            <img src={image} alt={title} className="w-32 h-32 object-cover rounded-md" />
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-500">{date} &middot; {duration}</p>
            </div>
        </div>
    );
};

export default Project;