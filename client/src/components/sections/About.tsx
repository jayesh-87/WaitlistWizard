import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  PieChart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experienceAreas = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Artificial Intelligence",
      description: "Developing advanced AI systems that solve complex problems through machine learning and deep learning approaches."
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Data Science",
      description: "Extracting insights from data using statistical methods, predictive modeling, and data visualization techniques."
    },
    {
      icon: <PieChart className="h-6 w-6 text-purple-600" />,
      title: "Machine Learning",
      description: "Building models that learn from data to make predictions, recommendations, and automated decisions."
    },
    {
      icon: <Code className="h-6 w-6 text-amber-600" />,
      title: "Software Development",
      description: "Creating robust, scalable applications with modern technologies and best practices in software engineering."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            I'm a passionate expert dedicated to creating innovative solutions through technology.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Background</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I am currently pursuing a B.Tech in Information Technology (expected graduation 2026) from MGM University. I am passionate about applying technology to solve real-world problems and continuously expanding my skills through practical implementation and learning.
                  </p>
                  <p>
                    My education is giving me a strong foundation in software development, data structures, algorithms, and modern programming paradigms. I have been focusing on building my expertise in areas like AI, machine learning, and data science through coursework, projects, and self-study.
                  </p>
                  <p>
                    My approach combines technical knowledge with creative problem-solving, aiming to create solutions that are innovative, efficient, and deliver real value to users and organizations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>B.Tech in Information Technology (2026)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>MGM University Student</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Tech Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Problem Solver</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Continuous Learner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Aspiring Developer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Areas of Expertise</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {experienceAreas.map((area, index) => (
              <motion.div 
                key={area.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
