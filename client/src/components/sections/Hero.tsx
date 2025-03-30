import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Innovating with AI,</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mt-2">
                ML & Data Science
              </span>
            </h1>
            <motion.p 
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I build intelligent systems and applications that help businesses solve complex problems and drive growth. Specializing in artificial intelligence, machine learning, and data science.
            </motion.p>
            <motion.div 
              className="mt-10 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToAbout}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="relative h-64 sm:h-72 md:h-80 lg:h-96"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            <div className="p-6 flex flex-col items-center">
              <svg className="w-full max-w-3xl" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <circle cx="300" cy="300" r="120" fill="url(#gradient1)" opacity="0.7" />
                <circle cx="900" cy="300" r="120" fill="url(#gradient2)" opacity="0.7" />
                <path d="M300,300 Q600,150 900,300" stroke="#3B82F6" strokeWidth="5" fill="none" />
                <path d="M300,300 Q600,450 900,300" stroke="#8B5CF6" strokeWidth="5" fill="none" />
                <g transform="translate(385, 250)">
                  <rect x="0" y="0" width="430" height="100" rx="10" fill="white" opacity="0.9" />
                  <text x="215" y="40" fontFamily="Arial" fontSize="20" fill="#3B82F6" textAnchor="middle">AI & Machine Learning</text>
                  <text x="215" y="70" fontFamily="Arial" fontSize="16" fill="#4B5563" textAnchor="middle">Building intelligent systems that learn and adapt</text>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white pointer-events-none"></div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full"
        >
          <ArrowDown className="h-6 w-6 text-blue-600" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
