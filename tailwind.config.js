/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f6f8f4',
          100: '#eaf0e4',
          200: '#d6e2cb',
          300: '#b8cda6',
          400: '#95b37c',
          500: '#7a943e',
          600: '#5a7a43',
          700: '#466036',
          800: '#394d2e',
          900: '#3b5518',
          950: '#182312'
        },
        mountain: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e3e5e7',
          300: '#cfd2d6',
          400: '#b4b9c0',
          500: '#9ca3ab',
          600: '#878e96',
          700: '#6f757d',
          800: '#5c6169',
          900: '#4e5258',
          950: '#2f3237'
        },
        vintage: {
          50: '#fdfcf9',
          100: '#f6f1de',
          200: '#ede7da',
          300: '#e4dcc6',
          400: '#d9cfb0',
          500: '#ccc199',
          600: '#b8a67d',
          700: '#a08a61',
          800: '#7d6b4a',
          900: '#3c2f1b',
          950: '#2a1f12'
        },
        mist: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#0f0f0f'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        nature: ['Merriweather', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'forest-texture': `
          radial-gradient(circle at 20% 80%, rgba(59, 85, 24, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(122, 148, 62, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(70, 96, 54, 0.05) 0%, transparent 50%)
        `,
        'wood-grain': `
          linear-gradient(90deg, rgba(60, 47, 27, 0.1) 0%, transparent 50%, rgba(60, 47, 27, 0.1) 100%),
          linear-gradient(0deg, rgba(125, 107, 74, 0.05) 0%, transparent 50%)
        `,
        'mist-overlay': `
          linear-gradient(180deg, rgba(250, 250, 250, 0.9) 0%, rgba(245, 245, 245, 0.7) 50%, rgba(238, 238, 238, 0.5) 100%)
        `,
        'mountain-silhouette': `
          polygon(0% 100%, 15% 85%, 25% 90%, 35% 75%, 50% 80%, 65% 70%, 80% 85%, 100% 75%, 100% 100%)
        `,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 8s ease-in-out infinite',
        'grow': 'grow 0.8s ease-out',
        'fade-up': 'fadeUp 1s ease-out',
        'slide-in': 'slideIn 1.2s ease-out',
        'parallax': 'parallax 20s linear infinite',
        'mist': 'mist 15s ease-in-out infinite',
        'leaf-fall': 'leafFall 12s linear infinite',
        'branch-sway': 'branchSway 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg) translateX(0px)' },
          '50%': { transform: 'rotate(3deg) translateX(5px)' },
        },
        grow: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0', filter: 'blur(10px)' },
          '100%': { transform: 'translateX(0)', opacity: '1', filter: 'blur(0px)' },
        },
        parallax: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        mist: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(0px)' },
          '50%': { opacity: '0.7', transform: 'translateX(20px)' },
        },
        leafFall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        branchSway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
      },
      clipPath: {
        'mountain': 'polygon(0% 100%, 15% 85%, 25% 90%, 35% 75%, 50% 80%, 65% 70%, 80% 85%, 100% 75%, 100% 100%)',
        'leaf': 'polygon(50% 0%, 80% 10%, 100% 35%, 85% 70%, 50% 100%, 15% 70%, 0% 35%, 20% 10%)',
        'torn-paper': 'polygon(0% 0%, 95% 0%, 100% 5%, 98% 15%, 100% 25%, 95% 35%, 100% 45%, 97% 55%, 100% 65%, 95% 75%, 100% 85%, 98% 95%, 100% 100%, 0% 100%)',
      },
      boxShadow: {
        'forest': '0 25px 50px -12px rgba(59, 85, 24, 0.25)',
        'vintage': '0 25px 50px -12px rgba(125, 107, 74, 0.25)',
        'mist': '0 10px 30px rgba(158, 158, 158, 0.2)',
        'wood': '0 8px 25px rgba(60, 47, 27, 0.15)',
        'leaf': '0 4px 15px rgba(122, 148, 62, 0.3)',
        'inner-glow': 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};