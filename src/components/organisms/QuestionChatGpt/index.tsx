import styled from "styled-components"
import { Button as MuiButton } from "@mui/material"

export const QuestionChatGpt = () => {
  return (
    <Container>
      <Wrapper>
        <p>選択中のテンプレート：テスト１</p>
        <Button color="inherit" disabled>
          テンプレートを変更する
        </Button>
      </Wrapper>
      <Wrapper>
        <p>Excelデータを元にChatGPTに質問</p>
        <Button color="inherit">Question</Button>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled(MuiButton)`
  border-radius: 20px;
  padding: 4px 24px;
  margin: 4px;
  border: 1px solid lightgray;
`
