// import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="text-white text-3xl">Page is not found</h1>
      <Link
        className="bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
}
