"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const t = useTranslations("ContactPage");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const formattedMessage = `Nouveau message de contact\n------------------------\nNom : ${name}\nMessage :\n${message}\n------------------------`;

  const whatsappUrl = `https://wa.me/212670952218?text=${encodeURIComponent(
    formattedMessage
  )}`;
  const emailUrl = `mailto:imanemeliane18@gmail.com?subject=${encodeURIComponent(
    t("emailSubject")
  )}&body=${encodeURIComponent(formattedMessage)}`;

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="text-center text-lg font-medium text-white">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* Form */}
              <div className="xl:h-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-accent">{t("title")}</h3>
                  <p className="text-white/60">{t("description")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder={t("placeholderName")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="md:col-span-2"
                    />
                  </div>

                  <Textarea
                    className="h-[200px] w-full rounded-md border border-white/10 bg-primary px-4 py-3 text-base font-light placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={t("placeholderMessage")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <div className="flex gap-4 mt-6 flex-wrap">
                    {/* WhatsApp */}
                    <Button
                      asChild
                      className="bg-[#25D366] hover:bg-[#1DA851] text-black font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 flex-1"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("sendWhatsapp")}
                      </a>
                    </Button>

                    {/* Email */}
                    <Button
                      asChild
                      className="bg-[#1E1E1E] hover:bg-[#2C2C2C] text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 flex-1"
                    >
                      <a
                        href={emailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("sendEmail")}
                      </a>
                    </Button>
                  </div>
                </form>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <div className="w-full xl:w-[500px] h-full relative">
                  <Image
                    src="/assets/j-paulo-mag-0MH5Bzarqkc-unsplash.jpg"
                    alt="Contact Illustration"
                    fill
                    priority
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-primary text-white py-6 text-center">
        {/* Combo only shown on mobile */}
        <div className="mb-4 xl:hidden">
          <LanguageSwitcher />
        </div>
        <p className="text-sm md:text-base font-bold">
          {t("createdBy")} <span className="text-white">Imane MELIANE</span>
        </p>
      </footer>
    </>
  );
};

export default Contact;