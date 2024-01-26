import styled from "styled-components"
import { UploadList } from "../../organisms/UploadList"
import { Layout } from "../../templates/Layout"
import { QuestionChatGpt } from "../../organisms/QuestionChatGpt"
import { ArticleView } from "../../organisms/ArticleView"
import { ExcelManagement } from "../../organisms/ExcelManagement"
import { ChangeEvent, useState } from "react"
import { uploadExcel } from "@/src/utils/upload"
import { getApiKey, requestOpenApi } from "@/src/hooks/api"
import { downloadExcel } from "@/src/utils/download"

export type LineData = {
  title: string
  [key: `c${number}`]: string
  loading: boolean
  completed: boolean
}

export type ExcelData = LineData[]

const BATCH_SIZE = 5

export const Home = () => {
  const [uploadDataList, setUploadDataList] = useState<ExcelData>([])
  const [questionList, setQuestionList] = useState<string[]>([])
  const [resultList, setResultList] = useState<string[]>([])
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0)

  const handleSendChatGPT = async () => {
    const api_key = await getApiKey()
    if (!api_key) return
    for (let i = 0; i < questionList.length; i++) {
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: true } : item))
      )
      const res = await requestOpenApi(
        [
          {
            role: "user",
            content: questionList[i]
          }
        ],
        api_key
      )
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
    const api_key = await getApiKey()
    if (!api_key) return

    // リクエストをバッチサイズに分ける
    for (let i = 0; i < questionList.length; i += BATCH_SIZE) {
      const batchQuestions = questionList.slice(i, i + BATCH_SIZE)
      const requests = batchQuestions.map(async (question, index) => {
        const actualIndex = i + index
        setUploadDataList((prevState) =>
          prevState.map((item, idx) => (idx === actualIndex ? { ...item, loading: true } : item))
        )

        const res = await requestOpenApi(
          [
            {
              role: "user",
              content: question
            }
          ],
          api_key
        )

        setUploadDataList((prevState) =>
          prevState.map((item, idx) => (idx === actualIndex ? { ...item, loading: false, completed: true } : item))
        )

        if (res) {
          setResultList((prevState) => [...prevState, res.content ?? ""])
        }
      })
      await Promise.all(requests)
    }
  }

  const handleDownload = () => {
    downloadExcel({ uploadDataList, resultList })
  }

  const resetData = () => {
    setUploadDataList([])
    setQuestionList([])
    setResultList([])
  }

  const handleClickUpload = (e: ChangeEvent<HTMLInputElement>) => {
    resetData()
    uploadExcel({ e, setUploadDataList, setQuestionList })
  }

  const handleSelectUploadItem = (index: number) => {
    setSelectedItemIndex(index)
  }

  const handleReloadUploadItem = async (reloadIndex: number) => {
    const api_key = await getApiKey()
    if (!api_key) return
    setUploadDataList((prevState) =>
      prevState.map((item, index) => (index === reloadIndex ? { ...item, loading: true, completed: false } : item))
    )
    setResultList((prevState) => [...prevState.slice(0, reloadIndex), "", ...prevState.slice(reloadIndex + 1)])
    const res = await requestOpenApi(
      [
        {
          role: "user",
          content: questionList[reloadIndex]
        }
      ],
      api_key
    )
    setUploadDataList((prevState) =>
      prevState.map((item, index) => (index === reloadIndex ? { ...item, loading: false, completed: true } : item))
    )
    if (!res) return
    setResultList((prevState) => [
      ...prevState.slice(0, reloadIndex),
      res.content ?? "",
      ...prevState.slice(reloadIndex + 1)
    ])
  }

  const selectedQuestionData = questionList[selectedItemIndex] ?? "Dataが存在しません"
  const selectedResultDta = resultList[selectedItemIndex] ?? "未生成"
  const notExistQuestionList = questionList.length < 1
  const notExistResultList = resultList.length < 1

  return (
    <Layout meta={{ pageTitle: "Home" }}>
      <Container>
        <SideContainer>
          <ExcelManagement
            handleClickUpload={handleClickUpload}
            handleDownload={handleDownload}
            unavailableDownload={notExistResultList}
          />
          <UploadList
            uploadDataList={uploadDataList}
            selectedItemIndex={selectedItemIndex}
            handleSelectUploadItem={handleSelectUploadItem}
            handleReloadUploadItem={handleReloadUploadItem}
          />
        </SideContainer>
        <MainContainer>
          <QuestionChatGpt
            handleSendChatGPT={handleSendChatGPT}
            handleAllSendChatGPT={handleAllSendChatGPT}
            unavailableQuestion={notExistQuestionList}
          />
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
  width: 70%;
  gap: 30px;
`

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 20px;
`
