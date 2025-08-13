'use client';

import useTheme from '@/hooks/useTheme';
import '@/styles/index.css';

import { useTranslations } from 'next-intl';

function AboutView() {
  const { darkTheme } = useTheme();
  const t = useTranslations('AboutView');
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div
        className={`${darkTheme ? 'bg-blue-800' : 'bg-blue-400'} flex flex-col w-80 text-center text-2xl rounded-md p-6`}
      >
        <span className="mb-3">{t('description')}</span>
        <a href="https://rs.school/courses/reactjs" className="text-blue-500">
          {t('link')}
        </a>
      </div>
    </div>
  );
}

export default AboutView;
