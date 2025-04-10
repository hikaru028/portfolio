import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar
} from 'lucide-react';

const personalData = [
    {
        icon: <User2 size={20} />,
        text: 'Hikaru Suzuki',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+64 21 084 63502',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'h.suzuki.028@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 28th September',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master of Information Technology',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Auckland, New Zealand',
    },
];

const educationData = [
    {
        university: 'the University of Auckland',
        degree: 'Master of Information Technology',
        years: '2023 - Current'
    },
    {
        university: 'Soka University',
        degree: 'Postgraduate certificate of Education',
        years: '2013 - 2015'
    },
    {
        university: 'Kanagawa University',
        degree: 'Bachelor of Economics',
        years: '2008 - 2012'
    },
];

const workData = [
    {
        company: 'MDMC Advertising',
        role: 'Software Developer Intern',
        title: 'Full-time',
        years: 'Oct 2024 - Current'
    },
    {
        company: 'Megaride Ltd.',
        role: 'Web Development Intern',
        title: 'Part-time',
        years: 'Mar 2024 - Jun 2024'
    },
];

const skillData = [
    {
        name: 'Languages'
    },
    {
        name: 'Java, JavaScript, TypeScript, Python, SQL, HTML5, CSS3'
    },
    {
        name: 'Frameworks'
    },
    {
        name: 'Flask, React, React Native, Node.js, Next.js, Vue.js, Tailwind CSS'
    },
    {
        name: 'Database'
    },
    {
        name: 'MySQL, PostgreSQL, MongoDB'
    },
    {
        name: 'Could Computing'
    },
    {
        name: 'AWS, GCP'
    },
    {
        name: 'Testing'
    },
    {
        name: 'Jest'
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

