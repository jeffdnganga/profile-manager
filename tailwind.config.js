/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      'red': '#de3618',
      'youngtal-gray': {
        DEFAULT: '#E6E6F1',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      'youngtal-light-blue': '#CAE0EA',
      'youngtal-dark-gray': '#7C7C7C',
      'youngtal-blue': '#0394D5',
      'youngtal-blue-400': '#38bdf8',
      'youngtal-dark-blue': '#002D8B',
      'youngtal-darker-blue': '#1e40af',
      'youngtal-pale-blue': '#F7FAFF',
      'youngtal-green': '#7FFEBA',
      'youngtal-dark-green': '#00D22E',
      'youngtal-yellow': '#FEEA7F',
      'youngtal-dark-yellow': '#D2BD00',
      'youngtal-red': '#FE7F7F',
      'youngtal-icon-border-blue': '#6177D5',
      'youngtal-search-border-blue': 'rgba(96, 124, 183, 0.5)',
      'youngtal-inactive-button-blue': '#6177D5',
      'youngtal-date-blue': '#7FD7FE'
    },
    extend: {},
  },
  plugins: [],
}