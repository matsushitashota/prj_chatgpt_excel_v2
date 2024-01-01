import styled from "styled-components"
import { DemoList } from "../../organisms/DemoList"
import { Layout } from "../../templates/Layout"
import { DemoPrompt } from "../../organisms/DemoPrompt"
import { DemoResult } from "../../organisms/DemoResult"
import { PROMPT } from "./prompt"
import { RESULT } from "./result"
import { Button as MuiButton } from "@mui/material"

const PROMPTS = [
  {
    no: 1,
    text: "prompt1"
  },
  {
    no: 2,
    text: "prompt2"
  },
  {
    no: 3,
    text: "prompt3"
  }
]

export const Home = () => {
  return (
    <Layout meta={{ pageTitle: "chatgpt excel" }}>
      <Container>
        {/* <DemoPrompt /> */}
        <MainContainer>
          <MenuContainer>
            <ChatGptWrapper>
              <p>選択中のテンプレート：テスト１</p>
              <Button color="inherit">ChatGPTに質問する</Button>
            </ChatGptWrapper>
            <ExcelWrapper>
              <Button color="inherit">UPLOAD</Button>
              <Button color="inherit">DOWNLOAD</Button>
            </ExcelWrapper>
          </MenuContainer>
          <SentenceContainer>
            <Test>{PROMPT}</Test>
            <Test>{RESULT}</Test>
            <DemoWrapper>
              <DemoList />
            </DemoWrapper>
          </SentenceContainer>
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
`

const Test = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  font-size: 14px;
  width: 50%;
  padding: 8px;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 8px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 10px;
`

const SentenceContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 40px;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  width: 100%;
`

const Button = styled(MuiButton)`
  border-radius: 20px;
  padding: 4px 24px;
  margin: 4px;
  border: 1px solid lightgray;
`

const ChatGptWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 40px;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`

const ExcelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  gap: 20px;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`

const DemoWrapper = styled.div`
  width: 20%;
`
