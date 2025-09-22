import "../styles/tailwind.css";
import "../globalStyles.scss";

import type { AppProps } from "next/app";
import { memo, type ReactElement } from "react";

const MyApp = memo(({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

MyApp.displayName = "MyApp";

export default MyApp;
