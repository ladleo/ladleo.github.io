import {
    frontend,
    backend,
    ux,
    prototyping,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    // tailwind,
    nodejs,
    git,
    // figma,
    // docker,
    postgresql,
    // rubyrails,
    // graphql,
    komikult,
    leaderboard,
    math,
    movie,
    nyeusi,
    // space,
    coverhunt,
    // dcc,
    // kelhel,
    // microverse,
    // ramani
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    // {
    //     id: 'projects',
    //     title: 'Projects',
    // },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Frontend Developer',
        icon: frontend,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'DevOps',
        icon: ux,
    },
    {
        title: 'Software Prototyping',
        icon: prototyping,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    // {
    //   name: 'Redux Toolkit',
    //   icon: redux,
    // },
    // {
    //   name: 'Tailwind CSS',
    //   icon: tailwind,
    // },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    // {
    //   name: 'Rails',
    //   icon: rubyrails,
    // },
    // {
    //   name: 'graphql',
    //   icon: graphql,
    // },
    {
        name: 'postgresql',
        icon: postgresql,
    },
    {
        name: 'git',
        icon: git,
    },
    // {
    //   name: 'figma',
    //   icon: figma,
    // },
    // {
    //   name: 'docker',
    //   icon: docker,
    // },
];

const experiences = [
    {
        title: 'Software Developer',
        company_name: 'Tujenge Technology',
        icon: coverhunt,
        iconBg: '#333333',
        date: 'May 2015 - Feb 2018',
        responsibilities: [
            'Successfully aided our clients digital presence through designing and development of our clients online portfolio, this cuts through web and social media.',
            'Maintained documentation of software development activities and procedures',
            'Collaborated with cross-functional teams to design, implement, and test new features',
            'Integration of payment gateways, resulting in faster and more secure transactions'
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Thinkers Technologies',
        icon: coverhunt,
        iconBg: '#333333',
        date: 'May 2017 - Feb 2018',
        responsibilities: [
            'Designed web applications, psd to HTML',
            'Develop web applications',
            'Developed APIs',
            'Integrated third party APIs for in-house and client applications',
        ],
    },
    {
        title: 'Software Developer',
        company_name: 'UCC',
        icon: coverhunt,
        iconBg: '#333333',
        date: 'Oct 2018 - Jan 2020',
        responsibilities: [
            'Developed and maintained hospital management applications using Android Java',
            'Collaborated with cross-functional teams to analyze business requirements and design software solutions',
            'Utilized agile methodology to ensure timely delivery of high-quality software products',
            'Participated in code reviews and provided constructive feedback to improve code quality',
            'Conducted thorough testing and debugging to ensure software functionality and reliability',
            'Collaborated with cross-functional teams to design, implement, and test new features',
            'Maintained documentation of software development activities and procedures',
        ]
    },
    {
        title: 'System Software Developer',
        company_name: 'AIM Group',
        icon: coverhunt,
        iconBg: '#333333',
        date: 'Jan 2020 - Sep 2021',
        responsibilities: [
            'Developed and maintained Sales force automation system',
            'Developed and maintained web applications using PHP and the MERN stack for both front-end and back-end development',
            'Collaborated with cross-functional teams to design, implement, and test new features',
            'Integrated third-party APIs to enhance application functionality',
        ],
    },
    {
        title: 'DevOps Engineer',
        company_name: 'Tunzaa',
        icon: coverhunt,
        iconBg: '#333333',
        date: 'Jun 2022 - Dec 2022',
        responsibilities: [
            'Developed and implemented software testing strategies to ensure high-quality code',
            'Participated in team meetings and contributed ideas to improve software development processes',
            'Conducted research on emerging technologies and presented findings to team members',
            'Created, assigned and managed a team of developers throughout the life cycle of the said tasks',
        ],
    },
    {
        title: 'Senior Software Engineer',
        company_name: 'Ramani io',
        icon: coverhunt,
        iconBg: '#333333',
        date: 'Dec 2021 - Jun 2023',
        responsibilities: [
            'Developed technical documentation and user manuals',
            'Conducted research on emerging technologies and presented findings to team members',
            'Participated in team meetings and contributed ideas to improve software development processes',
            'Developed and implemented software testing strategies to ensure high-quality code',
            'Integrated third-party APIs to enhance application functionality',
            'Designed and optimized databases to improve application performance',
            'Collaborated with cross-functional teams to design, implement, and test new features',
            'Developed and maintained web applications using MERN stack for both front-end and back-end development',
            'Build scrapping tools',
        ],
    },
];

const projects = [
    {
        id: 'project-1',
        name: 'KomiKult',
        description: 'A comic characters list app that displays Marvel characters.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: komikult,
        repo: 'https://github.com/shaqdeff/KomiKult',
        demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
        id: 'project-2',
        name: 'Leaderboard',
        description:
            'A leaderboard list app that displays scores submitted by different players.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: leaderboard,
        repo: 'https://github.com/shaqdeff/Leaderboard',
        demo: 'https://shaqdeff.github.io/Leaderboard/',
    },
    {
        id: 'project-3',
        name: 'Math Magicians',
        description: 'This is a single-page calculator app built with React',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: math,
        repo: 'https://github.com/shaqdeff/Math-Magicians',
        demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    },
    {
        id: 'project-4',
        name: 'Movie Metro',
        description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: movie,
        repo: 'https://github.com/shaqdeff/Movie-Metro',
        demo: 'https://movie-metro.netlify.app/',
    },
    {
        id: 'project-5',
        name: 'Nyeusi Fest Site',
        description:
            'This is a demo concert website for a music festival called Nyeusi.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: nyeusi,
        repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
        demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
];

export {services, technologies, experiences, projects};
