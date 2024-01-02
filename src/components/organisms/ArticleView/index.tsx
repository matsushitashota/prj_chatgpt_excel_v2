import styled from "styled-components"
import { PROMPT } from "./prompt"
import { RESULT } from "./result"
import { Button } from "@mui/material"

export const ArticleView = () => {
  return (
    <Container>
      <ArticleWrapper>
        <Button color="primary" variant="outlined" fullWidth>
          Question Copy
        </Button>
        <Question>{PROMPT}</Question>
      </ArticleWrapper>
      <ArticleWrapper>
        <Button color="success" variant="outlined" fullWidth>
          Result Copy
        </Button>
        <Result>{RESULT}</Result>
      </ArticleWrapper>
    </Container>
  )
}

const Container = styled.div`
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
