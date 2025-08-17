import { HomeView } from '@/views';

import Modal from '@/views/Modal/Modal';
import getInitialData from './api/getInitialData';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ details: string | undefined }>;
}) {
  const id = (await searchParams).details;
  const initialData = await getInitialData();
  return (
    <>
      <HomeView initialData={initialData} />
      {id && <Modal id={id} />}
    </>
  );
}
