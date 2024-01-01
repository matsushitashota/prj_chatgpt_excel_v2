import styled from "styled-components"
import { DemoList } from "../../organisms/DemoList"
import { Layout } from "../../templates/Layout"
import { QuestionChatGpt } from "../../organisms/QuestionChatGpt"
import { ArticleView } from "../../organisms/ArticleView"
import { ExcelManagement } from "../../organisms/ExcelManagement"

export const Home = () => {
  return (
    <Layout meta={{ pageTitle: "Home" }}>
      <Container>
        <MainContainer>
          <QuestionChatGpt />
          <ArticleView />
        </MainContainer>
        <SideContainer>
          <ExcelManagement />
          <DemoList />
        </SideContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  padding: 24px 48px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 30px;
`

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 20px;
`
