import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components';

import type { charactersRequestProps } from '@/types/types';

function Pagination(props: charactersRequestProps) {
  const startPage = 1;
  const { getByRequest, states, setState } = props;
  const { page, loading } = states;
  const navigate = useNavigate();
  const params = useParams();

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
    if (params.page) {
      if (!/^\d+$/.test(params.page)) {
        navigate('not-found');
        return;
      }
    }
    navigate(`${page}`);
    getByRequest(item, page);
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
