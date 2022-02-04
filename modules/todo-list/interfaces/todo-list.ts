/*
List Item Data Interface, it should be the same for all types of TODO list.
In that way we can abstract Props Interfaces from Data Interfaces.
This could also be a DTO from a Back End.
*/
export interface ListItemDTO {
  id: string;
  title: string;
  completed: boolean;
}