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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md py-4 xl:py-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold text-white">
            Imane<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav + hire button */}
        <div className="hidden xl:flex items-center gap-6">
          <LanguageSwitcher />
          <NAV />
          <Link href="/contact">
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
