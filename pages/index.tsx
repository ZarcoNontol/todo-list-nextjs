import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { TodoList } from '../modules/todo-list'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <TodoList />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
