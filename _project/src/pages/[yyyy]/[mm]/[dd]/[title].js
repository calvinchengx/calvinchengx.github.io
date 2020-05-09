import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { yyyy, mm, dd, title } = router.query
  console.log(yyyy)
  console.log(mm)
  console.log(dd)
  console.log(title)
  return (
    <div>
      {yyyy} {mm} {dd} {title}
    </div>
  )
}

Post.getInitialProps = async ({ query }) => {
  const { yyyy, mm, dd, title } = query
  return { yyyy, mm, dd, title }
}

export default Post
