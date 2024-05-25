import { useThemeStore } from '../../../store/useThemeStore';
import { FaSun, FaMoon } from 'react-icons/fa';

function LightDarkSwitch() {
    const { theme, toggleTheme } = useThemeStore();
    return (
        <button
            onClick={toggleTheme}
            className={`p-2 border rounded transition-colors duration-300 
                        ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
            {theme === 'light' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-white" />}
        </button>
    );
}

export default LightDarkSwitch;
