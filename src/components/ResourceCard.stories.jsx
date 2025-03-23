import React from 'react';
import ResourceCard from './ResourceCard';

export default {
  title: 'Components/ResourceCard',
  component: ResourceCard,
  argTypes: {
    title: { control: 'text' },
    url: { control: 'text' },
    emoji: { 
      control: 'select', 
      options: ['🔖', '📚', '🔗', '💻', '📄', '📊', '🔬', '📱', '🌐'],
      defaultValue: '🔖',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component for linking to external resources like documentation, GitHub repositories, or reference materials.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Documentation = {
  args: {
    title: 'API Reference',
    url: 'https://docs.example.com/api',
    emoji: '📚',
  },
};

export const CodeRepository = {
  args: {
    title: 'Frontend Repository',
    url: 'https://github.com/example/frontend',
    emoji: '💻',
  },
};

export const DesignAssets = {
  args: {
    title: 'Design System',
    url: 'https://figma.com/file/example',
    emoji: '🎨',
  },
};

Documentation.parameters = {
  docs: {
    description: {
      story: 'Use `ResourceCard` to link to important documentation or external resources. Example: `ResourceCard: API Reference, https://docs.example.com/api, 📚`',
    },
  },
};

CodeRepository.parameters = {
  docs: {
    description: {
      story: 'Perfect for linking to code repositories or development resources.',
    },
  },
};

DesignAssets.parameters = {
  docs: {
    description: {
      story: 'Use for design assets, mockups, or UI reference materials.',
    },
  },
};