import type { AppProps } from "next/app";
import { SwapWidgetProvider } from '@skip-go/widget';
import '@skip-go/widget/style.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SwapWidgetProvider>
      <Component {...pageProps} />
    </SwapWidgetProvider>
);
}
