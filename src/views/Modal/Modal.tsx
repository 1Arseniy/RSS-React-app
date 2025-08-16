'use client';
import { LuLoaderCircle } from 'react-icons/lu';

import { useGetCharacterByIdQuery } from '@/client/api';

import useTheme from '@/hooks/useTheme';

import { Button } from '@/components';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

function Modal({ id }: { id: string }) {
  const router = useRouter();
  const statusNotfound = 404;
  const t = useTranslations('HomeView');
  const { data, isFetching, refetch, error } = useGetCharacterByIdQuery(id);
  const { darkTheme } = useTheme();

  const closeModal = () => {
    router.push(`/`);
  };

  return (
    <>
      <div onClick={closeModal} className="h-full w-full fixed top-0"></div>
      <div className="absolute right-0 h-screen">
        <div
          className={`${darkTheme ? 'bg-blue-900 text-white' : 'bg-blue-600 text-black'}  fixed h-screen z-10  inset-y-0 right-0  w-80 flex flex-col justify-center items-center `}
        >
          <div className="h-full w-full absolute flex items-start justify-end">
            <Button onClick={() => refetch()}>
              {t('Main.RefreshCallButton')}
            </Button>
            <Button onClick={closeModal}>{t('Main.CloseButton')}</Button>
          </div>
          {isFetching ? (
            <LuLoaderCircle
              data-testid="loader"
              className="size-24 animate-spin"
            />
          ) : error ? (
            'status' in error && error.status === statusNotfound ? (
              <h1>Сharacter with this id not found</h1>
            ) : (
              <h1>Server not responding, try later</h1>
            )
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
                  <span>
                    {t('Main.Card.fullName')}: {data.name}
                  </span>
                  <span>
                    {t('Main.Card.gender')}: {data.gender}
                  </span>
                  <span>
                    {t('Main.Card.status')}: {data.status}
                  </span>
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
