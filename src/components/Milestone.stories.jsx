import React from 'react';
import Milestone from './Milestone';

export default {
  title: 'Components/Milestone',
  component: Milestone,
  argTypes: {
    date: { control: 'text' },
    title: { control: 'text' },
    details: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    date: '2025-03-17',
    title: 'App Launch',
    details: 'Released v1.0',
  },
};

export const Detailed = {
  args: {
    date: '2025-03-20',
    title: 'Feature Rollout',
    details: 'Added user auth and improved UI performance',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `Milestone` for roadmap highlights. Example: `Milestone: 2025-03-17, App Launch, Released v1.0`',
    },
  },
};