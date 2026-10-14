/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0B0F19',
          surface: '#111827',
          panel: '#1E293B',
          panelLight: '#334155',
          border: '#374151',
          accent: '#38BDF8',
          accentHover: '#0EA5E9',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          text: '#F3F4F6',
          muted: '#9CA3AF'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}
