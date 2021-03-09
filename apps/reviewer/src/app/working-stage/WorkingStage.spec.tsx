import React from 'react';
import { render } from '@testing-library/react';

import WorkingStage from './WorkingStage';

describe('WorkingStage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< WorkingStage />);
    expect(baseElement).toBeTruthy();
  });
});
