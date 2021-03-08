import React from 'react';
import { render } from '@testing-library/react';

import ExportingPage from './ExportingPage';

describe('ExportingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ExportingPage />);
    expect(baseElement).toBeTruthy();
  });
});
