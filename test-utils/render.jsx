import { render as testingLibraryRender } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { theme } from '../src/theme'

export function render(ui = <></>) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }) => <MantineProvider theme={theme}>{children}</MantineProvider>
  })
}
