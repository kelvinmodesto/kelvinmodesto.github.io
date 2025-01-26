import type { ReactElement } from 'react';
import { render } from '@testing-library/react';

export const renderWithWidth = (ui: ReactElement, options = {}, width: number = 1028) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  return render(ui, { ...options });
};
