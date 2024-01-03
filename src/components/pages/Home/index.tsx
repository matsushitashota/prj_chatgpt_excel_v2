import styled from "styled-components"
import { UploadList } from "../../organisms/UploadList"
import { Layout } from "../../templates/Layout"
import { QuestionChatGpt } from "../../organisms/QuestionChatGpt"
import { ArticleView } from "../../organisms/ArticleView"
import { ExcelManagement } from "../../organisms/ExcelManagement"
import { ChangeEvent, useState } from "react"
import { uploadExcel } from "@/src/utils/upload"
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
  const [questionList, setQuestionList] = useState<string[]>([])
  const [resultList, setResultList] = useState<string[]>([])
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0)

  const handleSendChatGPT = async () => {
    for (let i = 0; i < questionList.length; i++) {
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: true } : item))
      )
      const res = await requestOpenApi([
        {
          role: "user",
          content: questionList[i]
        }
      ])
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: false, completed: true } : item))
      )
      if (!res) return
      setResultList((prevState) => [...prevState, res.content ?? ""])
    }
  }

  // 一括で送信する場合
  // TODO:settingsで設定できるようにする
  const handleAllSendChatGPT = async () => {
    const requests = questionList.map(async (question, i) => {
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: true } : item))
      )

      const res = await requestOpenApi([
        {
          role: "user",
          content: question
        }
      ])

      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: false, completed: true } : item))
      )

      if (res) {
        setResultList((prevState) => [...prevState, res.content ?? ""])
      }
    })

    await Promise.all(requests)
  }

  const handleDownload = () => {
    downloadExcel({ uploadDataList, resultList })
  }

  const handleClickUpload = (e: ChangeEvent<HTMLInputElement>) => {
    uploadExcel({ e, setUploadDataList, setQuestionList })
  }

  const handleSelectUploadItem = (index: number) => {
    setSelectedItemIndex(index)
  }

  const selectedQuestionData = questionList[selectedItemIndex] ?? "Dataが存在しません"
  const selectedResultDta = resultList[selectedItemIndex] ?? "未生成"

  return (
    <Layout meta={{ pageTitle: "Home" }}>
      <Container>
        <SideContainer>
          <ExcelManagement
            handleClickUpload={handleClickUpload}
            handleDownload={handleDownload}
            unavailableDownload={resultList.length < 1}
          />
          <UploadList
            uploadDataList={uploadDataList}
            handleSelectUploadItem={handleSelectUploadItem}
            selectedItemIndex={selectedItemIndex}
          />
        </SideContainer>
        <MainContainer>
          <QuestionChatGpt handleSendChatGPT={handleSendChatGPT} handleAllSendChatGPT={handleAllSendChatGPT} />
          {questionList.length > 0 && (
            <>
              <ArticleView questionData={selectedQuestionData} resultData={selectedResultDta} />
            </>
          )}
        </MainContainer>
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
