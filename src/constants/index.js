export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Sumz AI Summerizer',
      desc: 'Sumz is an open-source article summarizer application that transforms lengthy  articles into concise and  summaries readable. It is the best AI based web application.',
      subdesc:
        'This project aims to develop an intelligent tool that automatically generates concise summaries of articles. Utilizing advanced natural language processing techniques, the summarizer extracts key points, ensuring that users can quickly grasp the essence of lengthy texts. The tool is designed for students, researchers, and professionals seeking efficient ways to consume information without losing critical insights',
      href: 'https://leecodes.netlify.app',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Vite',
          path: '/assets/vite.png',
        },
        {
          id: 4,
          name: 'Redux Toolkit',
          path: '/assets/redux.png',
        },
      ],
    },
    {
      title: 'Trainer (IT Onboarding)',
      desc: 'Created and executed an onboarding program for new employees, providing training on IT policies, support processes, software tools such as FileMaker and GSX on LMS eLearning System.',
      skills:
        'Training development, communication, onboarding processes.',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
    },
    {
      title: 'BankEase - Online Banking Platform',
      desc: 'BankEase is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
      subdesc:
        'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
      href: '',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'CarePulse - Health Management System',
      desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
      subdesc:
        'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
      href: 'incoming',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Webhelp',
      pos: 'IT Helpdesk',
      duration: '2018 - 2021',
      title: "Provided first-line support to over 1000 users, effectively troubleshooting software issues via phone, email, and chat",
      icon: '/assets/Webhelp.svg',
      animation: 'goal',
    },
    {
      id: 2,
      name: 'iStore',
      pos: 'iOS Technician',
      duration: '2023 - 2025',
      title: "Conducted software updates and managed backups using iTunes and iCloud, guiding customers through data transfer and security best practices.",
      icon: '/assets/iStore.png',
      animation: 'greeting',
    },
    {
      id: 2,
      name: 'Webhelp',
      pos: 'Customer Service Advisor',
      duration: '2021 - 2022',
      title: "Deliver exceptional customer service by efficiently resolving inquiries, providing accurate information, and ensuring customer satisfaction through multiple communication channels (phone, email, chat).",
      icon: '/assets/iStore.png',
      animation: 'greeting',
    },
  ];

  export default myProjects;
  
  