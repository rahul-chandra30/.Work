import React from 'react';
import Shoutout from './Shoutout';

export default {
  title: 'Components/Shoutout',
  component: Shoutout,
  argTypes: {
    person: { control: 'text' },
    reason: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    person: 'Rahul',
    reason: 'Fixed login bug in record time',
  },
};

export const LongReason = {
  args: {
    person: 'Prathamesh',
    reason: 'Revamped the backend architecture, improving response times by 50%',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `Shoutout` to recognize team efforts. Example: `Shoutout: Rahul, Fixed login bug in record time`',
    },
  },
};