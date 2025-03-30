import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Developed a responsive portfolio website using React, TypeScript, and Tailwind CSS to showcase skills, projects, and contact information.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student Information System",
      description: "Created a database-driven application to manage student records, course registrations, and academic performance tracking.",
      technologies: ["Java", "MySQL", "JDBC"],
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather Forecast Application",
      description: "Built a web application that fetches and displays weather data from an external API, with location search and 5-day forecast functionality.",
      technologies: ["JavaScript", "HTML/CSS", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Task Management App",
      description: "Developed a task management application with features including task creation, priority setting, due dates, and completed task tracking.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-commerce Product Catalog",
      description: "Created a product catalog for an e-commerce platform with filtering, sorting, and search capabilities to enhance user experience.",
      technologies: ["JavaScript", "Bootstrap", "JSON"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Built an interactive dashboard to visualize and analyze data sets, featuring multiple chart types and customizable views.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A collection of academic and personal projects showcasing my technical skills and learning journey.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="relative group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105" 
                    src={project.imageUrl} 
                    alt={`${project.title} thumbnail`} 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium flex items-center transition-colors">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
