import { ChangeEvent, Dispatch, SetStateAction } from "react"
import * as XLSX from "xlsx"
import { ExcelData } from "../components/pages/Top"

type Props = {
  e: ChangeEvent<HTMLInputElement>
  setUploadDataList: Dispatch<SetStateAction<ExcelData>>
}

export const uploadExcel = ({ e, setUploadDataList }: Props) => {
  if (!e.target.files || e.target.files.length === 0) return
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (evt) => {
    if (evt.target === null || typeof evt.target.result !== "string") return
    // evt.target.result には読み込んだファイルの内容が含まれています
    const bstr = evt.target.result
    const wb = XLSX.read(bstr, { type: "binary" })
    // 最初のワークシートの名前を取得
    const wsname = wb.SheetNames[0]
    // 最初のワークシートを取得
    const ws = wb.Sheets[wsname]
    // ワークシートを配列に変換
    const data: ExcelData = XLSX.utils.sheet_to_json(ws)
    setUploadDataList(data)
  }
  reader.readAsBinaryString(file)
}
