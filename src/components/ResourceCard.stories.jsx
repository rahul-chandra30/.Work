import React from 'react';
import ResourceCard from './ResourceCard';

export default {
  title: 'Components/ResourceCard',
  component: ResourceCard,
  argTypes: {
    title: { 
      control: 'text',
      description: 'The title of the resource to display',
      defaultValue: 'Documentation'
    },
    url: { 
      control: 'text',
      description: 'The URL the card links to',
      defaultValue: 'https://docs.example.com'
    },
    emoji: { 
      control: 'text',
      description: 'Emoji to display next to the title',
      defaultValue: '🔖'
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A card component for linking to external resources like documentation, guides, or reference materials.'
      },
    },
  },
  tags: ['autodocs'],
};


export const BasicResource = {
  args: {
    title: 'API Documentation',
    url: 'https://api.example.com/docs',
    emoji: '📚'
  },
};


export const GitHubRepository = {
  args: {
    title: 'Source Code Repository',
    url: 'https://github.com/example/repo',
    emoji: '💻'
  },
};


export const VideoTutorial = {
  args: {
    title: 'Getting Started Tutorial',
    url: 'https://youtube.com/watch?v=example',
    emoji: '📺'
  },
};


export const DesignAssets = {
  args: {
    title: 'UI Design System',
    url: 'https://figma.com/file/example',
    emoji: '🎨'
  },
};

