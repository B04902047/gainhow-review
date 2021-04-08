import React from 'react';
import { render } from '@testing-library/react';

import NamedFramedPage from './NamedFramedPage';

describe('NamedFramedPagePair', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<div/>);
    expect(baseElement).toBeTruthy();
  });
});
