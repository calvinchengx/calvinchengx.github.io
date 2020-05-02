import Head from 'next/head'
import blogPosts from '../data/blogposts/blogposts'
import PostCard from '../components/PostCard'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {blogPosts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </main>
  </div>
)

export default Home
