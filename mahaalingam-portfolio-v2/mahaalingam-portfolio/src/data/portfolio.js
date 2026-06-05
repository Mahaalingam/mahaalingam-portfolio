export const personalInfo = {
  name: "Mahaalingam M",
  title: "Computer Science Engineer",
  taglines: [
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "SOC Analyst",
    "AI/ML Developer",
    "Problem Solver",
  ],
  location: "Tenkasi, Tamil Nadu, India",
  email: "mahaalingam781@gmail.com",
  phone: "+91 8973697667",
  linkedin: "https://linkedin.com/in/mahaalingam/",
  objective:
    "Final-year Computer Science Engineering student with hands-on experience in full-stack web development, cybersecurity, and machine learning. I've built real-world systems — from an AI-powered emergency response platform to a live SIEM threat monitoring setup using Wazuh. Certified in cybersecurity by Cisco and GUVI, and trained as a SOC Analyst, I'm ready to bring both development and security expertise to a forward-thinking organization.",
};

export const education = [
  {
    institution: "VSB College of Engineering Technical Campus",
    location: "Coimbatore",
    degree: "B.E. Computer Science and Engineering",
    score: "CGPA: 8.18",
    period: "2022 – 2026",
    current: true,
    icon: "🎓",
  },
  {
    institution: "Vivekananda Silver Jubilee Matric Hr Sec School",
    location: "Tenkasi",
    degree: "Higher Secondary Certificate (HSC)",
    score: "85.6%",
    period: "2021 – 2022",
    current: false,
    icon: "📚",
  },
  {
    institution: "Vivekananda Silver Jubilee Matric Hr Sec School",
    location: "Tenkasi",
    degree: "Secondary School Leaving Certificate (SSLC)",
    score: "98.4%",
    period: "2019 – 2020",
    current: false,
    icon: "🏫",
  },
];

export const projects = [
  {
    title: "AI-Driven Adaptive Road Accident Prediction & Emergency Response System",
    shortTitle: "Road Accident Prediction System",
    description:
      "A full-stack web application that leverages machine learning to predict road accident severity and automate emergency response workflows. Features role-specific dashboards for police and ambulance services.",
    features: [
      "Random Forest classifier for accident severity prediction",
      "Automated emergency dispatch pipeline on high-severity predictions",
      "GPS coordinate capture with Google Maps navigation links for first responders",
      "Role-specific dashboards for police and ambulance services",
      "Reduced emergency response time through intelligent automation",
    ],
    tech: ["Python", "Flask", "HTML5", "CSS3", "Bootstrap", "JavaScript", "Machine Learning", "Random Forest"],
    icon: "🚨",
    color: "from-red-500/20 to-orange-500/10",
    accent: "#ef4444",
    category: "AI / Full-Stack",
  },
  {
    title: "SIEM Threat Monitoring System",
    shortTitle: "SIEM Threat Monitoring",
    description:
      "Designed and implemented a real-time security threat monitoring system using Wazuh. Collects and analyzes logs from servers, endpoints, and network devices with rule-based alerting for suspicious activities.",
    features: [
      "Real-time log collection from servers, endpoints & network devices",
      "Rule-based alert configuration for threat detection",
      "Suspicious activity monitoring and incident tracking",
      "Multi-source log aggregation and correlation",
      "Hands-on SIEM operations and threat analysis",
    ],
    tech: ["Wazuh", "SIEM", "Kali Linux", "Threat Detection", "Log Analysis", "Network Security"],
    icon: "🛡️",
    color: "from-cyber-500/20 to-teal-500/10",
    accent: "#14b89a",
    category: "Cybersecurity",
  },
  {
    title: "Food Business Web Application",
    shortTitle: "Food Business Web App",
    description:
      "A fully responsive local web application designed for a food business, delivering a seamless user experience across mobile and desktop devices, with an integrated UPI payment QR code generator.",
    features: [
      "Fully responsive across mobile and desktop devices",
      "Integrated QR Code Generator for UPI Payment",
      "Smooth user experience with intuitive navigation",
      "Cross-browser compatibility",
      "Mobile-first design approach",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "QR Code API"],
    icon: "🍽️",
    color: "from-yellow-500/20 to-amber-500/10",
    accent: "#f59e0b",
    category: "Web Development",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    items: ["Java", "Python", "JavaScript", "HTML5", "CSS3", "JSON"],
    color: "cyber",
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    items: ["React", "Flask", "Bootstrap", "REST APIs", "Responsive Design"],
    color: "teal",
  },
  {
    category: "Cybersecurity",
    icon: "🛡️",
    items: ["Wireshark", "Wazuh", "Burp Suite", "Kali Linux", "SIEM", "SOC Operations"],
    color: "green",
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["SQL", "Database Design", "Query Optimization"],
    color: "blue",
  },
  {
    category: "Tools & Platforms",
    icon: "🔧",
    items: ["Git", "GitHub", "VS Code", "IntelliJ", "Windows", "Linux"],
    color: "purple",
  },
  {
    category: "AI & Productivity",
    icon: "🤖",
    items: ["Generative AI", "AI Agents", "Prompt Engineering", "Machine Learning", "Random Forest"],
    color: "pink",
  },
];

export const workshops = [
  {
    title: "Security Operation Center Analyst",
    org: "Prompt Info Tech",
    location: "Coimbatore",
    highlights: [
      "Hands-on experience monitoring and analyzing security events using SIEM tools",
      "Configured security event analysis pipelines and threat detection techniques",
      "Exposure to incident response workflows in real-world SOC environments",
      "Strengthened practical understanding of cybersecurity operations and threat detection",
    ],
    icon: "🔍",
  },
];

export const certifications = [
  {
    title: "Cyber Security for Beginners",
    issuer: "GUVI",
    icon: "🔐",
    color: "from-cyber-500/30 to-teal-600/20",
    accent: "#14b89a",
    field: "Cybersecurity",
  },
  {
    title: "Introduction to CyberSecurity",
    issuer: "Cisco",
    icon: "🌐",
    color: "from-blue-500/30 to-cyan-600/20",
    accent: "#3b82f6",
    field: "Cybersecurity",
  },
  {
    title: "UI/UX Front-End Development",
    issuer: "Great Learning Academy",
    icon: "🎨",
    color: "from-purple-500/30 to-pink-600/20",
    accent: "#a855f7",
    field: "Web Development",
  },
];
