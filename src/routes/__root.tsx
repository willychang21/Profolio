import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import { useThemeStore } from '../store/useThemeStore';
import { createRootRoute } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';


export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFound,
});

function RootLayout() {
    const { theme } = useThemeStore();

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <Navbar />
            <main className="flex-grow p-4">
                <Outlet />
                {/* <TanStackRouterDevtools /> */}
            </main>
            <Footer />
        </div>
    );
}