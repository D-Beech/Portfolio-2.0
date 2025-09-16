import { useState, useEffect } from 'react';
import heroImg from '../src/assets/hero_image.jpg';
import headshot from '../src/assets/headshot.jpg';
import './App.css';

"use client";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const navbar = document.querySelector('header');
  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
  const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({ top: y, behavior: 'smooth' });
}


function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h3>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Reach out if you'd like to collaborate or chat about VUI, accessibility, or ethical tech.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:datubeech.software@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Email Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://github.com/D-Beech"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200"
          >
            <span className="relative z-10">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ name = "", description = "", link_to = "#" }) {
  return (
    <div
      className="
        group
        bg-white/10 
        backdrop-blur-lg
        border border-white/20
        rounded-3xl 
        shadow-2xl 
        hover:shadow-3xl 
        hover:scale-105 
        hover:bg-white/20
        transform 
        transition-all 
        duration-500 
        ease-out 
        p-8
        cursor-pointer
        relative
        overflow-hidden
      "
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
          {name}
        </h4>
        <p className="text-gray-200 mb-6 leading-relaxed text-sm group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
        <a
          href={link_to}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/btn
            inline-flex 
            items-center
            text-sm 
            font-semibold 
            text-white 
            bg-gradient-to-r from-blue-500 to-purple-500 
            px-6 py-3 
            rounded-full 
            shadow-lg
            hover:shadow-xl
            hover:from-blue-400
            hover:to-purple-400
            transform
            hover:scale-105
            transition-all
            duration-300
            ease-out
          "
        >
          <span>View Project</span>
          <svg 
            className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const lightBgColor = "#f8fafc";
  const darkBgColor = "#0f172a";

  const projects = [
    {
      id: 1,
      name: "Voice-Enabled Diet & Exercise Logging App",
      description:
        "React PWA with voice transcription, OpenAI NLP, Firestore offline support, and AWS-hosted nutrition DB. Built to work offline on low-end devices.",
      link_to: "#"
    },
    {
      id: 2,
      name: "EduBot – Private Text Inference Tool for Schools",
      description:
        "Private chatbot with summarization and moderation via guardrails. Uses Llama 3.2 hosted on AWS, proving private AI is affordable.",
      link_to: "https://github.com/D-Beech/301.3_Llama_Flask_Interface"
    },
    {
      id: 3,
      name: "Super Checker – Grocery Price Comparator",
      description:
        "Django + BeautifulSoup + Chromium scraper to compare supermarket prices across Wellington. Hosted on AWS.",
      link_to: "https://github.com/D-Beech/Django_Application_205_Backend.git"
    },
    {
      id: 4,
      name: "Ted’s Bar – eCommerce Website",
      description:
        "Stripe-integrated Flask eCommerce site with PostgreSQL DB. Deployed on AWS.",
      link_to: "https://github.com/D-Beech/Ted-sBar_V2"
    },
    {
      id: 5,
      name: "Library Catalogue Desktop App",
      description:
        "'Look Mum! I can write C#!' WPF app with SQLite DB for reserving books. Built in C#.",
      link_to: "#"
    },
    {
      id: 6,
      name: "New Chapter Website",
      description:
        "Quick static SEO-friendly site built and hosted affordably for a local business.",
      link_to: "https://cafenewchapter.com/"
    },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <h1 className="text-4xl font-bold text-white mb-4">Datu Beech</h1>
          <p className="text-white/80 text-lg">Loading amazing things...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`font-sans overflow-x-hidden transition-colors duration-500 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
      style={{ backgroundColor: isDarkMode ? darkBgColor : lightBgColor }}
    >
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datu Beech
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-blue-600 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection('projects');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>


      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-float-slow"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
          <div className="max-w-4xl">
            <h1
              className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl opacity-0 animate-fadeInUp mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Datu Beech
              </span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-xl md:text-3xl text-gray-200 tracking-wide opacity-0 animate-fadeInUp whitespace-normal leading-relaxed"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="font-semibold">Full Stack Developer</span>
              <br />
              <span className="text-lg md:text-xl text-gray-300">
                Helping people and solving tricky problems
              </span>
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section
        id="about"
        data-animate="true"
        className="py-24 relative"
        style={{ backgroundColor: isDarkMode ? darkBgColor : lightBgColor }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  I build full stack applications and AI systems using Python, React, and whatever tool is best for the job. I do more than just chatbots and websites. I build RAG systems and LangChain agents that integrate with tools people actually use in their work.
                </p>
                
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  I focus on solving real-world problems while prioritizing privacy, safety, and ethical AI. Tech moves fast and people's needs change. I am always ready to pick up new technologies or a new approach for a new problem.
                </p>
                
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  I am currently a Data and AI Intern at DataTorque. Previously, I worked at Z Energy, contributing to the backend systems for Z Rewards. I have also done freelance web development for local businesses and worked as a barista through university.
                </p>
                
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  I enjoy working with people and bringing them together. I live in the cloud and a project is not done until it is deployed and running well.
                </p>
                
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Outside of tech, I am learning how to do a handstand and playing in an emo band.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-animate="true"
        className="relative bg-fixed bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        
        <div className="relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">
                My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                A collection of projects showcasing my skills in full-stack development, AI integration, and modern web technologies.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ProductCard
                    name={project.name}
                    description={project.description}
                    link_to={project.link_to}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate="true"
        className="py-24 relative"
        style={{ backgroundColor: isDarkMode ? darkBgColor : lightBgColor }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center relative" style={{ backgroundColor: isDarkMode ? darkBgColor : lightBgColor }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Datu Beech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/D-Beech" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:datubeech.software@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
