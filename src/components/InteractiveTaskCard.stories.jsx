import React from 'react';
import InteractiveTaskCard from './InteractiveTaskCard';

export default {
  title: 'Components/InteractiveTaskCard',
  component: InteractiveTaskCard,
  argTypes: {
    title: { control: 'text' },
    details: { control: 'text' },
    emoji: { 
      control: 'select', 
      options: ['✅', '🔄', '📝', '🚀', '⚠️', '🔍', '💡'],
      defaultValue: '✅',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flippable card that shows task details on hover. Use it for important tasks that need additional context.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export const BasicTask = {
  args: {
    title: 'Complete API Documentation',
    details: 'Add examples for all endpoints and error responses. Include authentication flow diagrams.',
    emoji: '📝',
  },
};

export const LongTask = {
  args: {
    title: 'Deploy to Production',
    details: 'Run final tests, merge PR #182, deploy to staging first, then promote to production after QA approval. The deployment should be coordinated with the DevOps team and scheduled during off-peak hours.',
    emoji: '🚀',
  },
};

export const PendingReview = {
  args: {
    title: 'Review Pull Request',
    details: 'Check code quality, test coverage, and performance implications for the new authentication module.',
    emoji: '🔍',
  },
};

BasicTask.parameters = {
  docs: {
    description: {
      story: 'Basic example of a task card with a simple description.',
    },
  },
};

LongTask.parameters = {
  docs: {
    description: {
      story: 'Example with longer text content to demonstrate scrolling behavior.',
    },
  },
};

PendingReview.parameters = {
  docs: {
    description: {
      story: 'Helpful for review tasks where you want to show acceptance criteria on the back of the card.',
    },
  },
};