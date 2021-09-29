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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
