import type { AppProps } from "next/app";
import "../css/main.css";

function RootApplication({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApplication;
