import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // Ignores
  {
    ignores: ['**/dist/**']
  },

  // Globals
  {
    files: ['**/*.js', '**/*.ts', '**/*.json'],
    languageOptions: {
      globals: globals.node,
      parserOptions: { sourceType: 'module' }
    }
  },

  // Extends
  js.configs.recommended,
  ...ts.configs.recommended,
  eslintConfigPrettier,

  // Rules
  {}
]
