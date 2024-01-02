import { handleSignOut } from "@/src/hooks/api"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import { Button as MuiButton } from "@mui/material"
import { useRouter } from "next/router"
import styled from "styled-components"

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const SideMenu = ({ isOpen, setIsOpen }: Props) => {
  const router = useRouter()
  const handleLogout = async () => {
    handleSignOut()
    router.push("/login")
  }

  return (
    <Container $isOpen={isOpen}>
      <SideMenuContentsContainer>
        <UserNameWrapper>
          <UserName>松下生太</UserName>
          {isOpen && <KeyboardDoubleArrowLeftIcon onClick={() => setIsOpen(!isOpen)} />}
        </UserNameWrapper>
        <HorizontalLine />
        <Button variant="text" color="inherit">
          Home
        </Button>
        <Button variant="text" color="inherit">
          Prompts
        </Button>
        <Button variant="text" color="inherit">
          Help
        </Button>
        <Button variant="text" color="inherit">
          Settings
        </Button>
        <Button variant="text" color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </SideMenuContentsContainer>
    </Container>
  )
}

const Container = styled.div<{ $isOpen: boolean }>`
  width: 220px;
  height: 100%; // ヘッダーの高さを引かずに、画面いっぱいに設定
  position: fixed;
  top: 0; // ヘッダーの高さを引かずに、画面のトップに設定
  bottom: 0;
  left: 0;
  background-color: white;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  border: 5px solid white;
  border-radius: 5px;
  box-shadow: ${({ $isOpen }) => ($isOpen ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none")};
`

const SideMenuContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  width: 180px;
  justify-content: space-between;
`

const UserName = styled.div`
  text-align: light;
`

const HorizontalLine = styled.hr`
  width: 180px;
  border: none;
  border-top: 1px solid black;
`

const Button = styled(MuiButton)`
  width: 100%;
  text-align: left;
`

export default SideMenu
