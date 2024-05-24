export interface Project {
    title: string;
    date: string;
    duration: string;
    image?: string; // Make image optional
}

interface ProjectsByYear {
    year: string;
    projects: Project[];
}

export const projectDetail: ProjectsByYear[] = [
    {
        year: '2024',
        projects: [
            {
                title: 'Profolio Website',
                date: 'May 24 2024',
                duration: '1 min',
                image: '/public/image/Profolio Website.png'
            },
            {
                title: 'A decentralized serverless orchestrator with in-memory data store',
                date: 'May 2024',
                duration: '1 min',
                image: '/public/image/A decentralized serverless orchestrator with in-memory data store.png'
            },
            {
                title: 'Performance Evaluation of Software-Defined Networking using Mininet and Ryu Controller',
                date: 'May 2024',
                duration: '5 mins',
                image: '/public/image/Performance Evaluation of Software-Defined Networking using Mininet and Ryu Controller.png'
            }
        ]
    },
    // {
    //     year: '2023',
    //     projects: [
    //         {
    //             title: 'X Clone Full Stack Web Application',
    //             date: 'Dec 2023',
    //             duration: '1 min',
    //         },
    //         {
    //             title: 'Case Study in Data Cleaning and Provenance',
    //             date: 'Jun 2023',
    //             duration: '1 min',
    //         },
    //         {
    //             title: 'CS PhD Academic World Website',
    //             date: 'Apr 2023',
    //             duration: '1 min',
    //         }
    //     ]
    // },
    // {
    //     year: '2022',
    //     projects: [
    //         {
    //             title: 'Figma WeGo App Prototype',
    //             date: 'Nov 2022',
    //             duration: '1 min',
    //         }
    //     ]
    // },
    {
        year: '2077',
        projects: [
            {
                title: 'Doc',
                date: '21 May 2077',
                duration: '1 min',
            }
        ]
    }
];