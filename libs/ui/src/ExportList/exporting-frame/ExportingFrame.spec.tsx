import React from 'react';
import { render } from '@testing-library/react';

import ExportingPage from './ExportingFrame';

describe('ExportingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ExportingFrame />);
    expect(baseElement).toBeTruthy();
  });
});
