import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '@/components';

import type { CharactersRequestProps } from '@/types/types';

function Pagination(props: CharactersRequestProps) {
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

    // const item = localStorage.getItem('name') || '';
    // getByRequest(item, Number(page));
  }, [page]);
  // !loading &&
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
