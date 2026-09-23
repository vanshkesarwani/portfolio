export const portfolioData = {
  personal: {
    name: "Vansh Kumar Kesarwani",
    shortName: "Vansh",
    title: "MERN Stack Developer & Full Stack Engineer",
    subtitles: [
      "MERN Stack Developer",
      "Full Stack Web Engineer",
      "MCA (AI/ML) Scholar",
      "Production-Grade Product Builder"
    ],
    status: {
      availability: "Immediate Joiner",
      relocation: "Open to Relocate",
      location: "Pratapgarh, UP, India",
      targetRole: "MERN Stack Internship / Entry-Level Full Stack Developer"
    },
    contact: {
      email: "vanshkesarwanivk02@gmail.com",
      phone: "+91 8756433837",
      phoneRaw: "+918756433837",
      github: "https://github.com/vanshkesarwani",
      linkedin: "https://www.linkedin.com/in/vansh-kumar-kesarwani",
      portfolio: "https://vanshkesarwani.dev"
    },
    bio: "BCA graduate & MCA (AI/ML) student with hands-on MERN Stack experience through 2 internships and 2 production-grade applications. Proficient in React.js, Node.js, Express.js, MongoDB, RESTful APIs, JWT authentication, and high-performance UI engineering. Passionate about building seamless, scalable, and visually compelling web experiences for the modern web.",
    stats: [
      { label: "Internships", value: "2", suffix: " Completed" },
      { label: "Production Projects", value: "2", suffix: " Shipped" },
      { label: "MCA CGPA", value: "9.00", suffix: " / 10" },
      { label: "BCA CGPA", value: "8.61", suffix: " / 10" }
    ],
    aboutDetails: {
      pillars: [
        {
          title: "Clean Architecture & Modularity",
          desc: "Strict separation of concerns, RESTful MVC structure, and reusable React component paradigms for high maintainability."
        },
        {
          title: "Performance & Responsive Polish",
          desc: "Sub-second load times, 60fps micro-animations, mobile-first layouts, and accessible UI designed for Gen-Z and enterprise appeal."
        },
        {
          title: "AI & Modern Systems Vision",
          desc: "Specializing in AI/ML through MCA to synthesize modern full-stack web engineering with intelligent algorithmic capabilities."
        },
        {
          title: "Production & Team Experience",
          desc: "Hands-on experience shipping features in agile sprints, participating in code reviews, and managing Git/GitHub team workflows."
        }
      ],
      quickFacts: [
        { label: "Target Role", val: "MERN Stack Developer / Full Stack Engineer" },
        { label: "Availability", val: "Immediate Joiner (0 Days Notice)" },
        { label: "Work Preference", val: "Open to Relocate / Remote / Hybrid" },
        { label: "Current Education", val: "MCA in AI/ML — Amity Online (9.00 CGPA)" },
        { label: "Undergrad Degree", val: "BCA — Amity University (8.61 CGPA)" },
        { label: "Core Stack", val: "React 19, JavaScript ES6+, Node.js, Express, MongoDB" },
        { label: "Databases & Auth", val: "MongoDB (Mongoose), SQL, JWT, Passport.js" },
        { label: "Experience", val: "2 Internships (CodeAlpha, Craft Lab)" }
      ]
    }
  },

  skills: {
    categories: [
      { id: "all", name: "All Technologies" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend & Auth" },
      { id: "database", name: "Database" },
      { id: "languages", name: "Languages" },
      { id: "tools", name: "Tools & Concepts" }
    ],
    list: [
      { name: "React.js", category: "frontend", level: "Advanced", icon: "react", highlighted: true },
      { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", icon: "javascript", highlighted: true },
      { name: "Node.js", category: "backend", level: "Advanced", icon: "node", highlighted: true },
      { name: "Express.js", category: "backend", level: "Advanced", icon: "express", highlighted: true },
      { name: "MongoDB & Mongoose", category: "database", level: "Advanced", icon: "mongodb", highlighted: true },
      { name: "REST APIs", category: "backend", level: "Advanced", icon: "api", highlighted: true },
      { name: "JWT Authentication", category: "backend", level: "Advanced", icon: "shield", highlighted: true },
      { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", icon: "palette" },
      { name: "Responsive UI/UX", category: "frontend", level: "Advanced", icon: "layout" },
      { name: "Java", category: "languages", level: "Intermediate", icon: "coffee" },
      { name: "SQL", category: "database", level: "Intermediate", icon: "database" },
      { name: "Git & GitHub", category: "tools", level: "Advanced", icon: "git" },
      { name: "Postman", category: "tools", level: "Advanced", icon: "send" },
      { name: "VS Code", category: "tools", level: "Advanced", icon: "code" },
      { name: "MVC Architecture", category: "tools", level: "Advanced", icon: "layers" },
      { name: "CRUD Operations", category: "tools", level: "Advanced", icon: "refresh" },
      { name: "SDLC Best Practices", category: "tools", level: "Advanced", icon: "check-circle" }
    ]
  },

  projects: [
    {
      id: "footwear-ecommerce",
      title: "Footwear E-Commerce Platform",
      year: "2024",
      badge: "Full Stack MERN",
      tagline: "Dynamic, scalable footwear shopping experience with end-to-end authentication and optimized queries.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Mongoose"],
      description: "A production-grade full-stack e-commerce application engineered for speed, secure authentication, and seamless inventory management.",
      highlights: [
        "Built full-stack e-commerce application with JWT-based authentication (Login, Signup, Logout, session protection).",
        "Developed dynamic CRUD product management enabling real-time inventory updates and filtered search.",
        "Designed reusable, responsive React components for catalog showcase, shopping cart state management, and checkout flows.",
        "Implemented structured Mongoose schemas with indexed querying for optimized database performance."
      ],
      demoUrl: "https://github.com/vanshkesarwani/portfolio",
      githubUrl: "https://github.com/vanshkesarwani/portfolio",
      gradient: "from-purple to-cyan"
    },
    {
      id: "wanderlust-airbnb",
      title: "Wanderlust – Airbnb Clone",
      year: "2024",
      badge: "Full Stack Web & Geo Maps",
      tagline: "Immersive vacation stay booking platform featuring interactive Mapbox geolocation and cloud media.",
      stack: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Mapbox GL JS", "Passport.js"],
      description: "A comprehensive property listing and rental platform with location-based discovery and robust user authentication.",
      highlights: [
        "Developed a full-featured property listing platform with Passport.js authentication and role-based permissions.",
        "Engineered complete CRUD listing operations following industry-standard RESTful MVC routing architecture.",
        "Integrated Cloudinary cloud storage API for secure image upload, transformation, and fast CDN delivery.",
        "Integrated Mapbox GL JS for interactive property geo-location maps with custom coordinate markers."
      ],
      demoUrl: "https://github.com/vanshkesarwani",
      githubUrl: "https://github.com/vanshkesarwani",
      gradient: "from-cyan to-emerald"
    }
  ],

  experience: [
    {
      role: "Web Developer Intern",
      company: "CodeAlpha",
      location: "Lucknow, India (Remote)",
      period: "Jul 2024 – Sep 2024",
      type: "Internship",
      highlights: [
        "Built responsive, accessible web pages using HTML5, CSS3, and JavaScript ES6+ with a strict mobile-first design approach.",
        "Ensured cross-device compatibility, optimal rendering performance, and high Lighthouse audits across modern browsers.",
        "Translated Figma and UI/UX mockups into pixel-perfect, functional web components and delivered features on schedule in an agile team."
      ],
      skillsUsed: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "Cross-Browser Testing"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Craft Lab",
      location: "Mumbai, India (Remote)",
      period: "May 2024 – Jun 2024",
      type: "Internship",
      highlights: [
        "Collaborated directly with senior developers to diagnose, debug, and resolve front-end and back-end coding issues.",
        "Maintained Git/GitHub version control workflows, branching conventions, and pull request reviews in a team-based environment.",
        "Participated actively in agile sprints, daily standups, and rigorous code reviews to enforce software engineering best practices."
      ],
      skillsUsed: ["JavaScript", "Git", "GitHub", "Code Review", "Agile Collaboration"]
    }
  ],

  education: [
    {
      degree: "MCA – AI/ML",
      institution: "Amity University Online",
      location: "Noida, UP",
      period: "2025 – 2027",
      score: "CGPA: 9.00 / 10",
      status: "Currently Pursuing",
      description: "Specializing in Artificial Intelligence and Machine Learning along with advanced computer science and software systems."
    },
    {
      degree: "BCA – Computer Applications",
      institution: "Amity University",
      location: "Lucknow, UP",
      period: "2022 – 2025",
      score: "CGPA: 8.61 / 10",
      status: "Graduated",
      description: "Solid foundation in core computer science, software engineering, databases, object-oriented programming, and web development."
    }
  ],

  certifications: [
    {
      title: "Full Stack Web Development",
      provider: "Apna College",
      badge: "MERN Stack Mastery",
      topics: "React.js, Node.js, Express.js, MongoDB, REST APIs, Git"
    },
    {
      title: "Data Structures & Algorithms in Java",
      provider: "Apna College",
      badge: "Core Problem Solving",
      topics: "Arrays, Linked Lists, Trees, Graphs, Recursion, Time Complexity"
    }
  ]
};
