/**
 * DB_DATA.TS - Master Professional Profile Database
 * Source of truth for Iqwan's career, projects, and AI-driven portfolio terminal.
 */

export const iqwanProfile = {
  name: "Muhammad Hairul Iqwan",
  specialty: "Workflow Automation Specialist & Python Developer",
  location: "Banting, Malaysia",
  experience: "10+ years in customer operations & automation architecture",

  about_short:
    "Originally from Banting, Malaysia, I am a developer who believes technology should simplify human life, not complicate it. I focus on building efficient Python solutions so my teammates can stop wrestling with tedious tasks and start focusing on what truly matters.",

  about_long:
    "Iqwan journey began with a decade in Customer Operations—where I learned the art of listening and identifying the real 'friction' in business. Today, I translate those ten years of experience into clean Python code and seamless automation (Make/Zapier). While I have developed high-precision systems like IqwanEngine for the GOLD market, I still consider myself a lifelong student. As a family man and a professional, my mission is simple: to use my technical expertise to help organizations thrive, while remaining grounded and approachable in every collaboration.",

  technical_skills:
    "I don't just write code; I build digital bridges. My toolkit centers on efficiency, utilizing Python and React for development, while leveraging Google Apps Script and Make/Zapier to close the operational gaps that often go unnoticed. I am particularly passionate about the intersection of AI and finance—not for the sake of complexity, but to find the smartest, most reliable ways to manage risk.",

  projects: {
    iqwanengine:
      "IqwanEngine is a testament to my patience and deep-seated passion for algorithmic trading. More than just a production-grade system for trading, it represents a personal milestone in blending AI with high-precision automation. I built it to prove that with the right logic and a humble respect for the data, we can navigate complex global markets with calm and clarity.",
  },

  availability:
    "I am currently seeking new opportunities where I can contribute my energy, skills, and ideas. I’m not just looking for a role; I’m looking for a team where I can help solve problems and accelerate success. I am ready to step in and add value immediately.",

  contact: {
    email: "hairuliqwan352@gmail.com",
    linkedin: "https://www.linkedin.com/in/hairul-iqwan",
  },
};

export const iqwanDatabase = {
  // --- 1. EXECUTIVE SUMMARY ---
  profileSummary: {
    fullName: "Muhammad Hairul Iqwan Bin Mohd Yaziz",
    preferredName: "Hairul Iqwan",
    specialty: "Workflow Automation, Python Developer & AI Integrator",
    location: "Banting, Selangor / Cyberjaya, Malaysia",
    experienceLabel:
      "10+ years in customer operations & automation architecture",
    aboutShort:
      "Iqwan is a Workflow Automation Specialist and Python Developer based in Malaysia. He specializes in building scalable systems and is the creator of the IqwanEngine algorithmic trading system.",
    philosophy: "Identify a bottleneck, and automate the solution.",
    motto: "Build smart. Automate everything. Optimize continuously.",
    availability: "Status: OPEN TO WORK. Protocol: Immediate Deployment.",
    contact: {
      email: "hairuliqwan352@gmail.com",
      linkedin: "https://www.linkedin.com/in/iqwanengine-automation",
    },
  },

  // --- 2. CORE IDENTITY & VALUES ---
  coreValues: {
    integrity: "High focus on transparency and data honesty.",
    growthMindset: "Self-taught programmer. Constant self-driven learning.",
    dedication: "High stamina for deep-focus sessions.",
    problemSolving: "Proactive engineering approach.",
  },

  // --- 3. PERSONAL CONTEXT ---
  personalContext: {
    family: {
      wife: "EyllaDylla (Dilla)",
      children: ["Aisy Adryan (Son)", "Raisya Ayleen (Daughter)"],
    },
    healthRegimen: "Maintains a strict supplement routine to manage health.",
    lifestyle: {
      community: "Founder of a 7,000+ member tech community.",
      preferences: "Cyberpunk aesthetic, electric blue UI.",
    },
  },

  // --- 4. IQWAN_ENGINE ---
  iqwanEngine: {
    systemName: "IqwanEngine FX V3",
    marketFocus: "XAUUSD (Gold)",
    architecture: "AI-Integrated Algorithmic Trading System",
    coreFeatures: [
      "Real-time Sentiment Analysis",
      "Automated Risk Management",
      "Advanced Trend Detection Logic",
      "High-Precision Execution Protocol",
    ],
    techStack: ["Python", "MT5 API", "Gemini AI", "Pandas", "NumPy"],
  },
};

export interface QAItem {
  question?: string;
  keywords: string[];
  response: string;
}

