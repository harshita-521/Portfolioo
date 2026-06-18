
export const home = {
  homePunch: "Builder. Thinker. Engineer.",
  homeGreeting: "Hi, I'm",
  homeName: "Harshita Gautam",
  homeTagline: "Engineering student at MANIT Bhopal.",

  homeStats: [
    {
      homeStatsPlatform: "LeetCode",
      homeStatsRating: "1637",
      homeStatsColor: "#f59e0b",
      homeStatsLink: "https://leetcode.com/u/_harshita48/", 
    },
    {
      homeStatsPlatform: "CodeChef",
      homeStatsRating: "1595",
      homeStatsColor: "#10b981",
      homeStatsLink: "https://www.codechef.com/users/harshita4971", 
    },
    {
      homeStatsPlatform: "Codeforces",
      homeStatsRating: "1318",
      homeStatsColor: "#3b82f6",
      homeStatsLink: "https://codeforces.com/profile/_harshita48", 
    },
  ],
  homeStatsDSA: "650+",
  homeStatsWins: "3",
  homeGithub: "https://github.com/harshita-521",       
  homeLinkedin: "https://linkedin.com/in/harshita-gautam-b84503320", 
  homeEmail: "harshita200525@gmail.com",
  homeResumeLink: "YOUR_GOOGLE_DRIVE_LINK_HERE",
}


export const about = {
  aboutTitle: "About Me",
  aboutDescription:
    "I'm a Computer Science undergraduate at MANIT Bhopal.I enjoy challenging myself through hackathons, competitions, and collaborative projects, where I get to learn from diverse perspectives.Beyond academics, I value leadership, teamwork, and mentoring, and I love contributing to communities where people learn and grow together.",

  aboutEducation: [
    {
      aboutEduSchool: "Maulana Azad National Institute of Technology, Bhopal",
      aboutEduDegree: "B.Tech - Computer Science",
      aboutEduYear: "2024 - 2028",
      aboutEduGrade: "9.05",
      aboutEduGradeLabel: "CGPA",
    },
    {
      aboutEduSchool: "Seth M.R. Jaipuria Schools, Varanasi",
      aboutEduDegree: "Class XII - CBSE",
      aboutEduYear: "2023",
      aboutEduGrade: "96.2%",
      aboutEduGradeLabel: "PCM",
    },
    {
      aboutEduSchool: "Seth M.R. Jaipuria Schools, Varanasi",
      aboutEduDegree: "Class X - CBSE",
      aboutEduYear: "2021",
      aboutEduGrade: "95.8%",
      aboutEduGradeLabel: "Overall",
    },
  ],
}

export const skills = {
  skillsTitle: "My Skills",

  skillsCategories: [
    {
      skillsCategoryName: "Languages",
      skillsCategoryColor: "#3b82f6",  
      skillsCategoryItems: [
        { name: "C++",    abbr: "C++" },
        
      ],
    },
    {
      skillsCategoryName: "Web Development",
      skillsCategoryColor: "#10b981",  
      skillsCategoryItems: [
        { name: "React.js",    abbr: "R"   },
        { name: "Node.js",     abbr: "N"   },
        { name: "Express.js",  abbr: "EX"  },
        { name: "JavaScript",  abbr: "JS"  },
        { name: "HTML",        abbr: "H"   },
        { name: "CSS",         abbr: "C"   },
        { name: "GitHub",    abbr: "GH"  },
        { name: "Git",         abbr: "GIT" },
      ],
    },
    {
      skillsCategoryName: "Machine Learning & AI",
      skillsCategoryColor: "#7c3aed",  
      skillsCategoryItems: [
        { name: "LangChain",          abbr: "LC"  },
        { name: "LLMs",               abbr: "LLM" },
        { name: "NLP",                abbr: "NLP" },
        { name: "Supervised Learning",abbr: "SL"  },
        { name: "Unsupervised",       abbr: "UL"  },
      ],
    },
    {
      skillsCategoryName: "Databases",
      skillsCategoryColor: "#f59e0b",  
      skillsCategoryItems: [
        { name: "MySQL",   abbr: "SQL" },
        { name: "MongoDB", abbr: "MDB" },
      ],
    },
    {
      skillsCategoryName: "CS Fundamentals",
      skillsCategoryColor: "#6b7280",  
      skillsCategoryItems: [
        { name: "Data Structures", abbr: "DS"  },
        { name: "Algorithms",      abbr: "ALG" },
        { name: "OOP",             abbr: "OOP" },
        { name: "DBMS",            abbr: "DB"  },
      ],
    },
  ],

  skillsMarquee: [
    "React.js", "Python", "C++", "LangChain", "Node.js",
    "MongoDB", "Hugging Face", "JavaScript", "Express.js",
    "MySQL", "RAG Pipelines", "Tailwind", "Git", "LLMs",
  ],
}

