import { it, expect, describe, vi } from 'vitest';

import { render } from '@testing-library/react';

import App from '@/App';

import * as getData from '@/client/getCharacters';

import '@testing-library/jest-dom/vitest';

describe('tests App', () => {
  describe('tests integration ', () => {
    it('should get data when App render', () => {
      const getCharactersSpy = vi.spyOn(getData, 'getCharacters');
      render(<App />);
      expect(getCharactersSpy).toHaveBeenCalled();
    });
  });
});
