import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import headshotImage from "@/assets/daniellepic.jpg"; // Adjust the path as necessary

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-orange-blue relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full floating-animation-delayed"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-white/10 rounded-full floating-animation-delayed-2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={headshotImage}
            alt="Danielle Alvarez Professional Headshot"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white/30 shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Danielle Alvarez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-6 text-white/90"
        >
          Software Developer & Computer Science Graduate
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg mb-8 max-w-2xl mx-auto text-white/80"
        >
          Passionate about creating innovative solutions with expertise in full-stack development,
          AI applications, and cutting-edge technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection("#projects")}
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-gradient-scale"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="outline"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover-gradient-scale"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
