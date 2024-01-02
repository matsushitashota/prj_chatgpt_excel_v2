import type { AppProps } from "next/app"
import { GlobalStyles } from "../global-styles"
import { Provider } from "react-redux"
import { store } from "../store"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}
