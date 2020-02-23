import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="bg-BG">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,height=device-height"
            key="viewport"
          />
          <link
            rel="shortcut icon"
            href="/static/shortcut-icon.png"
            key="shortcutIcon"
          />
          <meta name="theme-color" content="#087da1" key="themeColor" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
