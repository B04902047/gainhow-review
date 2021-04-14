import React from 'react';
import { render } from '@testing-library/react';

import SideToolBar from './SideToolBar';

describe('SideToolBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< SideToolBar />);
    expect(baseElement).toBeTruthy();
  });
});
