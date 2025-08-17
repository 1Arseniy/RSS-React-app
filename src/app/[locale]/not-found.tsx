import { Link } from '@/i18n/navigation';

import '@/styles/index.css';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('PageNotFound');
  return (
    <div className="h-[93vh] flex flex-col items-center justify-center m-auto">
      <h1 className="text-white text-3xl">{t('text')}</h1>
      <Link
        className="bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5"
        href="/"
      >
        {t('backButton')}
      </Link>
    </div>
  );
}
