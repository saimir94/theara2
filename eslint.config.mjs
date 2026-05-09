import tseslint from '@typescript-eslint/parser';

export default [
  { ignores: ['.next/**', 'node_modules/**', 'out/**'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
