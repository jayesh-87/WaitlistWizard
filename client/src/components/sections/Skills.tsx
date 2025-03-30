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
      title: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      description: "Development of advanced AI systems that can understand, learn, and adapt to complex environments.",
      technologies: [
        { name: "Neural Networks", color: "bg-blue-100 text-blue-800" },
        { name: "Deep Learning", color: "bg-blue-100 text-blue-800" },
        { name: "NLP", color: "bg-blue-100 text-blue-800" },
        { name: "Computer Vision", color: "bg-blue-100 text-blue-800" },
        { name: "Reinforcement Learning", color: "bg-blue-100 text-blue-800" }
      ]
    },
    {
      title: "Machine Learning",
      icon: <BarChart3 className="h-6 w-6 text-green-600" />,
      description: "Implementation of machine learning solutions that enable systems to automatically learn and improve from experience.",
      technologies: [
        { name: "Supervised Learning", color: "bg-green-100 text-green-800" },
        { name: "Unsupervised Learning", color: "bg-green-100 text-green-800" },
        { name: "Reinforcement Learning", color: "bg-green-100 text-green-800" },
        { name: "Model Deployment", color: "bg-green-100 text-green-800" },
        { name: "Feature Engineering", color: "bg-green-100 text-green-800" }
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="h-6 w-6 text-purple-600" />,
      description: "Extraction of insights from structured and unstructured data to inform decision-making and strategic business initiatives.",
      technologies: [
        { name: "Big Data", color: "bg-purple-100 text-purple-800" },
        { name: "Data Mining", color: "bg-purple-100 text-purple-800" },
        { name: "Predictive Analytics", color: "bg-purple-100 text-purple-800" },
        { name: "Data Visualization", color: "bg-purple-100 text-purple-800" },
        { name: "Statistical Analysis", color: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      title: "Software Development",
      icon: <Code2 className="h-6 w-6 text-amber-600" />,
      description: "Building robust, scalable applications and systems that integrate seamlessly with existing infrastructure.",
      technologies: [
        { name: "Web Applications", color: "bg-amber-100 text-amber-800" },
        { name: "Mobile Apps", color: "bg-amber-100 text-amber-800" },
        { name: "API Development", color: "bg-amber-100 text-amber-800" },
        { name: "Cloud Services", color: "bg-amber-100 text-amber-800" },
        { name: "DevOps", color: "bg-amber-100 text-amber-800" }
      ]
    }
  ];

  const frameworksAndTools = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "R", "Java", "JavaScript", "TypeScript", "React", "Node.js",
    "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Git",
    "SQL", "NoSQL", "MongoDB", "PostgreSQL", "Hadoop", "Spark"
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
            I combine multiple disciplines to create comprehensive solutions for complex problems.
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
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frameworks & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
