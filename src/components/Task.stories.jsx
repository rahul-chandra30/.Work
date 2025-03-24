import React from 'react';
import Task from './Task';

export default {
  title: 'Components/Task',
  component: Task,
  argTypes: {
    title: { control: 'text' },
    assignee: { control: 'text' },
    status: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Update API endpoints',
    assignee: 'Rahul',
    status: 'In Progress',
  },
};

export const Completed = {
  args: {
    title: 'Fix login bug',
    assignee: 'Prathamesh',
    status: 'Completed',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `Task` to track assignments. Example: `Task: Update API endpoints, Rahul, In Progress`',
    },
  },
};