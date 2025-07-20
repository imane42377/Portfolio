'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useTranslations } from 'next-intl';

const links = [
  { name: 'home', path: '/' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const t = useTranslations('Nav');
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/^\/(en|fr)/, '') || '/';

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Imane MELIANE<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`text-xl capitalize transition-all hover:text-accent ${
                pathname === link.path ? 'text-accent border-b-2 border-accent' : ''
              }`}
            >
              {t(link.name)}
            </Link>
          ))}
        </nav>
      </SheetContent>
      
    </Sheet>
  );
};

export default MobileNav;
