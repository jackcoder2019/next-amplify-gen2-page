import { Html, Head, Main, NextScript } from "next/document";

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";

export default function Document() {
  return (
    <Html lang="en">
      <Head>My rental car website (Demo)</Head>
      <ConfigureAmplifyClientSide/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
