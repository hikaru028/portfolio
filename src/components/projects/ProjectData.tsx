export const ProjectData: Project[] = [
    {
        image: '/png/portfolio.png',
        category: 'Full-stack',
        title: 'Hikari. (My Portfolio)',
        description: 'This is my portfolio website, which showcases my skills. It embodies a modern design, a visually appealing and intuitive user experience.',
        link: 'https://hikarusuzuki.link/portfolio',
        github: 'https://github.com/hikaru028/portfolio',
    },
    {
        image: '/png/kalah.png',
        category: 'Java',
        title: 'Kalah Game',
        description: 'This was developed as part of my coursework. This project focused on studying maintainable software design principles.',
        link: '',
        github: 'https://github.com/hikaru028/Kalah-in-Java',
    },
    {
        image: '',
        category: 'C#',
        title: 'Othello Game',
        description: '',
        link: '',
        github: 'https://github.com/hikaru028/Othello-in-CSharp',
    },
    {
        image: '/png/soon.png',
        category: 'Node.js',
        title: '',
        description: 'I am creating the next project...',
        link: '-',
        github: 'https://github.com/hikaru028',
    },
];

interface Project {
    image?: string;
    category?: string;
    title?: string;
    tool?: string;
    description?: string;
    link?: string;
    github?: string;
}
