export const portfolioData = {
  personal: {
    name: "Vansh Kumar Kesarwani",
    shortName: "Vansh",
    title: "MERN Stack Developer | React.js | Node.js | Express.js | MongoDB",
    subtitles: [
      "MERN Stack Developer",
      "Full Stack Web Developer",
      "React.js & Node.js Specialist",
      "MCA (AI/ML) Scholar"
    ],
    status: {
      availability: "Immediate Joiner",
      relocation: "Open to Relocate",
      location: "Pratapgarh, Uttar Pradesh, India",
      targetRole: "MERN Stack Developer Internship / Entry-Level Full Stack Developer"
    },
    contact: {
      email: "vanshkesarwanivk02@gmail.com",
      phone: "+91-8756433837",
      phoneRaw: "+918756433837",
      github: "https://github.com/vanshkesarwani",
      linkedin: "https://www.linkedin.com/in/vansh-kumar-kesarwani",
      portfolio: "https://vanshkesarwani.dev",
      resumePdf: "/resume.pdf"
    },
    bio: "BCA graduate and MCA (Artificial Intelligence & Machine Learning) student with hands-on MERN Stack (MongoDB, Express.js, React.js, Node.js) development experience through a full-stack internship and 2 production-grade full-stack projects. Proficient in React.js, Node.js, Express.js, MongoDB, REST API development, JWT and Passport.js authentication, CRUD operations, Git/GitHub version control, and responsive UI development. Immediate joiner seeking MERN Stack Developer Internship or Entry-Level Full Stack Developer role.",
    stats: [
      { label: "Internship", value: "1", suffix: " Full Stack (Vastora Tech)" },
      { label: "Production Projects", value: "2", suffix: " Live Deployed" },
      { label: "MCA CGPA", value: "8.82", suffix: " / 10" },
      { label: "BCA CGPA", value: "8.61", suffix: " / 10" }
    ],
    aboutDetails: {
      pillars: [
        {
          title: "Clean Architecture & REST APIs",
          desc: "Strict separation of concerns, RESTful MVC structure, CRUD operations, and reusable React component paradigms for high maintainability."
        },
        {
          title: "Authentication & Security",
          desc: "Implementing secure authentication mechanisms using JWT and Passport.js session-based authorization with role-based access control (RBAC)."
        },
        {
          title: "AI & Modern Systems Vision",
          desc: "Specializing in AI & Machine Learning through MCA to blend modern full-stack engineering with intelligent algorithmic capabilities."
        },
        {
          title: "Industry Development Workflows",
          desc: "Professional experience building full-stack applications in onsite environments, following clean coding practices, API testing, debugging, and Git/GitHub version control."
        }
      ],
      quickFacts: [
        { label: "Target Role", val: "MERN Stack Developer / Entry-Level Full Stack Developer" },
        { label: "Availability", val: "Immediate Joiner (0 Days Notice)" },
        { label: "Location", val: "Pratapgarh, Uttar Pradesh, India" },
        { label: "Work Preference", val: "Open to Relocate / Onsite / Hybrid / Remote" },
        { label: "Current Education", val: "MCA in AI & ML — Amity University Online (8.82 CGPA)" },
        { label: "Undergrad Degree", val: "BCA — Amity University, Lucknow (8.61 CGPA)" },
        { label: "Internship", val: "Full Stack Developer Intern — Vastora Tech Pvt. Ltd." },
        { label: "Live Deployed Projects", val: "Velura (E-Commerce) & Wanderlust (Rental)" }
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
      { id: "tools", name: "Tools & Platforms" }
    ],
    list: [
      // Frontend
      { name: "React.js", category: "frontend", level: "Advanced", icon: "react", highlighted: true },
      { name: "Vite", category: "frontend", level: "Advanced", icon: "zap", highlighted: true },
      { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "palette", highlighted: true },
      { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", icon: "javascript", highlighted: true },
      { name: "HTML5", category: "frontend", level: "Advanced", icon: "code" },
      { name: "CSS3", category: "frontend", level: "Advanced", icon: "palette" },
      { name: "Responsive Web Design", category: "frontend", level: "Advanced", icon: "layout", highlighted: true },

      // Backend
      { name: "Node.js", category: "backend", level: "Advanced", icon: "node", highlighted: true },
      { name: "Express.js", category: "backend", level: "Advanced", icon: "express", highlighted: true },
      { name: "REST API", category: "backend", level: "Advanced", icon: "api", highlighted: true },
      { name: "JWT Authentication", category: "backend", level: "Advanced", icon: "shield", highlighted: true },
      { name: "Passport.js", category: "backend", level: "Advanced", icon: "lock", highlighted: true },
      { name: "CRUD Operations", category: "backend", level: "Advanced", icon: "refresh", highlighted: true },

      // Database
      { name: "MongoDB", category: "database", level: "Advanced", icon: "mongodb", highlighted: true },
      { name: "Mongoose", category: "database", level: "Advanced", icon: "database", highlighted: true },
      { name: "SQL", category: "database", level: "Intermediate", icon: "database" },

      // Programming Languages
      { name: "Java", category: "languages", level: "Intermediate", icon: "coffee" },

      // Tools & Platforms
      { name: "Git", category: "tools", level: "Advanced", icon: "git", highlighted: true },
      { name: "GitHub", category: "tools", level: "Advanced", icon: "git", highlighted: true },
      { name: "Postman", category: "tools", level: "Advanced", icon: "send" },
      { name: "VS Code", category: "tools", level: "Advanced", icon: "code" },
      { name: "Cloudinary", category: "tools", level: "Advanced", icon: "cloud", highlighted: true },
      { name: "Mapbox", category: "tools", level: "Advanced", icon: "map", highlighted: true },
      { name: "Vercel", category: "tools", level: "Advanced", icon: "upload-cloud", highlighted: true }
    ]
  },

  projects: [
    {
      id: "velura-ecommerce",
      title: "Velura – Luxury E-Commerce Platform",
      year: "2025",
      badge: "Full Stack MERN • Deployed",
      status: "Live on Vercel",
      tagline: "Luxury e-commerce experience with RBAC admin dashboard, coupon engine, dynamic cart/wishlist & Cloudinary media.",
      stack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Cloudinary"],
      description: "A production-grade full-stack e-commerce web application engineered with modern React & Tailwind UI, secure JWT authentication, dynamic product catalog management, and role-based access control.",
      highlights: [
        "Built a full-stack e-commerce web application enabling product browsing, search and filtering, cart and wishlist management, coupon application, order placement, and order tracking.",
        "Developed an admin dashboard with role-based access control (RBAC) for managing products, banners, users, and orders separately from standard user permissions.",
        "Implemented JWT-based authentication for secure login and Cloudinary integration for product image storage; architected React → Express.js → MongoDB request-response flow."
      ],
      features: [
        { label: "Admin RBAC", desc: "Role-based access control for inventory & banner management" },
        { label: "Cart & Wishlist", desc: "Real-time state with dynamic coupon discounts & order tracking" },
        { label: "Cloudinary CDN", desc: "Optimized image transformations and fast media delivery" }
      ],
      demoUrl: "https://e-commerce-five-xi-63.vercel.app/",
      deployedUrl: "https://e-commerce-five-xi-63.vercel.app/",
      githubUrl: "https://github.com/vanshkesarwani/e-commerce",
      gradient: "from-purple to-cyan",
      accentColor: "#8b5cf6"
    },
    {
      id: "wanderlust-rental",
      title: "Wanderlust – Vacation Rental Platform",
      year: "2024",
      badge: "Full Stack Web & Geo Maps • Deployed",
      status: "Live on Vercel",
      tagline: "Vacation rental marketplace featuring interactive Mapbox geolocation, Cloudinary CDN, and session auth.",
      stack: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "Mapbox"],
      description: "A full-featured vacation rental web application allowing users to search and filter listings, view property locations on dynamic maps, and allowing registered hosts to manage their own properties.",
      highlights: [
        "Built a full-stack vacation rental web application allowing users to search and filter properties, view detailed listings, and enabling registered hosts to list and manage their own properties.",
        "Implemented Passport.js session-based authentication and authorization, ensuring only property owners can edit or delete their listings and reviews.",
        "Integrated Mapbox geocoding API to convert host-entered addresses into geographic coordinates for interactive map display; used Cloudinary for image upload and storage."
      ],
      features: [
        { label: "Mapbox Geocoding", desc: "Converts text addresses into coordinates for interactive map pins" },
        { label: "Passport.js Auth", desc: "Session-based authorization with owner-only editing & reviews" },
        { label: "Host Listing Hub", desc: "Complete property hosting CRUD pipeline with media uploads" }
      ],
      demoUrl: "https://wanderlust-six-vert.vercel.app/",
      deployedUrl: "https://wanderlust-six-vert.vercel.app/",
      githubUrl: "https://github.com/vanshkesarwani/wanderlust",
      gradient: "from-cyan to-emerald",
      accentColor: "#06b6d4"
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Vastora Tech Pvt. Ltd.",
      location: "Noida, India (Onsite)",
      period: "September 2026 – Present",
      type: "Internship (Onsite)",
      highlights: [
        "Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB, implementing REST APIs and CRUD operations.",
        "Worked on user authentication, API testing, debugging, database integration, and Git/GitHub version control following clean coding practices and industry-standard development workflows."
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD Operations", "Git/GitHub", "API Testing"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA) – Artificial Intelligence & Machine Learning",
      institution: "Amity University Online",
      location: "Online",
      period: "2025 – 2027",
      score: "CGPA: 8.82",
      status: "Currently Pursuing",
      description: "Specializing in Artificial Intelligence and Machine Learning alongside advanced software systems, database engineering, and modern web application development."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University",
      location: "Lucknow, Uttar Pradesh",
      period: "2022 – 2025",
      score: "CGPA: 8.61",
      status: "Graduated",
      description: "Rigorous foundation in computer science principles, object-oriented programming, data structures & algorithms, web engineering, and database systems."
    }
  ],

  certifications: [
    {
      title: "Full Stack Web Development",
      provider: "Apna College",
      badge: "MERN Stack Mastery",
      topics: "React.js, Node.js, Express.js, MongoDB, REST APIs, CRUD, Git/GitHub"
    },
    {
      title: "Data Structures & Algorithms in Java",
      provider: "Apna College",
      badge: "Core Problem Solving",
      topics: "Arrays, Linked Lists, Trees, Graphs, Recursion, Time & Space Complexity"
    }
  ]
};
