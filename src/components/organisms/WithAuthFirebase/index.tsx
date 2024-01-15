import { useDispatch } from "react-redux"
import { ReactNode, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { actions } from "../../../store/domain/user"

export const WithAuthFirebase = ({ children }: { children: ReactNode }) => {
  const auth = getAuth()
  const router = useRouter()
  const dispatch = useDispatch()

  // ログアウトしている場合はログイン画面へ戻す
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(actions.setUserName({ userName: user.displayName || "" }))
      } else if (router.pathname !== "/login") {
        router.push("/login")
      }
    })

    return () => unsubscribe()
  }, [auth, router, dispatch])

  return <>{children}</>
}
