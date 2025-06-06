"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Terminal } from "@/components/magicui/terminal";
import { Confetti } from "@/components/magicui/confetti";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Ripple } from "@/components/magicui/ripple";
import { Globe } from "@/components/magicui/globe";
import { Navigation } from "@/components/Navigation";

// Professional data
const skills = [
  { name: "React", level: 95, icon: "⚛️" },
  { name: "TypeScript", level: 90, icon: "🟦" },
  { name: "Next.js", level: 85, icon: "▲" },
  { name: "Node.js", level: 88, icon: "🟢" },
  { name: "Python", level: 92, icon: "🐍" },
  { name: "AWS", level: 80, icon: "☁️" },
];

const iconSlugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "python",
  "amazonaws",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "postgresql",
  "redis",
  "graphql",
  "tailwindcss",
  "vercel",
  "firebase",
  "sass",
];

const achievements = [
  {
    title: "10K+ Users",
    description: "Built platforms serving 10,000+ active users",
    icon: "👥",
  },
  {
    title: "50+ Projects",
    description: "Successfully delivered 50+ web applications",
    icon: "🚀",
  },
  {
    title: "99.9% Uptime",
    description: "Maintained critical systems with 99.9% uptime",
    icon: "⚡",
  },
  {
    title: "Award Winner",
    description: "Best Innovation Award at TechConf 2023",
    icon: "🏆",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/next.svg",
    link: "#",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with real-time data visualization and AI insights",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image: "/next.svg",
    link: "#",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application built with React Native",
    tech: ["React Native", "Firebase", "Redux"],
    image: "/next.svg",
    link: "#",
  },
];

const experiences = [
  {
    company: "TechCorp",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    description: "Led development of scalable web applications serving 100k+ users",
    logo: "🏢",
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Built entire product from MVP to production with modern tech stack",
    logo: "🚀",
  },
  {
    company: "DevAgency",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Created responsive web applications for various client projects",
    logo: "💻",
  },
];

