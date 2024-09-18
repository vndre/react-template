import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import mantine from 'eslint-config-mantine'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettierRecommended,
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,d.ts,d.mts}', './.storybook/main.ts'] },
  {
    rules: {
      'react/react-in-jsx-scope': 0
    }
  }
]
