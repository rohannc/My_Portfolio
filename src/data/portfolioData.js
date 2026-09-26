import codolioStats from './codolioStats.json';
import codolioBadges from './codolioBadges.json';

export { codolioStats, codolioBadges };

export const personalInfo = {
  name: "Rohan Chakraborty",
  tagline: "Software Engineer at Visa || Master of Computer Applications from Jadavpur University || AI & Agentic Systems",
  headline: "Engineering autonomous AI agents & scalable, secure enterprise software.",
  role: "Software Engineer at Visa",
  company: "Visa",
  status: "Software Engineer at Visa",
  location: "Bengaluru, Karnataka, India",
  email: "chakrabortyrohan.abc01@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/19UzkhTtntELmvFp6c0OTfz8GoNirav87/view?usp=sharing",
  resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=19UzkhTtntELmvFp6c0OTfz8GoNirav87",
  codolioUrl: "https://codolio.com/profile/Rohann",
  about: `I am a Software Engineer at Visa in Bengaluru, having completed my Master of Computer Applications degree from Jadavpur University. During my journey at Visa, I focused on optimizing the SDLC by engineering Autonomous AI Agents ( Python, LangGraph, MCP ) and building secure, CI/CD pipelines with Human-In-The-Loop to automate vulnerability remediation and accelerate feature delivery. Beyond software engineering, I am deeply passionate about competitive programming, hackathons, and analytical problem-solving with ${codolioStats.totalSolved} DSA problems solved and multiple collegiate championships.`,
  stats: [
    { label: "Current Role", value: "Visa", desc: "Software Engineer, Bengaluru" },
    { label: "WBJECA Rank", value: "Rank 17", desc: "State Entrance Exam 2024" },
    { label: "Problems Solved", value: codolioStats.totalSolved || "1700+", desc: "All Platforms" },
    { label: "Global Rank", value: codolioStats.globalRank || "-", desc: "Codolio Platform" },
    { label: "Codolio Rating", value: codolioStats.rating || "-", desc: "Max Rating" },
    { label: "Max Streak", value: (codolioStats.maxStreak || "0") + " Days", desc: "Consistency" },
    { label: "Contests", value: codolioStats.contestsAttended || "-", desc: "Global Contests Attended" },
    { label: "Milestones", value: "9+", desc: "Hackathons & Championships" }
  ]
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rohanchakraborty0108/",
    icon: "linkedin",
    handle: "rohanchakraborty0108"
  },
  {
    name: "GitHub",
    url: "https://github.com/rohannc",
    icon: "github",
    handle: "rohannc"
  },
  {
    name: "Email",
    url: "mailto:chakrabortyrohan.abc01@gmail.com",
    icon: "email",
    handle: "chakrabortyrohan.abc01@gmail.com"
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/rohanchakraborty.",
    icon: "discord",
    handle: "rohanchakraborty."
  }
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Visa",
    employmentType: "Full-time",
    location: "Bengaluru, Karnataka, India",
    period: "June 2026 — Present",
    current: true,
    badge: "Current Role",
    summary: "Building scalable enterprise software systems, agentic development workflows, and high-reliability distributed architectures.",
    description: "Continuing to engineer and evolve mission-critical software solutions, scalable distributed systems, and autonomous development workflows within Visa's core technology landscape.",
    contributions: [
      {
        title: "Enterprise Software Engineering",
        desc: "Engineering scalable, resilient backend services and production features supporting enterprise payment ecosystem capabilities."
      },
      {
        title: "Intelligent Workflow Evolution",
        desc: "Advancing internal engineering workflows by integrating autonomous agentic tooling, real-time code analysis, and high-assurance delivery practices."
      }
    ],
    skills: ["Python", "Java", "Autonomous AI Agents", "LangGraph", "Model Context Protocol ( MCP )", "CI/CD", "DevSecOps", "Claude Code", "Claude Skills", "Kubernetes", "Hazlecast", "Mountebank", "Kafka", "SSO"]
  },
  {
    role: "Software Engineer Intern",
    company: "Visa",
    employmentType: "Internship",
    location: "Bengaluru, Karnataka, India",
    period: "January 2026 — June 2026",
    current: false,
    badge: "Internship",
    summary: "Transitioned from an Intern to a Software Engineer by driving automation and optimizing the Software Development Life Cycle (SDLC) to accelerate end-to-end feature delivery.",
    contributions: [
      {
        title: "AI & Workflow Automation",
        desc: "Engineered autonomous AI agents using Python Asyncio, LangGraph, and the Model Context Protocol ( MCP ) to streamline complex workflows, including automated Jira requirement extraction, Test-Driven Development ( TDD ) implementation, and Git management."
      },
      {
        title: "CI/CD & DevSecOps",
        desc: "Architected Human-In-The-Loop ( HITL ) CI/CD pipelines by integrating Jenkins and Claude CLI."
      },
      {
        title: "Automated Security",
        desc: "Integrated enterprise security tools ( SonarQube, Checkmarx, Nexus IQ ) directly into the pipeline to automate vulnerability scanning and remediation, drastically reducing delivery bottlenecks."
      }
    ],
    skills: ["Python Asyncio", "LangGraph", "MCP", "Claude CLI", "Jenkins", "SonarQube", "Checkmarx", "Nexus IQ", "Jira Automation", "TDD", "Git"]
  }
];

