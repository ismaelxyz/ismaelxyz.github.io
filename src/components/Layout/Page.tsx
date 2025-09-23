import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { memo, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { HomepageMeta } from "../../data/dataDef";

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({ children, title, description }) => {
    const { t } = useTranslation();
    const { asPath: pathname } = useRouter();

    return (
      <>
        <Head>
          <title>{title ?? t("meta.title")}</title>
          <meta
            content={description ?? t("meta.description")}
            name="description"
          />

          {/* several domains list the same content, make sure google knows we mean this one. */}
          <link
            href={`https://reactresume.com${pathname}`}
            key="canonical"
            rel="canonical"
          />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph : https://ogp.me/ */}
          <meta content={title ?? t("meta.title")} property="og:title" />
          <meta
            content={description ?? t("meta.description")}
            property="og:description"
          />
          <meta
            content={`https://reactresume.com${pathname}`}
            property="og:url"
          />

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          <meta content={title ?? t("meta.title")} name="twitter:title" />
          <meta
            content={description ?? t("meta.description")}
            name="twitter:description"
          />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = "Page";
export default Page;
