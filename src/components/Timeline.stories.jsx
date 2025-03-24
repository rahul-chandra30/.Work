import React from 'react';
import Timeline from './Timeline';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
    title: { control: 'text' },
    events: { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Sprint 1 Timeline',
    events: [
      { icon: 'fa-calendar', heading: 'Kickoff Meeting', description: 'Defined sprint goals and assigned tasks' },
      { icon: 'fa-check-square', heading: 'Feature Complete', description: 'Core functionality implemented' },
    ],
  },
};

export const MultiEvent = {
  args: {
    title: 'Development Journey',
    events: [
      { icon: 'fa-times-circle', heading: 'Jan 25: Bug Detected', description: 'Critical API issue found' },
      { icon: 'fa-handshake', heading: 'Feb 1: Team Sync', description: 'Resolved blockers in meeting' },
      { icon: 'fa-clipboard', heading: 'Feb 10: Review', description: 'Checked progress' },
      { icon: 'fa-play-circle', heading: 'Feb 15: Deployment', description: 'Released to production' },
    ],
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `Timeline` for project event sequences. Example: `Timeline: Sprint 1 Timeline, fa-calendar Kickoff Meeting | Defined sprint goals and assigned tasks, fa-check-square Feature Complete | Core functionality implemented`',
    },
  },
};