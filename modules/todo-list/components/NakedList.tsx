import { useState } from "react";

export interface ListItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface ListProps {
  items: ListItem[];
  onRemoveItem: (id: string) => void;
  onUpdateItem: (title: string, id: string) => void;
}

export const NakedList = ({ items, onRemoveItem, onUpdateItem }: ListProps) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <ul>
      {items &&
        items.map((item) => {
          return (
            <li key={item.id} className="naked-todo-list__item">
              {!editMode && item.title}
              {editMode && (
                <input
                  type="text"
                  value={item.title}
                  name={`todo-list-${item.id}`}
                  id={item.id}
                  onChange={(event) => {
                    if (event.target.value) {
                      onUpdateItem(event.target.value, item.id);
                    }
                  }}
                />
              )}

              <div className="naked-todo-list__actions">
                <button
                  className="naked-todo-list__actions-item naked-todo-list__button"
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="naked-todo-list__actions-item naked-todo-list__button"
                  onClick={() => {
                    onRemoveItem(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
