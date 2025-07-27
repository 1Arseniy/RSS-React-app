import { useNavigate } from 'react-router-dom';

import type { TypeCardProps } from '@/types/types';

function Card(props: TypeCardProps) {
  const navigate = useNavigate();
  const { character, states } = props;

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

  return (
    <div
      onClick={openModal}
      className="flex flex-col bg-blue-800 w-80 h-80 m-2.5 rounded-md cursor-pointer"
    >
      <img
        className="object-cover h-52 rounded-t-md"
        src={data.image}
        alt="rick&morty"
      ></img>
      <div className="flex flex-col h-full justify-center p-2.5 text-white">
        <span>Full name: {data.name}</span>
        <span>Gender: {data.gender}</span>
        <span>Status: {data.status}</span>
      </div>
    </div>
  );
}

export default Card;
