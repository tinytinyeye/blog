import { MDXProvider } from '@mdx-js/react';

import Layout from "../components/Layout";

import '../styles/prism.css';

const components = {
  inlineCode: ({ children, ...rest }) => <code className="language-javascript" {...rest}>{children}</code>
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Layout pageTitle="Blog" description="My Personal Blog">
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
