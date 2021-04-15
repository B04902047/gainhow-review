import React from 'react';
import { render } from '@testing-library/react';

import DrogMiddleLine from './DrogMiddleLine';

describe('DrogMiddleLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< DrogMiddleLine />);
    expect(baseElement).toBeTruthy();
  });
});
