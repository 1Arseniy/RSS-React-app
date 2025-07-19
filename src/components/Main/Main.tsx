import { CardList } from '@/components';

import type { charactersRequestProps } from '@/types/types';

function Main(props: charactersRequestProps) {
  const { states, getByRequest } = props;
  return (
    <main className="flex flex-col px-12">
      <CardList states={states} getByRequest={getByRequest} />
    </main>
  );
}

export default Main;
