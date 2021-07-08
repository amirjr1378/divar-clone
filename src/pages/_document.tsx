import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
