import React from 'react';
import Callout from './Callout';

export default {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    type: { 
      control: { type: 'select', options: ['tip', 'warning', 'error'] },
    },
    content: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Tip = {
  args: {
    type: 'tip',
    content: 'Remember to test edge cases!',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    content: 'API rate limits approaching.',
  },
};

export const Error = {
  args: {
    type: 'error',
    content: 'Build failed due to missing dependency.',
  },
};

Tip.parameters = {
  docs: {
    description: {
      story: 'Use `Callout` for sticky note-style alerts. Example: `Callout: tip, Remember to test edge cases!`',
    },
  },
};