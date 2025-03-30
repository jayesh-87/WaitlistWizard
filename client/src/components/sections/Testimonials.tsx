import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their predictive maintenance solution has reduced our equipment downtime by 37% and saved us millions in maintenance costs. Their expertise in AI and machine learning is unparalleled.",
      name: "Sarah Johnson",
      role: "CTO, Industrial Dynamics",
      avatar: "SJ"
    },
    {
      quote: "We implemented their financial analysis platform and saw a 28% improvement in investment decision accuracy. Their attention to detail and understanding of our industry needs was impressive.",
      name: "Michael Chen",
      role: "VP of Technology, Global Investments",
      avatar: "MC"
    },
    {
      quote: "The diagnostic platform developed has revolutionized our approach to medical imaging analysis. Our diagnostic accuracy has improved significantly, and the system continues to learn and improve.",
      name: "Dr. Emily Rodriguez",
      role: "Director of Innovation, Health Partners",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't take my word for it – here's what industry leaders have to say about my solutions.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-4 left-6">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <Quote className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="pt-6">
                      <p className="text-gray-600 italic">{testimonial.quote}</p>
                      <div className="mt-6 flex items-center">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-blue-100 text-blue-800">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
