import blogPosts from '../data/blogposts/blogposts'
import PostCard from '../components/PostCard'
import Layout from '../components/hoc/Layout'
import Sidebar from '../components/shared/Sidebar'

const Content = () => (
  <main>
    {blogPosts.map((post) => (
      <PostCard key={post.title} post={post} />
    ))}
  </main>
)

const properties = {
  title: 'home'
}

const components = {
  Content,
  Sidebar
}

export default Layout({ components, properties })
