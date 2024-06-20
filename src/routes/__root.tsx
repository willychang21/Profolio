import NotFound from '../components/NotFound'
import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'
import { useThemeStore } from '../store/useThemeStore'
import { createRootRoute, useLocation } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  const { theme } = useThemeStore()
  const location = useLocation()

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/'

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900 text-gray-100'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      {!isHomePage && <Navbar />}
      <main className="flex-grow p-4">
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </main>
      {!isHomePage && <Footer />}
    </div>
  )
}
