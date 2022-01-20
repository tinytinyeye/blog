import Layout from "./Layout";
import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </Layout>
  )
}