export const experience = {
  experienceTitle: "Experience",

  experienceList: [
    {
      experienceCompany: "Flipkart",
      experienceRole: "Software Development Engineer Intern",
      experienceDuration: "May - July 2026",
      experiencePoints: [
"Built an automated Grafana dashboard generator using rule-based SOPs and metrics scraping, supporting 15K–20K+ metrics per application and significantly reducing manual dashboard provisioning effort.",

"Led database decoupling in the validation service, preserving analytical API behavior while eliminating cross-service bottlenecks and substantially reducing database CPU utilization.",

"Resolved a production metrics regression in pricing-storm supervisors by migrating Cosmos JMX configurations to version-controlled confd templates, improving metrics reliability by 97.3%.",

"Automated end-to-end storm host-populator setup through Debian packaging and capacity-planner templates, eliminating YAK connectivity issues across supervisors and reducing node latency by 33%.",

"Contributed to the migration of internal data pipelines from the staging environment to the end-to-end (E2E) instance."
],
    },
  ],
}

export const work = {
  workTitle: "Work",

  workProjects: [
    
    {
      workProjectName: "GeoGPT",
      workProjectDesc:
        "AI-powered geospatial analysis assistant combining multiple AI Agents with chain-of-thought reasoning and Google Earth Engine. Reduces workflow complexity for environmental analysis, flood risk assessment, and site suitability tasks by 50%.",
      workProjectTech: ["Python", "LangChain", "LLM", "Streamlit", "GEE"],
      workProjectGithub: "#", 
    },
    {
      workProjectName: "InsightAI",
      workProjectDesc:
        "A full-stack AI research platform that autonomously conducts qualitative interviews, replacing manual researcher efforts with a goal driven LLM agent",
      workProjectTech: ["React.js", "Recharts", "Socket.io", "CSS", "Node.js", "Express.js", "MongoDB"],

    },
    // {
    //   workProjectName: "Crop Disease Prediction",
    //   workProjectDesc:
    //     "Web-based AI platform for farmers to diagnose crop diseases from plant photographs. ML model achieves 97% classification accuracy on validation data, enabling early intervention.",
    //   workProjectTech: ["React.js", "Python", "LangChain", "Hugging Face", "LLM"],
    //   workProjectGithub: "#", 
    // },
    {
      workProjectName: "TabNest",
      workProjectDesc:
        "TabNest is a simple and lightweight Chrome extension that lets you save your current tabs as a named collection and reopen them whenever you want.",
      workProjectTech: ["HTML", "CSS", "JavaScript"],
      workProjectGithub: "#",
    },{
      workProjectName: "Anti-India Campaign Detection",
      workProjectDesc:
        "NLP and LLM-based system analyzing 10,000+ text samples to detect coordinated misinformation campaigns on digital platforms. Improved detection accuracy by 45% over baseline keyword methods.",
      workProjectTech: ["React.js", "LangChain", "LLM", "Python", "NLP"],
      workProjectGithub: "#", 
    }
  ],

  workAchievements: [
    {
      workAchTitle: "Smart Innovate Hackathon",
      workAchType: "National Level Hackathon",
      workAchDesc:
        "Secured 3rd position and the Innovation Award among 100+ teams. Built an AI-driven solution addressing real-world societal problems under a tight time constraint.",
      workAchCert: "https://drive.google.com/file/d/1tDeNhkKMnsdZIGkdy6-IzqkLEAAyj4yl/view",   
      workAchProfile: "", 
    },
    {
      workAchTitle: "Terravate Hackathon by IIT BHU",
      workAchType: "National Level Hackathon",
      workAchDesc:
        "Won 1st position at Terravate, IIT BHU's flagship hackathon. Delivered a working prototype that impressed judges with its technical depth and impact.",
      workAchCert: "https://drive.google.com/file/d/1tC1uFuaSAIxl-Q-rRyWZPhmPgBMTQcLz/view",
      workAchProfile: "",
    },
    {
      workAchTitle: "Ideathon by IEEE",
      workAchType: "Innovation Competition",
      workAchDesc:
        "Secured 1st position among 200+ participants. Presented a structured idea with technical feasibility and real-world applicability to a panel of industry judges.",
      workAchCert: "https://drive.google.com/file/d/1sxVDivQidJIIdd0_-dmBA_E4f_KN1O_Z/view",
      workAchProfile: "",
    },
    {
      workAchTitle: "CIIS - MANIT & SBI",
      workAchType: "National Level Competition",
      workAchDesc:
        "Placed among the top 15 teams nationwide in the CIIS competition jointly organized by MANIT Bhopal and State Bank of India.",
      workAchCert: "#",
      workAchProfile: "",
    },
    {
      workAchTitle: "Smart India Hackathon (SIH)",
      workAchType: "National Level Hackathon",
      workAchDesc:
        "Selected in the top 50 teams at college level for Smart India Hackathon, India's largest national-level hackathon organized by the Government of India.",
      workAchCert: "",
      workAchProfile: "",
    },
    {
      workAchTitle: "Competitive Programming",
      workAchType: "Algorithmic Problem Solving",
      workAchDesc:
        "Solved 650+ DSA problems across platforms. LeetCode 1637 · CodeChef 1595 · Codeforces 1318.",
      workAchCert: "",
      workAchProfile: "https://codolio.com/profile/HarshitaG",  
    },
  ],
}
