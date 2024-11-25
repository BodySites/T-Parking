import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base_01: 'var(--base-01)',
        base_02: 'var(--base-02)',
        text_01: 'var(--text-01)',
        text_black: 'var(--text-black)',
        base_primary: 'var(--base-primary)',
        base_white: 'var(--base-white)',
        base_red: 'var(--base-red)',
        base_green: 'var(--base-green)',
        base_gray_01: 'var(--base-gray-01)',
        base_gray_02: 'var(--base-gray-02)',
        base_bg: 'var(--base-bg)',
      },
    },
    screens: {
      sm: '576px',
      mobile: '360px',
      md: '768px',
      lg: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [],
};
export default config;
