export const ProjectData: Project[] = [
    {
        image: '/png/mediscan.png',
        category: ['Python', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
        title: 'Mediscan',
        description: 'An AI-driven web and mobile product search assistant built with Python, Next.js, TypeScript, and React Native, with user flows designed in Figma.',
        link: '',
        github: 'https://github.com/hikaru028/mediscan',
    },
    {
        image: '/png/portfolio.png',
        category: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        title: 'Hikari. (My Portfolio)',
        description: 'My responsive portfolio website, built with Next.js and TypeScript to present my experience, technical skills, and selected projects.',
        link: 'https://www.hikarusuzuki.site/',
        github: 'https://github.com/hikaru028/portfolio',
    },
    {
        image: '/png/x-clone.png',
        category: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
        title: 'X Clone App',
        description: 'A full-stack social application built with Express, MongoDB, React, Vite, and TypeScript.',
        link: '',
        github: 'https://github.com/hikaru028/Twitter-Clone',
    },
    {
        image: '/png/kalah.png',
        category: ['Java'],
        title: 'Kalah Game',
        description: 'A Java coursework project focused on maintainable software design principles.',
        link: '',
        github: 'https://github.com/hikaru028/Kalah-in-Java',
    },
    {
        image: '/png/noimage.png',
        category: ['C#', '.NET', 'HTML', 'CSS'],
        title: 'Othello Game',
        description: 'A C# and .NET 7 board game whose server pairs players and coordinates the exchange of moves.',
        link: '',
        github: 'https://github.com/hikaru028/Othello-in-CSharp',
    },
];

interface Project {
    image?: string;
    category?: string[];
    title?: string;
    tool?: string;
    description?: string;
    link?: string;
    github?: string;
}
