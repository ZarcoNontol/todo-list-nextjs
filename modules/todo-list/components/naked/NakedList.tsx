import { useState } from "react";
import { ListItemDTO } from "../../interfaces";

export interface NakedListItemProps {
  item: ListItemDTO;
  onRemove: (id: string) => void;
  onUpdate: (item: ListItemDTO) => void;
}

const NakedListItem = ({ item, onRemove, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <li key={item.id} className="naked-todo-list__item">
      {!editMode && item.title}
      {editMode && (
        <div className="naked-todo-list__item-edit-mode">
          <input
            className="naked-todo-list__item-input"
            type="text"
            value={item.title}
            name={`todo-list-${item.id}`}
            id={item.id}
            onChange={(event) => {
              if (event.target.value) {
                const itemUpdated: ListItemDTO = {...item}
                itemUpdated.title = event.target.value 
                onUpdate(itemUpdated);
              }
            }}
          />
        </div>
      )}

      <div className="naked-todo-list__actions">
        <button
          className="naked-todo-list__actions-item naked-todo-list__button"
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          {!editMode && "Edit"}
          {editMode && "Done"}
        </button>
        <button
          className="naked-todo-list__actions-item naked-todo-list__button"
          onClick={() => {
            onRemove(item.id);
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export interface ListProps {
  items: ListItemDTO[];
  onRemoveItem: (id: string) => void;
  onUpdateItem: (item: ListItemDTO) => void;
}

export const NakedList = ({ items, onRemoveItem, onUpdateItem }: ListProps) => {
  return (
    <ul>
      {items &&
        items.map((item) => {
          return (
            <NakedListItem
              key={item.id}
              item={item}
              onUpdate={onUpdateItem}
              onRemove={onRemoveItem}
            />
          );
        })}
    </ul>
  );
};
