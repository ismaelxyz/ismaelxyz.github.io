/* eslint-env node */

// Tailwind CSS v4 no requiere plugins extra de nesting ni preset-env.
// Mantenemos solo tailwindcss + autoprefixer y minificación en producción.

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
