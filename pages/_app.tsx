// Imports
import "@styles/global.scss";

// Types
import type { AppProps } from "next/app";

// Export application
export default function MillionRNG({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
