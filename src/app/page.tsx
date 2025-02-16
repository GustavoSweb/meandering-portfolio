
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, User, Briefcase, BookOpen } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#221F26]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold text-white">Portfolio</span>
            <div className="hidden sm:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'text-accent' : 'text-white/70'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-white/80 mb-8">
              I craft digital experiences that matter
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full hover:bg-white/20 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-white/5 border-white/10"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/80 leading-relaxed">
                  I am a passionate developer dedicated to creating elegant solutions to complex problems. 
                  With a strong foundation in modern web technologies, I strive to build applications 
                  that are both beautiful and functional.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-white/80">
                    <User className="w-5 h-5 text-accent" />
                    <span>Based in [Your Location]</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white/80">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <span>[Years] years of experience</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white/80">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span>Always learning new technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="glass-card p-6 hover:transform hover:scale-105 transition-transform duration-300 bg-white/5 border-white/10"
                >
                  <div className="aspect-video bg-white/10 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Project {project}</h3>
                  <p className="text-white/80 mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-white/5 border-white/10"
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'UI/UX', 'API Design'].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Code className="w-8 h-8 text-accent mb-2" />
                  <span className="text-center font-medium text-white">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 max-w-2xl mx-auto bg-white/5 border-white/10"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
