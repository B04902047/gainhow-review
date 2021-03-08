import React from 'react';
import { render } from '@testing-library/react';

import ExportingModel from './ExportingModel';

describe('ExportingModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ExportingModel />);
    expect(baseElement).toBeTruthy();
  });
});
