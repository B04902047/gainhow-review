import React from 'react';
import { render } from '@testing-library/react';

import ImportList from './ImportList';

describe('ImportList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ImportList />);
    expect(baseElement).toBeTruthy();
  });
});
