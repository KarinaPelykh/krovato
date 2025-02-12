import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tailwindcss from 'eslint-plugin-tailwindcss'
import tsparser from '@typescript-eslint/parser'
import tseslint from '@typescript-eslint/eslint-plugin'

export default {
  languageOptions: {
    parser: tsparser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: globals.browser
  },
  plugins: {
    '@typescript-eslint': tseslint,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    tailwindcss
  },
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
}
