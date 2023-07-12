import "../styles/globals.css";
import "@components/AudioPlayer/audio-player.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@components/Layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Head>
        <link rel='manifest' href='/site.webmanifest' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#0b0f1a' />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='theme-color' content='#0b0f1a' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
      </Head>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-XT57N1W2PF'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XT57N1W2PF');
        `}
      </Script>

      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5713888498386529'
        crossOrigin='anonymous'
      ></Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
