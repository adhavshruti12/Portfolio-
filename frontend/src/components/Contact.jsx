import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy } from 'react-icons/fa';

function Contact() {
  const socialLinks = [
    {
      title: "Connect on LinkedIn",
      icon: <FaLinkedin className="text-4xl" />,
      url: "https://www.linkedin.com/in/shruti-adhav-087161242/",
      external: true
    },
    {
      title: "Check repos on Github",
      icon: <FaGithub className="text-4xl" />,
      url: "https://github.com/adhavshruti12",
      external: true
    },
    {
      title: "Follow on Twitter",
      icon: <FaTwitter className="text-4xl" />,
      url: "https://x.com/shrutiadhav12",
      external: true
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      text: "adhavshruti12@gmail.com",
      copyable: true
    },
    {
      icon: <FaPhone className="text-2xl transform rotate-90" />,
      text: "+91 7715893512",
      copyable: true
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      text: "Mumbai, India",
      url: "https://www.google.com/maps/place/Mumbai,+India",
      external: true
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Where to find me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="card flex items-center justify-between p-8 hover:bg-[#222] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
              <span className="text-lg">{link.title} ↗</span>
            </motion.a>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Get in touch now
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="card flex items-center gap-4 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => info.copyable && handleCopy(info.text)}
              style={{ cursor: info.copyable ? 'pointer' : 'default' }}
            >
              <span className="flex-shrink-0">{info.icon}</span>
              <span className="text-lg flex items-center">
                {info.text} {info.copyable && <FaCopy className="ml-2" />}
                {info.external && <a href={info.url} target="_blank" rel="noopener noreferrer">↗</a>}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
