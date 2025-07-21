import { CardList, Pagination } from '@/components';

import type { charactersRequestProps } from '@/types/types';

function Main(props: charactersRequestProps) {
  const { states, getByRequest, setUpdatePage } = props;
  return (
    <main className="flex flex-col px-12">
      <Pagination
        setUpdatePage={setUpdatePage}
        states={states}
        getByRequest={getByRequest}
      />
      <CardList states={states} getByRequest={getByRequest} />
    </main>
  );
}

export default Main;
