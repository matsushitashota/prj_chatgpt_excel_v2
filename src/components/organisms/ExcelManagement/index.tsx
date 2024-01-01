import styled from "styled-components"
import { Button as MuiButton } from "@mui/material"

export const ExcelManagement = () => {
  return (
    <Container>
      <Button color="inherit">UPLOAD</Button>
      <Button color="inherit" disabled>
        DOWNLOAD
      </Button>
    </Container>
  )
}

const Button = styled(MuiButton)`
  border-radius: 20px;
  padding: 4px 24px;
  margin: 4px;
  border: 1px solid lightgray;
`

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
