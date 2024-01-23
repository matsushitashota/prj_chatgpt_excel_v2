import styled from "styled-components"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import LoopIcon from "@mui/icons-material/Loop"
import ReplayIcon from "@mui/icons-material/Replay"
import { ExcelData } from "../../pages/Home"

type Props = {
  uploadDataList: ExcelData
  selectedItemIndex: number
  handleSelectUploadItem: (index: number) => void
  handleReloadUploadItem: (index: number) => void
}

export const UploadList = ({
  uploadDataList,
  selectedItemIndex,
  handleSelectUploadItem,
  handleReloadUploadItem
}: Props) => {
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
              <ListItemText
                primary={`${listData.title}`}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
              />
              {listData.loading && (
                <LoopIcon style={{ color: "#42a5f5", animation: "spin 4s linear infinite reverse" }} />
              )}
              {listData.completed && <CheckIcon style={{ color: "#4caf50" }} />}
              {listData.completed && (
                <ReplayIcon
                  style={{ color: "#4caf50" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#42a5f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4caf50")}
                  onClick={() => {
                    handleReloadUploadItem(index)
                  }}
                />
              )}
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
