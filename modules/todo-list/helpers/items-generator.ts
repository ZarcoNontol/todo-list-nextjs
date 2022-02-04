import faker from "faker";
import { ListItemDTO } from "../components";

export const itemsGenerator = () => {
  const items: ListItemDTO[] = [];
  for (let index = 1; index < 10; index++) {
    items.push({
      id: faker.datatype.uuid(),
      title: faker.company.companyName(),
      completed: false
    });
  }

  return items;
};
