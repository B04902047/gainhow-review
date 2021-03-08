import React from 'react';
import { render } from '@testing-library/react';

import ImportedFile from './ImportedFile';

describe('ImportedFile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ImportedFile />);
    expect(baseElement).toBeTruthy();
  });
});
