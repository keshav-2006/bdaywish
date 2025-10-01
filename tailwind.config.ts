import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFC0CB',
        'romantic-lavender': '#E6E6FA',
        'romantic-accent': '#FFB6C1',
        'romantic-cream': '#FFF8DC',
        'romantic-rose': '#FFB6C1',
        'cute-pink': '#FF9A9E',
        'cute-purple': '#FECFEF',
        'cute-blue': '#A8E6CF',
        'cute-yellow': '#FFD3A5',
        'cute-coral': '#FFAAA5',
        'soft-pink': '#FFE4E6',
        'soft-lavender': '#F3E8FF',
        'soft-mint': '#F0FDF4',
        'soft-peach': '#FFF7ED',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'comfortaa': ['Comfortaa', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'heart-beat': 'heart-beat 1.5s ease-in-out infinite',
        'balloon-float': 'balloon-float 4s ease-in-out infinite',
        'confetti': 'confetti 3s ease-out',
        'cute-bounce': 'cute-bounce 2s ease-in-out infinite',
        'cute-wiggle': 'cute-wiggle 3s ease-in-out infinite',
        'cute-pulse': 'cute-pulse 2s ease-in-out infinite',
        'cute-float': 'cute-float 4s ease-in-out infinite',
        'cute-sparkle': 'cute-sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'heart-beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'balloon-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'romantic-gradient': 'linear-gradient(135deg, #FFE4E1 0%, #E6E6FA 50%, #F0F8FF 100%)',
        'paper-texture': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f5f5f5" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
export default config
