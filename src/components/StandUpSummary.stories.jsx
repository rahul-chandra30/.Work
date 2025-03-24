import React from 'react';
import StandUpSummary from './StandUpSummary';

export default {
  title: 'Components/StandUpSummary',
  component: StandUpSummary,
  argTypes: {
    date: { control: 'text' },
    team: { control: 'text' },
    summary: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const SingleText = {
  args: {
    date: '2025-03-14',
    team: 'Backend Team',
    summary: 'All tasks on track',
  },
};

export const ListSummary = {
  args: {
    date: '2025-03-15',
    team: 'Frontend Team',
    summary: 'Fixed UI bugs, Updated designs',
  },
};

SingleText.parameters = {
  docs: {
    description: {
      story: 'Use `StandUpSummary` for daily recaps. Example: `StandUpSummary: 2025-03-14, Backend Team, All tasks on track` or with commas for lists.',
    },
  },
};