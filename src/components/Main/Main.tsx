import { Button, CardList, Flyout, Pagination } from '@/components';

import type { CharactersRequestProps } from '@/types/types';

import { useTranslations } from 'next-intl';

function Main(props: CharactersRequestProps) {
  const { states, setState, queryResult } = props;
  const t = useTranslations('HomeView');
  return (
    <main className="flex flex-col px-12">
      <div className="flex justify-center">
        <Button onClick={() => queryResult.refetch()}>
          {t('Main.RefreshCallButton')}
        </Button>
        <Pagination setState={setState} states={states} />
      </div>
      <CardList {...states} queryResult={queryResult} />
      <Flyout />
    </main>
  );
}

export default Main;
