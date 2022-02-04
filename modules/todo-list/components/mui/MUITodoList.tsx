import { List, ListItem, IconButton, ListItemText, Box, Checkbox, ListItemIcon, ListItemButton } from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@mui/icons-material';

import { ListItemDTO } from "../../interfaces";
import { useInMemoryTodoList } from "../../hooks";
import { useState } from "react";

const MUITodoListItem = ({ item }: { item: ListItemDTO }) => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <ListItem
      sx={{ marginBottom: 2 }}
      secondaryAction={
        <Box>
          <IconButton edge="end" aria-label="delete">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={item.title}
        />
      </ListItemButton>
    </ListItem>
  );
}

export const MUITodoList = ({ initialItems }: { initialItems: ListItemDTO[] }) => {
  const { items, addItem, removeItem, updateItem } = useInMemoryTodoList(initialItems);
  return (
    <List dense={true}>
      {items.map((item) => {
        return (
          <MUITodoListItem key={item.id} item={item} />
        )
      })}
    </List>
  );
};