export const qaData: QAItem[] = [
  {
    question: "What is Iqwan's primary tech stack?",
    keywords: [
      "tech stack",
      "languages",
      "programming",
      "tools",
      "core stack",
      "technical skills",
    ],
    response:
      "Driven by a love for continuous learning, Iqwan applies Python and React to create practical tools. He is also developing his skills in Workflow Automation and Google Apps Script, always looking for simple ways to help teams become more efficient. He is committed to giving his full effort to deliver the best results for your organization. [RESUME_BTN]",
  },
  {
    question: "How does Iqwan manage high-pressure environments?",
    keywords: [
      "pressure",
      "stress",
      "difficult",
      "fast-paced",
      "handle stress",
      "manage pressure",
    ],
    response:
      "Working in Customer Operations taught him that things don't always go to plan. He handles pressure by staying calm and breaking down big problems into smaller, manageable steps. He believes that a steady head not only solves technical issues faster but also helps keep the team's morale up. He is ready to bring this resilient mindset to your team.",
  },
  {
    question: "Is Iqwan open to remote or hybrid roles?",
    keywords: ["remote", "work from home", "wfh", "anywhere", "hybrid setup"],
    response:
      "Yes, he is very comfortable with digital collaboration and remote setups. Currently based in Cyberjaya, he is happy to adapt to the team's preferred working style to ensure maximum output and clear communication.",
  },
  {
    question: "Is Iqwan willing to travel or relocate?",
    keywords: ["travel", "relocate", "moving", "overseas", "relocation"],
    response:
      "Iqwan is open to both domestic and international travel. He is also open to discussing relocation if it aligns with the needs and growth of the project. He is flexible and ready to commit wherever his skills are needed most.",
  },
  {
    question: "What is Iqwan's current availability to start?",
    keywords: ["available", "start date", "availability", "notice", "join"],
    response:
      "He is ready to contribute and can start as soon as needed. He values a smooth transition and is happy to discuss the best timeline for the team. He is prepared to give his 100% commitment from day one.",
  },
  {
    question: "What are Iqwan's salary expectations?",
    keywords: ["salary", "expected", "pay", "compensation", "money"],
    response:
      "Regarding your question about {{keyword}}, Iqwan believes in a mutually beneficial arrangement where the offer reflects the value he brings to the team. While he looks for something aligned with market rates, he is more focused on the right fit and the impact he can make. He’s always open to a transparent conversation about these details once there's a better understanding of the team’s specific needs. [RESUME_BTN]",
  },
  {
    question: "What is Iqwan's professional background?",
    keywords: [
      "experience",
      "years",
      "background",
      "history",
      "career",
      "concentrix",
    ],
    response:
      "With 10 years of experience, he bridges the gap between daily operations and technical automation. He doesn't just build tools for the sake of tech; he uses his background to ensure every script or system he develops solves a real human problem for his team. He is eager to bring this problem-solving experience to your project. [RESUME_BTN]",
  },
  {
    question: "Does he have experience with AI integration?",
    keywords: ["ai", "llm", "gpt", "gemini", "artificial intelligence"],
    response:
      "Yes, he's actually quite hands-on with it. He actively explores ways to integrate {{keyword}} into daily workflows—not just for the sake of using new tech, but as a practical way to help the team make better decisions and save time. He is dedicated to mastering AI tools to keep your workflows modern and efficient. [RESUME_BTN]",
  },
  {
    question: "Can you tell me about the IqwanEngine project?",
    keywords: [
      "iqwanengine",
      "trading",
      "algorithmic",
      "xauusd",
      "gold",
      "trading system",
    ],
    response:
      "IqwanEngine is his flagship project—a production-grade, AI-integrated algorithmic trading system specifically built for the XAUUSD (Gold) market. It uses Python, MT5 API, and Gemini AI. This system reflects his humble beginnings as a self-taught coder and his vision for high-level automated architecture. [RESUME_BTN]",
  },
  {
    question: "What is Iqwan's most impactful operational achievement?",
    keywords: [
      "achievement",
      "impact",
      "reduce",
      "time",
      "efficiency",
      "success",
    ],
    response:
      "During his time as an Automation Specialist, he engineered a centralized Knowledge Base that reduced information retrieval time by 80%. He also built automated scripts that cut ticketing time significantly. He is humble about these results but remains hungry to achieve even greater efficiency for your team. [RESUME_BTN]",
  },
  {
    question: "Why should we hire you over other candidates?",
    keywords: [
      "why hire you",
      "reason",
      "value",
      "hire him",
      "edge",
      "advantage",
      "why hire",
    ],
    response:
      "Iqwan brings a rare combination: he understands both business operations and technical logic. With 10+ years handling real-world friction, he builds automations that solve actual problems. He is a dedicated learner who will always do his best to ensure your team stays ahead. I would love the chance to discuss how I can add value to your company. [RESUME_BTN]",
  },
  {
    question: "What is your vision for the next 2 to 5 years?",
    keywords: [
      "5 years",
      "2 years",
      "future",
      "vision",
      "career path",
      "long term",
    ],
    response:
      "Over the next few years, Iqwan aims to evolve into a Lead Automation Architect. He wants to spearhead enterprise-level AI integrations and build scalable, self-sustaining systems. He is a visionary who is ready to grow alongside your company and contribute to its long-term success.",
  },
];

export const recruiterQuestions = [
  "What is your primary tech stack and expertise?",
  "Can you tell me about the IqwanEngine system?",
  "Are you open to remote or hybrid work arrangements?",
  "What is your availability to start a new role?",
  "Do you have experience with AI integration?",
  "What are your salary expectations?",
  "How do you approach team collaboration?",
  "What is your most impactful operational achievement?",
  "Can you share your experience in Customer Operations?",
  "What is your core approach to problem-solving?",
];
const IqwanKnowledgeBase = {
  stack: "Iqwan specializes in Python, React, and Google Apps Script.",
  iqwanengine:
    "IqwanEngine is an automated algorithmic trading and workflow optimization suite.",
  experience: "10+ years in Customer Operations and Automation Architecture.",
  default:
    "Query acknowledged. Please ask about my tech stack, IqwanEngine, or experience.",
};
