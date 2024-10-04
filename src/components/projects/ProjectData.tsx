export const ProjectData: Project[] = [
    {
        image: '/png/mediscan.png',
        category: ['Python', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
        title: 'Mediscan',
        description: 'This is an image recognition application for Healthcare and a user-friendly AI-driven solution designed to transform how you access pharmacy products and services.',
        link: '',
        github: 'https://github.com/hikaru028/mediscan',
    },
    {
        image: '/png/portfolio.png',
        category: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        title: 'Hikari. (My Portfolio)',
        description: 'This is my portfolio website, which showcases my skills. It embodies a modern design, a visually appealing and intuitive user experience.',
        link: 'https://hikarusuzuki.link/portfolio',
        github: 'https://github.com/hikaru028/portfolio',
    },
    {
        image: '/png/x-clone.png',
        category: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
        title: 'X-clone app',
        description: 'A full-stack Twitter clone application built using Express, MongoDB, and Vite with React.',
        link: '',
        github: 'https://github.com/hikaru028/Twitter-Clone',
    },
    {
        image: '/png/kalah.png',
        category: ['Java'],
        title: 'Kalah Game',
        description: 'This was developed as part of my coursework. This project focused on studying maintainable software design principles.',
        link: '',
        github: 'https://github.com/hikaru028/Kalah-in-Java',
    },
    {
        image: '/png/noimage.png',
        category: ['C#', '.NET', 'HTML', 'CSS'],
        title: 'Othello Game',
        description: 'The server pairs up players and coordinates the exchange of game moves. It is built using the C# programming language and .NET 7.',
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
