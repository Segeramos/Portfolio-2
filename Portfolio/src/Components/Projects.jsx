import React from 'react';

function Projects() {
  const projectsData = [
    {
      title: "SavorSphere",
      description: "Description for Project 1",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      link: "https://segeramos-savorsphere.web.val.run/",
      landingPageImage: "/SS.png" // Correct path format
    },
    {
      title: "Movie Explorer",
      description: "Description for Project 1",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://capstone-project-2-88dc.vercel.app/",
      landingPageImage: "/ME.png"
    },

    {
      title: "Music App",
      description: "Description for Project 1",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://segeramos-musicwebsiteapp.web.val.run/",
      landingPageImage: "/MA.png"
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-cyan-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-200">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-cyan-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-950">{project.title}</h3>
              <img 
                src={project.landingPageImage} 
                alt={`Image for ${project.title}`} 
                className="w-full h-80 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
