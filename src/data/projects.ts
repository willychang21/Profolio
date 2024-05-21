export interface Project {
    title: string;
    date: string;
    duration: string;
    image: string;
}

interface ProjectsByYear {
    year: string;
    projects: Project[];
}

export const projects: ProjectsByYear[] = [
    {
        year: '2077',
        projects: [
            {
                title: 'Doc',
                date: '21 May 2077',
                duration: '1 min',
                image: '/path-to-image6.jpg'
            }
        ]
    },
    {
        year: '2019',
        projects: [
            {
                title: '[Research] Understanding Spreadsheet User Workflow',
                date: '30 September 2019',
                duration: '1 min',
                image: '/path-to-image1.jpg'
            },
            {
                title: '[Research] Quadratic Voting in HCI',
                date: '30 September 2019',
                duration: '5 mins',
                image: '/path-to-image2.jpg'
            }
        ]
    },
    {
        year: '2017',
        projects: [
            {
                title: '[Research] Efficient Nearest Neighbors Search in Distributed Manner',
                date: '31 January 2017',
                duration: '1 min',
                image: '/path-to-image3.jpg'
            },
            {
                title: '[WEB] CUHK Taiwanese Student Association Website',
                date: '30 January 2017',
                duration: '1 min',
                image: '/path-to-image4.jpg'
            },
            {
                title: '[Community] Circle',
                date: '29 January 2017',
                duration: '1 min',
                image: '/path-to-image5.jpg'
            }
        ]
    }
];
