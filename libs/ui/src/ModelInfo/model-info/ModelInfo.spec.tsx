import React from 'react';
import { render } from '@testing-library/react';

import ModelInfo from './ModelInfo';

describe('ModelInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ModelInfo />);
    expect(baseElement).toBeTruthy();
  });
});
