import styled from "styled-components"
import { DemoList } from "../../organisms/DemoList"
import { Layout } from "../../templates/Layout"
import { QuestionChatGpt } from "../../organisms/QuestionChatGpt"
import { ArticleView } from "../../organisms/ArticleView"
import { ExcelManagement } from "../../organisms/ExcelManagement"
import { ChangeEvent, useState } from "react"
import { uploadExcel } from "@/src/utils/upload"
import { excelConversionToSentence } from "@/src/utils/convert"
import { requestOpenApi } from "@/src/hooks/api"
import { downloadExcel } from "@/src/utils/download"

export type LineData = {
  title: string
  [key: `c${number}`]: string
  loading: boolean
  completed: boolean
}

export type ExcelData = LineData[]

export const Home = () => {
  const [uploadDataList, setUploadDataList] = useState<ExcelData>([])
  const [resultList, setResultList] = useState<string[]>([])

  const handleSendChatGPT = async () => {
    const orderDataList = excelConversionToSentence(uploadDataList)
    for (let i = 0; i < orderDataList.length; i++) {
      console.log("chatgptへ質問中:", orderDataList[i])
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: true } : item))
      )
      const res = await requestOpenApi([
        {
          role: "user",
          content: orderDataList[i]
        }
      ])
      console.log("---------------chatgptの回答--------------")
      console.log(res.content)
      console.log("-----------------------------------------")
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: false, completed: true } : item))
      )
      if (!res) return
      setResultList((prevState) => [...prevState, res.content ?? ""])
    }
  }

  const handleDownload = () => {
    downloadExcel({ uploadDataList, resultList })
  }

  const handleClickUpload = (e: ChangeEvent<HTMLInputElement>) => {
    uploadExcel({ e, setUploadDataList })
  }

  return (
    <Layout meta={{ pageTitle: "Home" }}>
      <Container>
        <MainContainer>
          <QuestionChatGpt handleSendChatGPT={handleSendChatGPT} />
          <ArticleView />
        </MainContainer>
        <SideContainer>
          <ExcelManagement handleClickUpload={handleClickUpload} handleDownload={handleDownload} />
          <DemoList uploadDataList={uploadDataList} />
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
