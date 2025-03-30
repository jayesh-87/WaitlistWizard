import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";

const Education = () => {
  const educationData = {
    degree: "B.Tech in Information Technology",
    university: "MGM University",
    location: "Maharashtra, India",
    duration: "2022 - 2026 (Expected)",
    description: "Pursuing a comprehensive Bachelor's degree in Information Technology with focus on software development, data structures, algorithms, and modern programming paradigms.",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development",
      "Computer Networks",
      "Operating Systems"
    ],
    achievements: [
      "Active member of the university's coding club",
      "Participant in programming competitions",
      "Regular participant in technical workshops and seminars"
    ]
  };

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-2 border-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{educationData.degree}</h3>
                  <p className="text-lg text-gray-600">{educationData.university}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span>{educationData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600">{educationData.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.courses.map(course => (
                    <Badge key={course} className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                  Academic Achievements
                </h4>
                <ul className="space-y-2">
                  {educationData.achievements.map(achievement => (
                    <li key={achievement} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;