import { motion } from "framer-motion";
import { Flag, Smartphone, Gamepad2, Database, Github, ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "FlagIt",
      subtitle: "Full-Stack Web Application",
      description: "Technical lead/project manager for a frontend and backend web app serving 1,000+ users, applying agile principles with responsive design using Tailwind CSS.",
      duration: "June 2024 – Present",
      icon: Flag,
      gradient: "from-orange-500 to-orange-400",
      badgeColor: "bg-orange-100 text-orange-600",
      linkColor: "text-orange-600 hover:text-orange-500",
      technologies: ["Python", "Flask", "HTMX", "Tailwind", "SQLite", "Peewee", "Ludic"],
      links: [
        { type: "github", url: "#", icon: Github },
        { type: "demo", url: "#", icon: ExternalLink },
      ],
    },
    {
      title: "VisionVideoRoulette",
      subtitle: "VR/AR Application - 1st Place Winner",
      description: "Led team to 1st place in XR/AR Category at UF WiNG Hacks. Engineered a YouTube-like app for Apple Vision Pro with gesture controls and spatial audio.",
      duration: "April 2024",
      icon: Smartphone,
      gradient: "from-blue-500 to-blue-400",
      badgeColor: "bg-blue-100 text-blue-600",
      linkColor: "text-blue-600 hover:text-blue-500",
      technologies: ["VisionOS", "Swift", "WebKit", "SwiftUI", "Git"],
      links: [
        { type: "github", url: "#", icon: Github },
        { type: "demo", url: "#", icon: Play },
      ],
    },
    {
      title: "Glacier Game Engine",
      subtitle: "Custom Game Engine with Editor",
      description: "Developed user interface for a custom game engine using Dear ImGui, with interactive windows and controls for manipulating 3D objects and game logic.",
      duration: "October 2024 – December 2024",
      icon: Gamepad2,
      gradient: "from-purple-500 to-pink-500",
      badgeColor: "bg-purple-100 text-purple-600",
      linkColor: "text-purple-600 hover:text-purple-500",
      technologies: ["C++", "OpenGL", "Dear ImGui"],
      links: [
        { type: "github", url: "#", icon: Github },
      ],
    },
    {
      title: "Travel Agency Database",
      subtitle: "Relational Database System",
      description: "Designed and implemented a relational database system with 8 interconnected tables managing travel bookings, customer data, and trip information.",
      duration: "November 2024",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      badgeColor: "bg-green-100 text-green-600",
      linkColor: "text-green-600 hover:text-green-500",
      technologies: ["SQL", "Database Design", "Data Integrity"],
      links: [
        { type: "github", url: "#", icon: Github },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-orange-blue-text">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions showcasing technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-xl overflow-hidden hover-gradient-scale">
                  <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/80">{project.subtitle}</p>
                      </div>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className={`${project.badgeColor} font-medium`}
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.links.map((link, idx) => {
                        const LinkIcon = link.icon;
                        return (
                          <Button
                            key={idx}
                            variant="ghost"
                            size="sm"
                            className={`${project.linkColor} p-2`}
                            asChild
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} ${link.type}`}
                            >
                              <LinkIcon size={20} />
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
