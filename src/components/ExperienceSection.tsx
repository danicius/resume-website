import { motion } from "framer-motion";
import { Laptop, Settings, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Application Developer Intern",
      company: "L3Harris Technologies",
      duration: "May 2023 – July 2024",
      location: "Remote",
      icon: Laptop,
      gradient: "from-orange-500 to-blue-500",
      responsibilities: [
        "Collaborated with product management team to define and track KPIs for the Mission One project, aligning development efforts with business goals",
        "Redesigned website interfaces in collaboration with the UX/UI team, conducted interviews with 5+ employees, and implemented new designs using CSS",
        "Presented ABAP development impact and Fiori tile organization to CIO and stakeholders, improving workflows by 30%",
      ],
    },
    {
      title: "Information Technology Supervisor",
      company: "University of Florida",
      duration: "Sep. 2021 – Present",
      location: "Gainesville, FL",
      icon: Settings,
      gradient: "from-blue-500 to-orange-500",
      responsibilities: [
        "Researched and implemented solutions by troubleshooting for 20+ daily technical issues across VPN, Wi-Fi, Duo MFA, Canvas LMS, VMWare virtualization software, and Microsoft Platforms",
        "Managed daily operations by overseeing a team of 10+ employees, while communicating with clients, resolving ticket issues and upheld information security practices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-orange-blue-text">
            Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional journey in software development and technology leadership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 gradient-orange-blue"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${experience.gradient} rounded-full flex items-center justify-center relative z-10`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <Card className="flex-1 bg-gray-50 shadow-lg hover-gradient-scale">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {experience.title}
                          </h3>
                          <p className="text-orange-600 font-medium">
                            {experience.company}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {experience.location}
                          </p>
                        </div>
                        <div className="text-gray-500 text-sm flex items-center mt-2 md:mt-0">
                          <Calendar className="mr-1" size={16} />
                          {experience.duration}
                        </div>
                      </div>
                      <div className="space-y-3">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                            <p className="text-gray-600">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
