module.exports = {
  purge: {
    mode: 'all',
    // preserveHtmlElements: false,
    enabled: true,
    content: [
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
