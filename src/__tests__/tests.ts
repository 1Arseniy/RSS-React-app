import { afterEach, beforeEach, vi } from 'vitest';

import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

beforeEach(() => {
  global.URL.createObjectURL = vi.fn();
});

afterEach(() => {
  cleanup();
});
