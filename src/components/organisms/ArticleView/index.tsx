import styled from "styled-components"
import { Button } from "@mui/material"

type Props = {
  questionData: string
  resultData: string
}

export const ArticleView = ({ questionData, resultData }: Props) => {
  return (
    <Container>
      <ArticleWrapper>
        <Button
          color="primary"
          sx={{
            borderRadius: "20px",
            padding: "4px 24px",
            margin: "4px",
            border: "1px solid"
          }}
          fullWidth
        >
          Question Copy
        </Button>
        <Question>{questionData}</Question>
      </ArticleWrapper>
      <ArticleWrapper>
        <Button
          color="success"
          sx={{
            borderRadius: "20px",
            padding: "4px 24px",
            margin: "4px",
            border: "1px solid"
          }}
          fullWidth
        >
          Result Copy
        </Button>
        <Result>{resultData}</Result>
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
  width: 100%;
  min-height: 600px;
  white-space: pre-wrap;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #42a5f5;
  border-radius: 8px;
`

const Result = styled.div`
  width: 100%;
  min-height: 600px;
  white-space: pre-wrap;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #4caf50;
  border-radius: 8px;
`