export const skillCategories = [
  {
    title: "Libraries and Frameworks",
    icon: "library",
    skills: [
      { name: "LangGraph", level: "Agentic AI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/langchain.svg", invertIcon: true },
      { name: "Spring Boot", level: "Enterprise Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Vert.x", level: "Reactive Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vertx/vertx-original.svg" },
      { name: "TensorFlow", level: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "OpenCV & PIL", level: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Vue.js 3", level: "Frontend UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Flask", level: "Python Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", invertIcon: true },
      { name: "Tailwind CSS", level: "Modern Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", level: "Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ]
  },
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C Programming", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    title: "Computer Science Coursework",
    icon: "academic",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core Foundations", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg", invertIcon: true },
      { name: "Database Management Systems", level: "DBMS & SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Operating Systems", level: "Kernel & Concurrency", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Computer Networks", level: "Protocols & Sockets", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/wireshark.svg", invertIcon: true },
      { name: "Object Oriented Programming", level: "OOP Principles", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/uml.svg", invertIcon: true },
      { name: "Computer Architecture", level: "COA & Hardware", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg" },
      { name: "Software Engineering", level: "Design & Lifecycle", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/diagramsdotnet.svg", invertIcon: true },
      { name: "Bioinformatics", level: "Computational Biology", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322d3ee' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 15c6.667-6 13.333 0 20-6'/><path d='M9 22c1.798-1.998 2.518-3.995 2.807-5.993'/><path d='M15 2c-1.798 1.998-2.518 3.995-2.807 5.993'/><path d='M17 6l-2.5-2.5'/><path d='M14 8l-1-1'/><path d='M7 18l2.5 2.5'/><path d='M3.5 14.5l.5.5'/><path d='M20 9l.5.5'/><path d='M6.5 12.5l1 1'/><path d='M16.5 10.5l1 1'/><path d='M10 16l1.5 1.5'/></svg>" }
    ]
  },
  {
    title: "DevOps, CI/CD & Tools",
    icon: "tools",
    skills: [
      { name: "Jenkins", level: "CI/CD Automation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Git & GitHub", level: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Maven", level: "Build Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
      { name: "IntelliJ IDEA", level: "Java IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "VS Code", level: "Code Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", level: "Java IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
      { name: "Bruno", level: "API Client", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/bruno.svg", invertIcon: true },
      { name: "Postman", level: "API Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ]
  },
  {
    title: "Cloud, Containers & Streaming",
    icon: "cloud",
    skills: [
      { name: "Claude Code", level: "AI Agent", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg", invertIcon: true },
      { name: "Claude Skills", level: "AI Tooling", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg", invertIcon: true },
      { name: "Kubernetes", level: "Orchestration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Hazelcast", level: "In-Memory Grid", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322d3ee' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='7' height='7'></rect><rect x='14' y='3' width='7' height='7'></rect><rect x='14' y='14' width='7' height='7'></rect><rect x='3' y='14' width='7' height='7'></rect></svg>" },
      { name: "Mountebank", level: "API Testing", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/testinglibrary.svg", invertIcon: true },
      { name: "Kafka", level: "Streaming", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachekafka.svg", invertIcon: true },
      { name: "SSO", level: "Security", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/auth0.svg", invertIcon: true },
      { name: "Rocks DB", level: "Database", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/surrealdb.svg", invertIcon: true }
    ]
  },
  {
    title: "Core Concepts & Methodologies",
    icon: "layers",
    skills: [
      { name: "Human In The Loop", level: "SDLC & AI", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322d3ee' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z'/><path d='M19 21v-2a4 4 0 0 0-3-3.87'/><path d='M5 21v-2a4 4 0 0 1 3-3.87'/><path d='M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'/><path d='M3 3v5h5'/><path d='M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16'/><path d='M21 21v-5h-5'/></svg>" },
      { name: "Autonomous AI Agents", level: "Agentic Systems", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg", invertIcon: true },
      { name: "Model Context Protocol", level: "MCP Standards", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg", invertIcon: true },
      { name: "Vulnerability Remediation", level: "Enterprise Security", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sonarqube.svg", invertIcon: true },
      { name: "SDLC Optimization", level: "Pipeline Automation", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubactions.svg", invertIcon: true },
      { name: "Error Level Analysis ( ELA )", level: "Forensics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Competitive Programming", level: `${codolioStats.totalSolved} DSA Solved`, icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg", invertIcon: true },
      { name: "Test Driven Development", level: "Software Quality", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/junit5.svg", invertIcon: true },
      { name: "Algorithmic Problem Solving", level: "Logic & Complexity", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg", invertIcon: true }
    ]
  }
];

export const featuredProject = {
  id: "deepfake-detection",
  title: "DeepFake Image Detection System",
  tagline: "Leveraging AI and Forensic Error Level Analysis ( ELA )",
  accuracy: "98%",
  summary: "A robust web-based application designed to detect deepfake images using a combination of advanced AI techniques and Error Level Analysis (ELA).",
  description: "The system boasts an accuracy of approximately 98% in identifying manipulated images using dual detection methods: an AI-powered deep learning model trained on a dataset of over 80,000 images, and Error Level Analysis (ELA) as a secondary verification technique. It offers flexible inputs, allowing users to either upload an image directly from their device or submit an image URL for analysis. Privacy and security are ensured, as all uploaded images are processed securely without permanent data storage.",
  githubUrl: "https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection",
  team: [
    {
      name: "Rohan Chakraborty",
      role: "Forensic Analysis & ELA",
      subRole: "Frontend Integration & System Lead",
      avatar: "ProjectIcon1Cropper.jpg",
      linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/"
    },
    {
      name: "Adrika Ghosh",
      role: "Frontend Engineering",
      subRole: "UI/UX & Interface Design",
      avatar: "Adrika.jpeg",
      linkedin: "https://www.linkedin.com/in/adrika-ghosh-b07a66298/"
    },
    {
      name: "Subhashis Mondal",
      role: "Model Training & Datasets",
      subRole: "Backend Architecture",
      avatar: "Subhashis.jpeg",
      linkedin: "https://www.linkedin.com/in/subhashis360/"
    }
  ],
  techStack: [
    { name: "Python", category: "Core" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "OpenCV", category: "Vision" },
    { name: "PIL", category: "Forensics" },
    { name: "Scikit-learn", category: "Metrics" },
    { name: "Flask", category: "Backend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Styling" },
    { name: "JavaScript", category: "Frontend" }
  ],
  keyFeatures: [
    "Dual Detection Methods: AI-powered deep learning combined with Error Level Analysis (ELA)",
    "Model trained on a diverse dataset of over 80,000 images",
    "Flexible Inputs: Direct image upload or image URL submission",
    "Privacy & Security: Secure processing with zero permanent user data storage",
    "Real-time processing with an intuitive web interface and clear result visualization"
  ],
  screenshots: [
    { file: "Website01.png", caption: "Landing Page" },
    { file: "Website02.png", caption: "System Architecture Overview" },
    { file: "Website03.png", caption: "Knowledge Base" },
    { file: "Website04.png", caption: "Support & Contact" },
    { file: "Website05.png", caption: "Forensic Image Upload & Verification Portal" },
    { file: "Website06.png", caption: "Error Level Analysis ( ELA ) Heatmap Visualization" },
    { file: "Website07.png", caption: "Confidence Breakdown & Probabilistic Metrics" }
  ]
};

export const achievements = [
  {
    title: "WBJECA 2024",
    subtitle: "West Bengal Joint Entrance Examination Board",
    position: "General Merit Rank 17",
    category: "State Level",
    badgeType: "rank",
    badgeColor: "cyan",
    year: "2024",
    view: "https://drive.google.com/file/d/1xO0XuySHLrjJ9MZeWgAh7oJokfVN_s27/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "Secured General Merit Rank 17 state-wide in WBJECA 2024 ( West Bengal Joint Entrance Examination for Master of Computer Applications )."
  },
  {
    title: "Error 404, Envision 2k25",
    subtitle: "Ramakrishna Mission Residential College ( Autonomous ), Narendrapur",
    position: "Winner ( 1st Place )",
    category: "Coding",
    badgeType: "gold",
    badgeColor: "amber",
    year: "2025",
    participation: "Solo",
    view: "https://drive.google.com/file/d/1QujfDQFttfx7SlyVsXCIlj6YIgjVBZfO/view?usp=sharing",
    linkedin: "https://www.linkedin.com/posts/rohanchakraborty0108_codingcompetition-error404-rkmrc-activity-7314332325641613312--KBI",
    description: "Won 1st prize in the high-stakes debugging and competitive coding championship."
  },
  {
    title: "Eureka — Mystery Solving Competition",
    subtitle: "Ramakrishna Mission Vivekananda Centenary College, Rahara",
    position: "Winner ( 1st Place )",
    category: "Competition",
    badgeType: "gold",
    badgeColor: "amber",
    year: "2023",
    participation: "Team of Two",
    view: "https://drive.google.com/file/d/1w1hQy0AGePx4jwjhxvmLAaQi8VFh6H43/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "1st Place winner in the inter-college analytical mystery solving and logical deduction challenge."
  },
  {
    title: "Sherlocked, Srijan '25",
    subtitle: "Faculty of Engineering & Technology, Jadavpur University, Kolkata",
    position: "Team Winner ( 1st Place )",
    category: "Competition",
    badgeType: "gold",
    badgeColor: "amber",
    year: "2025",
    participation: "Team of Three",
    view: "https://drive.google.com/file/d/1PakvJlfb4XBnVtWNY-4-3HVm6JzF2b-V/view?usp=sharing",
    linkedin: "https://www.linkedin.com/posts/rohanchakraborty0108_srijanju-mca-jumca-activity-7319796457308311552-JpnY",
    description: "Secured 1st place in the investigative mystery and analytical deduction challenge at Jadavpur University's annual fest."
  },
  {
    title: "CodeCrafter, IgniteX 1.0",
    subtitle: "International Management Institute ( IMI ), Kolkata",
    position: "Second Runner-Up ( 3rd Place )",
    category: "Coding",
    badgeType: "bronze",
    badgeColor: "orange",
    year: "2024",
    participation: "Solo",
    view: "https://drive.google.com/file/d/10W_Kjy_E2jnggi95a_kPv4L1YwYHm1Jv/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "Finished in 3rd place ( Second Runner-Up ) in the collegiate algorithmic coding sprint."
  },
  {
    title: "The Turing Show, Perceptron 2025",
    subtitle: "Ramakrishna Mission Vivekananda Educational and Research Institute ( RKMVERI )",
    position: "3rd Position",
    category: "Competition",
    badgeType: "bronze",
    badgeColor: "orange",
    year: "2025",
    participation: "Solo",
    view: "https://drive.google.com/file/d/1b_B5QMO62DZasjctaB0_I-u6IZvgMPsw/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "Secured 3rd Position in the theoretical computer science and algorithmic logic challenge."
  },
  {
    title: "Rahasyabhedi, Nirdesh Tech Fest 2024",
    subtitle: "Ramakrishna Mission Vivekananda Centenary College, Rahara",
    position: "3rd Position",
    category: "Competition",
    badgeType: "bronze",
    badgeColor: "orange",
    year: "2024",
    participation: "Solo",
    view: "https://drive.google.com/file/d/1194-dcJvEL1IchtdqhIF5-Nya_OpkuZk/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "Finished 3rd Position in the cryptography, logic puzzles, and mystery solving event."
  },
  {
    title: "Doubleslash 3.0",
    subtitle: "IEEE Jadavpur University, Kolkata",
    position: "Finalist",
    category: "Hackathon",
    badgeType: "finalist",
    badgeColor: "purple",
    year: "2024",
    participation: "Team",
    view: "",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "Selected as Finalist in the flagship DoubleSlash 3.0 hackathon hosted by IEEE Jadavpur University."
  },
  {
    title: "Code Mania V1.0",
    subtitle: "Vidyasagar College, Kolkata",
    position: "Participant",
    category: "Coding",
    badgeType: "participant",
    badgeColor: "blue",
    year: "2023",
    participation: "Solo",
    view: "",
    linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
    description: "Competed in the regional collegiate coding contest testing core programming and logic speed."
  }
];

export const educationHistory = [
  {
    degree: "Master of Computer Applications",
    institution: "Jadavpur University",
    location: "Kolkata, West Bengal",
    period: "2024 — 2026",
    score: "CGPA: 8.70",
    status: "Pursuing",
    courses: [
      "Object Oriented Programming",
      "Computer Organisation & Architecture",
      "Database Management Systems",
      "Operating Systems",
      "Bioinformatics"
    ],
    linkToPdf: ""
  },
  {
    degree: "B.Sc. in Computer Science ( Honours )",
    institution: "Bangabasi College, University of Calcutta",
    location: "Kolkata, West Bengal",
    period: "2021 — 2024",
    score: "CGPA: 7.706",
    status: "Completed",
    courses: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
      "Digital Systems",
      "Mathematics & Physics"
    ],
    linkToPdf: "https://drive.google.com/file/d/1HKULzIIvT1GUxDIiueGjRIQunCXbDHm7/view?usp=drive_link"
  },
  {
    degree: "Higher Secondary ( 10+2 Science )",
    institution: "Halisahar High School ( WBCHSE )",
    location: "North 24 Parganas, West Bengal",
    period: "2018 — 2019",
    score: "82.43%",
    status: "Completed",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Bengali"],
    linkToPdf: "https://drive.google.com/file/d/1TqWli2_Qe8dQD2289YU5G0MHcvwmvO5C/view?usp=sharing"
  }
];
