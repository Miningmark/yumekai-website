import PageFooter from "@/components/menu/PageFooter";
import PageHeader from "@/components/menu/PageHeader";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@/util/ThemeConfig";
import { PageContent, PageWrapper } from "@/components/styledComponents";
import { headingFont, bodyFont } from "@/util/fonts";

import Head from "next/head";

// Import Icons
import IconUp from "/public/assets/icons/arrow_drop_up.svg";

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 46px;
  height: 46px;
  border-radius: var(--radius-pill);
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--transition-base);
  z-index: 900;
  box-shadow: var(--shadow-md);

  svg {
    fill: ${({ theme }) => theme.primaryColor};
    width: 24px;
    height: 24px;
    padding: 0;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  span {
    position: absolute;
    top: -34px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.backgroundColor1};
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    transition: opacity var(--transition-base);
    pointer-events: none;
  }
`;

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  font-family: var(--font-body), Helvetica, sans-serif;
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
      <SiteWrapper className={`${headingFont.variable} ${bodyFont.variable}`}>
        <PageHeader toggleTheme={toggleTheme} theme={theme} />
        <PageWrapper>
          <PageContent>
            <Component {...pageProps} />
          </PageContent>
        </PageWrapper>
        <PageFooter />
      </SiteWrapper>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop} aria-label="nach oben Scrollen" role="button">
          <IconUp />
          <span>nach oben</span>
        </ScrollToTopButton>
      )}
    </ThemeProvider>
  );
}
