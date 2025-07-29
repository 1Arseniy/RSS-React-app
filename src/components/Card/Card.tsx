import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/useStore';

import {
  addToSelectedCharacters,
  removeFromSelectedCharacters,
} from '@/store/characterSlice';

import type { TypeCardProps } from '@/types/types';

import useTheme from '@/hooks/useTheme';
import { useState } from 'react';

function Card(props: TypeCardProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(true);
  const { darkTheme } = useTheme();
  const { character, states } = props;
  const disapatch = useAppDispatch();

  const cardTemplate = {
    id: 1,
    gender: 'empty',
    image: 'empty',
    name: 'empty',
    status: 'empty',
  };
  const data = character || cardTemplate;

  const openModal = () => {
    navigate(`details/${data.id}?page=${states.page}`);
  };

  const toggleCard = () => {
    setSelected((prev) => !prev);
    if (selected) {
      disapatch(addToSelectedCharacters(data));
    } else {
      disapatch(removeFromSelectedCharacters(data.id));
    }
  };

  return (
    <div
      className={`${darkTheme ? 'bg-blue-800 text-white' : 'bg-blue-600 text-black'} flex flex-col w-80 h-80 m-2.5 rounded-md`}
    >
      <img
        onClick={openModal}
        className="object-cover h-52 rounded-t-md cursor-pointer"
        src={data.image}
        alt="rick&morty"
      ></img>
      <div className="flex">
        <div className="grow-[3] flex flex-col h-full justify-center p-2.5">
          <span>Full name: {data.name}</span>
          <span>Gender: {data.gender}</span>
          <span>Status: {data.status}</span>
        </div>
        <form className="flex grow-[2]">
          <input
            onClick={toggleCard}
            type="checkbox"
            className="w-5 accent-blue-700"
          />
        </form>
      </div>
    </div>
  );
}

export default Card;
