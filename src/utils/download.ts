import * as XLSX from "xlsx"
import saveAs from "file-saver"
import { ExcelData } from "../components/pages/Home"

type Props = {
  uploadDataList: ExcelData
  resultList: string[]
}

export const downloadExcel = ({ uploadDataList, resultList }: Props) => {
  const exportDataList = uploadDataList.map((uploadData, index) => {
    // loadingとcompletedを取り除く
    // eslint-disable-next-line
    const { loading, completed, ...rest } = uploadData
    return { ...rest, result: resultList[index] }
  })

  const keys = Object.keys(exportDataList[0])

  const worksheet = XLSX.utils.json_to_sheet(exportDataList, {
    header: keys
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

  // ファイル名を作成
  const filename = createFileName()

  // ユーザーのコンピュータにダウンロード
  saveAs(excelBlob, filename)
}

// ファイル名を作成する関数
const createFileName = () => {
  // 現在の日付を取得
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // JavaScriptの月は0から始まるため、1を加えます
  const day = date.getDate()

  // ファイル名を作成（例：result_2022-01-01.xlsx）
  return `result_${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}.xlsx`
}
