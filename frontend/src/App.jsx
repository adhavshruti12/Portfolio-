import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navItems = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'min-h-screen bg-dark text-white' : 'min-h-screen bg-light text-black'}>
      <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Shruti
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="nav-link capitalize"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'mt-4' : 'mt-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="nav-link capitalize text-lg"
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className={isDarkMode ? 'bg-primary' : 'bg-light'}>
          <About />
        </section>

        <section id="education" className={isDarkMode ? 'bg-dark' : 'bg-light'}>
          <Education />
        </section>

        <section id="skills" className={isDarkMode ? 'bg-primary' : 'bg-light'}>
          <Skills />
        </section>

        <section id="experience" className={isDarkMode ? 'bg-dark' : 'bg-light'}>
          <Experience />
        </section>

        <section id="projects" className={isDarkMode ? 'bg-primary' : 'bg-light'}>
          <Projects />
        </section>

        <section id="contact" className={isDarkMode ? 'bg-dark' : 'bg-light'}>
          <Contact />
        </section>
      </main>

      <footer className={isDarkMode ? 'bg-dark py-8' : 'bg-light py-8'}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/adhavshruti12" className="text-2xl hover:text-accent transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shruti-adhav-087161242/" className="text-2xl hover:text-accent transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://x.com/shrutiadhav12" className="text-2xl hover:text-accent transition-colors">
              <FaXTwitter />
            </a>
          </div>
          <p className="text-gray-400">© 2024-2025 Shruti Adhav.</p>
        </div>
        </footer>

      <a 
        href="https://drive.google.com/file/d/1jHqaS2jnpCH3w-HzjK2Pn7LiA6nhpctp/view?usp=sharing" 
        download 
        className="cv-button"
      >
        <FaFileAlt className="inline-block mr-2" />
        Download CV
      </a>
    </div>
  );
}

export default App;
