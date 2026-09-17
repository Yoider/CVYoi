import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#f8fafc',
        navy: {
          DEFAULT: '#0b2545',
          banner: '#0b2545',
          dark: '#061a30',
          light: '#1e3a60',
        },
        slate: {
          panel: '#1e293b',
          dark: '#0f172a',
        },
        surface: {
          DEFAULT: '#ffffff',
          hover: '#f1f5f9',
          muted: '#f8fafc',
        },
        'surface-hover': '#f1f5f9',
        border: {
          DEFAULT: '#e2e8f0',
          subtle: '#cbd5e1',
          hover: '#94a3b8',
        },
        tech: {
          DEFAULT: '#0b2545',
          primary: '#1d4ed8',
          indigo: '#4338ca',
        },
        ai: {
          DEFAULT: '#6b21a8',
          primary: '#7e22ce',
          bright: '#9333ea',
        },
        emerald: {
          DEFAULT: '#10b981',
          primary: '#059669',
          bright: '#10b981',
        },
        status: {
          DEFAULT: '#10b981',
          bright: '#059669',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out forwards',
        'scale-up': 'scaleUp 200ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
