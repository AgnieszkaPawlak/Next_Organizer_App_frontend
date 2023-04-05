import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="App Organizer" content="Time management app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/pins.png" />{' '}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
