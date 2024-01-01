import styled from "styled-components"
import { useState, useEffect, ReactNode } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import SideMenu from "../SideMenu"
import { Head, HeadProps } from "../Head"

const BOUNDARY_DISPLAY_WIDTH = 1000

type Props = {
  children: ReactNode
  meta: HeadProps
}

export const Layout = ({ children, meta }: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= BOUNDARY_DISPLAY_WIDTH) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", checkWindowSize)
    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  }, [setIsOpen])

  return (
    <>
      <Head {...meta} />
      <Header isOpen={isOpen}>{!isOpen && <MenuIcon onClick={() => setIsOpen(!isOpen)} />}</Header>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContent isOpen={isOpen}>
        <Wrapper>{children}</Wrapper>
      </MainContent>
    </>
  )
}

const Header = styled.header<{ isOpen: boolean }>`
  height: 60px;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "220px" : "0")};
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 220px)" : "100%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`

const MainContent = styled.main<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 220px)" : "100%")};
  height: calc(100% - 60px);
  position: absolute;
  padding: 5px;
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? "220px" : "0")};
  z-index: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
