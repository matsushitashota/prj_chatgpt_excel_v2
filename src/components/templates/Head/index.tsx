import NextHead from "next/head"

export interface HeadProps {
  pageTitle: string
  meta?: {
    description?: string
  }
}
/* // metaにnameとcontentをpropsから適応する */
export const Head = ({ pageTitle, meta }: HeadProps) => (
  <NextHead>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content={meta?.description ?? "chatGPT excel create"} />
    <title>{pageTitle}</title>
  </NextHead>
)
