import styled from "styled-components"
import { Button } from "@mui/material"
import { Spacer } from "../../atoms/Spacer"
import { ChangeEvent } from "react"

type Props = {
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void
  handleSendChatGPT: () => void
  handleDownload: () => void
  readyChatGPT: boolean
}

export const Menu = ({ handleUpload, handleSendChatGPT, handleDownload, readyChatGPT }: Props) => {
  return (
    <Container>
      <ContentTitle>Result Download</ContentTitle>
      <Spacer y={12} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
        disabled={readyChatGPT}
        style={{ width: "240px" }}
      >
        download
      </Button>
      <Spacer y={12} />
      <ContentTitle>Question Upload</ContentTitle>
      <Spacer y={12} />
      <Button variant="contained" component="label" style={{ width: "240px" }}>
        Upload
        <input type="file" hidden onChange={handleUpload} />
      </Button>
      <Spacer y={12} />
      <ContentTitle>chatGPT</ContentTitle>
      <Spacer y={12} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendChatGPT}
        disabled={readyChatGPT}
        style={{ width: "240px" }}
      >
        send
      </Button>
    </Container>
  )
}

const ContentTitle = styled.h2``

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 300px;
  border: solid 1px;
  border-radius: 8px;
`
