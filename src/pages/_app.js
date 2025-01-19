import PageFooter from "@/components/menu/PageFooter";
import PageHeader from "@/components/menu/PageHeader";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@/util/ThemeConfig";
import { PageContent, PageWrapper } from "@/components/styledComponents";

import Head from "next/head";

// Import Icons
import IconUp from "/public/assets/icons/arrow_drop_up.svg";

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f6f6f9;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  z-index: 900;
  opacity: 0.8;

  svg {
    fill: black;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    opacity: 1;
  }
`;

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme-preference");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }

    window.addEventListener("scroll", handleScroll);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemThemeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const handleSystemThemeChange = (e) => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-preference", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-preference", newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /*
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
*/

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Head>
        <title>YumeKai</title>
        <meta name="description" content="YumeKai Homepage, hier findest du alle aktuellen News." />
      </Head>
      <GlobalStyles />
      <SiteWrapper>
        <PageHeader toggleTheme={toggleTheme} theme={theme} />
        <PageWrapper>
          <PageContent>
            <Component {...pageProps} />
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
  );
}
