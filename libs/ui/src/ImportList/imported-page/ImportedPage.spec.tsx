import React from 'react';
import { render } from '@testing-library/react';

import ImportedPage from './ImportedPage';

describe('ImportedPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ImportedPage />);
    expect(baseElement).toBeTruthy();
  });
});
