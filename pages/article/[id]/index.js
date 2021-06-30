import {useRouter} from 'next/router';
import Link from 'next/Link';

 const article =({article})=> {
    // const router = useRouter();
    // const {id} = router.query;

    return (
       <>
       <h1>{article.title}</h1>
       <p>{article.body}</p>
       <Link href='/'>Go back</Link>
       </>
    )
};

// one way of doing
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//           article
//         }
//       }
// };


// other way of fetching, faster one:
// getStaticProps + getStaticPaths to dinamcally generate path with data
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
          article
        }
      }
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json();

    const ids = articles.map(article => article.id);

    const paths = ids.map(id => ({
        params: {id: id.toString()}
    }));

    return {
        paths,
        // will return 404 if does not exist
        fallback: false

        
        // paths: {params: {id: '1', id: '2'}}
    }


}


export default article;