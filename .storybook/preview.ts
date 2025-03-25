import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1B1C1D' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'light',
      dark: { ...themes.dark, appBg: '#1B1C1D' },
      light: { ...themes.normal, appBg: '#FFFFFF' },
    },
  },
}

export default preview
