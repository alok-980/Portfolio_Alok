const profilePhoto = "./Gemini_Generated_Image_pwln3spwln3spwln.jpg"
const resumeUrl = "./ALOK CHAUHAN(1).pdf"

export const profile = {
    name: "Alok Chauhan",
    initials: "AC",
    role: "Full Stack Developer",
    roles: ["FULL STACK DEVELOPER", "MERN STACK DEVELOPER", "SOFTWARE ENGINEER", "CREATIVE DEVELOPER"],
    tagline: "I build web applications that tackle real business challenges using the MERN stack.",
    location: "Maharastra, India",
    email: "alokchauhan7896@gmail.com",
    resumeUrl: resumeUrl,
    github: "https://github.com/alok-980",
    linkedin: "https://www.linkedin.com/in/alok-chauhan/",
    twitter: "https://twitter.com/alok",
    availability: "Open to full-time Software Engineer / Full Stack Developer roles",
    photo: profilePhoto,
    introLeft:
        "I kicked off my career as a Full Stack Developer during an internship at Koncept Software Solutions, working on 10+ production applications across CRM, HRMS, and E-commerce.",
    introRight:
        "I build with MongoDB, Express.js, React.js and Node.js — focused on features that actually help businesses streamline their operations, not just demo projects.",
};

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
        "I'm a Full Stack Developer who builds web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. I like turning real business problems into working software, not just building demo projects that look good but solve nothing.",
        "So far I've built 6+ CRM systems, HRMS modules covering Hiring, Attendance, and Payroll, a Driver Rental platform with full booking workflows, and a SaaS QR platform supporting multiple user roles and bulk QR generation. I've also shipped e-commerce features like payment integration and live order tracking, and integrated WebRTC for audio/video calling with wallet management.",
        "I'm currently looking for Full-Time Software Engineer or Full Stack Developer roles where I can keep solving real problems alongside a strong team — feel free to reach out.",
    ],
    stats: [
        { value: 10, suffix: "+", label: "Production apps delivered" },
        { value: 6, suffix: "+", label: "CRM systems built" },
        { value: 4, suffix: "", label: "MERN stack expertise" },
        { value: 100, suffix: "%", label: "Real production work, zero demos" },
    ],
};

export const skills = {
    categories: [
        {
            name: "Languages",
            items: ["JavaScript (ES6+)", "Java", "TypeScript", "HTML5", "CSS3"],
        },
        {
            name: "Frameworks & Libraries",
            items: ["React", "Redux", "Tailwind CSS", "Bootstrap", "Material UI", "GSAP"],
        },
        {
            name: "Tools & Platforms",
            items: ["Git / GitHub", "Postman", "VS Code", "Docker", "Kubernetes"],
        },
        {
            name: "Backend & Data",
            items: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "CI/CD"],
        },
    ],
    marquee: [
        "React", "Redux", "Node.js", "Express.js", "MongoDB", "JavaScript",
        "TypeScript", "Tailwind CSS", "Bootstrap", "Material UI", "GSAP", "Git",
    ],
};

import procxImg from "../assets/images/procx/procx-preview.png";
import crystalionImg from "../assets/images/crystalion/crystalion-preview.png";
import algotipImg from "../assets/images/algotip/algotip-preview.png";
import qrsmartImg from "../assets/images/qrSmart/qrsmart-preview.png";
import vrdcreativeImg from "../assets/images/vrd/vrd-preview.png";

