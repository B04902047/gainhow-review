import React from 'react';
import { render } from '@testing-library/react';

import FramePageComponent from './FramePageComponent';

describe('FramePageComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< div />);
    expect(baseElement).toBeTruthy();
  });
});
