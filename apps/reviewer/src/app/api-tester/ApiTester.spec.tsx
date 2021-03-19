import React from 'react';
import { render } from '@testing-library/react';

import ApiTester from './ApiTester';

describe('ApiTester', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ApiTester />);
    expect(baseElement).toBeTruthy();
  });
});
