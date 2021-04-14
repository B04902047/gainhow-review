import React from 'react';
import { render } from '@testing-library/react';

import ExportOverview from './ExportOverview';

describe('ExportOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ExportOverview />);
    expect(baseElement).toBeTruthy();
  });
});
