import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Unitail',
  description: 'UnifyTailwind BLOCKS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
