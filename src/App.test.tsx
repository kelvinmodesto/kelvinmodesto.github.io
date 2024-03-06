import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.tsx';

describe('App', () => {
  it('renders learn react link', () => {
    const app = render(<App />);

    expect(app).toBeDefined();
  });
});
