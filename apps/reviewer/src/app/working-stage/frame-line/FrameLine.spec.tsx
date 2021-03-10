import React from 'react';
import { render } from '@testing-library/react';

import FrameLine from './FrameLine';

describe('FrameLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< FrameLine />);
    expect(baseElement).toBeTruthy();
  });
});
