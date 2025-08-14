'use client';

import { clearAllItems } from '@/store/characterSlice';

import downloadFile from '@/utils/downloadFile';

import Button from '../Button/Button';

import useTheme from '@/hooks/useTheme';

import { useAppDispatch, useAppSelector } from '@/store';

import { useTranslations } from 'next-intl';

function Flyout() {
  const selectedCards = useAppSelector(
    (state) => state.selectedCharacters.results
  );
  const dispatch = useAppDispatch();
  const { darkTheme } = useTheme();
  const link = downloadFile(
    selectedCards.map((el) => [el.name, el.gender, el.status, el.image])
  );
  const t = useTranslations('HomeView');

  return (
    !!selectedCards.length && (
      <div
        className={`${darkTheme ? 'bg-blue-900' : 'bg-blue-600'} flex justify-center items-center rounded-t-2xl flyout`}
      >
        <span className="text-2xl">
          {t('Main.Flyout.selectedItems')}: {selectedCards.length}
        </span>
        <Button onClick={() => dispatch(clearAllItems())}>
          {t('Main.Flyout.unselectButton')}
        </Button>
        <a
          className={`px-7 rounded-sm py-2 cursor-pointer m-5 ${
            darkTheme
              ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
              : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
          }`}
          data-testid="link"
          download={`${selectedCards.length}_items.csv`}
          href={link}
        >
          {t('Main.Flyout.downloadButton')}
        </a>
      </div>
    )
  );
}

export default Flyout;
