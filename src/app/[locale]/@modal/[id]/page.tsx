import '@/styles/index.css';

import Modal from '@/views/Modal/Modal';

export function generateStaticParams() {
  const array = Array.from({ length: 1000 }, (_, i) => (i + 1).toString());
  return array.map((el) => ({ locale: 'en', id: el }));
}

export default async function Page({
  params,
  // searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string[] | string | undefined }>;
}) {
  const id = (await params).id;
  // const searchParam = await searchParams
  // const a = searchParam.details
  return id && <Modal id={id} />;
}
