import { NakedList } from "./NakedList";
import faker from "faker";
import { useInMemoryTodoList } from "../hooks";

export const NakedTodoList = () => {
  const { items, addItem, removeItem, updateItem } = useInMemoryTodoList();
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
          onUpdateItem={(title, id) => {
            updateItem(title, id);
          }}
        />
      </div>
    </div>
  );
};
