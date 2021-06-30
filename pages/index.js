import Head from 'next/head';
import  ArticleList  from '../components/ArticleList';

export default function Home({articles, posts}) {
  console.log(articles)
  return (
    <div>

    <Head>
      <title>Next.js App</title>
      <meta name='keywords' content='web development, programming' />
    </Head>
    
    <ArticleList articles={articles}/>
    </div>
  )
}

// fetch here
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  // return here
  return {
    props: {
      articles
    }
  }
};

