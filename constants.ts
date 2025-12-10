
import { Experience, Project, SkillData, ResearchPaper, Certificate, Education } from "./types";

export const RESUME_DATA = {
  name: "Mathew P Binu",
  title: "Computer Science & AI Engineer",
  bio: "Engineering student specializing in Computer Science and AI, with expertise in machine learning, data analysis, and software development. Driven by a passion for AI innovation and problem-solving in real-world applications.",
  location: "Ernakulam, Kerala",
  email: "mathewbinu2004@gmail.com",
  phone: "+91 7907803779",
  socials: {
    github: "github.com/Mathew222",
    linkedin: "www.linkedin.com/in/mathew-p-binu",
    instagram: "www.instagram.com/_mathew_binu_?igsh=MWZ6cHJqNzU4ejNxeQ%3D%3D&utm_source=qr"
  },
  profileUrl: "/profile.jpg"
};

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Python & AI', A: 95, fullMark: 100 },
  { subject: 'Deep Learning', A: 90, fullMark: 100 },
  { subject: 'Data Analysis', A: 85, fullMark: 100 },
  { subject: 'Computer Vision', A: 80, fullMark: 100 },
  { subject: '3D Modelling', A: 75, fullMark: 100 },
  { subject: 'SQL', A: 70, fullMark: 100 },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: 'Python Programming Intern',
    company: 'InternPe',
    period: 'May 2024',
    timelineTitle: '2024',
    description: [
      'Worked on Python-based automation and scripting tasks.',
      'Improved backend logic-building skills and debugging techniques.',
      'Gained experience in backend optimization and efficient code practices.'
    ]
  },
  {
    id: '2',
    role: 'Game Development Intern',
    company: 'Titleverse',
    period: 'May 2023',
    timelineTitle: '2023',
    description: [
      'Contributed to a collaborative game development project focused on design logic and 3D integration.',
      'Gained experience in real-time asset creation and prototyping.',
      'Collaborated with cross-functional teams to integrate logic with 3D environments.'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: '1',
    institution: 'Adi Shankara Institute of Engineering and Technology',
    degree: 'B.Tech in Computer Science (AI)',
    year: '2022 - Present',
    description: 'A. P. J. Abdul Kalam Technological University. CGPA: 8.2'
  },
  {
    id: '2',
    institution: 'Sree Sarada Vidyalaya, Kalady',
    degree: 'CBSE, Class 12',
    year: '2022',
    description: 'Percentage: 80%'
  },
  {
    id: '3',
    institution: 'Sree Sarada Vidyalaya, Kalady',
    degree: 'CBSE, Class 10',
    year: '2020',
    description: 'Percentage: 88%'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'MedInsight',
    description: 'An AI Medical Report Analyzer using NLP (PyMuPDF, spaCy) to extract 10+ key health metrics from lab reports with high accuracy. Integrated with OCR tools and backend AI models for anomaly detection.',
    techStack: ['Python', 'NLP', 'spaCy', 'OCR', 'AI'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com',
    link: 'https://github.com/Mathew222/Medinsight',
    featured: true,
  },
  {
    id: '2',
    title: 'CineFind',
    description: 'An AI-powered tool to identify movies using character or actor names. Uses NLP and a structured knowledge base for film recognition. (Ongoing)',
    techStack: ['Python', 'NLP', 'Knowledge Base', 'AI'],
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com',
    featured: true,
  }
];

export const RESEARCH_DATA: ResearchPaper[] = [
  {
    id: '1',
    title: 'MEDINSIGHT: YOUR VIRTUAL LAB RESULT GUIDE',
    conference: 'International Conference on Innovations in Mechanical, Robotics, Computing and Biomedical Engineering',
    year: '2025',
    description: 'A comprehensive study on automating medical report analysis using Natural Language Processing and AI-driven anomaly detection.',
    link: '/research paper/Medinsight_Research_paper.pdf.pdf',
    certificateLink: '/research paper/ICIMRBE25-014-Mathew P Binu.pdf'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  { id: '1', title: 'Fundamentals of AI', issuer: 'NPTEL', year: '2025', link: '/certificates/Fundamentals of Artificial Intelligence .pdf' },
  { id: '2', title: 'Deep Learning', issuer: 'NPTEL', year: '2025', link: '/certificates/Deep Learning .pdf' },
  { id: '3', title: 'Wheeled Mobile Robot', issuer: 'NPTEL', year: '2025', link: '/certificates/Wheeled Mobile Robots.pdf' },
  { id: '4', title: 'National Level Gen.AI Hackathon', issuer: 'Hexinox', year: '2025', link: '/certificates/gen hackathon.jpg' },
  { id: '5', title: 'Python Certification', issuer: 'LinkedIn & InternPe', year: '2024', link: '/certificates/CertificateOfCompletion_Learning Python.pdf' },
  { id: '6', title: 'Regression Analysis', issuer: 'Infosys Springboard', year: '2024' },
  { id: '7', title: 'IOT', issuer: 'NIT Calicut', year: '2024', link: '/certificates/iot.pdf' }
];
