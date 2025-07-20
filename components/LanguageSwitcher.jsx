'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (e) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');

    if (segments[1] === 'en' || segments[1] === 'fr') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <select
      value={locale}
      onChange={onSelectChange}
      className="bg-gray-800 text-accent p-2 rounded"
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}
