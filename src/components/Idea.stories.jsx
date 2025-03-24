import React from 'react';
import Idea from './Idea';

export default {
  title: 'Components/Idea',
  component: Idea,
  argTypes: {
    concept: { control: 'text' },
    priority: { 
      control: { type: 'select', options: ['High', 'Medium', 'Low'] },
    },
    notes: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const HighPriority = {
  args: {
    concept: 'Dark mode',
    priority: 'High',
    notes: 'Needs design input',
  },
};

export const MediumPriority = {
  args: {
    concept: 'Performance tweak',
    priority: 'Medium',
    notes: 'Optimize API calls',
  },
};

HighPriority.parameters = {
  docs: {
    description: {
      story: 'Use `Idea` for brainstorming with priority tags. Example: `Idea: Dark mode, High, Needs design input`',
    },
  },
};