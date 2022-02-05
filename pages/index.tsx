import { Button } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Layout, { siteTitle } from "../components/layout";
import { NakedTodoList, MUITodoList } from "../modules/todo-list";
import { itemsGenerator } from "../modules/todo-list/helpers";

export enum TodoListMode {
  NAKED = "NAKED",
  MUI = "MUI",
}

export default function Home({ items }) {
  const [listType, setListType] = useState<TodoListMode>(TodoListMode.MUI);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <div className="todo-list-selector">
          <p className="todo-list-selector__title">
            Select your type of TODO List:
          </p>
          <div className="todo-list-selector__buttons-group">
            <button
              className="todo-list-selector__button naked-todo-list__button"
              onClick={() => {
                setListType(TodoListMode.NAKED);
              }}
            >
              Naked
            </button>
            <Button
              className="todo-list-selector__button"
              onClick={() => {
                setListType(TodoListMode.MUI);
              }}
              variant={"outlined"}
            >
              Material UI
            </Button>
          </div>
        </div>
        {listType === TodoListMode.MUI && <MUITodoList initialItems={items} />}
        {listType === TodoListMode.NAKED && (
          <NakedTodoList initialItems={items} />
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = itemsGenerator();
  return {
    props: {
      items,
    },
  };
}
