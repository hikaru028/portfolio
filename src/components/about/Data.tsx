import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap
} from 'lucide-react';

const personalData = [
    {
        icon: <User2 size={20} />,
        text: 'Hikaru Suzuki',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+81 70-8494-6324',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'h.suzuki.028@gmail.com',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master of Information Technology',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Tokyo, Japan',
    },
];

const educationData = [
    {
        university: 'The University of Auckland',
        degree: 'Master of Information Technology',
        years: 'Feb 2023 - Nov 2024'
    },
    {
        university: 'Soka University',
        degree: 'Postgraduate Certificate of Education',
        years: 'Apr 2013 - Mar 2015'
    },
    {
        university: 'Kanagawa University',
        degree: 'Bachelor of Economics',
        years: 'Apr 2008 - Mar 2012'
    },
];

const workData = [
    {
        company: 'TSR Co.',
        role: 'Associate Software Engineer',
        title: 'Full-time · Tokyo, Japan',
        years: 'Jun 2025 - Current'
    },
    {
        company: 'MDMC',
        role: 'Software Developer',
        title: 'Remote · New Zealand',
        years: 'Oct 2024 - Dec 2025'
    },
    {
        company: 'MegaTransact Ltd',
        role: 'Frontend Developer Intern',
        title: 'Remote · New Zealand',
        years: 'Mar 2024 - Jun 2024'
    },
];

const skillData = [
    {
        name: 'Languages'
    },
    {
        name: 'Java, JavaScript, TypeScript, Python, SQL, HTML5/CSS3'
    },
    {
        name: 'Frameworks'
    },
    {
        name: 'Angular, Spring Boot, Flask, React, React Native, Node.js, Next.js, Tailwind CSS'
    },
    {
        name: 'Database'
    },
    {
        name: 'MySQL, PostgreSQL, MongoDB'
    },
    {
        name: 'Cloud Computing'
    },
    {
        name: 'AWS, GCP'
    },
    {
        name: 'Testing'
    },
    {
        name: 'JUnit, unit testing, integration testing'
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/svg/vscode.svg'
            },
            {
                imgPath: '/svg/vim.svg'
            },
        ]
    }
];

export { personalData, educationData, workData, skillData };
