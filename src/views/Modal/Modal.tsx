import { useNavigate, useParams } from 'react-router-dom';

import { LuLoaderCircle } from 'react-icons/lu';

import { useGetCharacterByIdQuery } from '@/client/api';

import useTheme from '@/hooks/useTheme';

import { Button } from '@/components';

function Modal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterByIdQuery(id ?? '');
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
          {isLoading ? (
            <LuLoaderCircle
              data-testid="loader"
              className="size-24 animate-spin"
            />
          ) : (
            data && (
              <>
                <img
                  className="object-cover h-52"
                  src={data.image}
                  alt="rick&morty"
                  data-testid="img"
                ></img>
                <div className="flex flex-col justify-center p-2.5">
                  <span>Full name: {data.name}</span>
                  <span>Gender: {data.gender}</span>
                  <span>Status: {data.status}</span>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
