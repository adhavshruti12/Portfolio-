import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="text-5xl md:text-6xl font-bold text-glow">
          Snapshot of me
        </span>
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[450px] overflow-hidden rounded-lg">
          <img
            src="https://drive.google.com/uc?export=view&id=1LnS1a92V60jdI55OF3_vkQrOCOgl6GiG"
             alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4 text-white">Innovating with passion</h3>
          <div className="space-y-3 text-gray-300 text-lg">
            <p>
                   A highly motivated and detail-oriented Software Developer with a strong problem-solving mindset 
              and a passion for building scalable and efficient backend systems. With expertise in Java, SQL, 
              Spring Boot, and the MERN stack, I develop robust backend systems and dynamic full-stack solutions. 
              My approach blends problem-solving with clean coding practices to deliver high-quality software.
            </p>
            <p>
                Committed to continuous learning, I explore new technologies to enhance my expertise and stay ahead 
              in the evolving tech landscape. I thrive in collaborative environments, enjoy tackling challenges, 
              and take pride in developing innovative solutions that make an impact.
            </p>
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default About;
