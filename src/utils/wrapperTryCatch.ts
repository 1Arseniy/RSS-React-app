export async function wrapperTryCatch<T = unknown>(
  url: string,
  opts: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(url, opts);
    const data: T = await res.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('API Error:', err);
    } else {
      console.error('API Error: Unknown', err);
    }
    throw err;
  }
}
