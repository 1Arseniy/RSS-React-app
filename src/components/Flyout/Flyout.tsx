'use client';

import { clearAllItems } from '@/store/characterSlice';

import Button from '../Button/Button';

import useTheme from '@/hooks/useTheme';

import { useAppDispatch, useAppSelector } from '@/store';

import { useTranslations } from 'next-intl';
import { useRef } from 'react';

function Flyout() {
  const t = useTranslations('HomeView');
  const link = useRef<HTMLAnchorElement>(null);
  const selectedCards = useAppSelector(
    (state) => state.selectedCharacters.results
  );
  const dispatch = useAppDispatch();
  const { darkTheme } = useTheme();

  const createFile = async () => {
    const response = await fetch('utils/', {
      method: 'POST',
      body: JSON.stringify({ result: selectedCards }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const blob = await response.blob();
      if (link.current) {
        const url = URL.createObjectURL(blob);
        link.current.href = url;
        link.current.download = `${selectedCards.length}_items.csv`;
        link.current.click();
      }
    } else {
      console.log('error');
    }
  };

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
        <Button onClick={createFile}>{t('Main.Flyout.downloadButton')}</Button>
        <a
          ref={link}
          className="hidden"
          download={`${selectedCards.length}_items.csv`}
        ></a>
      </div>
    )
  );
}

export default Flyout;
