import { signInWithGoogle } from "@/src/hooks/api"
import { useRouter } from "next/router"
import { GoogleButton } from "../../atoms/Button/GoogleButton"
import styled from "styled-components"

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
    <Container>
      <h1>Login for GPTex</h1>
      <Description>Excelを元にChatGPTへの質問を行うアプリです</Description>
      <Description>下記のGoogle認証でログインして下さい</Description>
      <GoogleButton onClick={handleClickGoogleSignIn} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 40px;
`

const Description = styled.p`
  font-size: 16px;
`
