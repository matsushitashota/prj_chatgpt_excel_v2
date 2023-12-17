import styled from "styled-components"
import { Layout } from "../../templates/Layout"
import { Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Spacer } from "../../atoms/Spacer"

export const Top = () => {
  return (
    <Layout meta={{ pageTitle: "chatgpt excel" }}>
      <TitleWrapper>
        <Title>chatGPT for Excel</Title>
      </TitleWrapper>
      <Container>
        <MenuContainer>
          <ContentTitle>Result Download</ContentTitle>
          <Spacer y={12} />
          <Button variant="contained" color="primary" onClick={() => {}} style={{ width: "240px" }}>
            download
          </Button>
          <Spacer y={12} />
          <ContentTitle>Question Upload</ContentTitle>
          <Spacer y={12} />
          <Button variant="contained" component="label" style={{ width: "240px" }}>
            Upload
            <input type="file" hidden onChange={() => {}} />
          </Button>
          <Spacer y={24} />
          <Button variant="contained" color="primary" onClick={() => {}} style={{ width: "240px" }}>
            send
          </Button>
        </MenuContainer>
        <Spacer x={24} />
        <ResultContainer>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </ResultContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  margin-top: 100px;
`

const ContentTitle = styled.h2``

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 300px;
  border: solid 1px;
  border-radius: 8px;
`
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  border: solid 1px;
  border-radius: 8px;
`
