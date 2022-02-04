import { Button } from '@mui/material';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { NakedTodoList, MUITodoList } from '../modules/todo-list'
import { itemsGenerator } from '../modules/todo-list/helpers';

export default function Home({ items }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <div className='todo-list-selector'>
          <p className='todo-list-selector__title'>Select your type of TODO List:</p>
          <div className='todo-list-selector__buttons-group'>
            <button
              className="todo-list-selector__button naked-todo-list__button"
            >
              Naked
            </button>
            <Button className='todo-list-selector__button' variant={'outlined'}>Material UI</Button>
          </div>
        </div>
        <MUITodoList initialItems={items} />
        <NakedTodoList initialItems={items} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const items = itemsGenerator();
  return {
    props: {
      items
    }
  }
}
