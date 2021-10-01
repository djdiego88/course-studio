const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Graphik', ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
                '-10': '-10',
            },
            colors: {
                brand: {
                    light: '#65ba86',
                    DEFAULT: '#449764',
                    dark: '#2f6845',
                },

                'light-yellow': '#fefbf2',

                'darker-gray': '#1d201f',

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
