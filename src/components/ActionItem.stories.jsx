import React from 'react';
import ActionItem from './ActionItem';

export default {
  title: 'Components/ActionItem',
  component: ActionItem,
  argTypes: {
    description: { control: 'text' },
    assignee: { control: 'text' },
    dueDate: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    description: 'Review pull request #123',
    assignee: 'Ani',
    dueDate: '2025-03-20',
  },
};

export const Urgent = {
  args: {
    description: 'Fix production bug ASAP',
    assignee: 'Rahul',
    dueDate: '2025-03-18',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `ActionItem` for urgent tasks. Example: `ActionItem: Review pull request #123, Ani, 2025-03-20`',
    },
  },
};