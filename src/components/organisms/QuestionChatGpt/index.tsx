import styled from "styled-components"
import { Button } from "@mui/material"
import { downloadTemplateExcel } from "@/src/utils/download"

type Props = {
  handleSendChatGPT: () => void
  handleAllSendChatGPT: () => void
  unavailableQuestion: boolean
}

export const QuestionChatGpt = ({ handleSendChatGPT, handleAllSendChatGPT, unavailableQuestion }: Props) => {
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    downloadTemplateExcel()
  }

  return (
    <Container>
      {/* <Wrapper>
        <p>選択中のテンプレート：テスト１</p>
        <Button
          color="inherit"
          sx={{
            borderRadius: "20px",
            padding: "4px 24px",
            margin: "4px",
            border: "1px solid lightgray"
          }}
          disabled
        >
          テンプレートを変更する
        </Button>
      </Wrapper> */}
      <Wrapper>
        <p>Excelデータを元にChatGPTに質問</p>
        <Button
          onClick={handleSendChatGPT}
          color="inherit"
          sx={{
            borderRadius: "20px",
            padding: "4px 24px",
            margin: "4px",
            border: "1px solid lightgray"
          }}
          disabled={unavailableQuestion}
        >
          Question
        </Button>
      </Wrapper>
      <Wrapper>
        <p>一括で質問 ※料金に注意</p>
        <Button
          onClick={handleAllSendChatGPT}
          color="inherit"
          sx={{
            borderRadius: "20px",
            padding: "4px 24px",
            margin: "4px",
            border: "1px solid lightgray"
          }}
          disabled={unavailableQuestion}
        >
          bulk question
        </Button>
      </Wrapper>
      <p>
        <a href="#" onClick={handleDownloadClick}>
          sample download
        </a>
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
  gap: 100px;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