// Live activity notifications
const notifications = [
  {
    name: "New project deployed",
    description: "AI Dashboard v2.0",
    time: "2m ago",
    icon: "�",
    color: "#00C9A7",
  },
  {
    name: "Code reviewed",
    description: "E-commerce platform",
    time: "5m ago",
    icon: "�️",
    color: "#FFB800",
  },
  {
    name: "Pull request merged",
    description: "Mobile app feature",
    time: "8m ago",
    icon: "�",
    color: "#FF3D71",
  },
  {
    name: "Client meeting",
    description: "Project discussion",
    time: "15m ago",
    icon: "�",
    color: "#1E86FF",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications_index = 0;

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Home() {
  const [notificationList, setNotificationList] = useState<Item[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (notifications_index < notifications.length) {
        setNotificationList((prev) => [
          notifications[notifications_index],
          ...prev,
        ]);
        notifications_index++;
      } else {
        // Reset and start over
        notifications_index = 0;
        setNotificationList([]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <Navigation />
      
      {/* Background Patterns */}
      <DotPattern className="opacity-30 dark:opacity-20" />
      
      {/* Confetti overlay */}
      {showConfetti && <Confetti />}
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero" 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <GridPattern className="opacity-20" />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          refresh={false}
        />
        <Meteors number={30} />
        <Ripple />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <AnimatedShinyText className="text-lg font-medium">
              👋 Welcome to my portfolio
            </AnimatedShinyText>
          </motion.div>
          
          {/* Enhanced name with particles effect */}
          <div className="relative">
            <Particles
              className="absolute inset-0"
              quantity={30}
              ease={50}
              refresh={false}
            />
            <SparklesText
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              sparklesCount={15}
            >
              Hariharan Mudaliar
            </SparklesText>
          </div>
          
          <div className="flex justify-center mb-8">
            <Terminal>
              <div className="text-green-400">
                $ whoami
                <br />
                Full Stack Developer | UI/UX Enthusiast | Problem Solver
              </div>
            </Terminal>
          </div>
          
          <TextAnimate
            animation="fadeIn"
            delay={0.6}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            I create exceptional digital experiences with modern technologies. 
            Passionate about building scalable applications and solving complex problems.
          </TextAnimate>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagicCard 
              className="px-8 py-3 cursor-pointer"
              gradientColor="#3b82f6"
            >
              <span className="text-white font-medium">View My Work</span>
            </MagicCard>
            <MagicCard 
              className="px-8 py-3 cursor-pointer"
              gradientColor="#8b5cf6"
            >
              <span className="text-white font-medium">Get In Touch</span>
            </MagicCard>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section with Confetti Trigger */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Key Achievements
          </TextAnimate>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={triggerConfetti}
                className="cursor-pointer"
              >
                <MagicCard 
                  className="p-6 h-full text-center group hover:scale-105 transition-transform duration-300"
                  gradientColor="#fbbf24"
                  gradientSize={200}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Icon Cloud */}
      <section 
        ref={skillsRef}
        id="skills" 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50 relative"
      >
        <div className="max-w-6xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Technical Skills
          </TextAnimate>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MagicCard 
                    className="p-6 h-full relative"
                    gradientColor="#3b82f6"
                    gradientSize={200}
                  >
                    <BorderBeam 
                      size={120} 
                      duration={10 + index * 2} 
                      colorFrom="#3b82f6" 
                      colorTo="#8b5cf6"
                      delay={index * 0.3}
                    />
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</p>
                  </MagicCard>
                </motion.div>
              ))}
            </div>
            
            {/* Icon Cloud */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-96 h-96 flex items-center justify-center">
                  <IconCloud 
                    icons={iconSlugs.map((slug, index) => (
                      <div key={index} className="text-2xl p-2 rounded bg-background/80 backdrop-blur-sm">
                        {slug.charAt(0).toUpperCase()}
                      </div>
                    ))}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Magic UI */}
      <section 
        ref={projectsRef}
        id="projects" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <Ripple />
        <div className="max-w-6xl mx-auto relative z-10">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Featured Projects
          </TextAnimate>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <MagicCard 
                  className="overflow-hidden h-full"
                  gradientColor="#3b82f6"
                  gradientSize={300}
                >
                  <BorderBeam 
                    size={200} 
                    duration={12 + index * 2} 
                    colorFrom="#3b82f6" 
                    colorTo="#8b5cf6"
                    delay={index * 0.5}
                  />
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center relative overflow-hidden">
                    <Particles
                      className="absolute inset-0"
                      quantity={20}
                      ease={50}
                      refresh={false}
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={100}
                      height={40}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <MagicCard 
                      className="px-4 py-2 cursor-pointer inline-block"
                      gradientColor="#8b5cf6"
                      gradientSize={100}
                    >
                      <span className="text-white font-medium">View Project →</span>
                    </MagicCard>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Globe */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50 relative">
        <GridPattern 
          className="opacity-10" 
          width={60} 
          height={60}
        />
        <div className="max-w-6xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Work Experience
          </TextAnimate>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Globe */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-96 h-96">
                  <Globe 
                    className="w-full h-full" 
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <SparklesText
                    className="text-lg font-semibold text-gray-600 dark:text-gray-300"
                    sparklesCount={5}
                  >
                    Global Experience
                  </SparklesText>
                </div>
              </motion.div>
            </div>
            
            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <MagicCard 
                    className="p-6"
                    gradientColor="#8b5cf6"
                    gradientSize={150}
                  >
                    <BorderBeam 
                      size={100} 
                      duration={8 + index * 2} 
                      colorFrom="#8b5cf6" 
                      colorTo="#06b6d4"
                      delay={index * 0.5}
                    />
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{experience.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {experience.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {experience.duration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Live Activity Feed
          </TextAnimate>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              {notificationList.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {notificationList.map((item, idx) => (
                    <motion.div
                      key={`${item.name}-${idx}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4,
                        delay: idx * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <Notification {...item} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                  Waiting for activity updates...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Magic Cards */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50 relative">
        <DotPattern className="opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SparklesText
            className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            sparklesCount={12}
          >
            Let&apos;s Work Together
          </SparklesText>
          
          <TextAnimate
            animation="fadeIn"
            delay={0.3}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I&apos;m always interested in new opportunities and exciting projects. 
            Feel free to reach out if you&apos;d like to collaborate!
          </TextAnimate>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <MagicCard 
                className="p-6 text-center cursor-pointer group"
                gradientColor="#3b82f6"
                gradientSize={200}
              >
                <BorderBeam size={80} duration={6} colorFrom="#3b82f6" colorTo="#06b6d4" />
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📧
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">hariharan@example.com</p>
              </MagicCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <MagicCard 
                className="p-6 text-center cursor-pointer group"
                gradientColor="#8b5cf6"
                gradientSize={200}
              >
                <BorderBeam size={80} duration={7} colorFrom="#8b5cf6" colorTo="#ec4899" />
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
              </MagicCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <MagicCard 
                className="p-6 text-center cursor-pointer group"
                gradientColor="#10b981"
                gradientSize={200}
              >
                <BorderBeam size={80} duration={8} colorFrom="#10b981" colorTo="#3b82f6" />
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  💻
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">View my code</p>
              </MagicCard>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagicCard 
              className="px-8 py-3 cursor-pointer group"
              gradientColor="#3b82f6"
            >
              <span className="text-white font-medium group-hover:scale-105 transition-transform duration-300 inline-block">
                Send Message
              </span>
            </MagicCard>
            <MagicCard 
              className="px-8 py-3 cursor-pointer group"
              gradientColor="#8b5cf6"
            >
              <span className="text-white font-medium group-hover:scale-105 transition-transform duration-300 inline-block">
                Download Resume
              </span>
            </MagicCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Hariharan Mudaliar. Built with Next.js and Magic UI.
          </p>
        </div>
      </footer>
    </div>
  );
}
