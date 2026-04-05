import type { LucideIcon } from 'lucide-react';
import { Code, Bot, Braces, Database, Palette, PenTool, Figma, GitBranch, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

export const projects = [
  {
    title: "QuizWise",
    description: "An intelligent web application that generates quizzes dynamically based on user-selected topics. Users can enter any subject or concept, and the system creates relevant questions in real-time, making learning interactive and engaging. The application leverages AI to ensure question variety and contextual accuracy, providing a personalized quiz experience.",
    image: "/Ai chat bot.png",
    imageAiHint: "AI robot",
    link: "https://ai-quiz-phi-roan.vercel.app/login",
    tags: ["Next.js" , "TypeScript" , "React","Firebase" , "Tailwind CSS","Google Gemini API"],
  },
  {
    title: "Array Sorter Visualizer",
    description: "Array Sorter Visualizer is an interactive web app that demonstrates multiple sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and more through animations.Users can control array size, sorting speed, and order (random, nearly sorted, reversed) to see how algorithms behave in real time.",
    image: "/array1.png",
    imageAiHint: "AI robot",
    link: "https://array-shorter.vercel.app/",
    tags: ["TypeScript", "React","Vtie" , "Tailwind CSS"],
  },
  {
    title: "3D puzzle cube model ",
    description: "Created a detailed 3D puzzle cube model using Blender, focusing on precise geometry, clean topology, and realistic materials. Applied lighting and rendering techniques to achieve a visually appealing and product-like presentation. This project highlights my skills in 3D modeling, texturing, and scene composition.",
    image: "/perfume.jpg",
    imageAiHint: "Blender 3D",
    link: "https://skfb.ly/pIqnN",
    tags: ["Blender 3D"],
  },
  {
    title: "Portfolio",
    description: "I created a modern portfolio website to showcase my skills and projects. The site is built using:TypeScript → for type-safe and reliable code.React (with Vite) → for fast, component-based development and optimized build performance.Tailwind CSS → for responsive, utility-first styling and a clean, modern UI.",
    image: "/port1.png",
    imageAiHint: "data dashboard",
    link: "https://github.com/Abhishek5013/IOS-PORTFOLIO.git",
    tags: ["TypeScript", "React","Vtie" , "Tailwind CSS"],
  },
    {
    title: " QR Code Generator",
    description: "I developed a QR Code Generator using Python that allows users to convert text, URLs, or other data into scannable QR codes. The project uses the qrcode and Pillow libraries to generate and save QR codes as image files.",
    image: "/Screenshot 2025-08-21 204131.png",
    imageAiHint: "mobile banking",
    link: "https://github.com/Abhishek5013/Python",
    tags: ["Python"],
  },
  
];

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const skills: Skill[] = [
  { name: "Python", icon: Braces, description: "Versatile language for web development, data science, and automation." },
  { name: "React / Next.js", icon: Code, description: "Modern framework for creating fast, server-rendered React app." },
  { name: "AI / Gen-AI", icon: Bot, description: "Integrating cutting-edge AI models to build intelligent features." },
  { name: "Databases", icon: Database, description: "Experience with SQL and NoSQL databases for persistent data storage." },
  { name: "Blender 3D", icon: Palette, description: "Creating 3D models, animations, and visual effects." },
  { name: "Full Stack Development", icon: PenTool, description: "Building end-to-end applications from database to UI." },
  { name: "Figma", icon: Figma, description: "Collaborative design tool for prototyping and creating high-fidelity mockups." },
  { name: "Git", icon: GitBranch, description: "Version control system for tracking changes and collaborating on code." },
];

export const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Abhishek5013" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/abhishek-yadav-1a8858261/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/abhi08.10?igsh=MWt6bWQ0NHlvdTUzbQ%3D%3D&utm_source=qr" },
    { name: "Email", icon: Mail, url: "mailto:abhishekyadav8952@gmail.com" },
]
