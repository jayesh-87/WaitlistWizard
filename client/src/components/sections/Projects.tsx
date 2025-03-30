import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink, Github, Calendar } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Developed a responsive portfolio website using React, TypeScript, and Tailwind CSS to showcase skills, projects, and contact information.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "January 2023",
      github: "https://github.com/jayesh-87/portfolio-website",
      liveDemo: "https://jayesh-solanke-portfolio.vercel.app",
      detailedDescription: "This portfolio website serves as a central hub for showcasing my skills, projects, and journey as an IT student. Built with modern web technologies like React, TypeScript, and Tailwind CSS, this responsive platform adapts seamlessly to various screen sizes. Features include smooth scroll navigation, animated content transitions, and a contact form integrated with a backend API.",
      keyFeatures: [
        "Responsive design for all device sizes",
        "Animated UI elements with Framer Motion",
        "Contact form with backend validation",
        "Dark/light mode toggle"
      ],
      role: "Full-stack Developer"
    },
    {
      title: "Student Information System",
      description: "Created a database-driven application to manage student records, course registrations, and academic performance tracking.",
      technologies: ["Java", "MySQL", "JDBC"],
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "October 2023",
      github: "https://github.com/jayesh-87/student-information-system",
      liveDemo: null,
      detailedDescription: "A comprehensive student information management system built as part of my database course project. The application provides an interface for administrators to manage student records, course assignments, and track academic performance. Implemented using Java with JDBC for database operations and a MySQL backend.",
      keyFeatures: [
        "Student enrollment and course registration",
        "Performance analytics dashboard",
        "Attendance tracking system",
        "Grade management with GPA calculation"
      ],
      role: "Backend Developer"
    },
    {
      title: "Weather Forecast Application",
      description: "Built a web application that fetches and displays weather data from an external API, with location search and 5-day forecast functionality.",
      technologies: ["JavaScript", "HTML/CSS", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "May 2023",
      github: "https://github.com/jayesh-87/weather-app",
      liveDemo: "https://jayesh-weather-forecast.netlify.app",
      detailedDescription: "A modern weather forecast application that provides real-time weather information and forecasts. The app uses the OpenWeatherMap API to fetch current conditions and 5-day forecasts for any city worldwide. Users can search for locations and save favorites for quick access.",
      keyFeatures: [
        "Real-time weather data",
        "5-day forecast with 3-hour intervals",
        "Location search with autocomplete",
        "Interactive weather maps"
      ],
      role: "Frontend Developer"
    },
    {
      title: "Task Management App",
      description: "Developed a task management application with features including task creation, priority setting, due dates, and completed task tracking.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "August 2023",
      github: "https://github.com/jayesh-87/task-manager",
      liveDemo: "https://jayesh-taskmanager.herokuapp.com",
      detailedDescription: "A full-stack task management application built to help users organize their daily activities and improve productivity. The app allows users to create, categorize, and prioritize tasks, set due dates, and track completion status. Implemented with React for the frontend, Node.js for the backend, and MongoDB for data storage.",
      keyFeatures: [
        "Task categorization and filtering",
        "Priority levels and deadline notifications",
        "Progress tracking with analytics",
        "Collaborative task sharing options"
      ],
      role: "Full-stack Developer"
    },
    {
      title: "E-commerce Product Catalog",
      description: "Created a product catalog for an e-commerce platform with filtering, sorting, and search capabilities to enhance user experience.",
      technologies: ["JavaScript", "Bootstrap", "JSON"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 2023",
      github: "https://github.com/jayesh-87/ecommerce-catalog",
      liveDemo: "https://jayesh-product-catalog.netlify.app",
      detailedDescription: "A responsive product catalog interface for an e-commerce platform. This frontend-focused project demonstrates my ability to create intuitive user interfaces with filtering, sorting, and search capabilities. The application uses client-side data manipulation to provide a seamless shopping experience.",
      keyFeatures: [
        "Advanced product filtering options",
        "Dynamic search functionality",
        "Responsive grid and list views",
        "Detailed product information cards"
      ],
      role: "UI/UX Developer"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Built an interactive dashboard to visualize and analyze data sets, featuring multiple chart types and customizable views.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "November 2023",
      github: "https://github.com/jayesh-87/data-viz-dashboard",
      liveDemo: null,
      detailedDescription: "An interactive data visualization dashboard created for my data science course. The application processes large datasets and presents insights through various visualization types. Built with Python for data processing, Pandas for data manipulation, and Matplotlib/Seaborn for generating visualizations.",
      keyFeatures: [
        "Multiple visualization types (bar, line, scatter, pie)",
        "Data filtering and transformation options",
        "CSV/Excel data import functionality",
        "Export visualizations as images"
      ],
      role: "Data Analyst"
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
          <p className="mt-2 text-blue-600 flex items-center justify-center text-sm">
            <span className="animate-pulse mr-2">•</span>
            Hover over "Quick Peek" to instantly preview project details
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
                  <div className="mt-6 flex items-center justify-between">
                    <HoverCard openDelay={100} closeDelay={200}>
                      <HoverCardTrigger asChild>
                        <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium flex items-center transition-colors">
                          Quick Peek
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent 
                        className="w-96 p-0 shadow-xl border-blue-100 animate-in zoom-in-95 duration-200"
                        side="right"
                        align="start"
                        sideOffset={20}>
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={project.imageUrl} 
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-lg">{project.title}</h4>
                            <Badge variant="outline" className="font-normal">
                              {project.role}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{project.date}</span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                            {project.detailedDescription}
                          </p>
                          
                          <div className="mb-3">
                            <h5 className="text-sm font-medium mb-1.5">Key Features:</h5>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5 flex-shrink-0"></span>
                                  {feature}
                                </li>
                              ))}
                              {project.keyFeatures.length > 3 && (
                                <li className="text-blue-500 italic">+ more features</li>
                              )}
                            </ul>
                          </div>
                          
                          <div className="flex items-center gap-2 border-t pt-3">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-gray-600 hover:text-gray-900"
                            >
                              <Github className="h-3.5 w-3.5 mr-1" />
                              GitHub Repo
                            </a>
                            
                            {project.liveDemo && (
                              <a 
                                href={project.liveDemo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-gray-600 hover:text-gray-900 ml-auto"
                              >
                                <ExternalLink className="h-3.5 w-3.5 mr-1" />
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full w-9 h-9 p-0 flex items-center justify-center border-blue-100 text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200"
                    >
                      <ChevronRight className="h-4 w-4" />
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
