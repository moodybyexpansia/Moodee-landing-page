/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Jost", "sans-serif"]
  		},
  		colors: {
  			dark: '#151D48',
  			purple: {
  				light: '#ECDFF9',
  				DEFAULT: '#9F58E1'
  			},
  			green: {
  				light: '#DDF9E1',
  				DEFAULT: '#53E16A'
  			},
  			blue: {
  				light: '#ECF6FF',
  				DEFAULT: '#409CFF'
  			},
  			orange: {
  				light: '#FDF3D9',
  				DEFAULT: '#F6C443'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	animation: {
  		scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
  	},
  	keyframes: {
  		scroll: {
  			to: {
  				transform: 'translate(calc(-50% - 0.5rem))'
  			}
  		}
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
