import { handleFetch, handleSave, handleSignOut, signInWithGoogle } from "@/src/hooks/api"
import { useRouter } from "next/router"

export const Login = () => {
  const router = useRouter()
  const handleClickGoogleSignIn = async () => {
    const successLogin = await signInWithGoogle()
    if (successLogin) {
      router.push("/home")
    } else {
      console.log("ログイン失敗しました")
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "40px"
      }}
    >
      <button onClick={handleClickGoogleSignIn}>Googleでサインイン</button>
      <button onClick={handleSignOut}>サインアウト</button>
      <button onClick={handleSave}>save</button>
      <button onClick={handleFetch}>get</button>
    </div>
  )
}
