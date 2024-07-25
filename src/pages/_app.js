import { GlobalStyles } from "@/util/ThemeConfig";
import { PageContent, PageWrapper } from "@/components/styledComponents";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  //--------------------------------------------------------------------------------------------
  //CLS value consol log

  let cls = 0;

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        cls += entry.value;
        console.log("Current CLS value:", cls, entry);
      }
    }
  }).observe({ type: "layout-shift", buffered: true });
  //-----------------------------------------------------------------------------------------------------
  /**
 * <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Head>
        <title>YumeKai</title>
      </Head>
      <GlobalStyles />
      <SiteWrapper>
        <PageHeader toggleTheme={toggleTheme} theme={theme} />
        <PageWrapper>
          <PageContent>
            <Component {...pageProps} theme={theme} />
          </PageContent>
        </PageWrapper>
        <PageFooter />
      </SiteWrapper>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <IconUp />
        </ScrollToTopButton>
      )}
    </ThemeProvider>
 */
  return (
    <>
      <Head>
        <title>YumeKai</title>
      </Head>
      <GlobalStyles />

      <PageWrapper>
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
      </PageWrapper>
    </>
  );
}
