import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const achievements = [
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Led development teams and managed 1,000+ user applications",
      color: "border-orange-500",
    },
    {
      icon: Trophy,
      title: "Problem Solving",
      description: "Resolved 20+ daily technical issues across diverse platforms",
      color: "border-blue-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "1st place winner in XR/AR category at UF WiNG Hacks",
      color: "border-orange-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-orange-blue-text">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Computer Science graduate with a passion for innovation and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Education & Expertise
            </h3>
            <Card className="shadow-lg border border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-orange-blue p-3 rounded-lg">
                    <GraduationCap className="text-white text-xl" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">
                      University of Florida
                    </h4>
                    <p className="text-orange-600 font-medium">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-gray-600 text-sm">
                      Certificate in Artificial Intelligence
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      August 2021 - December 2024
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    <strong>Relevant Coursework:</strong> Operating Systems (Linux),
                    Computer Networking, Computer Security, Information and Database
                    Systems, Software Engineering, Data Structures & Algorithms
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Leadership & Innovation
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`shadow-md border-l-4 ${achievement.color} hover-gradient-scale`}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Icon className="text-gray-600 mt-1" size={20} />
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {achievement.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
