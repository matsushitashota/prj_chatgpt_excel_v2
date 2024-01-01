import styled from "styled-components"

const PROMPT = "Please write a summary of the following article."

export const DemoPrompt = () => {
  return <Container>{PROMPT}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  border: solid 1px;
  border-radius: 8px;
`
