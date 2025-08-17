'use server';

import type { TypeCharacter } from '@/types/types';

interface Result {
  result: TypeCharacter[];
}

export async function POST(promise: Request) {
  const data: Result = await promise.json();
  const arr = data.result.map((el) => [
    el.name,
    el.gender,
    el.status,
    el.image,
  ]);

  const titleArr = ['name', 'gender', 'status', 'image'];
  const convertToCSV = [titleArr.join(','), ...arr].join('\n');

  return new Response(convertToCSV, {
    headers: {
      'Content-Type': 'text/csv',
    },
  });
}
