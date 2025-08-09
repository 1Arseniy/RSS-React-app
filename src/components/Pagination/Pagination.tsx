import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '@/components';

import type { TypeProps, TypeSetState } from '@/types/types';

interface TypePropsPagination {
  states: TypeProps;
  setState: TypeSetState;
}

function Pagination(props: TypePropsPagination) {
  const step = 1;
  const { states, setState } = props;
  const { page } = states;
  const [param, setParam] = useSearchParams();

  const handleNext = () => {
    setState((prev) => ({ ...prev, page: prev.page + step }));
  };

  const handlePrevious = () => {
    setState((prev) => ({ ...prev, page: prev.page - step }));
  };

  useEffect(() => {
    const currentPage = param.get('page') || 1;
    const revertToNumber = Number(currentPage);
    setState((prev) => ({ ...prev, page: revertToNumber }));
  }, []);

  useEffect(() => {
    setParam(`page=${page}`);
  }, [page, setParam]);

  return (
    <div className="flex justify-center items-center">
      <Button onClick={handlePrevious} disabled={page <= step}>
        Prev
      </Button>
      <span className="text-white text-2xl">{page}</span>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

export default Pagination;
