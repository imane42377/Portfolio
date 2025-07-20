"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTranslations } from 'next-intl';
import NAV from "./Nav";
import MobileNav from "./ui/MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    const t = useTranslations('Nav');
  return ( 
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Imane<span className="text-accent">.</span>
          </h1>
        </Link>
        
        {/* Desktop nav + hire button */}
        <div className="hidden xl:flex items-center gap-8">
            <LanguageSwitcher />
          <NAV /> 
          <Link href="../contact">
            <Button>{t('hireMe')}</Button>
          </Link>
        
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div> 
    </header>
  );  
};

export default Header;
