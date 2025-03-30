import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Maintenance AI",
      description: "AI system that predicts equipment failures before they occur, reducing downtime and maintenance costs by up to 35%.",
      technologies: ["TensorFlow", "Python", "Time Series Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Financial Market Analysis",
      description: "Real-time analysis of market trends and patterns to identify investment opportunities and risk factors with 92% accuracy.",
      technologies: ["PyTorch", "R", "NLP"],
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthcare Diagnostic Platform",
      description: "AI-powered diagnostic tool that assists healthcare professionals in identifying conditions from medical imaging with 97% precision.",
      technologies: ["Computer Vision", "CUDA", "Deep Learning"],
      imageUrl: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Retail Analytics",
      description: "In-store analytics platform that optimizes product placement and inventory management through real-time customer behavior analysis.",
      technologies: ["React", "Python", "Computer Vision"],
      imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Autonomous Vehicle Perception",
      description: "Computer vision system for autonomous vehicles that detects and classifies road objects with sub-millisecond latency.",
      technologies: ["CUDA", "C++", "PyTorch"],
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Natural Language Processing API",
      description: "REST API for text analysis, sentiment detection, entity recognition, and automated content generation with multilingual support.",
      technologies: ["BERT", "FastAPI", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            Explore my innovative solutions across different industries and technologies.
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
