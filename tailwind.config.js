/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    container: {
      center: true,
    },
  },
};
export const plugins = [];
