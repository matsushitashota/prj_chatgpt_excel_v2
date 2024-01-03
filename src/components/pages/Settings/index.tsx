import styled from "styled-components"
import { Layout } from "../../templates/Layout"
import { Button, TextField, IconButton, InputAdornment } from "@mui/material"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { getApiKeyForReload, postApiKey } from "@/src/hooks/api"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { getAuth, onAuthStateChanged } from "firebase/auth"

type FormData = {
  apiKey: string
}

export const useGetApiKey = () => {
  const auth = getAuth()
  const [apiKey, setApiKey] = useState<string | null>("")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getApiKeyForReload(user.uid).then((result) => setApiKey(result))
      }
    })

    // クリーンアップ関数で購読を解除
    return () => unsubscribe()
  }, [auth])

  return apiKey
}

export const Settings = () => {
  const apiKey = useGetApiKey()
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      apiKey: ""
    }
  })

  const [showApiKey, setShowApiKey] = useState(false)

  const handleClickShowApiKey = () => {
    setShowApiKey(!showApiKey)
  }

  const onSubmit = (data: FormData) => {
    postApiKey(data.apiKey)
  }

  useEffect(() => {
    setValue("apiKey", apiKey ?? "")
  }, [apiKey, setValue])

  return (
    <Layout meta={{ pageTitle: "Settings" }}>
      <Container>
        <MainContainer>
          <Wrapper>
            <h1>API Key設定</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputWrapper>
                <TextField
                  {...register("apiKey")}
                  id="outlined-password-input"
                  placeholder={"API Key"}
                  type={showApiKey ? "text" : "password"}
                  autoComplete="current-password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowApiKey}>
                          {showApiKey ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button type="submit" variant="contained" color="primary">
                  設定
                </Button>
              </InputWrapper>
            </form>
          </Wrapper>
        </MainContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  padding: 24px 48px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 30px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
