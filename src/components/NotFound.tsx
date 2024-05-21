export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <p className="mt-4">The page you are looking for does not exist.</p>
            <a href="/" className="mt-4 text-blue-500 underline">Go back to Home</a>
        </div>
    );
}
