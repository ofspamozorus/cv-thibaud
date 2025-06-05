/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1E293B', // Deep slate (slate-800)
        'secondary': '#3B82F6', // Strategic blue (blue-500)
        'accent': '#F59E0B', // Amber (amber-500)
        
        // Background Colors
        'background': '#FAFAFA', // Warm off-white (gray-50)
        'surface': '#FFFFFF', // Pure white
        
        // Text Colors
        'text-primary': '#111827', // Near-black (gray-900)
        'text-secondary': '#6B7280', // Medium gray (gray-500)
        
        // Status Colors
        'success': '#10B981', // Professional green (emerald-500)
        'warning': '#F59E0B', // Amber (amber-500)
        'error': '#EF4444', // Clear red (red-500)
        
        // Border Color
        'border': 'rgba(0, 0, 0, 0.1)', // Subtle border
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'], // Headings font
        'body': ['Inter', 'sans-serif'], // Body text font
        'caption': ['Inter', 'sans-serif'], // Caption font
        'data': ['JetBrains Mono', 'monospace'], // Data/code font
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'interactive': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '4px',
        'interactive': '8px',
      },
      transitionDuration: {
        'micro': '200ms',
        'layout': '400ms',
      },
      transitionTimingFunction: {
        'micro': 'ease-out',
        'layout': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
      },
      zIndex: {
        'navigation': '1000',
        'menu-overlay': '1001',
        'modal': '1002',
      },
      backdropBlur: {
        'navigation': '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}