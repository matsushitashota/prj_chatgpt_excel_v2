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
          <ChatGptContainer>
            <ChatGptWrapper>
              <p>選択中のテンプレート：テスト１</p>
              <Button color="inherit" disabled>
                テンプレートを変更する
              </Button>
            </ChatGptWrapper>
            <ChatGptWrapper>
              <p>Excelデータを元にChatGPTに質問</p>
              <Button color="inherit">Question</Button>
            </ChatGptWrapper>
          </ChatGptContainer>
          <ArticleContainer>
            <ArticleWrapper>
              <Button color="primary" fullWidth>
                Question Copy
              </Button>
              <Question>{PROMPT}</Question>
            </ArticleWrapper>
            <ArticleWrapper>
              <Button color="success" fullWidth>
                Result Copy
              </Button>
              <Result>{RESULT}</Result>
            </ArticleWrapper>
          </ArticleContainer>
        </MainContainer>
        <ExcelContainer>
          <ExcelWrapper>
            <Button color="inherit">UPLOAD</Button>
            <Button color="inherit" disabled>
              DOWNLOAD
            </Button>
          </ExcelWrapper>
          <DemoList />
        </ExcelContainer>
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

const ChatGptContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
  gap: 120px;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`

const ChatGptWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ExcelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 20px;
`

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  gap: 10px;
`

const Question = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #42a5f5;
  border-radius: 8px;
`

const Result = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #4caf50;
  border-radius: 8px;
`

const Button = styled(MuiButton)`
  border-radius: 20px;
  padding: 4px 24px;
  margin: 4px;
  border: 1px solid lightgray;
`

const ExcelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 120px;
  padding: 0 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`
