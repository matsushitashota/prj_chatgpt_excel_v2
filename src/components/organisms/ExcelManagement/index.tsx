import styled from "styled-components"
import { Button } from "@mui/material"

export const ExcelManagement = () => {
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
      >
        UPLOAD
      </Button>
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
