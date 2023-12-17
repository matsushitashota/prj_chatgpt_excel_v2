import { ReactNode } from "react"
import styled from "styled-components"
import { Head, HeadProps } from "../Head"

interface Props {
  children: ReactNode
  meta: HeadProps
}

export const Layout = ({ children, meta }: Props) => {
  return (
    <>
      <Head {...meta} />
      <Container>{children}</Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
