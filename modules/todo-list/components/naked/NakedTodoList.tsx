import { NakedList } from "./NakedList";
import faker from "faker";
import { useInMemoryTodoList } from "../../hooks";
import { ListItemDTO } from "../../interfaces";

export const NakedTodoList = ({ initialItems }: { initialItems: ListItemDTO[]}) => {
  const { items, addItem, removeItem, updateItem } = useInMemoryTodoList(initialItems);
  return (
    <div className="naked-todo-list">
      <div className="naked-todo-list__header">
        <h3>NakedTodoList</h3>
        <button
          className="naked-todo-list__button"
          onClick={() => {
            addItem(faker.company.companyName());
          }}
        >
          Add Item
        </button>
      </div>
      <div className="naked-todo-list__content">
        <NakedList
          items={items}
          onRemoveItem={(id) => {
            removeItem(id);
          }}
          onUpdateItem={updateItem}
        />
      </div>
    </div>
  );
};
