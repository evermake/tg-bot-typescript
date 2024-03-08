import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
    test: true,
    jsonc: true,
    yaml: true,
    markdown: true,

    gitignore: false,
    jsx: false,
    toml: false,
    react: false,
    svelte: false,
    unocss: false,

    formatters: {
      markdown: 'dprint',
    },

    stylistic: {
      indent: 2,
      quotes: 'single',
      jsx: false,
      semi: false,
    },
  },
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'style/quote-props': ['error', 'consistent-as-needed'],
      'object-shorthand': ['error', 'consistent-as-needed'],
      'curly': ['error', 'all'],

      'no-console': 'warn',

      'ts/consistent-type-definitions': 'off',
      'ts/no-redeclare': 'off',
    },
  },
)
