'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Globe,
  Server,
  FileText,
  Monitor,
  Zap
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Work = () => {
  const t = useTranslations("work");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const projects = t.raw('projects'); // ← dynamic i18n project list

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

  if (!isVisible) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-400">{t('loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] text-white relative">
      <div className="relative z-10 text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeIn">
          {t('pageTitle')}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-12 animate-fadeIn">
          {t('pageDescription')}
        </p>
      </div>

      <div className="relative z-10 pb-20 overflow-hidden pt-8">
        <div className="flex justify-center flex-wrap gap-8 max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${project.bgColor} w-full sm:w-[calc(50%-16px)] md:w-[380px] animate-fadeIn`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-transparent transition-all duration-500 h-full">
                <div className="w-full h-48 bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                      {project.icon}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full mb-4">
                  {project.category}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-accent transition-colors duration-300"
                    >
                      {techIcons[tech.replace("#", "")]}
                      {tech.replace("#", "")}
                    </span>
                  ))}
                </div>
                {project.pdf && (
                  <div className={`w-full py-3 px-6 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105`}>
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-gray-300 rounded-lg transition-colors duration-300"
                    >
                      {t('seeReport')}
                    </a>
                  </div>
                )}
                <div className={`mt-4 flex gap-3 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {project.githublink && (
                    <a
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      {t('code')}
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('liveDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Footer */}
 {/* Combo only shown on mobile */}

 <footer className="bg-primary text-white py-6 text-center animate-fadeIn">
    <div className="mb-4 xl:hidden">
    <LanguageSwitcher />
  </div>
  <p className="text-sm md:text-base font-bold">
    {t('footer', { name: 'Imane MELIANE' })}
  </p>
</footer>

    </div>
  );
};

export default Work;