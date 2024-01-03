import styled from "styled-components"
import { Button, Snackbar, Alert, SnackbarCloseReason } from "@mui/material"
import React from "react"

type Props = {
  questionData: string
  resultData: string
}

export const ArticleView = ({ questionData, resultData }: Props) => {
  const [open, setOpen] = React.useState(false)

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setOpen(true)
  }

  const handleSnackbarClose = (event?: React.SyntheticEvent<Element, Event> | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const handleQuestionCopy = async () => {
    handleCopy(questionData)
  }

  const handleResultCopy = async () => {
    handleCopy(resultData)
  }

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
          onClick={handleQuestionCopy}
        >
          Question Copy
        </Button>
        <TextArea>{questionData}</TextArea>
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
          onClick={handleResultCopy}
        >
          Result Copy
        </Button>
        <TextArea isResult={true}>{resultData}</TextArea>
      </ArticleWrapper>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          クリップボードにコピーしました
        </Alert>
      </Snackbar>
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

const TextArea = styled.div<{ isResult?: boolean }>`
  width: 100%;
  min-height: 600px;
  white-space: pre-wrap;
  font-size: 14px;
  padding: 8px;
  border: 1px solid ${(props) => (props.isResult ? "#4caf50" : "#42a5f5")};
  border-radius: 8px;
`
