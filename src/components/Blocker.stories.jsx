import React from 'react';
import Blocker from './Blocker';

export default {
  title: 'Components/Blocker',
  component: Blocker,
  argTypes: {
    description: { control: 'text' },
    reportedBy: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    description: 'API downtime',
    reportedBy: 'Prathamesh',
  },
};

export const NoReporter = {
  args: {
    description: 'Database connection failed',
    reportedBy: 'Unknown',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `Blocker` to highlight issues. Example: `Blocker: API downtime, Prathamesh`',
    },
  },
};