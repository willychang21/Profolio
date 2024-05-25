import { personalInfo } from '../../../data/personalInfo';

function Footer() {
    return (
        <footer className="p-4 text-center mt-auto transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
            © 2024 {personalInfo.name}. All rights reserved.
        </footer>
    );
}

export default Footer;
