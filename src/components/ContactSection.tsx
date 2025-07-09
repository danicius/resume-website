import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "daniellealvarez@ufl.edu",
      href: "mailto:daniellealvarez@ufl.edu",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "347-835-8144",
      href: "tel:347-835-8144",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/danielle-alvarez2000",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/danicius",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 gradient-orange-blue relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover-gradient-scale">
                  <CardContent className="p-6 text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {method.title}
                    </h3>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {method.value}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-gradient-scale"
          >
            <a
              href="mailto:daniellealvarez@ufl.edu"
              className="inline-flex items-center"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
