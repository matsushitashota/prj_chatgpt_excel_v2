import * as XLSX from "xlsx"
import { ExcelData } from "../components/pages/Top"
import saveAs from "file-saver"

type Props = {
  uploadDataList: ExcelData
  resultList: string[]
}

export const downloadExcel = ({ uploadDataList, resultList }: Props) => {
  const exportDataList = uploadDataList.map((uploadData, index) => {
    return { ...uploadData, result: resultList[index] }
  })

  const worksheet = XLSX.utils.json_to_sheet(exportDataList, {
    header: [
      "no",
      "title",
      "head1",
      "content1",
      "head2",
      "content2",
      "head3",
      "content3",
      "head4",
      "content4",
      "result"
    ]
  })

  // ワークブックの作成
  const workbook = XLSX.utils.book_new()
  // ワークシートの作成（シート名の設定）
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")

  // ワークブックのデータをバイナリデータに格納
  const excelUnit8Array = XLSX.write(workbook, { type: "array" })

  // バイナリデータをblobオブジェクトに変換
  // typeではexcelの.xlsx形式のファイルを指定
  const excelBlob = new Blob([excelUnit8Array], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  })

  // 現在の日付を取得
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // JavaScriptの月は0から始まるため、1を加えます
  const day = date.getDate()

  // ファイル名を作成（例：result_2022-01-01.xlsx）
  const filename = `result_${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}.xlsx`

  // ユーザーのコンピュータにダウンロード
  saveAs(excelBlob, filename)
}
