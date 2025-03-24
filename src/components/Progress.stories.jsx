import React from 'react';
import Progress from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    task: { control: 'text' },
    percentage: { 
      control: { type: 'range', min: 0, max: 100, step: 1 },
      defaultValue: 75, // Number
    },
    notes: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const BasicProgress = {
  args: {
    task: 'Frontend redesign',
    percentage: 75, // Number
    notes: 'Waiting on feedback',
  },
};

export const MilestoneProgress = {
  args: {
    task: 'API upgrade',
    percentage: 50, // Number
    notes: 'Milestone: Endpoints added',
  },
};

BasicProgress.parameters = {
  docs: {
    description: {
      story: 'Use `Progress` to track tasks. Example: `Progress: Frontend redesign, 75%, Waiting on feedback` or with `Milestone:` prefix.',
    },
  },
};