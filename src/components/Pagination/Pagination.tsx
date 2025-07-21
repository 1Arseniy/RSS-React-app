import { useEffect } from 'react';

import Button from '../Button/Button';

import type { charactersRequestProps } from '@/types/types';

function Pagination(props: charactersRequestProps) {
  const startPage = 1;

  const { getByRequest, states, setUpdatePage } = props;
  const { page } = states;

  const togglePage = async (isNext = false) => {
    if (setUpdatePage) {
      if (isNext) {
        setUpdatePage((prev) => ({ ...prev, page: prev.page + startPage }));
      } else {
        setUpdatePage((prev) => ({ ...prev, page: prev.page - startPage }));
      }
    }
  };

  useEffect(() => {
    const item = localStorage.getItem('name') || '';
    getByRequest(item, page);
  }, [page]);

  return (
    !!states.characterByRequest.length && (
      <div>
        <Button onClick={() => togglePage()} disabled={page <= startPage}>
          Prev
        </Button>
        <span className="text-white text-2xl">{page}</span>
        <Button onClick={() => togglePage(true)}>Next</Button>
      </div>
    )
  );
}

export default Pagination;
