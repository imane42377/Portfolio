"use client";

import {
  FaHtml5, FaCss3, FaJs, FaFigma, FaPhp, FaJava, FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiC, SiFlask, SiTailwindcss } from "react-icons/si";
import { MdStorage } from "react-icons/md";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const techIcons = {
  HTML: <FaHtml5 className="w-16 h-16 text-orange-500" />,
  CSS: <FaCss3 className="w-16 h-16 text-blue-500" />,
  JavaScript: <FaJs className="w-16 h-16 text-yellow-400" />,
  "Next.js": <SiNextdotjs className="w-16 h-16 text-white" />,
  Figma: <FaFigma className="w-16 h-16 text-pink-500" />,
  PHP: <FaPhp className="w-16 h-16 text-indigo-400" />,
  Java: <FaJava className="w-16 h-16 text-red-500" />,
  C: <SiC className="w-16 h-16 text-blue-300" />,
  Python: <FaPython className="w-16 h-16 text-yellow-500" />,
  Tkinter: <FaPython className="w-16 h-16 text-white" />,
  Flask: <SiFlask className="w-16 h-16 text-gray-400" />,
  "MySQL Workbench": <SiMysql className="w-16 h-16 text-blue-400" />,
  "SQL Server": <MdStorage className="w-16 h-16 text-red-600" />,
  Tailwind: <SiTailwindcss className="w-16 h-16 text-sky-400" />,
};

const Resume = () => {
  const t = useTranslations("Resume");
  const messages = useMessages().Resume;

  const experience = messages.experience;
  const education = messages.education;
  const about = messages.about;
  const skills = messages.skills;

  return (
    <>
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{experience.title}</TabsTrigger>
            <TabsTrigger value="education">{education.title}</TabsTrigger>
            <TabsTrigger value="skills">{skills.title}</TabsTrigger>
            <TabsTrigger value="about">{about.title}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience">
              <Section
                title={experience.title}
                description={experience.Description}
                items={experience.items}
                type="experience"
              />
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <Section
                title={education.title}
                description={education.Description}
                fillier={education.fillier}
                items={education.items}
                type="education"
              />
            </TabsContent>


              {/* Skills */}
              <TabsContent value="skills">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                      {Object.entries(techIcons).map(([tech, icon]) => (
                        <div
                          key={tech}
                          className="group flex flex-col items-center p-4 bg-[#232329] rounded-xl border border-transparent hover:border-accent transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                          <div className="text-accent mb-2">{icon}</div>
                          <span className="text-sm text-white/60 group-hover:text-white">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* About */}
              <TabsContent value="about">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60 font-semibold">{item.fieldName}:</span>
                        <span className="text-xl">{item.fielddValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>

            {/* Footer */}
     <footer className="bg-primary text-white py-6 text-center">
       {/* Combo only shown on mobile */}
       <div className="mb-4 xl:hidden">
         <LanguageSwitcher />
       </div>
       <p className="text-sm md:text-base font-bold">
        {t('createdBy')} <span className="text-white">Imane MELIANE</span>
       </p>
     </footer>
    </>
  );
};

const Section = ({ title, description, fillier, items, type }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{fillier}</p>

   <div className="max-h-[480px] overflow-y-auto pr-2 scrollbar">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
          >
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mt-2">
              {type === "experience" ? item.position : item.institution}
            </h3>
            <div className="flex items-center gap-3 mt-4">
              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
              <p className="text-white/60">
                {type === "experience" ? item.company : item.degree}

              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Resume;
