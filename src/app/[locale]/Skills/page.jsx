"use client";
import { useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone, Server, FileText, Monitor, Zap } from 'lucide-react';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["Next.js", "JavaScript", "CSS", "MySQL"],
      image: "/api/placeholder/400/250",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-pink-900/20",
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application with real-time collaboration features, task tracking, and team management. Includes desktop and web versions for cross-platform compatibility.",
      technologies: ["Python", "Tkinter", "Flask", "SQL Server"],
      image: "/api/placeholder/400/250",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      icon: <Monitor className="w-12 h-12 text-blue-400" />,
      category: "Desktop Application"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and business intelligence. Features dynamic charts, real-time data updates, and comprehensive reporting capabilities.",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
      image: "/api/placeholder/400/250",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20",
      icon: <Database className="w-12 h-12 text-emerald-400" />,
      category: "Data Visualization"
    },
    {
      id: 4,
      title: "Enterprise Resource Planning",
      description: "Comprehensive ERP system for business management including inventory, HR, finance, and reporting modules. Built with scalable architecture and secure data handling.",
      technologies: [".NET", "C", "SQL Server", "Batch"],
      image: "/api/placeholder/400/250",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
      icon: <Server className="w-12 h-12 text-orange-400" />,
      category: "Enterprise Software"
    },
    {
      id: 5,
      title: "Content Management System",
      description: "Custom CMS with drag-and-drop interface, content scheduling, and multi-user permissions. Optimized for performance and SEO with responsive design.",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
      image: "/api/placeholder/400/250",
      gradient: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-900/20 to-purple-900/20",
      icon: <FileText className="w-12 h-12 text-violet-400" />,
      category: "Content Management"
    },
    {
      id: 6,
      title: "API Integration Platform",
      description: "Microservices architecture with RESTful APIs, automated testing, and comprehensive documentation. Handles high-traffic loads with optimal response times.",
      technologies: ["Java", "Python", "Flask", "SQL Server"],
      image: "/api/placeholder/400/250",
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-900/20 to-blue-900/20",
      icon: <Zap className="w-12 h-12 text-indigo-400" />,
      category: "API Development"
    }
  ];

  const techIcons = {
    "HTML": <Code className="w-4 h-4" />,
    "CSS": <Code className="w-4 h-4" />,
    "JavaScript": <Code className="w-4 h-4" />,
    "Next.js": <Globe className="w-4 h-4" />,
    "Python": <Code className="w-4 h-4" />,
    "Tkinter": <Monitor className="w-4 h-4" />,
    "Flask": <Server className="w-4 h-4" />,
    "C": <Code className="w-4 h-4" />,
    ".NET": <Server className="w-4 h-4" />,
    "SQL Server": <Database className="w-4 h-4" />,
    "MySQL": <Database className="w-4 h-4" />,
    "Batch": <FileText className="w-4 h-4" />,
    "PHP": <Server className="w-4 h-4" />,
    "Java": <Code className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-#1e1e1e text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Showcase of my technical expertise across various technologies and platforms
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${project.bgColor}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glowing border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              {/* Main card */}
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-transparent transition-all duration-500">
                
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Category */}
                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full mb-4">
                  {project.category}
                </span>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-orange-500 transition-colors duration-300"
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105`}>
                  Review Project
                </button>

                {/* Additional buttons (shown on hover) */}
                <div className={`mt-4 flex gap-3 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-300 text-lg">
            Comprehensive skill set across multiple programming languages and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Object.entries(techIcons).map(([tech, icon], index) => (
            <div
              key={tech}
              className="group flex flex-col items-center p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300 mb-2">
                {icon}
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
       <footer className="bg-primary text-white py-6 text-center">
        <p className="text-sm md:text-base font-bold">
          © 2025 — created by <span className="text-white">Imane MELIANE</span>
        </p>
      </footer>
    </div>
  );
}

