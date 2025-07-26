import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '@/components';

import type { charactersRequestProps } from '@/types/types';

function Pagination(props: charactersRequestProps) {
  const startPage = 1;
  const { getByRequest, states, setState } = props;
  const { page, loading } = states;
  const [param, setParam] = useSearchParams();

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
    const currentPage = param.get('page') || 1;
    const revertToNumber = Number(currentPage);
    if (setState && revertToNumber) {
      setState((prev) => ({ ...prev, page: revertToNumber }));
    }
  }, []);

  useEffect(() => {
    setParam(`page=${page}`);

    const item = localStorage.getItem('name') || '';
    getByRequest(item, Number(page));
  }, [page]);

  return (
    !!states.characterByRequest.length &&
    !loading && (
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
