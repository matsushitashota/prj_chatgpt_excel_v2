import type { AppProps } from "next/app"
import { GlobalStyles } from "../global-styles"
import { Provider } from "react-redux"
import { store } from "../store"
import { ReactNode, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuth()
  const router = useRouter()

  // ログアウトしている場合はログイン画面へ戻す
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user && router.pathname !== "/login") router.push("/login")
    })

    return () => unsubscribe()
  }, [auth, router])

  return (
    <>
      <GlobalStyles />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}
