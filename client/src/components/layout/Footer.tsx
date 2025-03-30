import { Link } from "wouter";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="ml-2 text-xl font-bold">Jayesh Solanke</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Transforming ideas into reality through innovative AI, machine learning, and data science solutions. My expertise helps organizations make better decisions and achieve their goals.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:jayeshsolanke47@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Expertise</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white transition-colors">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white transition-colors">
                  Software Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-base text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Jayesh Solanke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
