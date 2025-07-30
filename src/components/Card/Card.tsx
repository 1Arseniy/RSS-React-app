import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';

import {
  addToSelectedCharacters,
  removeFromSelectedCharacters,
} from '@/store/characterSlice';

import type { TypeCardProps } from '@/types/types';

import useTheme from '@/hooks/useTheme';

function Card(props: TypeCardProps) {
  const navigate = useNavigate();
  const { darkTheme } = useTheme();
  const { character, states } = props;
  const disapatch = useAppDispatch();

  const checked = useAppSelector((state) => {
    if (character) {
      return state.selectedCharacters.results.some(
        (item) => item.id === character.id
      );
    }
  });

  const openModal = () => {
    if (character) {
      navigate(`details/${character.id}?page=${states.page}`);
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
      className={`${darkTheme ? 'bg-blue-800 text-white' : 'bg-blue-600 text-black'} flex flex-col w-80 h-80 m-2.5 rounded-md`}
    >
      <img
        onClick={openModal}
        className="object-cover h-52 rounded-t-md cursor-pointer"
        src={character ? character.image : 'empty'}
        alt="rick&morty"
      ></img>
      <div className="flex">
        <div className="grow-[3] flex flex-col h-full justify-center p-2.5">
          <span>Full name: {character ? character.name : 'empty'}</span>
          <span>Gender: {character ? character.gender : 'empty'}</span>
          <span>Status: {character ? character.status : 'empty'}</span>
        </div>
        <form className="flex grow-[2]">
          <input
            onChange={toggleCard}
            type="checkbox"
            className="w-5 accent-blue-700"
            checked={checked}
          />
        </form>
      </div>
    </div>
  );
}

export default Card;
