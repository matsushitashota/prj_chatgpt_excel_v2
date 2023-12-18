import styled from "styled-components"
import { Layout } from "../../templates/Layout"
import { Spacer } from "../../atoms/Spacer"
import { Menu } from "../../organisms/Menu"
import { Result } from "../../organisms/Result"
import { uploadExcel } from "@/src/utils/upload"
import { ChangeEvent, useState } from "react"
import { requestOpenApi } from "@/src/hooks/api"
import { excelConversionToSentence } from "@/src/utils/convert"
import { downloadExcel } from "@/src/utils/download"

export type LineData = {
  no: string
  title: string
  head1: string
  head2: string
  head3: string
  head4: string
  content1: string
  content2: string
  content3: string
  content4: string
  loading: boolean
  completed: boolean
}

export type ExcelData = LineData[]

export const Top = () => {
  const [uploadDataList, setUploadDataList] = useState<ExcelData>([])
  const [resultList, setResultList] = useState<string[]>([])

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    uploadExcel({ e, setUploadDataList })
  }

  const handleSendChatGPT = async () => {
    const orderDataList = excelConversionToSentence(uploadDataList)
    for (let i = 0; i < orderDataList.length; i++) {
      setUploadDataList((prevState) =>
        prevState.map((item, index) => (index === i ? { ...item, loading: true } : item))
      )
      const res = await requestOpenApi([
        {
          role: "user",
          content: orderDataList[i]
        }
      ])
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

  return (
    <Layout meta={{ pageTitle: "chatgpt excel" }}>
      <TitleWrapper>
        <Title>chatGPT for Excel</Title>
      </TitleWrapper>
      <Container>
        <Menu handleUpload={handleUpload} handleSendChatGPT={handleSendChatGPT} handleDownload={handleDownload} />
        <Spacer x={24} />
        <Result uploadDataList={uploadDataList} />
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
