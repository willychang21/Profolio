import { IconType } from 'react-icons'
import {
  FaPython,
  FaJs,
  FaSwift,
  FaCuttlefish,
  FaReact,
  FaAws,
  FaGoogle,
  FaDocker,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaMedium,
  FaJira,
  FaSlack,
  FaConfluence,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiSvelte,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiAxios,
  SiPrisma,
  SiVite,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiElasticsearch,
  SiFirebase,
  SiKubernetes,
  SiAnsible,
  SiLinux,
  SiApachekafka,
  SiNeo4J,
  SiNextdotjs,
  SiAmazondynamodb,
  SiMui,
  SiAmazons3,
  SiBootstrap,
  SiPostman,
  SiFlask,
  SiYoutubemusic,
  SiOpensearch,
  SiSwagger,
  SiK3S,
  SiKeycloak,
  SiSkaffold,
  SiDaisyui,
} from 'react-icons/si'
import { TbApi, TbBeach } from 'react-icons/tb'

export interface SocialLink {
  name: string
  url: string
  icon: IconType
}

export interface Skill {
  name: string
  icon: IconType
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Education {
  period: string
  institution: string
  institutionUrl: string
  degree: string
  courses: string[]
}

export interface Experience {
  position: string
  company: string
  companyUrl: string
  period: string
  description: string[]
  skills: string[]
}

export const personalInfo = {
  name: 'Chun Chieh Chang',
  firstName: 'Chun Chieh',
  avatar: '/avatar.jpeg',
  intro:
    "Hi everyone! My name is Chun Chieh Chang, and I'm from Taiwan 🇹🇼. I'm currently a second-year Computer Science student at the University of Illinois at Urbana-Champaign. I’m also interning at Kocree, where I'm contributing to the development of an innovative Music AI Platform.",
  location: 'Champaign, IL',
  cvLink:
    'https://drive.google.com/file/d/1EoCmruL2Iu4vNZsRDJB6klPqoiAtNb_O/view?usp=sharing',
  socialLinks: [
    {
      name: 'Github',
      url: 'https://github.com/willychang21',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/willychang17/',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:willysde2025@gmail.com',
      icon: FaEnvelope,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@willychang17',
      icon: FaMedium,
    },
    {
      name: 'Youtube Music',
      url: 'https://music.youtube.com/playlist?list=PL0glHKqK-DSrMOnJtbyBhA-9s3ZMD4D8k&si=yt9Fo-HC3lw1ZavU',
      icon: SiYoutubemusic,
    },
  ] as SocialLink[],
  skills: [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: FaJs },
        { name: 'Swift', icon: FaSwift },
        { name: 'C++', icon: FaCuttlefish },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Svelte', icon: SiSvelte },
        { name: 'NestJS', icon: SiNestjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Flask', icon: SiFlask },
        { name: 'RESTful', icon: TbApi },
        { name: 'GraphQL', icon: SiGraphql },
      ],
    },
    {
      category: 'Libraries',
      skills: [
        { name: 'TanStack', icon: TbBeach },
        { name: 'Axios', icon: SiAxios },
        { name: 'PrismaORM', icon: SiPrisma },
        { name: 'Vite', icon: SiVite },
        { name: 'TailwindCSS', icon: SiTailwindcss },
        { name: 'MUI', icon: SiMui },
        { name: 'daisyUI', icon: SiDaisyui },
        { name: 'Bootstrap', icon: SiBootstrap },
      ],
    },
    {
      category: 'Storage',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Redis', icon: SiRedis },
        { name: 'DynamoDB', icon: SiAmazondynamodb },
        { name: 'S3', icon: SiAmazons3 },
        { name: 'Neo4j', icon: SiNeo4J },
      ],
    },
    {
      category: 'Message and Search',
      skills: [
        { name: 'Kafka', icon: SiApachekafka },
        { name: 'ElasticSearch', icon: SiElasticsearch },
        { name: 'OpenSearch', icon: SiOpensearch },
      ],
    },
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'AWS', icon: FaAws },
        { name: 'GCP', icon: FaGoogle },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'K3s', icon: SiK3S },
        { name: 'Ansible', icon: SiAnsible },
        { name: 'GitHub Actions', icon: FaGithub },
        { name: 'Linux', icon: SiLinux },
        { name: 'Skaffold', icon: SiSkaffold },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Github', icon: FaGithub },
        { name: 'Postman', icon: SiPostman },
        { name: 'Jira', icon: FaJira },
        { name: 'Confluence', icon: FaConfluence },
        { name: 'Slack', icon: FaSlack },
        { name: 'Swagger', icon: SiSwagger },
        { name: 'Keycloak', icon: SiKeycloak },
      ],
    },
  ] as SkillCategory[],
  education: [
    {
      period: '2022-2024',
      institution: 'University of Illinois Urbana-Champaign',
      institutionUrl: 'https://illinois.edu/',
      degree: 'Master of Engineering in Computer Science',
      courses: [
        'CS441 Applied Machine Learning (Python)',
        'CS411 Database Systems (MySQL, MongoDB, Neo4j)',
        'CS498 Cloud Computing Application (AWS, DynamoDB, AuroraDB, S3, Lambda, Hadoop, Spark, Storm, Docker, EKS)',
        'CS513 Theory and Practice of Data Cleaning (OpenRefine, SQLite, YesWorkflow)',
        'CS438 Communication Networks (C++)',
        'CS523 Advanced Operating Systems (Kubernetes, Ansible, Acto)',
        'CS491 Adv Competitive Algorithm Programming',
        'CS591 CS Colloquium',
      ],
    },
    {
      period: '2022-2023',
      institution: 'Northeastern University',
      institutionUrl: 'https://www.northeastern.edu/',
      degree: 'Master of Science in Computer Software Engineering',
      courses: [
        'INFO5100 Application Engineering and Development (Java)',
        'CSYE7280 User Experience Design and Testing (Figma)',
        'INFO6205 Program Structure and Algorithms (Java)',
        'INFO6350 Smartphones-Based Web Development (Swift)',
      ],
    },
    {
      period: '2015-2019',
      institution: 'Fu Jen Catholic University',
      institutionUrl: 'https://www.fju.edu.tw/indexEN.jsp',
      degree: 'Bachelor of Science in Computer Science',
      courses: [],
    },
  ] as Education[],
  experience: [
    {
      position: 'Software Engineer intern (Full Stack)',
      company: 'Kocree',
      companyUrl:
        'https://dpi.uillinois.edu/ai-aided-music-co-creation-platform/',
      period: 'May 2024 - Present',
      description: [
        'Built music sandbox MMO platform - Muosaic using Svelte, Nest.js, Python, PostgreSQL, and other full stack toolkits.',
        'Utilized RxJS framework to develop model views controllers and services to support the backend framework for Kocree’s revolutionary AI music creation application Muosaic.',
        'Enhanced user acquisition and engagement by streamlining sign-up and sign-in with Stytch and OAuth for social logins.',
        'Upgraded data model for coherence and cohesion, implementing user and asset privacy, access, and privilege management',
        'Strengthened the application’s data processing and storage infrastructure by integrating Kafka, Redis, and ElasticSearch in a Kubernetes environment, ensuring a 50% increase in scalability and reliability.',
      ],
      skills: [
        'TypeScript',
        'Svelte',
        'DaisyUI',
        'Nest.js',
        'Python',
        'PostgreSQL',
        'RxJS',
        'Kafka',
        'Redis',
        'ElasticSearch',
        'OpenSearch',
        'Kubernetes',
        'k3s',
        'OAuth',
        'Stytch',
        'Jira',
        'Confluence',
        'Swagger',
      ],
    },
    {
      position: 'Software Engineer (Full Stack)',
      company: 'University of Illinois Urbana-Champaign',
      companyUrl: 'https://illinois.edu/',
      period: 'March 2024 - Present',
      description: [
        'Developed Attendance System for UIUC under Prof. Abdussalam Alawini, serving over 5,000 students across 30+ courses.',
        'Utilized React, TailwindCSS to engineer responsive UI components, alongside Zustand for efficient state management.',
        'Re-architected the backend from a single-layer API router to a multi-layered structure using controllers, services, middleware, and routes, improving modularity and maintainability.',
        'Migrated from JavaScript to TypeScript, improving type safety and code quality with interfaces and models.',
        'Developed a secure Express.js backend with MongoDB, implementing Google OAuth JWT authentication.',
        'Implemented a CI/CD pipeline via GitHub Actions, facilitating automatic deployment and dynamic server/database setup on GCP for course scalability.',
      ],
      skills: [
        'React',
        'TailwindCSS',
        'Zustand',
        'TypeScript',
        'Express.js',
        'MongoDB',
        'Google OAuth',
        'Docker',
        'CI/CD',
        'GCP',
        'AWS',
        'Github Actions',
      ],
    },
    {
      position: 'Software Developer (Frontend)',
      company: 'Showu Tech',
      companyUrl: 'https://www.showu.com.tw/',
      period: 'May 2022 - Aug 2022',
      description: [
        'Crafted responsive web apps using React and Redux, seamlessly integrating with the backend via RESTful API.',
        'Elevated user experience by integrating an interactive map with Leafletjsand Openrouteservice, enabling users to conduct refined searches with ease.',
        'Leveraged OWASP ZAP for vulnerability assessments, dissected reports, and executed critical security patches, fortifying application defenses.',
        'Engaged directly with customers to solicit feedback and revamped the backend dashboard using Tabler to enhance usability.',
        'Spearheaded Agile Scrum methodologies in weekly sprints, collaborating with UI/UX teams. This synergy led to a noteworthy 10% uptick in DAU.',
      ],
      skills: [
        'React',
        'Redux',
        'Leafletjs',
        'Openrouteservice',
        'OWASP ZAP',
        'Tabler',
        'Gitlab',
      ],
    },
    {
      position: 'iOS App Developer intern',
      company: 'Institute for Information Industry',
      companyUrl: 'https://web.iii.org.tw/',
      period: 'Nov 2021 - Mar 2022',
      description: [
        'Upheld the integrity of a real-time chat app, implementing the MVVM architecture for streamlined code management and efficiency.',
        'Sculpted an engaging UI experience with UIKit and enhanced chat visuals leveraging MessageKit.',
        'Pioneered location-centric messaging via MapKit and audio/video messaging functionalities with AVFoundation.',
        'Implemented a robust backend infrastructure using Firebase Real-time Database, Cloud Storage, Cloud Firestore, and Firebase Authentication, enhancing data management efficiency and user authentication security.',
      ],
      skills: [
        'Swift',
        'UIKit',
        'SwiftUI',
        'MapKit',
        'AVFoundation',
        'MVVM',
        'Alamofire',
        'SDWebImage',
        'SwiftJSON',
        'MessageKit',
        'JGProgressHUD',
        'Firebase',
        'SoourceTree',
        'RestAPI',
        'Sockets',
        'APNS',
        'FCM',
      ],
    },
  ] as Experience[],
}
