import React from 'react';
import { render } from '@testing-library/react';

import Canvans from './Canvans';

describe('Canvans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Canvans />);
    expect(baseElement).toBeTruthy();
  });
});
