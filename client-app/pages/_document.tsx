
import Document, { Head, Main, NextScript } from 'next/document'
import { NavigationContextProvider } from '../context/NavigationContext';

export default class MyDocument extends Document {

  handleClick = () => {
    console.log('handle in home')
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="A site form my portfolio" />
          <meta charSet="etf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />

          <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        </Head>
        <body>
          <NavigationContextProvider value={{ navigationItemClicked: this.handleClick }}>
            <Main />
            <NextScript />
          </NavigationContextProvider>
        </body>
      </html>
    )
  }
}