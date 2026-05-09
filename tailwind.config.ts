import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './animations/**/*.{js,ts,jsx,tsx,mdx}', './hooks/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink:'#0B0B0A', coal:'#141311', anth:'#24221F', cream:'#F5F0E8', sand:'#D7C6AF', beige:'#B9A58E', mist:'#ECE4D8' },
      fontFamily: { sans:['Inter','ui-sans-serif','system-ui'], display:['Arial Narrow','Inter','ui-sans-serif'] },
      letterSpacing: { luxury:'-0.075em', tightish:'-0.045em' },
      boxShadow: { editorial:'0 40px 120px rgba(0,0,0,.28)' }
    },
  },
  plugins: [],
} satisfies Config;
