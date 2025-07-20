'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const t = useTranslations('Nav');
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/^\/(en|fr)/, '') || '/';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', name: 'home' },
    { href: '/resume', name: 'resume' },
    { href: '/work', name: 'work' },
    { href: '/contact', name: 'contact' },
  ];

  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-background text-foreground">
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`capitalize transition-all hover:text-accent ${
              pathname === link.href ? 'text-accent border-b-2 border-accent' : ''
            }`}
          >
            {t(link.name)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
