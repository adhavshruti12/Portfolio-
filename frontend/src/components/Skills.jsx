import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: 'text-red-500',
    },
    {
      name: 'SQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'SpringBoot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: 'text-green-500',
    },
    {
      name: 'Hibernate',
      icon: 'https://hibernate.org/images/hibernate_icon_whitebkg.svg',
      color: 'text-yellow-500',
    },
    {
      name: 'REST APIs',
      icon: 'https://www.svgrepo.com/show/375531/api.svg',
      color: 'text-purple-500',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'text-orange-500',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'text-yellow-400',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'text-green-500',
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'text-gray-800',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'text-green-600',
    },
    {
      name: 'Postman',
      icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      color: 'text-orange-500',
    },
    {
      name: 'VSCode',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'Github',
      icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
      color: 'text-gray-800',
    },
    {
      name: 'Vercel',
      icon: 'https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/57x57.png',
      color: 'text-gray-800',
    },
    {
      name: "Power BI",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      color: 'text-yellow-600',
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'text-yellow-500',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="section-title">Technical Arsenal</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="card flex flex-col items-center justify-center p-4"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
              />
              <p className="text-center text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
