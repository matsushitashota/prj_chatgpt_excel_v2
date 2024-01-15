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

const EXCEL_TEMPLATE = [
  {
    title: "title1",
    c1: "# 命令書",
    c2: "あなたは人事のプロフェッショナルです。\r\n以下の候補者について分析してください。",
    c3: "# 制約条件",
    c4: "・500文字以内で解説してください。\r\n・採用したくなるような文章にしてください。",
    c5: "# 候補者の特徴",
    c6: "学歴:\r\n候補者の名前: 山田太郎\r\n    * 人工知能研究大学\r\n    * 専攻: 情報工学\r\n    * 卒業年度: 2023年\r\n経験:\r\n* 人工知能株式会社 インターン (2022年～2023年):\r\n    * プロジェクト管理の補助を担当し、スケジュールの調整や報告書の作成を行いました。\r\n    * チームメンバーと協力して、新しいデータ分析ツールの実装に成功し、プロジェクトの進捗を効果的に管理しました。\r\n* 人工大学 リサーチアシスタント (2021年～2022年):\r\n    * 指導教授と共同で人工知能を用いた研究を行い、論文執筆に参加しました。\r\n    * データ収集と分析において統計学や機械学習を活用し、研究成果を国内の学会で発表しました。\r\n頑張ってきたこと:\r\n* 自主的なプロジェクト:\r\n    * 大学在学中に、自身でPythonプログラミング言語を学び、ウェブ開発に挑戦しました。\r\n    * フルスタックエンジニアリングのスキルを身につけ、webアプリの制作を通じて、利用者に価値を提供できるプロジェクトを完成させました。\r\n* 言語学習:\r\n    * 外国語の重要性を感じ、大学卒業前に英語と中国語を独学で学びました。\r\n    * 資格試験にも挑戦し、中国語検定2級とTOEICスコア800点を取得するなど、言語力向上に努めました。"
  }
]

export const downloadTemplateExcel = () => {
  const keys = Object.keys(EXCEL_TEMPLATE[0])

  const worksheet = XLSX.utils.json_to_sheet(EXCEL_TEMPLATE, {
    header: keys
  })

  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")
  const excelUnit8Array = XLSX.write(workbook, { type: "array" })

  const excelBlob = new Blob([excelUnit8Array], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  })

  saveAs(excelBlob, "demo.xlsx")
}
