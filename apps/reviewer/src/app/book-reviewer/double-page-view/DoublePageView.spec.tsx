import React from 'react';
import { render } from '@testing-library/react';

import DoublePageView from './DoublePageView';

describe('DoublePageView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< DoublePageView />);
    expect(baseElement).toBeTruthy();
  });
});
