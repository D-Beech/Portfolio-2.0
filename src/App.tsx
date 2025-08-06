import heroImg from '../src/assets/hero_image.jpg';
import headshot from '../src/assets/headshot.jpg';
import './App.css';

"use client";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const yOffset = -80; // Adjust for navbar height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
      <p className="text-gray-700 mb-6">
        Reach out if you'd like to collaborate or chat about VUI, accessibility, or ethical tech.
      </p>
      <a
        href="mailto:datubeech.software@gmail.com"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
      >
        Email Me
      </a>
    </div>
  );
}

function ProductCard({ name = "", description = "", link_to = "#" }) {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-md 
        hover:shadow-lg 
        hover:scale-105 
        transform 
        transition 
        duration-300 
        ease-in-out 
        p-6
        cursor-pointer
      "
    >
      <h4 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h4>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      {/* <a
        href={link_to}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block 
          text-sm 
          font-medium 
          text-white 
          bg-gradient-to-r from-indigo-600 to-blue-600 
          px-5 py-2 
          rounded-full 
          hover:brightness-110 
          transition
          ease-in-out
        "
      >
        View Project →
      </a> */}
    </div>
  );
}

export default function Portfolio() {
  const lightBgColor = "#e6e6e6ff"; // light grayish white (instead of pure white)

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
      link_to: "#"
    },
    {
      id: 3,
      name: "Super Checker – Grocery Price Comparator",
      description:
        "Flask + BeautifulSoup + Chromium scraper to compare supermarket prices across Wellington. Hosted on AWS.",
      link_to: "#"
    },
    {
      id: 4,
      name: "Ted’s Bar – eCommerce Website",
      description:
        "Stripe-integrated Flask eCommerce site with PostgreSQL DB. Deployed on AWS.",
      link_to: "#"
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
      link_to: "#"
    },
  ];

  return (
    <div
      className="font-sans text-gray-900 dark:text-gray-900"
      style={{ backgroundColor: lightBgColor }}
      data-theme="light"
    >
      {/* Navbar */}
      <header
        className="shadow-md sticky top-0 z-20"
        style={{ backgroundColor: lightBgColor }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
            Datu Beech
            <span className="text-gray-500 font-normal block text-sm">Software Developer</span>
          </h1>
          <nav className="space-x-10 text-lg font-medium text-gray-700">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl animate-fadeInUp">
            Datu Beech
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 tracking-wide whitespace-nowrap overflow-hidden border-r-4 border-gray-300 w-fit animate-typing">
            Full Stack Developer | Voice UI + AI Research | Cloud Nerd
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block px-6 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg hover:scale-105 transition duration-300 animate-fadeInUp delay-400"
          >
            View My Work ↓
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: lightBgColor }}
      >
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center hover:scale-105 transform transition duration-300 ease-in-out p-6">
            <img
              src={headshot}
              alt="Photo of Datu"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              About Me
            </h3>

            <p className="text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-1">
              I'm a Full Stack Developer, currently based in Wellington NZ, with a special love for the backend and everything cloud-related!
            </p>
            <br />
            <p className="text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-1">
              I love building modern, responsive frontends in React, and I'm comfortable building web servers, business logic and robust APIs with whatever framework suits the job best!
            </p>
            <br />
            <p className="text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-1">
              I love JavaScript, and I've made some cool things with C# and APEX, but Python is without a doubt my favourite language. For my current work I'm using Flask to explore data and build AI-powered apps with custom guardrails, natural language processing, and voice user interfaces (VUI).
            </p>
            <br />
            <p className="text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-1">
              I'm not just making chatbots! Specialized, privacy-focused tools which make boring but important tasks like health tracking and data visualization easier for non-technical people.
            </p>
            <br />
            <p className="text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-1">
              I love building cool things, solving interesting problems, and working with great people.
            </p>
            <br />
            <p className="text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-1">
              In my spare time, you'll find me training handstands, playing emo music, and working the occasional barista shift.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/70 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center text-white">
              Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProductCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  link_to={project.link_to}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: lightBgColor }}
      >
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm" style={{ backgroundColor: lightBgColor }}>
        © {new Date().getFullYear()} Datu Beech. All rights reserved.
      </footer>
    </div>
  );
}
