'use client';

// import { useNavigate } from 'react-router-dom';

import {
  addToSelectedCharacters,
  removeFromSelectedCharacters,
} from '@/store/characterSlice';

// import { useAppDispatch, useAppSelector } from '@/store';

import type { TypePropsCard } from '@/types/types';

import useTheme from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
// import { usePathname } from '@/i18n/navigation';

function Card(props: TypePropsCard) {
  const route = useRouter();
  const { darkTheme } = useTheme();
  const { character, page } = props;
  const disapatch = useAppDispatch();
  const pathname = usePathname();
  const t = useTranslations('HomeView');

  const checked = useAppSelector((state) => {
    if (character) {
      return state.selectedCharacters.results.some(
        (item) => item.id === character.id
      );
    }
  });

  const openModal = () => {
    if (character) {
      // route.push(`/details/${character.id}?page=${page}`);
      // route.push(`?page=${page}&details=${character.id}`);)
      route.push(`${pathname}?page=${page}&details=${character.id}`);
      // route.push(`${pathname}/details/${character.id}?page=${page}`);
    }
  };

  const toggleCard = () => {
    if (character) {
      if (checked) {
        disapatch(removeFromSelectedCharacters(character.id));
      } else {
        disapatch(addToSelectedCharacters(character));
      }
    }
  };

  return (
    <div
      onClick={openModal}
      className={`${darkTheme ? 'bg-blue-800 text-white' : 'bg-blue-600 text-black'} flex flex-col w-80 h-80 m-2.5 rounded-md cursor-pointer`}
    >
      <Image
        width={320}
        height={208}
        priority={true}
        className="object-cover h-52 rounded-t-md"
        src={character ? character.image : 'empty'}
        alt="rick&morty"
      />
      <div className="flex flex-col h-full justify-center p-2.5">
        <span>
          {t('Main.Card.fullName')}: {character ? character.name : 'empty'}
        </span>
        <span>
          {t('Main.Card.gender')}: {character ? character.gender : 'empty'}
        </span>
        <span>
          {t('Main.Card.status')}: {character ? character.status : 'empty'}
        </span>
        <div className="flex items-center justify-between">
          <span>{t('Main.Card.favorute')}:</span>
          <input
            onClick={(e) => e.stopPropagation()}
            onChange={toggleCard}
            type="checkbox"
            className="w-5 h-6 accent-blue-200 mr-2.5"
            checked={checked}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
