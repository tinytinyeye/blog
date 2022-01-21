import { MDXProvider } from '@mdx-js/react';

import 'styles/main.css';
import 'styles/prism.css';

const components = {
  inlineCode: ({ children, ...rest }) => <code className="language-javascript" {...rest}>{children}</code>
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
