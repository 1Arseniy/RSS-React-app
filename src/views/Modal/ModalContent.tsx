import { useNavigate } from 'react-router-dom';

import { LuLoaderCircle } from 'react-icons/lu';

import { Button } from '@/components';

import type { typeModalStates } from '@/types/types';

import useTheme from '@/hooks/useTheme';

interface typeModalContent {
  modalStates: typeModalStates;
}

function ModalContent(props: typeModalContent) {
  const { loading, character } = props.modalStates;
  const navigate = useNavigate();
  const { darkTheme } = useTheme();

  const closeModal = () => {
    navigate(`/`);
  };

  return (
    <>
      <div onClick={closeModal} className="h-full w-full fixed top-0"></div>
      <div className="absolute right-0 h-screen">
        <div
          className={`${darkTheme ? 'bg-blue-900 text-white' : 'bg-blue-600 text-black'}  fixed h-screen z-10  inset-y-0 right-0  w-80 flex flex-col justify-center items-center `}
        >
          <div className="h-full w-full absolute flex items-start justify-end">
            <Button onClick={closeModal}>Close</Button>
          </div>
          {loading ? (
            <LuLoaderCircle
              data-testid="loader"
              className="size-24 animate-spin"
            />
          ) : (
            <>
              <img
                className="object-cover h-52"
                src={character.image}
                alt="rick&morty"
                data-testid="img"
              ></img>
              <div className="flex flex-col justify-center p-2.5">
                <span>Full name: {character.name}</span>
                <span>Gender: {character.gender}</span>
                <span>Status: {character.status}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ModalContent;
