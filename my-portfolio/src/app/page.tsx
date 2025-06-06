"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { AnimatedList } from "@/components/magicui/animated-list";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import BorderBeam from "@/components/magicui/border-beam";
import MagicCard from "@/components/magicui/magic-card";
import SparklesText from "@/components/magicui/sparkles-text";
import Dock, { DockIcon } from "@/components/magicui/dock";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={80}
          refresh={false}
        />
        <Meteors number={30} />
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
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Hariharan Mudaliar
          </TextAnimate>
          
          <TextAnimate
            animation="slideUp"
            by="word"
            delay={0.3}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Full Stack Software Developer
          </TextAnimate>
          
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
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
              View My Work
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <NumberTicker
                value={50}
                className="text-4xl font-bold text-blue-600 dark:text-blue-400"
              />
              <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <NumberTicker
                value={3}
                className="text-4xl font-bold text-green-600 dark:text-green-400"
              />
              <p className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <NumberTicker
                value={25}
                className="text-4xl font-bold text-purple-600 dark:text-purple-400"
              />
              <p className="text-gray-600 dark:text-gray-400 mt-2">Happy Clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <NumberTicker
                value={100}
                className="text-4xl font-bold text-orange-600 dark:text-orange-400"
              />
              <p className="text-gray-600 dark:text-gray-400 mt-2">Code Commits</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Technical Skills
          </TextAnimate>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MagicCard 
                  className="p-6 h-full"
                  gradientColor="#3b82f6"
                  gradientSize={250}
                >
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
                      className="bg-blue-600 h-2 rounded-full"
                    />
                  </div>
                  <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <BorderBeam 
                  size={150} 
                  duration={12 + index * 2} 
                  colorFrom="#3b82f6" 
                  colorTo="#8b5cf6"
                  delay={index * 0.5}
                />
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={40}
                    className="opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Work Experience
          </TextAnimate>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="text-3xl">{experience.logo}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.position}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{experience.duration}</p>
                  <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <SparklesText
            text="Let's Work Together"
            className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            colors={{
              first: "#3b82f6",
              second: "#8b5cf6",
            }}
            sparklesCount={8}
          />
          
          <TextAnimate
            animation="fadeIn"
            delay={0.3}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </TextAnimate>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
              Send Message
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200">
              Download Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Dock className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg">
          <DockIcon className="bg-blue-500 text-white">
            <span className="text-xl">🏠</span>
          </DockIcon>
          <DockIcon className="bg-green-500 text-white">
            <span className="text-xl">👨‍💻</span>
          </DockIcon>
          <DockIcon className="bg-purple-500 text-white">
            <span className="text-xl">🛠️</span>
          </DockIcon>
          <DockIcon className="bg-orange-500 text-white">
            <span className="text-xl">📁</span>
          </DockIcon>
          <DockIcon className="bg-red-500 text-white">
            <span className="text-xl">📧</span>
          </DockIcon>
        </Dock>
      </div>

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
