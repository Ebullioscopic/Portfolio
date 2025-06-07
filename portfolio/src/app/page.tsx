'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Code, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  Mail, 
  Github, 
  Linkedin,
  Star,
  Trophy,
  ChevronRight,
  Download
} from 'lucide-react';

// Working MagicUI Components
import { BorderBeam } from '@/components/magicui/border-beam';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { Ripple } from '@/components/magicui/ripple';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { WordRotate } from '@/components/magicui/word-rotate';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Meteors } from '@/components/magicui/meteors';
import { BentoGrid } from '@/components/magicui/bento-grid';
import { Marquee } from '@/components/magicui/marquee';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { MagicCard } from '@/components/magicui/magic-card';
import { PulsatingButton } from '@/components/magicui/pulsating-button';

// Custom implementations for problematic components
const AnimatedShimmer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
    {children}
  </div>
);

const BlurIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const SlideIn: React.FC<{ 
  children: React.ReactNode; 
  direction?: 'left' | 'right' | 'up' | 'down'; 
  delay?: number 
}> = ({ children, direction = 'up', delay = 0 }) => {
  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const SparklesCore: React.FC<{
  id: string;
  background: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  className: string;
  particleColor: string;
}> = ({ className }) => (
  <div className={`${className} overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
    {Array.from({ length: 50 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ))}
  </div>
);

const TextGenerateEffect: React.FC<{ words: string }> = ({ words }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, staggerChildren: 0.1 }}
  >
    {words.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.05 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const HoverCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.div>
);

// Add custom CSS to your globals.css for animations
const customStyles = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-twinkle {
  animation: twinkle 2s infinite;
}

/* For Marquee component - add these if missing */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 1rem)); }
}

@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - 1rem)); }
}

.animate-marquee {
  animation: marquee 40s infinite linear;
}

.animate-marquee-vertical {
  animation: marquee-vertical 40s infinite linear;
}
`;

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Add the custom styles to the document head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const experiences: Experience[] = [
    {
      company: "Infosys",
      role: "iOS Developer Intern",
      duration: "Apr 2025 - May 2025",
      location: "On Site - Mysuru",
      type: "Internship",
      highlights: [
        "Developed a Generative AI Powered Hospital Management System with Django Backend",
        "Implemented the frontend as a native iOS app using SwiftUI and Swift",
        "Ensured seamless and responsive user experience"
      ]
    },
    {
      company: "Samsung India",
      role: "Research Intern",
      duration: "Jan 2024 - Jul 2024",
      location: "Remote - Bengaluru",
      type: "Research",
      highlights: [
        "Developed a Generative AI Powered Web Scraped Offer Search Engine using LLaMA-3, LangChain, and HuggingFace Transformers",
        "Utilized Django and Streamlit for backend development",
        "Integrated machine learning models using TensorFlow and PyTorch",
        "Implemented cross-platform mobile interface with ReactJS and Tailwind-CSS"
      ]
    },
    {
      company: "Karthik Information Technology",
      role: "Project Intern",
      duration: "Jan 2023 - Dec 2023",
      location: "On Site - Ahmedabad",
      type: "Development",
      highlights: [
        "Contributed to development of CRMs, ERPs, and POS systems",
        "Used Django, ReactJS, BootStrap-5, and Tailwind-CSS",
        "Built standalone ML APIs for prediction services",
        "Improved customer recommendation engines using TensorFlow and PyTorch"
      ]
    }
  ];

  const projects: Project[] = [
    {
      name: "StockViewer",
      description: "iOS App for tracking, viewing and analyzing real-time Forex exchange and Stock market data",
      technologies: ["SwiftUI", "AlphaVantage", "TensorFlow", "Nvidia NeMo"],
      highlights: [
        "Built data pipelines for classifying and predicting Stock data",
        "Implemented News Sentiment Analysis for investability prediction"
      ]
    },
    {
      name: "HLS Burn Scars Transformer",
      description: "Custom Transformer for Image Masking Algorithm based on HLS Burn Scars dataset",
      technologies: ["Python", "OpenCV", "TensorFlow", "Remote Sensing"],
      highlights: [
        "Developed custom Encoder, Decoder and Multiple Layer Perceptrons",
        "Used Metal Performance Shaders Architecture for optimization"
      ]
    },
    {
      name: "DynamicIsland",
      description: "Enhanced MacBook M3 Pro notch with interactive widgets and control center",
      technologies: ["Swift", "SwiftUI", "UIKit"],
      highlights: [
        "Transformed notch into interactive control center for multitasking",
        "Developed customizable widget options for improved user experience"
      ]
    },
    {
      name: "Phi-3 Math Fine Tuned",
      description: "AI model fine-tuned on synthetic math datasets for educational applications",
      technologies: ["Python", "Jupyter", "Transformers"],
      highlights: [
        "Achieved high accuracy in solving grade-school word problems",
        "Contributed to educational and tutoring applications"
      ]
    }
  ];

  const awards: Award[] = [
    {
      title: "Winner - Standard Chartered Hackathon",
      organization: "Standard Chartered Bank",
      date: "Apr 2025",
      description: "Developed an Agentic AI Powered OCR and RAG Model for extracting data from Government ID Cards"
    },
    {
      title: "Winner - Remote Sensing AI Hackathon",
      organization: "IEEE GRSS - NASA - SRMIST",
      date: "Mar 2024",
      description: "Developed Custom Transformer Architecture using Metal Performance Shaders for Burn Scars Dataset"
    },
    {
      title: "Gold Medalist - Research Day 2024",
      organization: "SRM Institute of Science and Technology",
      date: "Mar 2024",
      description: "Awarded highest distinction for Generative AI powered Image Stitching Satellite Clusters for Defense Applications"
    },
    {
      title: "Winner - FinTechz-AI 2024",
      organization: "National AI-based Hackathon for FinTech Solutions",
      date: "Jul 2024",
      description: "Developed FinTech AI solution with predictive analytics for loan risk assessment, winning among 500+ participants"
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "Swift", "JavaScript", "HTML/CSS", "C", "C++"],
    "Frameworks": ["Django REST", "Graphene", "Kafka", "Transformers", "Diffusers", "TensorFlow", "PyTorch", "Keras", "Streamlit"],
    "Tools": ["Xcode", "Git", "VS Code", "Jupyter", "Firebase", "Jenkins", "WordPress", "CI/CD"],
    "Cloud": ["AWS (EC2, S3, RDS, CloudFront, EBS, ELB)", "Firebase", "Supabase"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "Others": ["REST APIs", "LangChain", "Ollama", "BootStrap-5", "Tailwind-CSS", "OpenCV", "MediaPipe"]
  };

  const certifications = [
    "GitHub Foundations",
    "NVIDIA-Certified Associate: Generative AI LLMs",
    "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    "Principles of UI/UX Design",
    "Getting Started with Enterprise-grade AI",
    "AWS Academy Cloud Foundations",
    "AWS Academy Graduate",
    "AWS Academy Machine Learning Foundations"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <DotPattern className="fixed inset-0 opacity-20" />
      <GridPattern className="fixed inset-0 opacity-10" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <RetroGrid className="absolute inset-0" />
        <Meteors number={20} />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0"
          particleColor="#FFFFFF"
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <BlurIn>
            <AnimatedGradientText className="text-6xl md:text-8xl font-bold mb-6">
              AI/ML Engineer
            </AnimatedGradientText>
          </BlurIn>
          
          <FadeIn delay={0.5}>
            <TypingAnimation className="text-xl md:text-2xl text-gray-300 mb-8">
              Passionate about Generative AI, Computer Vision, and iOS Development
            </TypingAnimation>
          </FadeIn>
          
          <SlideIn direction="up" delay={1}>
            <WordRotate
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
              words={["B.Tech CSE-AIML", "CGPA: 9.65", "SRM Institute"]}
            />
          </SlideIn>
          
          <FadeIn delay={1.5}>
            <div className="flex flex-wrap gap-4 justify-center">
              <PulsatingButton className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </PulsatingButton>
              
              <ShimmerButton className="bg-purple-600 hover:bg-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </ShimmerButton>
              
              <div className="flex gap-2">
                <OrbitingCircles
                  className="size-[50px] border-none bg-transparent"
                  duration={20}
                  delay={20}
                  radius={80}
                >
                  <Github className="w-6 h-6" />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[50px] border-none bg-transparent"
                  duration={20}
                  delay={10}
                  radius={80}
                >
                  <Linkedin className="w-6 h-4" />
                </OrbitingCircles>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <Ripple />
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <BlurIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              <TextGenerateEffect words="About Me" />
            </h2>
          </BlurIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <MagicCard className="p-8">
                <BorderBeam size={250} duration={12} />
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-gray-300">B.Tech Computer Science - AI/ML</p>
                      <p className="text-blue-400">CGPA: 9.65/10</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-bold">Location</h3>
                      <p className="text-gray-300">Chennai, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Code className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold">Specialization</h3>
                      <p className="text-gray-300">AI/ML, iOS Development, Computer Vision</p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </FadeIn>
            
            <SlideIn direction="right">
              <div className="space-y-6">
                <AnimatedShimmer className="text-lg leading-relaxed">
                  Passionate AI/ML engineer with expertise in Generative AI, Computer Vision, and iOS development. 
                  Currently pursuing B.Tech in Computer Science with specialization in AI/ML at SRM Institute 
                  with an exceptional CGPA of 9.65.
                </AnimatedShimmer>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <NumberTicker value={15} className="text-2xl font-bold text-blue-400" />
                    <p className="text-sm text-gray-300">Projects Completed</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <NumberTicker value={8} className="text-2xl font-bold text-green-400" />
                    <p className="text-sm text-gray-300">Certifications</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <NumberTicker value={5} className="text-2xl font-bold text-purple-400" />
                    <p className="text-sm text-gray-300">Hackathon Wins</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <NumberTicker value={3} className="text-2xl font-bold text-yellow-400" />
                    <p className="text-sm text-gray-300">Internships</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <BlurIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              <TextGenerateEffect words="Professional Experience" />
            </h2>
          </BlurIn>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <MagicCard className="p-8 hover:scale-105 transition-transform duration-300">
                  <BorderBeam size={250} duration={12} delay={index * 2} />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                      <p className="text-xl text-white">{exp.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-gray-300">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </MagicCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <BlurIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              <TextGenerateEffect words="Technical Skills" />
            </h2>
          </BlurIn>
          
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <FadeIn key={category} delay={index * 0.1}>
                <MagicCard className="p-6 h-full">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <HoverCard key={skillIndex}>
                        <span className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-blue-600 transition-colors cursor-pointer">
                          {skill}
                        </span>
                      </HoverCard>
                    ))}
                  </div>
                </MagicCard>
              </FadeIn>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <BlurIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              <TextGenerateEffect words="Featured Projects" />
            </h2>
          </BlurIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.2}>
                <MagicCard className="p-8 h-full">
                  <BorderBeam size={250} duration={12} delay={index * 3} />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-6 h-6 text-purple-400" />
                      <h3 className="text-xl font-bold">{project.name}</h3>
                    </div>
                    
                    <p className="text-gray-300">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-400">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-purple-600 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-green-400">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-sm">
                            <Star className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <BlurIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              <TextGenerateEffect words="Awards & Achievements" />
            </h2>
          </BlurIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <MagicCard className="p-8">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-yellow-400">{award.title}</h3>
                      <p className="text-blue-400">{award.organization}</p>
                      <p className="text-sm text-gray-400">{award.date}</p>
                      <p className="text-gray-300">{award.description}</p>
                    </div>
                  </div>
                </MagicCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <BlurIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              <TextGenerateEffect words="Certifications" />
            </h2>
          </BlurIn>
          
          <Marquee className="py-8" pauseOnHover>
            {certifications.map((cert, index) => (
              <MagicCard key={index} className="mx-4 p-6 min-w-[300px]">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-green-400" />
                  <span className="font-medium">{cert}</span>
                </div>
              </MagicCard>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BlurIn>
            <h2 className="text-4xl font-bold mb-8">
              <TextGenerateEffect words="Let's Connect" />
            </h2>
          </BlurIn>
          
          <FadeIn delay={0.5}>
            <p className="text-xl text-gray-300 mb-12">
              Ready to collaborate on innovative AI/ML projects or discuss opportunities in tech?
            </p>
          </FadeIn>
          
          <SlideIn direction="up" delay={1}>
            <div className="flex flex-wrap gap-4 justify-center">
              <PulsatingButton className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </PulsatingButton>
              
              <ShimmerButton className="bg-gray-700 hover:bg-gray-600">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </ShimmerButton>
              
              <ShimmerButton className="bg-blue-700 hover:bg-blue-600">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </ShimmerButton>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
