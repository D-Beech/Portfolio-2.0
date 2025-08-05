import { useState } from 'react'
import heroImg from '../src/assets/hero_image.jpg';

import './App.css'

"use client"
import * as React from "react"
import { describe } from 'node:test';


function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
      <p className="text-gray-700 mb-6">
        Reach out if you'd like to collaborate or chat about VUI, accessibility, or ethical tech.
      </p>
      <a href="mailto:you@example.com" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Email Me
      </a>
    </div>
  )

}

function ProductCard({name = "Untitled" , description = "No Description", link_to = "#"}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h4 className="text-xl font-semibold mb-2">{name}r</h4>
      <p className="text-gray-700 mb-2">
        {description}, {link_to}
      </p>
      <a href="#" className="text-blue-600 hover:underline">View Project →</a>
      
    </div>
  )
}


export default function Portfolio() {

  const projects = [
  {
    id: 1,
    name: "Datu's Tracker",
    description: "Voice-enabled diet & exercise app",
    link_to: "https://example.com/tracker"
  },
  {
    id: 2,
    name: "My Portfolio",
    description: "A personal site showcasing projects",
    link_to: "https://example.com/portfolio"
  },
  // Add more projects as needed
];


  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Datu Beech Software Developer</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="text-center bg-white bg-opacity-20 p-8 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold mb-4">Hi, I’m Datu 👋</h2>
          <p className="text-lg text-gray-700">Full Stack Developer | AI & VUI Researcher</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700">
            I’m passionate about building accessible, voice-driven web apps using React, Python, and AWS.
            Currently working on a nutrition tracker PWA with VUI and NLP for real-world users.
          </p>
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
                key = {project.id}
                name = {project.name}
                description = {project.description}
                link_to = {project.link_to}
                />
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <Contact />
      </section>

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

