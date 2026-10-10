export const personalInfo = {
  name: 'Suvin Poojary',
  title: 'AI & Machine Learning Engineer',
  tagline:
    'Building intelligent systems at the intersection of AI, healthcare, and backend engineering.',
  email: 'suvinpoojary2005@gmail.com',
  phone: '+91 9972799308',
  location: 'Udupi, India',
  github: 'https://github.com/suvinsanil',
  linkedin: 'https://linkedin.com/in/suvinpoojary',
  resumeFile: '/resume.pdf',
};

export const about = {
  paragraphs: [
    'Final-year Artificial Intelligence & Machine Learning undergraduate with experience developing AI systems across healthcare, large language models, and computer vision.',
    'Hands-on experience with LLM-based retrieval, RAG, vector databases, SQL-driven data retrieval, and AI-assisted healthcare applications. Currently developing a multimodal deep learning framework for kidney tumor risk assessment while exploring reliable and production-oriented AI systems.',
  ],
  researchInterests: [
    'AI for Healthcare',
    'Multimodal Learning',
    'LLMs, NLP & RAG',
    'Computer Vision & 3D Reconstruction',
    'Reliable AI Systems',
  ],
};

export const education = [
  {
    institution: 'NMAM Institute of Technology (Nitte), Udupi',
    degree:
      'Bachelor of Technology in Artificial Intelligence and Machine Learning',
    period: 'August 2023 \u2013 Present',
    cgpa: '8.46 / 10.0',
    coursework: [
      'Machine Learning',
      'Artificial Intelligence',
      'Cloud Computing',
      'Cybersecurity',
      'Data Structures & Algorithms',
    ],
  },
];

export const experience = [
  {
    role: 'Student Intern',
    organization: 'Center for Software Development, MAHE, Manipal',
    period: 'Jun 2026 \u2013 Aug 2026',
    points: [
      'Developed and integrated prompt-based natural-language data retrieval functionality for a healthcare application using LLM, SQL-based retrieval, and backend APIs.',
      'Worked with FastAPI, Qdrant, Docker, and database connectivity to support retrieval and reporting workflows.',
      'Implemented and tested automated healthcare reporting and data-retrieval functionality while debugging backend and integration issues.',
      'Followed institutional confidentiality and information-security practices while working with sensitive healthcare data.',
    ],
  },
];

export const projects = [
  {
    name: 'PharmaGuard',
    subtitle: 'AI-Assisted Pharmacovigilance Platform',
    description:
      'An AI-assisted drug-safety decision-support platform that ingests adverse drug reaction (ADR) reports and routes AI-generated outputs through a pharmacist approval workflow with a full audit trail.',
    highlights: [
      'Designed a multi-stage, traceable LLM pipeline (de-identification, extraction, classification, RAG-based evidence retrieval, summarization) allowing step-by-step debugging.',
      'Implemented a PII de-identification module and a RAG retrieval layer (Sentence-Transformers + Qdrant vector search) surfacing past cases and drug-label evidence with similarity scores and citations.',
      'Architected as three independently deployable containerized services (React client, Express API, FastAPI ML microservice).',
    ],
    tech: [
      'React',
      'Express',
      'FastAPI',
      'Qdrant',
      'Docker',
      'MongoDB',
      'Sentence-Transformers',
    ],
    category: 'ai',
    github: null,
    live: null,
    status: 'In Development \u2014 Phase 1 MVP',
  },
  {
    name: 'MetaFusion',
    subtitle: 'Multimodal Learning for Kidney Tumor Risk Assessment',
    description:
      'A multimodal deep learning framework for kidney tumor risk stratification by combining abdominal CT imaging with clinical metadata from the KNIGHT Challenge dataset.',
    highlights: [
      'Adapting the MetaFusion architecture with a ResNet-18 image backbone and clinical feature representation for five-way risk classification and binary high/very-high-risk classification.',
      'Preprocessing 3D CT volumes using tumor segmentation masks, extracting the axial slice with the largest tumor cross-sectional area, and applying soft-tissue CT windowing for model input.',
    ],
    tech: ['PyTorch', 'ResNet-18', 'U-Net', 'NumPy', 'Medical Imaging'],
    category: 'ai',
    github: null,
    live: null,
    status: 'Ongoing \u2014 Final Year Research Project',
  },
  {
    name: 'HoloGen 3D-Reconstructor',
    subtitle: '2D to 3D Scene Reconstruction',
    description:
      'A model to convert 2D images into 3D scenes using monocular depth estimation for accurate 3D reconstruction and visualization.',
    highlights: [
      'Implemented image preprocessing and depth estimation workflows to generate depth information from single RGB images.',
      'Generated and visualized reconstructed 3D scenes using estimated depth maps, enabling spatial representation of objects from 2D inputs.',
    ],
    tech: ['PyTorch', 'OpenCV', 'PyRender', 'Python'],
    category: 'ai',
    github: null,
    live: null,
    status: null,
  },
  {
    name: 'Sketch Predictor',
    subtitle: 'Browser-Based Sketch Recognition',
    description:
      'A browser-based sketch recognition tool using a decision tree model trained on the QuickDraw dataset, deployed client-side for instant offline predictions.',
    highlights: [
      'Created using Svelte and Tailwind CSS with a decision tree classifier.',
      'Deployed client-side for instant, offline predictions.',
    ],
    tech: ['Svelte', 'Tailwind CSS', 'Decision Tree', 'QuickDraw Dataset'],
    category: 'ml',
    github: null,
    live: null,
    status: null,
  },
  {
    name: 'WaveHead',
    subtitle: 'Team-Based Music Player',
    description:
      'A team-based music player app with MySQL database integration for managing users and playlists.',
    highlights: [
      'Built with MySQL database integration for managing users and playlists.',
      'Designed an intuitive UI and ensured seamless audio playback.',
    ],
    tech: ['MySQL', 'UI Design'],
    category: 'other',
    github: null,
    live: null,
    status: null,
  },
];

export const skills = {
  Programming: ['Python', 'C++', 'Java', 'SQL'],
  'AI & Machine Learning': [
    'Deep Learning',
    'Machine Learning',
    'Computer Vision',
    'NLP',
    'Predictive Modeling',
    'LLMs',
    'RAG',
  ],
  'Frameworks & Libraries': [
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'OpenCV',
    'U-Net',
    'PyRender',
    'Pandas',
    'NumPy',
  ],
  'AI Systems & Backend': ['FastAPI', 'Qdrant', 'Docker', 'Node.js', 'React'],
  Tools: ['Git / GitHub', 'Jupyter', 'Google Colab', 'VS Code'],
};

export const certifications = [
  {
    name: 'Google Cloud Computing Foundations',
    issuer: 'NPTEL',
    period: 'Aug \u2013 Oct 2024',
  },
  {
    name: 'Summer Research Internship in Machine Learning for Medical and Pharmaceutical Sciences',
    issuer: 'NMAM Institute of Technology',
    period: 'May 2024',
  },
];

export const publications = [
  {
    title: 'Multimodal Deep Learning Framework for Kidney Tumor Risk Stratification',
    conference: 'Upcoming / In Preparation',
    date: '2027',
    description: 'A study combining abdominal CT imaging with clinical metadata to stratify risk levels using ResNet-18 and clinical feature embeddings.',
    link: '#'
  }
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

