import "../styles/tailwind.css";
import "../styles/global.scss";

import type { AppProps } from "next/app";
import { memo, type ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import "../i18n";

const MyApp = memo(({ Component, pageProps }: AppProps): ReactElement => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang =
        i18n.resolvedLanguage || i18n.language || "en";
    }
  }, [i18n.language, i18n.resolvedLanguage]);
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#262626", color: "#fff" },
        }}
      />
    </>
  );
});

MyApp.displayName = "MyApp";

export default MyApp;
