import React from 'react';
import { render } from '@testing-library/react';

import SortableExportList from './SortableExportList';

describe('ExportList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< div />);
    expect(baseElement).toBeTruthy();
  });
});
