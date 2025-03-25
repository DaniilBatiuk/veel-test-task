import antfu from '@antfu/eslint-config'

const config = antfu({
  typescript: true,
  react: true,
  jsx: true,
  tailwind: true,
  stylistic: false,
  extends: ['plugin:@tanstack/eslint-plugin-query/recommended', 'plugin:@next/next/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    'no-console': 'warn',
    'prefer-const': 'warn',
    'react/jsx-no-undef': 'error',
    'no-undef': 'off',
    'node/prefer-global/process': 'off',
    'import/consistent-type-specifier-style': 'off',
    'perfectionist/sort-named-imports': 'off',
    'no-undef-init': 'off',
    eqeqeq: 'warn',
    'prefer-template': 'warn',
    'perfectionist/sort-imports': 'off',
    'jsonc/sort-keys': 'off',
    'unicorn/prefer-number-properties': 'off',
  },
})

export default config
