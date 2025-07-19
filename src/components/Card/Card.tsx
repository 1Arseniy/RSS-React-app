import type { typeCharacter } from '@/types/types';

function Card(props: { character?: typeCharacter }) {
  const cardTemplate = {
    gender: 'empty',
    image: 'empty',
    name: 'empty',
    status: 'empty',
  };

  const data = props.character ? props.character : cardTemplate;

  return (
    <div className="flex flex-col bg-blue-800 w-80 h-80 m-2.5 rounded-md">
      <img
        className="object-cover h-52 rounded-t-md"
        src={data.image}
        alt="rick&morty"
        data-testid="img"
      ></img>
      <div className="flex flex-col h-full justify-center p-2.5 text-white">
        <span data-testid="full-name">Full name: {data.name}</span>
        <span data-testid="gender">Gender: {data.gender}</span>
        <span data-testid="status">Status: {data.status}</span>
      </div>
    </div>
  );
}

export default Card;
