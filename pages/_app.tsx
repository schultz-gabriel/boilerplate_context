import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { light, dark } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  const title = '';
  const url = '';
  const image = '';
  const description = '';

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/icons/developer.svg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Victor Dantas Dev" />
        <meta name="keywords" content="Next.js, React, Portfolio" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>

      <ThemeProvider theme={theme}>
        <NextNprogress
          color="#fff"
          options={{ showSpinner: false }}
        />
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;