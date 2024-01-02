import styled from "styled-components"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import LoopIcon from "@mui/icons-material/Loop"

const LIST = [
  {
    no: "1",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "2",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "3",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "4",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "5",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "6",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "7",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "8",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "9",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "10",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "1",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "2",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "3",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "4",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "5",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "6",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "7",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "8",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "9",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "10",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "1",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "2",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "3",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "4",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "5",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "6",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "7",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "8",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "9",
    c1: "text",
    loading: true,
    completed: false
  },
  {
    no: "10",
    c1: "text",
    loading: true,
    completed: false
  }
]

export const DemoList = () => {
  return (
    <Container>
      <List>
        {LIST.map((listData, index) => (
          <ListItem key={`upload_data_${index}`} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: "20px",
                padding: "4px 24px",
                margin: "4px",
                border: "1px solid lightgray"
              }}
            >
              <ListItemText primary={`${listData.no}`} />
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

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
