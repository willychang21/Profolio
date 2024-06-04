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
      url: 'mailto:cc132@illinois.edu',
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
}
