"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher"; 


const Home = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-screen flex flex-col"
      >
        {/* Main Content */}
        <section className="flex-grow">
          <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              {/* Text Block */}
              <div className="w-full xl:w-1/2 text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">{t('softwareDeveloper')}</span>
                <h1 className="h1 mb-6">
                  {t('helloIm')} <br />
                  <span className="text-accent">{t('name')}</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0">
                  {t('description')}
                </p>

                {/* Button and Socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <a

                    href="/meliane-imane-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="uppercase flex items-center gap-2"
                    >
                      <span>{t('downloadCV')}</span>
                      <FiDownload className="text-xl" />
                    </Button>
                  </a>
                  <div className="mb-8 xl:mb-0">
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Photo Block */}
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo />
              </div>
            </div>
          </div>
        </section>

       {/* Footer */}
<footer className="bg-primary text-white py-6 text-center">
  {/* Combo only shown on mobile */}
  <div className="mb-4 xl:hidden">
    <LanguageSwitcher />
  </div>
  <p className="text-sm md:text-base font-bold">
    © 2025 — {t('createdBy')} <span className="text-white">Imane MELIANE</span>
  </p>
</footer>

      </motion.div>
    </>
  );
};

export default Home;
