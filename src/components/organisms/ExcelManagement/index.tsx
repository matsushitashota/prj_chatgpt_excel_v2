import styled from "styled-components"
import { Button } from "@mui/material"
import { ChangeEvent } from "react"

type Props = {
  handleClickUpload: (e: ChangeEvent<HTMLInputElement>) => void
  handleDownload: () => void
}

export const ExcelManagement = ({ handleClickUpload, handleDownload }: Props) => {
  return (
    <Container>
      <Button
        color="inherit"
        sx={{
          borderRadius: "20px",
          padding: "4px 24px",
          margin: "4px",
          border: "1px solid lightgray"
        }}
        component="label"
      >
        <input type="file" hidden onChange={handleClickUpload} />
        UPLOAD
      </Button>
      <Button
        onClick={handleDownload}
        color="inherit"
        sx={{
          borderRadius: "20px",
          padding: "4px 24px",
          margin: "4px",
          border: "1px solid lightgray"
        }}
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
