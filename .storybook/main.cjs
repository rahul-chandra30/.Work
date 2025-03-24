module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    };
    return config;
  },
};