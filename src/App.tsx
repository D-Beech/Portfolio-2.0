import { useState } from 'react'
import heroImg from '../src/assets/hero_image.jpg';
import headshot from '../src/assets/headshot.jpg'

import './App.css'

"use client"

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const yOffset = -80; // adjust for navbar height
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
      <a href="mailto:datubeech.software@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Email Me
      </a>
    </div>
  )

}

function ProductCard({ name = "Untitled", description = "No Description", link_to = "#" }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 transform transition duration-300 hover:shadow-lg hover:scale-105">
      <h4 className="text-xl font-semibold mb-2">{name}</h4>
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      {/* <a href={link_to} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View Project →
      </a> */}
    </div>
  );
}


export default function Portfolio() {

  const projects = [
    {
      id: 1,
      name: "Voice-Enabled Diet & Exercise Logging App",
      description:
        "React Progressive Web App with voice transcription, NLP parsing using OpenAI APIs, Firestore offline storage, an AWS-hosted nutrition database and serverless backend. Introduces a novel approach to VUI which allows voice input even on low end devices or unstable internet connections",
      link_to: "https://example.com/tracker", // replace with real link if available
    },
    {
      id: 2,
      name: "EduBot – Private Text Inference Tool for Schools",
      description:
        "A privately hosted chatbot with document summarization and content moderation through custom guardrails. Powered by an LLM (Llama3.2-3B) hosted on private AWS infrustructure. Demonstarted operating secure, private AI with high performance is possible for $1000 per month",
      link_to: "https://example.com/edubot", // replace with real link if available
    },
    {
      id: 3,
      name: "Super Checker – Grocery Price Comparator",
      description:
        "Web scraping app comparing product prices at supermarkets across Wellington. Built in Flask using Beautiful Soup for HTML parsing and Chromium for browser automation. Hosted on AWS",
      link_to: "https://example.com/super-checker", // replace with real link if available
    },
    {
      id: 4,
      name: "Ted’s Bar – eCommerce Website",
      description:
        "Dynamic website with Stripe payments, Postgres Product Database and Flask backend. Hosted on AWS",
      link_to: "https://example.com/teds-bar", // replace with real link if available
    },
    {
      id: 5,
      name: "Library Catalogue Desktop App",
      description:
        "'Look Mum! I can write C#!'  Desktop app for managing a searchable, reservable library catalogue. Built with C#(WPF) and an SQLite DB ",
      link_to: "https://example.com/library-app", // replace with real link if available
    },
    {
      id: 6,
      name: "New Chapter Website",
      description:
        "Simple SEO friendly static website, designed, built and hosted quickly and affordably for a local buisness",
      link_to: "https://example.com/library-app", // replace with real link if available
    },
  ];

  // Add more projects as needed



  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
            Datu Beech
            <span className="text-gray-500 font-normal block text-sm">Software Developer</span>
          </h1>
          <nav className="space-x-10 text-lg font-medium text-gray-700">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition duration-200 cursor-pointer">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition duration-200 cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition duration-200 cursor-pointer">Contact</button>
          </nav>
        </div>
      </header>

      <section
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl animate-fadeInUp">
            Datu Beech
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-2xl text-gray-300 tracking-wide animate-fadeInUp delay-200">
            Full Stack Developer | Voice UI + AI Research | Clean UX Engineer
          </p>

          {/* CTA */}
          <a
            href="#projects"
            className="mt-8 inline-block px-6 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg hover:scale-105 transition transform duration-300 animate-fadeInUp delay-400"
          >
            View My Work ↓
          </a>
        </div>
      </section>




      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={headshot}
              alt="Photo of Datu"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Kia ora! I'm Datu!</h3>
            <p className="text-gray-700">
              I'm a Full Stack Developer, currently based in Wellington NZ, with a special love for the backend and everything cloud-related!
              <br /><br />
              I love building modern, responsive frontends in React, and I'm comfortable building web servers, buisness logic and robust APIs with whatever framework suits the job best!
              <br /><br />
              I love JavaScript, and I've made some cool things with C# and APEX, but Python is without a doubt my favourite language. For my current work I'm using Flask to explore data and build AI-powered apps with custom guardrails, natural language processing, and voice user interfaces (VUI).
              <br /><br />I'm not just making chatbots! Specilaized, privacy-foccussed tools which make boring but important tasks like health tracking and data visualization easier for non-technical people.
              <br /><br />
              I love building cool things, solving interesting problems, and working with great people.
              <br /><br />
              In my spare time, you'll find me training handstands, playing emo music, and working the occasional barista shift (I tried to retrie, the beans keep calling me back).
            </p>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}

            {projects.map((project) => (
              < ProductCard
                key={project.id}
                name={project.name}
                description={project.description}
                link_to={project.link_to}
              />
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Datu Beech. All rights reserved.
      </footer>
    </div>
  );
}

