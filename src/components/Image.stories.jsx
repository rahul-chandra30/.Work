import React from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    caption: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'Sample image',
    caption: 'A placeholder image for testing',
  },
};

export const NoCaption = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'Sample image',
    caption: '',
  },
};

Default.parameters = {
  docs: {
    description: {
      story: 'Use `Image` to display images with captions. Example: `Image: src=https://example.com/image.jpg, alt=Description, caption=A cool image`',
    },
  },
};