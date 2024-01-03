import styled from "styled-components"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import LoopIcon from "@mui/icons-material/Loop"
import { ExcelData } from "../../pages/Home"

type Props = {
  uploadDataList: ExcelData
  handleSelectUploadItem: (index: number) => void
  selectedItemIndex: number
}

export const UploadList = ({ uploadDataList, handleSelectUploadItem, selectedItemIndex }: Props) => {
  return (
    <Container>
      <List>
        {uploadDataList.map((listData, index) => (
          <ListItem key={`upload_data_${index}`} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: "20px",
                padding: "4px 24px",
                margin: "4px",
                border: "1px solid lightgray",
                backgroundColor: selectedItemIndex === index ? "lightgray" : "white" // This line has been added
              }}
              onClick={() => {
                handleSelectUploadItem(index)
              }}
            >
              <ListItemText primary={`${listData.title}`} />
              {listData.loading && <LoopIcon />}
              {listData.completed && <CheckIcon />}
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
  max-height: 1500px;
  padding: 0 8px;
  overflow: auto;
`
