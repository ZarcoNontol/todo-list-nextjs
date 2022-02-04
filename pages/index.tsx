import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { NakedTodoList } from '../modules/todo-list'
import { itemsGenerator } from '../modules/todo-list/helpers';

export default function Home({ items }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
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
