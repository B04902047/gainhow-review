import React from 'react';
import { render } from '@testing-library/react';

import ExportList from './ExportList';

describe('ExportList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ExportList />);
    expect(baseElement).toBeTruthy();
  });
});
