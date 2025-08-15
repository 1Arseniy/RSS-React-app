import '@/styles/index.css';

import Modal from '@/views/Modal/Modal';

export function generateStaticParams() {
  const array = Array.from({ length: 1000 }, (_, i) => (i + 1).toString());
  const ruArray = array.map((el) => ({ locale: 'en', id: el }));
  const enArray = array.map((el) => ({ locale: 'ru', id: el }));
  return ruArray.concat(enArray);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return id && <Modal id={id} />;
}
