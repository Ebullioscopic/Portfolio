"use client";

import React from "react";
import { Particles } from "@/components/magicui/particles";
import { Terminal } from "@/components/magicui/terminal";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const technicalSkills = [
  {
    category: "Languages",
    skills: ["Python", "Java", "Swift", "JavaScript", "HTML/CSS", "C", "C++"]
  },
  {
    category: "Technologies/Frameworks", 
    skills: ["Django REST", "Graphene", "Kafka", "Transformers", "Diffusers", "TensorFlow", "PyTorch", "Keras", "Streamlit"]
  },
  {
    category: "Developer Tools",
    skills: ["Xcode", "Git", "VS Code", "Jupyter", "Firebase", "Jenkins", "WordPress", "CI/CD"]
  },
  {
    category: "Cloud",
    skills: ["AWS (EC2, S3, RDS, CloudFront, EBS, ELB)", "Firebase", "Supabase"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Others",
    skills: ["REST APIs", "LangChain", "Ollama", "BootStrap-5", "Tailwind-CSS", "OpenCV", "MediaPipe"]
  }
];

const experiences = [
  {
    title: "iOS Developer Intern",
    company: "Infosys",
    period: "Apr 2025 – May 2025",
    location: "On Site - Mysuru",
    description: [
      "Developed a Generative AI Powered Hospital Management System with Django Backend.",
      "Implemented the frontend as a native iOS app using SwiftUI and Swift, ensuring a seamless and responsive user experience."
    ]
  },
  {
    title: "Research Intern",
    company: "Samsung India",
    period: "Jan 2024 – Jul 2024", 
    location: "Remote - Bengaluru",
    description: [
      "Developed a Generative AI Powered Web Scraped Offer Search Engine using LLaMA-3, LangChain, and HuggingFace Transformers under Samsung PRISM Worklet.",
      "Utilized Django and Streamlit for backend development and integrated machine learning models using TensorFlow and PyTorch.",
      "Implemented a cross-platform mobile interface with ReactJS and Tailwind-CSS for user-friendly interaction."
    ]
  },
  {
    title: "Project Intern",
    company: "Karthik Information Technology",
    period: "Jan 2023 – Dec 2023",
    location: "On Site - Ahmedabad", 
    description: [
      "Contributed to development of CRMs, ERPs, and POS systems using Django, ReactJS, BootStrap-5, and Tailwind-CSS.",
      "Built standalone ML APIs for prediction services using TensorFlow and PyTorch, improving customer recommendation engines."
    ]
  }
];

const projects = [
  {
    title: "StockViewer",
    description: "Developed an iOS App for tracking, viewing and analyzing real-time Forex exchange, Stock market. Built data pipelines for classifying and predicting Stock data and investability based on News Sentiment Analysis.",
    tech: "SwiftUI, AlphaVantage, TensorFlow, Nvidia NeMo",
    github: "https://github.com/Ebullioscopic/StockViewer"
  },
  {
    title: "HLS Burn Scars Transformer", 
    description: "Developed a custom Transformer for Image Masking Algorithm based on the HLS Burn Scars dataset. Developed the Encoder, Decoder and Multiple Layer Perceptrons with the Metal Performance Shaders Architecture.",
    tech: "Python, OpenCV, TensorFlow, Remote Sensing",
    github: "https://github.com/Ebullioscopic/HLS-Burn-Scars-Transformer"
  },
  {
    title: "DynamicIsland",
    description: "Enhanced the notch on MacBook M3 Pro devices with interactive widgets, transforming it into a control center for multitasking. Developed a set of customizable widget options, improving user experience for streamlined task management.",
    tech: "Swift, SwiftUI, UIKit", 
    github: "https://github.com/Ebullioscopic/DynamicIsland"
  },
  {
    title: "Phi-3 Math Fine Tuned with Orca Dataset",
    description: "Fine-tuned an AI model on synthetic math datasets to improve accuracy in grade-school problem-solving. Achieved high accuracy in solving word problems, contributing to educational and tutoring applications.",
    tech: "Python, Jupyter, Transformers",
    github: "https://github.com/Ebullioscopic/Phi3-Math-FineTuned"
  }
];

const awards = [
  {
    title: "Winner - Standard Chartered Hackathon",
    organization: "Standard Chartered Bank", 
    date: "Apr 2025",
    description: "Developed an Agentic AI Powered Optical Character Recognition and Retrieval Augmented Generation Model for extracting, transforming and loading data from Government ID Cards"
  },
  {
    title: "Winner - Remote Sensing AI Hackathon",
    organization: "IEEE GRSS - NASA - SRMIST",
    date: "Mar 2024",
    description: "Developed a Custom Transformer Architecture using the Metal Performance Shaders to process a Masking Algorithm for Burn Scars Dataset."
  },
  {
    title: "Gold Medalist - Research Day 2024",
    organization: "SRM Institute of Science and Technology",
    date: "Mar 2024", 
    description: "Awarded the highest distinction for pioneering work in Generative AI powered Image Stitching Satellite Clusters for Defense Applications related to Reconnaissance."
  },
  {
    title: "Winner - FinTechz-AI 2024",
    organization: "National AI-based Hackathon for FinTech Solutions",
    date: "Jul 2024",
    description: "Developed a FinTech AI solution leveraging predictive analytics for loan risk assessment, winning the top position among over 500 participants."
  },
  {
    title: "Kodekshetra 2023",
    organization: "Hackathon by ThinkDigital Chapter SRM (National level)",
    date: "May 2023",
    description: "Secured 1st place in a national-level coding contest, showcasing expertise in algorithmic problem-solving and time-efficient coding."
  },
  {
    title: "Silver Medalist - Digital Art Domain SRM Euphoria'23",
    organization: "SRM University",
    date: "Oct 2023",
    description: "Received recognition for exceptional work in digital art, highlighting creativity and advanced design skills."
  }
];

const extracurricular = [
  {
    title: "Technical Lead and Editor - SRM Hostels",
    description: "Editor and Publisher of Hostel Magazines"
  },
  {
    title: "UI/UX and Generative AI Training Associate",
    description: "CINTEL Association, SRMIST"
  }
];

function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud images={images} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-600 bg-clip-text text-transparent mb-6">
            Hariharan Mudaliar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer & AI Enthusiast
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">iOS Developer</Badge>
            <Badge variant="secondary">AI/ML Engineer</Badge>
            <Badge variant="secondary">Full Stack Developer</Badge>
          </div>
        </div>
      </section>

      {/* About Me Terminal */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <Terminal>
            <div className="space-y-2">
              <div className="flex">
                <span className="text-green-400">hariharan@portfolio:~$</span>
                <span className="ml-2">whoami</span>
              </div>
              <div className="text-muted-foreground">
                Passionate Software Developer with expertise in iOS development, AI/ML, and full-stack web development.
                Currently working on cutting-edge AI applications and mobile solutions.
              </div>
              <div className="flex">
                <span className="text-green-400">hariharan@portfolio:~$</span>
                <span className="ml-2">cat skills.txt</span>
              </div>
              <div className="text-muted-foreground">
                • 3+ years of experience in software development<br/>
                • Specialized in iOS development with SwiftUI and Swift<br/>
                • AI/ML engineer with expertise in TensorFlow, PyTorch, and LangChain<br/>
                • Full-stack developer proficient in Django, React, and modern web technologies<br/>
                • Published researcher in AI and computer vision applications
              </div>
              <div className="flex">
                <span className="text-green-400">hariharan@portfolio:~$</span>
                <span className="ml-2 animate-pulse">_</span>
              </div>
            </div>
          </Terminal>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          
          {/* Icon Cloud - Visible on both mobile and desktop */}
          <div className="flex justify-center mb-12">
            <IconCloudDemo />
          </div>

          {/* Skills Cards - Visible on desktop only */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skillGroup, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <BentoGrid className="auto-rows-[300px]">
            {projects.map((project, index) => (
              <BentoCard
                key={index}
                name={project.title}
                className="col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/40" />
                }
                Icon={() => (
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GitHubLogoIcon className="h-6 w-6" />
                  </div>
                )}
                description={project.description}
                href={project.github}
                cta="View on GitHub"
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Awards Gallery */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Awards & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription>{award.organization}</CardDescription>
                  <Badge variant="outline" className="w-fit">{award.date}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Extracurricular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extracurricular.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Dock */}
      <section className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Dock direction="middle">
          <DockIcon>
            <Button
              variant="ghost"
              size="icon"
              className="size-12"
              asChild
            >
              <a href="https://linkedin.com/in/hariharan-mudaliar" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="size-6" />
              </a>
            </Button>
          </DockIcon>
          <DockIcon>
            <Button
              variant="ghost"
              size="icon"
              className="size-12"
              asChild
            >
              <a href="mailto:hrhn.mudaliar251@gmail.com">
                <EnvelopeClosedIcon className="size-6" />
              </a>
            </Button>
          </DockIcon>
          <DockIcon>
            <Button
              variant="ghost"
              size="icon"
              className="size-12"
              asChild
            >
              <a href="https://github.com/Ebullioscopic" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="size-6" />
              </a>
            </Button>
          </DockIcon>
          <DockIcon>
            <Button
              variant="ghost"
              size="icon"
              className="size-12"
              asChild
            >
              <a href="tel:+919429199029">
                <MobileIcon className="size-6" />
              </a>
            </Button>
          </DockIcon>
        </Dock>
      </section>
    </div>
  );
}
