import faker from "faker";

import { useState } from "react";
import { ListItem } from "../interfaces";

export const useInMemoryTodoList = (initialItems: ListItem[]) => {
  const [items, updateItems] = useState(initialItems);
  
  const addItem = (title: string) => {
    updateItems((state) => {
      const newState = [...state];
      newState.push(
        {
          id: faker.datatype.uuid(),
          title,
          completed: false
        }
      );
      return newState;
    });
  };

  const updateItem = (title: string, id: string) => {
    const itemToUpdate = items.findIndex((item) => {
      return item.id === id;
    });

    updateItems((state) => {
      const newState = [...state];
      newState[itemToUpdate].title = title;
      return newState;
    });
  };

  const removeItem = (id: string) => {
    const itemToDeleteIndex = items.findIndex((item) => {
      return item.id === id;
    });

    updateItems((state) => {
      const newState = [...state];
      newState.splice(itemToDeleteIndex, 1);
      return newState;
    });
  };

  return {
    items,
    addItem,
    updateItem,
    removeItem
  }
};