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
        years: '2013 - 2025'
    },
    {
        university: 'Kanagawa University',
        degree: 'Bachelor of Economics',
        years: '2008 - 2012'
    },
];

const workData = [
    {
        company: 'Megaride Ltd.',
        role: 'Web Development Intern',
        title: 'Part-time',
        years: 'Mar 2024 - Jun 2024'
    },
    {
        company: 'InoBasic Co.',
        role: 'Web Development Intern',
        title: 'Part-time',
        years: 'Nov 2023 - Feb 2024'
    },
    {
        company: 'Mangaweka Adventure Company Ltd.',
        role: 'All rounder',
        title: 'Full-time',
        years: 'Oct 2020 - Mar 2022'
    },
    {
        company: 'Primary Schools',
        role: 'Teacher',
        title: 'Full-time',
        years: 'Apr 2014 - Mar 2019'
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
        name: 'React, React Native, Node.js, Next.js, Vue.js, Tailwind CSS'
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
        name: 'AWS'
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
                imgPath: '/svg/intellij.svg'
            },
            {
                imgPath: '/svg/vim.svg'
            },
        ]
    }
];

export { personalData, educationData, workData, skillData };

