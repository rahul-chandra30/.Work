import React from 'react';
import Meeting from './Meeting';

export default {
  title: 'Components/Meeting',
  component: Meeting,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    attendees: { control: 'text' },
    time: { control: 'text' },
    agenda: { control: 'text' },
    outcome: { control: 'text' },
  },
  tags: ['autodocs'],
};


export const Default = {
  args: {
    attendees: 'Prathamesh and Rahul',
    time: '4-5 PM',
    agenda: 'Backend Sync',
    outcome: 'Resolved Issues',
  },
};

