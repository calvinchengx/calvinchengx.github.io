import Post from '../../components/Post'

export const meta = {
published: true,
publishedAt: '2019-01-15',
title: 'This is my very first blog post',
summary:
'I am learning how to build a blog using Markdown in a static web page build on top of Next.js'
}

export default ({ children }) => <Post meta={meta}>{children}</Post>;

Writing the first post

### Simple markdown

Static blog generated from nextjs and mdx for github pages.
