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

export const List = ({ items, onRemoveItem, onUpdateItem }: ListProps) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <ul>
      {items &&
        items.map((item) => {
          return (
            <li key={item.id}>
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

              <button
                onClick={() => {
                  setEditMode(true);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  onRemoveItem(item.id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
    </ul>
  );
};
