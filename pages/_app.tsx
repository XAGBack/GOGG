import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WindowsProvider from '../context/WindowsProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WindowsProvider>
      <Component {...pageProps} />
    </WindowsProvider>
  )
}
