import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
       {
      title: "Coupon System using Round - Robin algorithm",
      description: "This project is a Coupon System that allows users to claim coupons and provides an admin panel for managing coupons and viewing claim history. The project consists of a backend built with Node.js and Express, and a frontend built with React.",
      image: "https://plus.unsplash.com/premium_photo-1717717670076-bb200b7e0b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React+vite","Tailwand css", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/adhavshruti12/Round_Robin_Coupon_Distribution.git"
    },
    {
      title: "Flipkart Clone",
      description: "A clone of the Flipkart e-commerce website built using React and Node.js.",
      image: "https://images.unsplash.com/photo-1654573817889-296cad084c97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React+vite", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/adhavshruti12/Flipkart_Clone.git"
    },
    {
      title: "Movie Recommendation System",
      description: "A system that recommends movie based on user's preferences using collaborative filtering and content-based filtering techniques.",
      image: "https://miro.medium.com/v2/resize:fit:9792/0*Jb306SqcT0f-5ZFe",
      tags: ["Spring Boot", "Flask", "Machine Learning: Scikit-learn", "JPA (Java Persistence API)"],
      link: "https://github.com/adhavshruti12/Movie_recommendation_system.git"
    },
    {
      title: "College Fees Management Software",
      description: "A Java-based application to manage college fees, student information, and payment records.",
      image: "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1523240795612-9a054b0db644%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Deducacion%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZWR1Y2FjaW9ufGVufDB8fHx8MTczOTQ2OTUyNXww%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60",
      tags: ["Java", "Swing", "JSP", "JDBC","MySQl", "Eclipse IDE" ],
      link: "https://github.com/adhavshruti12/College_fees_management_software.git"
    },
    {
      title: "Algorithm Visualizer",
      description: "Algorithm Visualizer is a web application for visualizing various algorithms including sorting, queue, and stack algorithms.",
      image: "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1547190027-9156686aa2f0%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dalgorithm%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8YWxnb3JpdGhtfGVufDB8fHx8MTc0MDUyNjgwMnww%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60",
      tags: ["HTML", "CSS", "JavaScript", "Python"],
      link: "https://github.com/adhavshruti12/Algorithm-visualizer.git"
    },
   
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-5xl md:text-6xl font-bold text-glow">
          My Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-dark rounded-full text-sm text-accent/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              View Project <span className="ml-2">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
