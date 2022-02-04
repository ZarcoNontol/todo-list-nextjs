import { List, ListItem } from "./List";
import faker from "faker";
import { useState } from "react";

const itemsGenerator = () => {
  const items: ListItem[] = [];
  for (let index = 1; index < 10; index++) {
    items.push({
      id: faker.datatype.uuid(),
      title: faker.company.companyName(),
      completed: false
    });
  }

  return items;
};

const useInMemoryTodoList = () => {
  const [items, updateItems] = useState(itemsGenerator());
  
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

export const TodoList = () => {
  const { items, addItem, removeItem, updateItem } = useInMemoryTodoList(); 
  return (
    <div>
      <button onClick={() => {
        addItem(faker.company.companyName());
      }}>Add Item</button>
      <List
        items={items}
        onRemoveItem={(id) => {
          removeItem(id);
        }}
        onUpdateItem={(title, id) => {
          updateItem(title, id);
        }}
      />
    </div>
  );
};