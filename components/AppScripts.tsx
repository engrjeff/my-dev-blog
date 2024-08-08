import Script from 'next/script';

export function AppScripts() {
  return (
    <>
      <Script
        id="gtm"
        src="https://www.googletagmanager.com/gtag/js?id=G-XT57N1W2PF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XT57N1W2PF');
        `}
      </Script>

      <Script
        id="page-view"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5713888498386529"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
