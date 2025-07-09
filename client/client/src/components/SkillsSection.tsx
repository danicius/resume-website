import { motion } from "framer-motion";
import { Code, Layers, Wrench, Server, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      gradient: "from-orange-500 to-orange-400",
      bgColor: "from-orange-50 to-orange-100",
      skills: ["Java", "Python", "C/C++", "HTML/CSS", "Swift", "TypeScript"],
    },
    {
      title: "Frameworks",
      icon: Layers,
      gradient: "from-blue-500 to-blue-400",
      bgColor: "from-blue-50 to-blue-100",
      skills: ["React", "Node.js", "Flask", "Tailwind"],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      skills: ["Git", "VS Code", "Visual Studio", "IntelliJ", "Xcode", "Figma"],
    },
    {
      title: "Systems",
      icon: Server,
      gradient: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      skills: ["MariaDB", "SQLite", "Windows", "Linux", "MacOS", "iOS"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-orange-blue-text">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across multiple technologies and development stacks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${category.bgColor} p-6 rounded-2xl hover-gradient-scale`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className={`bg-gradient-to-r ${category.gradient} p-3 rounded-lg mr-4`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="bg-white px-3 py-2 rounded-lg text-gray-700 font-medium shadow-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gradient-orange-blue p-6 rounded-2xl text-white shadow-lg hover-gradient-scale">
            <Award className="mr-4" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Microsoft Certified</h3>
              <p className="text-white/90">Azure AI Fundamentals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
