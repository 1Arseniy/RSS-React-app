'use client';

import { Button } from '@/components';

import type { TypeProps, TypeSetState } from '@/types/types';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

// import { useEffect } from 'react';

interface TypePropsPagination {
  states: TypeProps;
  setState: TypeSetState;
}

function Pagination(props: TypePropsPagination) {
  const step = 1;
  const { states, setState } = props;
  const { page } = states;
  // const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations('HomeView');

  const handleNext = () => {
    setState((prev) => ({ ...prev, page: prev.page + step }));
    router.push(`?page=${page}`);
  };

  const handlePrevious = () => {
    setState((prev) => ({ ...prev, page: prev.page - step }));
    // router.push(`?page=${page}`);
  };

  // useEffect(() => {
  // const currentPage = searchParams.get('page') || 1;
  // const revertToNumber = Number(currentPage);
  // setState((prev) => ({ ...prev, page: revertToNumber }));
  // }, [page, router]);

  // useEffect(() => {
  //   router.push(`?page=${page}`);
  // }, [searchParams, page, router]);

  return (
    <div className="flex justify-center items-center">
      <Button onClick={handlePrevious} disabled={page <= step}>
        {t('Main.Pagination.prevButton')}
      </Button>
      <span className="text-white text-2xl">{page}</span>
      <Button onClick={handleNext}>{t('Main.Pagination.nextButton')}</Button>
    </div>
  );
}

export default Pagination;
