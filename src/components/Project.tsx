interface ProjectProps {
    title: string;
    date: string;
    duration: string;
    image?: string; // Optional image
}

function Project({ title, date, duration, image }: ProjectProps) {
    return (
        <div className="flex items-start space-x-4 mb-8">
            {image && <img src={image} alt={title} className="w-40 h-32 object-fit rounded-md" />}
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-500">{date} &middot; {duration}</p>
            </div>
        </div>
    );
}

export default Project;
