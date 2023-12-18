// const DATA = [
//   { name: "John", age: 30, height: 160 },
//   { name: "Jane", age: 25, height: 160 },
//   { name: "Bob", age: 40, height: 160 },
// ]

import { ExcelData } from "../components/pages/Top"

export const excelConversionToSentence = (excelData: ExcelData): string[] => {
  return excelData.map(
    (
      data
    ) => `${data.head1}\n\n${data.content1}\n\n${data.head2}\n\n${data.content2}\n\n${data.head3}\n\n${data.content3}\n\n${data.head4}\n\n${data.content4}
      `
  )
}
