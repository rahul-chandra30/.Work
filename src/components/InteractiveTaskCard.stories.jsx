import React from 'react';
import InteractiveTaskCard from './InteractiveTaskCard';

export default {
  title: 'Components/InteractiveTaskCard',
  component: InteractiveTaskCard,
  argTypes: {
    title: { 
      control: 'text',
      description: 'The title of the task displayed on the front of the card',
    },
    details: { 
      control: 'text',
      description: 'The detailed description shown on the back of the card when hovered',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A flippable card component that reveals additional details when hovered. Perfect for tasks, assignments, or any content that has a brief title with extended information.'
      },
    },

    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f9fa' },
        { name: 'dark', value: '#1a202c' },
      ],
    },
  },

  decorators: [
    (Story) => (
      <div style={{ 
        padding: '2rem',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        height: 'auto',
        minHeight: '400px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <div style={{ width: '400px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
};


export const BasicTask = {
  args: {
    title: 'Complete User Authentication',
    details: 'Implement login form, registration process, and password reset functionality. Add OAuth options for Google and GitHub.',
  },
};


export const LongTaskDetails = {
  args: {
    title: 'Deploy to Production',
    details: 'Run final tests on staging environment. Check load testing results. Verify database migrations are ready. Coordinate with DevOps for deployment window. Update documentation with new features. Send announcement to team and stakeholders after successful deployment.',
  },
};


export const QuickTask = {
  args: {
    title: 'Review Pull Request',
    details: 'Review PR #142 - New login UI components',
  },
};


export const TechnicalTask = {
  args: {
    title: 'Optimize Database Queries',
    details: 'Add indexes for frequently queried columns. Rewrite the product search query to use full-text search. Implement query caching for dashboard statistics.',
  },
};


BasicTask.parameters = {
  docs: {
    description: {
      story: 'A standard task card with a title and moderate-length details. The card flips on hover to reveal the details.',
    },
  },
};

LongTaskDetails.parameters = {
  docs: {
    description: {
      story: 'Example with longer details text to demonstrate how the component handles significant content. The back of the card has scrolling enabled for overflow text.',
    },
  },
};

QuickTask.parameters = {
  docs: {
    description: {
      story: 'A simple task with minimal details, showing how the component works with brief content.',
    },
  },
};

TechnicalTask.parameters = {
  docs: {
    description: {
      story: 'Technical task example showing how the component can be used for development-related items.',
    },
  },
};
