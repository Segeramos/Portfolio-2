import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import MyJourney from './Components/My Journey';

import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaBars, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';

function App() {
  // State to handle the visibility of the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false); // State for toggling My Journey dropdown

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  const toggleJourneyMenu = () => {
    setIsJourneyOpen(!isJourneyOpen); // Toggle My Journey dropdown visibility
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-cyan-700 text-white shadow-md py-4 fixed w-full top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-200">Portfolio</h1>

          {/* Hamburger Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaBars />
            </button>
          </div>

          {/* Desktop Navbar Links */}
          <div className="space-x-4 hidden md:flex">
            <a href="#about" className="text-white font-bold hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/75 transition-all duration-300 ease-in-out transform hover:scale-105">About</a>
            <a href="#projects" className="text-white font-bold hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/75 transition-all duration-300 ease-in-out transform hover:scale-105">Projects</a>
            <a href="#skills" className="text-white font-bold hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/75 transition-all duration-300 ease-in-out transform hover:scale-105">Skills</a>
            <a href="#contact" className="text-white font-bold hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:scale-105">Contact</a>

            {/* My Journey Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white font-bold hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={toggleJourneyMenu}
              >
                My Journey
                <span className={`ml-2 transform ${isJourneyOpen ? 'rotate-180' : ''}`}>
                  ▼ {/* This is the small "v" icon */}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isJourneyOpen && (
                <div className="absolute left-0 bg-gray-800 text-white transition-all duration-300">
                  <a href="#SubItem1" className="block px-4 py-2 hover:bg-cyan-500">Certification</a>
                  <a href="#SubItem2" className="block px-4 py-2 hover:bg-cyan-500">Education Background</a>
                  <a href="#SubItem3" className="block px-4 py-2 hover:bg-cyan-500">Professional Background</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar Links (Hamburger Menu) */}
      <div
        className={`fixed top-16 left-0 bottom-0 bg-cyan-900 text-white w-64 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}
        id="hamburger-menu"
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <span>&times;</span> {/* X icon to close the menu */}
          </button>
        </div>

        {/* Mobile Links */}
        <a href="#about" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>
          About
        </a>
        <a href="#projects" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>
          Skills
        </a>
        <a href="#contact" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>
          Contact
        </a>

        {/* My Journey Dropdown */}
        <div className="relative">
          <button
            className="block px-4 py-2 w-full text-left hover:bg-cyan-700"
            onClick={toggleJourneyMenu}
          >
            My Journey
            <span className={`ml-2 transform ${isJourneyOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {isJourneyOpen && (
            <div className="pl-4">
              <a href="#SubItem1" className="block px-4 py-2 hover:bg-cyan-500" onClick={closeMenu}>
                SubItem 1
              </a>
              <a href="#SubItem2" className="block px-4 py-2 hover:bg-cyan-500" onClick={closeMenu}>
                SubItem 2
              </a>
              <a href="#SubItem3" className="block px-4 py-2 hover:bg-cyan-500" onClick={closeMenu}>
                SubItem 3
              </a>
            </div>
          )}
        </div>
      </div>

      <main className="pt-16">
        <About />
        <Projects />
        <Skills />
        <MyJourney />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        <p>© 2024 Segera Amos</p>
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-blue-500 hover:text-blue-600" />
            </a>
            <a href="https://github.com/Segeramos" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-white hover:text-gray-900" />
            </a>
            <a href="https://www.linkedin.com/in/amos-segera-57a13a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-blue-700 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-pink-500 hover:text-pink-600" />
            </a>
            <a href="https://wa.me/+254756627342" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="text-green-500 hover:text-green-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
