import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BarChart3,
  Code2,
  Database
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Software Development",
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      description: "Development of applications and websites using modern programming languages and frameworks.",
      technologies: [
        { name: "Web Development", color: "bg-blue-100 text-blue-800" },
        { name: "Object-Oriented Programming", color: "bg-blue-100 text-blue-800" },
        { name: "Full Stack Development", color: "bg-blue-100 text-blue-800" },
        { name: "Database Management", color: "bg-blue-100 text-blue-800" },
        { name: "RESTful APIs", color: "bg-blue-100 text-blue-800" }
      ]
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6 text-green-600" />,
      description: "Learning and applying AI concepts and technologies to develop intelligent solutions.",
      technologies: [
        { name: "Machine Learning Basics", color: "bg-green-100 text-green-800" },
        { name: "Natural Language Processing", color: "bg-green-100 text-green-800" },
        { name: "Neural Networks", color: "bg-green-100 text-green-800" },
        { name: "AI Applications", color: "bg-green-100 text-green-800" },
        { name: "Computer Vision", color: "bg-green-100 text-green-800" }
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="h-6 w-6 text-purple-600" />,
      description: "Analysis and interpretation of complex data sets to extract valuable insights and inform decision-making.",
      technologies: [
        { name: "Data Analysis", color: "bg-purple-100 text-purple-800" },
        { name: "Data Visualization", color: "bg-purple-100 text-purple-800" },
        { name: "Statistical Analysis", color: "bg-purple-100 text-purple-800" },
        { name: "Data Processing", color: "bg-purple-100 text-purple-800" },
        { name: "Predictive Modeling", color: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      title: "Academic Projects",
      icon: <BarChart3 className="h-6 w-6 text-amber-600" />,
      description: "Applying classroom knowledge to real-world problems through academic and personal projects.",
      technologies: [
        { name: "Research", color: "bg-amber-100 text-amber-800" },
        { name: "Project Management", color: "bg-amber-100 text-amber-800" },
        { name: "Documentation", color: "bg-amber-100 text-amber-800" },
        { name: "Teamwork", color: "bg-amber-100 text-amber-800" },
        { name: "Problem Solving", color: "bg-amber-100 text-amber-800" }
      ]
    }
  ];

  const programmingLanguages = [
    "Java", "Python", "JavaScript", "HTML", "CSS", "SQL"
  ];
  
  const frameworksAndTools = [
    "Git", "VS Code", "Eclipse", "PyCharm", "React", "Node.js",
    "Bootstrap", "Tailwind CSS", "MongoDB", "MySQL", "Jupyter Notebook"
  ];
  
  const softSkills = [
    "Communication", "Teamwork", "Problem-Solving", "Critical Thinking", 
    "Time Management", "Adaptability", "Creativity", "Attention to Detail"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            As a student, I'm developing a diverse set of technical and soft skills to prepare for a career in technology.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
                          {skill.icon}
                        </div>
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-900">{skill.title}</h3>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600">{skill.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge key={tech.name} className={tech.color}>
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {programmingLanguages.map((lang, index) => (
              <motion.div 
                key={lang}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.03), duration: 0.3 }}
              >
                <Badge variant="outline" className="text-sm py-1.5 px-3 bg-white border-gray-300 border-2 shadow-sm">
                  {lang}
                </Badge>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frameworks & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {frameworksAndTools.map((tool, index) => (
              <motion.div 
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.03), duration: 0.3 }}
              >
                <Badge variant="outline" className="text-sm py-1.5 px-3 bg-white border-gray-300">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.03), duration: 0.3 }}
              >
                <Badge variant="outline" className="text-sm py-1.5 px-3 bg-white border-blue-200 border-2 bg-blue-50">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
