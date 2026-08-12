export const profile = {
    name: "Alok Chauhan",
    initials: "AC",
    role: "Full Stack Developer",
    roles: ["FULL STACK DEVELOPER", "MERN STACK DEVELOPER", "SOFTWARE ENGINEER", "CREATIVE DEVELOPER"],
    tagline: "I build web applications that tackle real business challenges using the MERN stack.",
    location: "Maharastra, India",
    email: "alokchauhan7896@gmail.com",
    resumeUrl: "/resume.pdf",
    github: "https://github.com/alok-980",
    linkedin: "https://www.linkedin.com/in/alok-chauhan",
    twitter: "https://twitter.com/alok",
    availability: "Open to full-time Software Engineer / Full Stack Developer roles",
    photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    introLeft:
        "I kicked off my career as a Full Stack Developer during an internship at Koncept Software Solutions, working on 10+ production applications across CRM, HRMS, and E-commerce.",
    introRight:
        "I build with MongoDB, Express.js, React.js and Node.js — focused on features that actually help businesses streamline their operations, not just demo projects.",
};

// Floating sticker badges shown around the hero portrait.
export const heroBadges = [
    { label: "UI ENGINEERING", sub: "Component & design systems", color: "teal", shape: "circle", top: "6%", left: "6%", rotate: -8 },
    { label: "REACT ARCHITECTURE ✳", color: "yellow", shape: "pill", top: "2%", left: "58%", rotate: 4 },
    { label: "ANIMATION & MOTION DESIGN →", color: "orange", shape: "pill-wide", top: "62%", left: "2%", rotate: -6 },
    { label: "PERFORMANCE + SEO ©'25", color: "pink", shape: "pill", top: "18%", left: "76%", rotate: 5 },
    { label: "ACCESSIBILITY A11Y", color: "teal", shape: "pill", top: "58%", left: "78%", rotate: -4 },
    { label: "* DESIGN SYSTEMS *", color: "green", shape: "circle", top: "80%", left: "56%", rotate: 8 },
];

export const about = {
    paragraphs: [
        "I'm a frontend developer who cares about the 40 milliseconds between a click and a response. I build interfaces that feel considered — fast, legible, and a little bit alive.",
        "Over the last few years I've shipped products across fintech, e-commerce and creative-tech, working closely with designers to turn static mockups into interactions people remember.",
        "When I'm not at the keyboard, I'm usually sketching UI ideas, reading about type design, or getting outplayed at chess by a 9-year-old.",
    ],
    stats: [
        { value: 3, suffix: "+", label: "Years experience" },
        { value: 28, suffix: "", label: "Projects shipped" },
        { value: 12, suffix: "", label: "Happy clients" },
        { value: 6, suffix: "", label: "Awards & mentions" },
    ],
};

export const skills = {
    categories: [
        {
            name: "Languages",
            items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
        },
        {
            name: "Frameworks & Libraries",
            items: ["React", "Next.js", "Redux", "Tailwind CSS", "GSAP"],
        },
        {
            name: "Tools & Platforms",
            items: ["Git / GitHub", "Figma", "Vite", "Webpack", "Docker"],
        },
        {
            name: "Backend & Data",
            items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST / GraphQL"],
        },
    ],
    marquee: [
        "React", "GSAP", "TypeScript", "Tailwind CSS", "Next.js", "Node.js",
        "Figma", "MongoDB", "Framer Motion", "Redux", "Vite", "Git",
    ],
};

export const projects = [
    {
        id: "01",
        title: "Nimbus Finance",
        category: "Web App · Fintech",
        year: "2025",
        description:
            "A personal-finance dashboard with real-time budgeting, animated data visualisations and a custom design system.",
        tech: ["React", "TypeScript", "GSAP", "Tailwind"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        link: "#",
        github: "#",
    },
    {
        id: "02",
        title: "Loop Studio",
        category: "Portfolio · Creative Agency",
        year: "2024",
        description:
            "An award-nominated agency site with scroll-driven storytelling, WebGL accents and a horizontal-scroll case-study gallery.",
        tech: ["React", "GSAP", "ScrollTrigger", "Three.js"],
        image:
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
        link: "#",
        github: "#",
    },
    {
        id: "03",
        title: "Marketly",
        category: "SaaS · Analytics",
        year: "2024",
        description:
            "A multi-tenant analytics platform for D2C brands — dashboards, cohort charts and a self-serve report builder.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Redux"],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        link: "#",
        github: "#",
    },
    {
        id: "04",
        title: "Fieldnote",
        category: "Mobile-first Web · Productivity",
        year: "2023",
        description:
            "A distraction-free journaling app with offline-first sync, gesture navigation and a hand-tuned typography system.",
        tech: ["React", "IndexedDB", "Tailwind", "PWA"],
        image:
            "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1600&auto=format&fit=crop",
        link: "#",
        github: "#",
    },
    {
        id: "05",
        title: "Grainscape",
        category: "Experiment · Generative Art",
        year: "2023",
        description:
            "A generative textile-pattern playground — export-ready SVGs driven by simple noise and colour-theory controls.",
        tech: ["React", "Canvas API", "GSAP"],
        image:
            "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=1600&auto=format&fit=crop",
        link: "#",
        github: "#",
    },
];

export const experience = [
    {
        role: "Senior Frontend Developer",
        company: "Nimbus Labs",
        period: "2024 — Present",
        location: "Remote",
        points: [
            "Led the rebuild of the core dashboard, cutting first-paint time by 42%.",
            "Introduced a shared component library adopted across 4 product teams.",
            "Mentored two junior engineers through their first production launches.",
        ],
    },
    {
        role: "Frontend Developer",
        company: "Studio Loop",
        period: "2022 — 2024",
        location: "Bengaluru, India",
        points: [
            "Built motion-driven marketing sites for 15+ clients using GSAP & React.",
            "Partnered directly with designers to translate Figma into pixel-accurate UI.",
            "Owned performance budgets — average Lighthouse score of 96+.",
        ],
    },
    {
        role: "Web Development Intern",
        company: "Pixel & Co.",
        period: "2021 — 2022",
        location: "Lucknow, India",
        points: [
            "Shipped 10+ landing pages and internal tools in a fast-paced agency setting.",
            "Learned the fundamentals of design systems and accessible markup.",
        ],
    },
];

export const education = [
    {
        degree: "B.Tech, Computer Science & Engineering",
        school: "ABC Institute of Technology",
        period: "2019 — 2023",
        note: "Graduated with distinction · Focus on web systems & HCI",
    },
    {
        degree: "Higher Secondary (PCM)",
        school: "XYZ Senior Secondary School",
        period: "2017 — 2019",
        note: "School topper, Computer Science",
    },
];

export const achievements = [
    {
        title: "Awwwards — Site of the Day",
        org: "Loop Studio redesign",
        year: "2024",
    },
    {
        title: "Best Hackathon Project",
        org: "HackNorth 2023",
        year: "2023",
    },
    {
        title: "Top 5% Frontend",
        org: "Codeforces / LeetCode ranking",
        year: "2023",
    },
    {
        title: "Speaker — React Meetup",
        org: "\"Animating with Intent\" talk",
        year: "2024",
    },
];
