import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';

import type { charactersRequestProps } from '@/types/types';

function Pagination(props: charactersRequestProps) {
  const startPage = 1;
  const searchParams = new URLSearchParams(window.location.search);

  const { getByRequest, states, setState } = props;
  const { page } = states;
  searchParams.set('page', `${page}`);
  const navigate = useNavigate();

  const togglePage = async (isNext = false) => {
    if (setState) {
      if (isNext) {
        setState((prev) => ({ ...prev, page: prev.page + startPage }));
      } else {
        setState((prev) => ({ ...prev, page: prev.page - startPage }));
      }
    }
  };

  useEffect(() => {
    const item = localStorage.getItem('name') || '';
    // navigate(`?page=${searchParams}`);
    navigate({ search: `?${searchParams}` });

    getByRequest(item, page);
  }, [page]);

  return (
    !!states.characterByRequest.length && (
      <div className="flex justify-center items-center">
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
