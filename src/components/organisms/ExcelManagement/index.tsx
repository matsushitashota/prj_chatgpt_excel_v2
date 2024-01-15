import styled from "styled-components"
import { Button } from "@mui/material"
import { ChangeEvent } from "react"

type Props = {
  handleClickUpload: (e: ChangeEvent<HTMLInputElement>) => void
  handleDownload: () => void
  unavailableDownload: boolean
}

export const ExcelManagement = ({ handleClickUpload, handleDownload, unavailableDownload }: Props) => {
  const resetInputFile = (event: React.MouseEvent<HTMLInputElement>) => {
    const input = event.currentTarget as HTMLInputElement
    input.value = ""
  }

  return (
    <Container>
      <Button
        color="inherit"
        sx={{
          borderRadius: "20px",
          padding: "4px 24px",
          margin: "4px",
          border: "1px solid #42a5f5",
          color: "#42a5f5"
        }}
        component="label"
      >
        <input type="file" hidden onChange={handleClickUpload} onClick={resetInputFile} />
        UPLOAD
      </Button>
      <Button
        onClick={handleDownload}
        color="inherit"
        sx={{
          borderRadius: "20px",
          padding: "4px 24px",
          margin: "4px",
          border: unavailableDownload ? "1px solid lightgray" : "1px solid #4caf50",
          color: "#4caf50"
        }}
        disabled={unavailableDownload}
      >
        DOWNLOAD
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 120px;
  padding: 0 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
`
