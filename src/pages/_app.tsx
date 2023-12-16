import type { AppProps } from "next/app";
import { GlobalStyles } from "../global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
