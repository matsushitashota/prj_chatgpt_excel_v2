import { ExcelData, LineData } from "../components/pages/Home"

// excelデータをテンプレートをもとに文章に変換
export const excelConversionToSentence = (excelData: ExcelData): string[] => {
  const maxNumber = getMaxNumberFromKey(excelData)
  return excelData.map((data: LineData) => {
    let result = ""
    for (let i = 1; i <= maxNumber; i++) {
      result += `${data[`c${i}`]}`
      if (i < maxNumber) {
        result += "\n\n"
      }
    }
    return result
  })
}

// 列の数の最大値を取得
const getMaxNumberFromKey = (data: ExcelData) => {
  // excelの2行目のkeyを取得
  const keys = Object.keys(data[1])
  const numbers = keys
    .filter((key) => key.startsWith("c"))
    .map((key) => parseInt(key.slice(1)))
    .filter((number) => !isNaN(number))
  return Math.max(...numbers)
}