export const projects = [
    {
        id: "01",
        slug: "procx",
        title: "PROCX",
        subtitle: "E-Commerce Platform",
        category: "Client Project · E-Commerce",
        role: "Backend Developer",
        duration: "3 months",
        description:
            "A full-featured wooden packaging e-commerce platform with separate Admin and Supplier panels. Fully dynamic product management, order tracking, and inventory system.",
        features: [
            "Dynamic product catalog with categories & filters",
            "Separate Admin Panel for full platform control",
            "Supplier Panel for inventory & order management",
            "Secure JWT authentication & role-based access",
            "Order tracking and status management",
            "Responsive design across all devices",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux"],
        image: procxImg,
        link: "https://procx.pages.dev/packaging-services/shop",
        github: "https://github.com/alok-980",
    },
    {
        id: "02",
        slug: "crystalion-engineers",
        title: "Crystalion Engineers",
        subtitle: "CRM System",
        category: "Client Project · CRM",
        role: "Backend Developer",
        duration: "2 months",
        description:
            "A comprehensive CRM built for an engineering firm to manage clients, projects, follow-ups, and business operations — all in one place.",
        features: [
            "Client & lead management with status tracking",
            "Project pipeline with timeline view",
            "Follow-up reminders and activity logs",
            "Employee task assignment and monitoring",
            "Invoice & quotation generation",
            "Dashboard with business analytics",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        image: crystalionImg,
        link: "https://crystalionengineers.pages.dev/superadmin/dashboard",
        github: "https://github.com/alok-980",
    },
    {
        id: "03",
        slug: "algotip",
        title: "Algotip",
        subtitle: "Trading Platform with Video/Audio Calls",
        category: "Client Project · Real-time / Fintech",
        role: "Backend Developer (Feature Addition)",
        duration: "1.5 months",
        description:
            "A trading tips platform where I integrated real-time video/audio calling and a wallet system for premium call access. Built on top of an existing platform.",
        features: [
            "Real-time video & audio calling via WebRTC",
            "Integrated wallet system for call credits",
            "Pay-per-minute call billing",
            "Expert-to-user calling flow",
            "Call history and transaction logs",
            "Socket.io for real-time communication",
        ],
        tech: ["React.js", "Node.js", "WebRTC", "Socket.io", "MongoDB", "Wallet API"],
        image: algotipImg,
        link: "https://algotipp.com/",
        github: "https://github.com/alok-980",
    },
    {
        id: "04",
        slug: "qr-smart",
        title: "QR Smart",
        subtitle: "QR Code Generator",
        category: "Client Project · SaaS",
        role: "Backend Developer",
        duration: "1 month",
        description:
            "A feature-rich QR code generation platform supporting URLs, contact cards, WiFi credentials, and more. Users can customize, download, and track QR scans.",
        features: [
            "Generate QR for URLs, vCard, WiFi, text & more",
            "Custom QR with color, logo & style options",
            "Download in PNG/SVG formats",
            "Scan analytics & tracking dashboard",
            "Bulk QR generation support",
            "User account with QR history",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "QR Libraries"],
        image: qrsmartImg,
        link: "https://qrsmart.pages.dev/",
        github: "https://github.com/alok-980",
    },
    {
        id: "05",
        slug: "vrd-creative",
        title: "VRD Creative",
        subtitle: "HR Management CRM",
        category: "Client Project · HRMS",
        role: "Backend Developer",
        duration: "2 months",
        description:
            "A complete HR management module for a creative agency — handles hiring, employee records, attendance, payroll, and all HR operations in one platform.",
        features: [
            "End-to-end employee hiring workflow",
            "Attendance tracking with daily logs",
            "Salary management & payroll generation",
            "Leave management system",
            "Employee performance records",
            "HR dashboard with team analytics",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        image: vrdcreativeImg,
        link: "https://vrd-crm.pages.dev/superAdmin/dashboard",
        github: "https://github.com/alok-980",
    },
];

export const experience = [
    {
        role: "Backend Developer",
        company: "Koncept Software Solutions",
        period: "2026 — Present",
        location: "Remote",
        points: [
            "Designed secure REST APIs with JWT-based role authentication.",
            "Architected MongoDB schemas for complex multi-role systems.",
            "Maintained and optimized existing backend codebases.",
        ],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Koncept Software Solutions",
        period: "2025 Sep — 2025 Dec",
        location: "Remote, India",
        points: [
            "Built motion-driven marketing sites for 15+ clients using GSAP & React.",
            "Partnered directly with designers to translate Figma into pixel-accurate UI.",
            "Learned industry-standard coding practices and Git workflows",
        ],
    },
    {
        role: "Web Development Intern",
        company: "Unified Mentor",
        period: "2024 Aug — 2022 Nov",
        location: "Remote, India",
        points: [
            "Learned the fundamentals of design systems and accessible markup.",
            "Developed full-stack web applications from scratch",
            "Received hands-on mentorship on best coding practices",
        ],
    },
];

export const education = [
    {
        degree: "AI Powered, (Full Stack Development)",
        school: "Sheryians Coding School",
        period: "June 2026 — Present",
        note: "Frontend, Backend, Generative AI, System Design, DSA",
    },
    {
        degree: "BCA, Full Stack Development",
        school: "Manipal University Jaipur",
        period: "2023 — 2026",
        note: "Graduated with distinction · Focus on web systems & HCI",
    }
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
