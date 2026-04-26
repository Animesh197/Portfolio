export const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
]

export const skills = [
  // AI / ML
  { name: 'Python',                   level: 90, category: 'AI / ML' },
  { name: 'Machine Learning',         level: 85, category: 'AI / ML' },
  { name: 'LLM / GenAI',              level: 83, category: 'AI / ML' },
  { name: 'LangChain / LangGraph',    level: 80, category: 'AI / ML' },
  { name: 'HuggingFace',              level: 76, category: 'AI / ML' },
  { name: 'FAISS / Embeddings',       level: 74, category: 'AI / ML' },
  // Data & Backend
  { name: 'NumPy / Pandas',           level: 84, category: 'Data & Backend' },
  { name: 'MySQL / MongoDB',          level: 74, category: 'Data & Backend' },
  { name: 'Streamlit',                level: 80, category: 'Data & Backend' },
  { name: 'Playwright',               level: 70, category: 'Data & Backend' },
  // Languages & Tools
  { name: 'TypeScript',               level: 76, category: 'Languages & Tools' },
  { name: 'HTML / CSS',               level: 80, category: 'Languages & Tools' },
  { name: 'Data Structures & Algo',   level: 82, category: 'Languages & Tools' },
]

export const projects = [
  {
    title: 'Shadow HR — AI Resume Auditor',
    description:
      'End-to-end AI resume verification engine that parses PDF resumes, extracts technical claims via Groq LLM, and cross-validates against live GitHub repositories using semantic matching, commit analysis, and infrastructure detection.',
    tags: ['Python', 'Groq LLM', 'Streamlit', 'Playwright', 'Sentence-Transformers', 'GitHub API'],
    github: 'https://github.com/Animesh197/resume_auditor',
    live: 'https://shadow-hr.streamlit.app/',
    date: 'March 2026',
    image: '/projects/shadow-hr.png',
  },
  {
    title: 'CropWise AI — Crop Yield Predictor & Farm Advisory',
    description:
      'AI-powered crop yield prediction and farm advisory system that analyzes soil, climate, and farming inputs to generate yield predictions and actionable recommendations using ML, RAG, and LLM orchestration.',
    tags: ['Python', 'LangGraph', 'FAISS', 'HuggingFace', 'Streamlit', 'RAG'],
    github: 'https://github.com/Animesh197/Gen_AI_Capstone',
    live: 'https://crop-yield-predictor1729.streamlit.app',
    date: 'February 2026',
    image: '/projects/cropwise-ai.png',
  },
]

export const certifications = [
  {
    title: 'Young Turks 2025',
    issuer: 'Naukri Campus',
    date: 'September 2025',
    detail: '99.93 percentile — top 0.07% nationwide in quantitative aptitude, logical reasoning & problem-solving.',
    link: '#',
  },
]

export const socials = [
  { label: 'GitHub',      href: 'https://github.com/animeshkumarrai',                   icon: 'GitBranch' },
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/animesh-rai-8a0688226/',   icon: 'Globe' },
  { label: 'LeetCode',    href: 'https://leetcode.com/problemset/',                     icon: 'Code' },
  { label: 'Codeforces',  href: 'https://codeforces.com/profile/animeshrai197',         icon: 'Swords' },
  { label: 'Email',       href: 'mailto:animesh.rai2024@nst.rishihood.edu.in',          icon: 'Mail' },
]

export const activities = [
  'Participated in ICPC 2025 — algorithmic analysis & competitive programming.',
  'Participated in HackaPirate and Smart India Hackathon (SIH).',
]
