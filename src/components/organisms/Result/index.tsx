import styled from "styled-components"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { ExcelData } from "../../pages/Home"
import CheckIcon from "@mui/icons-material/Check"
import LoopIcon from "@mui/icons-material/Loop"

type Props = {
  uploadDataList: ExcelData
}

export const Result = ({ uploadDataList }: Props) => {
  return (
    <Container>
      <List>
        {uploadDataList.length > 0 &&
          uploadDataList.map((uploadData, index) => (
            <ListItem key={`upload_data_${index}`} disablePadding>
              <ListItemButton>
                <ListItemText primary={`${uploadData.title}`} />
                {uploadData.loading && <LoopIcon />}
                {uploadData.completed && <CheckIcon />}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: solid 1px;
  border-radius: 8px;
`
