import React from 'react';
import { render } from '@testing-library/react';

import WorkSpace from './WorkSpace';

describe('WorkSpace', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< WorkSpace />);
    expect(baseElement).toBeTruthy();
  });
});
