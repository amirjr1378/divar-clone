module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'spellcheck', 'simple-import-sort', 'import'],
  rules: {
    'prefer-const': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: false,
        identifiers: true,
        lang: 'en_US',
        skipWords: ['axios', 'antd', 'formik', 'moment'],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
          /^[\u0600-\u06FF\s]+$/,
        ],
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 4,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
