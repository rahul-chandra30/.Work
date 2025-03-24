import React from 'react';
import CodeSnippet from './CodeSnippet';

export default {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
  argTypes: {
    language: { control: 'text' },
    code: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const JavaScript = {
  args: {
    language: 'javascript',
    code: 'const greet = () => console.log("Hello, world!");',
  },
};

export const Python = {
  args: {
    language: 'python',
    code: 'def greet():\n    print("Hello, world!")',
  },
};

JavaScript.parameters = {
  docs: {
    description: {
      story: 'Use `CodeSnippet` to display code. Example: `CodeSnippet: javascript, const greet = () => console.log("Hello, world!");`',
    },
  },
};