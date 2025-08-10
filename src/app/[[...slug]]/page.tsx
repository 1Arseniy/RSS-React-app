import { ClientOnly } from '@/app/[[...slug]]/client';

import '@/styles/index.css';

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <ClientOnly />;
}
