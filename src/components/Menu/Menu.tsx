'use client';

import { Link } from '@/i18n/navigation';

import { MdWbSunny } from 'react-icons/md';
import { IoMoon } from 'react-icons/io5';

import useTheme from '@/hooks/useTheme';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

function Menu({ children }: { children: React.ReactNode }) {
  const { darkTheme, toggleTheme } = useTheme();
  const t = useTranslations('HomeView');
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <div
      className={`min-h-screen ${darkTheme ? 'bg-blue-950 text-white' : 'bg-blue-300 text-black'}`}
    >
      <nav className="flex justify-between items-center mt-2.5">
        <div>
          <Link
            className={`px-7 rounded-sm py-2 cursor-pointer ${
              darkTheme
                ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
                : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
            }`}
            href="/"
          >
            {t('Menu.homeLink')}
          </Link>
          <Link
            className={`px-7 rounded-sm py-2 cursor-pointer m-5 ${
              darkTheme
                ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
                : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
            }`}
            href="/about"
          >
            {t('Menu.aboutLink')}
          </Link>
        </div>
        <div className="mr-5 flex items-center">
          {darkTheme ? (
            <IoMoon
              className="h-8 w-8 cursor-pointer mr-1.5"
              onClick={toggleTheme}
            />
          ) : (
            <MdWbSunny
              className="h-8 w-8 cursor-pointer text-blue-600 mr-1.5"
              onClick={toggleTheme}
            />
          )}
          <Link
            className="ml-1"
            href={pathname}
            locale={locale === 'en' ? 'ru' : 'en'}
          >
            {t('Menu.language')}
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Menu;
