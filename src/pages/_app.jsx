import { Outlet } from '@tanstack/react-router'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { theme } from '../theme'

export default function App() {
  return (
    <main>
      <MantineProvider theme={theme}>
        <Outlet />
      </MantineProvider>
    </main>
  )
}
