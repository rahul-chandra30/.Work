import React from 'react';
import IconBullet from './IconBullet';

export default {
  title: 'Components/IconBullet',
  component: IconBullet,
  argTypes: {
    icon: { control: 'text' },
    heading: { control: 'text' },
    description: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    icon: 'fa-lightbulb-o',
    heading: 'Feature Idea',
    description: 'Add real-time notifications to dashboard',
  },
};

export const TaskStep = {
  args: {
    icon: 'fa-list-alt',
    heading: 'Task List Update',
    description: 'Add new items by end of day',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `IconBullet` for highlighted points. Example: `IconBullet: fa-lightbulb-o Feature Idea | Add real-time notifications to dashboard`',
    },
  },
};