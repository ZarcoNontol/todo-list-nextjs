import faker from "faker";
import { List, ListItem, IconButton, ListItemText, Box, Checkbox, ListItemIcon, ListItemButton, Typography, Button } from "@mui/material";
import {
  AddBoxSharp,
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@mui/icons-material';

import { ListItemDTO, ListItemRootProps } from "../../interfaces";
import { useInMemoryTodoList } from "../../hooks";
import { useState } from "react";

const MUITodoListItem = ({ item, onRemove, onUpdate }: ListItemRootProps) => {
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
          <IconButton edge="end" aria-label="delete" onClick={() => {
            onRemove(item.id)
          }}>
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
    <Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography>MUITodoList</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            addItem(faker.company.companyName());
          }}
        >
          Add Item
        </Button>
      </Box>
      <List dense={true}>
        {items.map((item) => {
          return (
            <MUITodoListItem key={item.id} item={item} onRemove={removeItem} onUpdate={updateItem} />
          )
        })}
      </List>
    </Box>
  );
};
