'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

export function ThemeProvider ({ children }: ThemeProviderProps): JSX.Element {
  return (
    <NextThemesProvider attribute='class' defaultTheme='light'>
      {children}
    </NextThemesProvider>
  )
}
