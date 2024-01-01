import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import styled from "styled-components"

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const SideMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Container isOpen={isOpen}>
      <SideMenuContentsContainer>
        <UserNameWrapper>
          <UserName>山田太郎</UserName>
          {isOpen && <KeyboardDoubleArrowLeftIcon onClick={() => setIsOpen(!isOpen)} />}
        </UserNameWrapper>
        <HorizontalLine />
        <Menu>Home</Menu>
        <Menu>Profile</Menu>
        <Menu>Settings</Menu>
        <Menu>Logout</Menu>
      </SideMenuContentsContainer>
    </Container>
  )
}

const Container = styled.div<{ isOpen: boolean }>`
  width: 220px;
  height: 100%; // ヘッダーの高さを引かずに、画面いっぱいに設定
  position: absolute;
  top: 0; // ヘッダーの高さを引かずに、画面のトップに設定
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 2; // 追加
  border: 5px solid white; // 10pxの白い縁を追加
  border-radius: 5px; // 角丸にする
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); // 影を追加
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

const Menu = styled.div`
  width: 180px;
`
const HorizontalLine = styled.hr`
  width: 180px;
  border: none;
  border-top: 1px solid black;
`

export default SideMenu
