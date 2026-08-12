import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    mode: "light",
  backgroundColor1: "#f5f5f5",
  backgroundColor2: "#f6f6f9",
  backgroundColor3: "#f5f5f5",
  backgroundColor4: "#FFEFD5",
  text: "#363537",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
  activeLinkColor: "#388E3C",
  // darker variants of primary/secondary used for text on light backgrounds (e.g. nav links),
  // kept separate so they stay WCAG AA contrast-compliant without changing the brand colors used elsewhere
  navActiveColor: "#c8290a",
  navInactiveColor: "#a05700",
  // structural tokens for borders/subtle surfaces, independent of brand hues
  border: "rgba(54, 53, 55, 0.12)",
  surfaceMuted: "rgba(54, 53, 55, 0.05)",
  headerSurface: "rgba(246, 246, 249, 0.85)",
};

export const darkTheme = {
    mode: "dark",
  backgroundColor1: "#202020",
  backgroundColor2: "#303030",
  backgroundColor3: "#252525",
  backgroundColor4: "#252525",
  text: "#fbfbfb",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
  activeLinkColor: "#388E3C",
  navActiveColor: "#e9300b",
  navInactiveColor: "#ffb01e",
  border: "rgba(251, 251, 251, 0.14)",
  surfaceMuted: "rgba(251, 251, 251, 0.06)",
  headerSurface: "rgba(48, 48, 48, 0.85)",
};

export const GlobalStyles = createGlobalStyle`
    :root{
        /* legacy aliases, still referenced in a few places */
        --border-radius-small: 5px;
        --border-radius-large: 10px;

        /* radius scale */
        --radius-sm: 8px;
        --radius-md: 14px;
        --radius-lg: 20px;
        --radius-pill: 999px;

        --primary-color: #e9300b;
        --secondary-color: #ffb01e;
        --tertiary-color: #FF7F00FF;
        --on-brand: #2b2a2c;

        --dark-grey: #AAAAAA;
        --light-grey: lightgrey;
        --danger: #D32F2F;
        --light-danger: #FECDD3;
        --warning: #FBC02D;
        --light-warning: #FFF2C6;
        --success: #388E3C;
        --light-success: #BBF7D0;

        /* elevation scale */
        --shadow-sm: 0 1px 2px rgba(20, 16, 15, 0.06), 0 1px 1px rgba(20, 16, 15, 0.05);
        --shadow-md: 0 6px 16px rgba(20, 16, 15, 0.10), 0 2px 6px rgba(20, 16, 15, 0.06);
        --shadow-lg: 0 18px 40px rgba(20, 16, 15, 0.16), 0 4px 12px rgba(20, 16, 15, 0.08);
        --shadow-glow: 0 10px 26px rgba(233, 48, 11, 0.28);

        /* motion */
        --ease: cubic-bezier(0.4, 0, 0.2, 1);
        --transition-fast: 150ms var(--ease);
        --transition-base: 250ms var(--ease);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${({ theme }) => theme.backgroundColor1};

        color: ${({ theme }) => theme.text};
        font-family: var(--font-body), Helvetica, sans-serif;
        font-size: large;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;

        width: 100vw;
        min-height: 100vh;

        overflow-y: auto;
        overflow-x: hidden;
    }

    ::selection {
        background: var(--secondary-color);
        color: var(--on-brand);
    }

    :focus-visible {
        outline: 3px solid var(--secondary-color);
        outline-offset: 2px;
        border-radius: var(--radius-sm);
    }

    p{
        font-family: var(--font-body), Helvetica, sans-serif;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.6;

        @media (max-width: 550px) {
        font-size: 1rem;
        }

    }

    textarea{
        font-size: 1.125rem;

        @media (max-width: 550px) {
        font-size: 1rem;
        }
    }

    input{
        font-size: 1.125rem;

        @media (max-width: 550px) {
        font-size: 1rem;
        }
    }

    select{
        font-size: 1.125rem;

        @media (max-width: 550px) {
        font-size: 1rem;
        }
    }



    h1{
        text-align: center;
        margin: 0;
        padding: 20px;
        color: ${({ theme }) => theme.primaryColor};
        font-family: var(--font-heading), Tahoma, sans-serif;
        font-weight: 800;
        font-size: 2.75rem;
        line-height: 1.15;
        letter-spacing: -0.02em;

        @media (max-width: 500px) {
            font-size: 2.1rem;
        }
    }

    h2{
        color: ${({ theme }) => theme.primaryColor};
        font-family: var(--font-heading), Tahoma, sans-serif;
        font-weight: 700;
        font-size: 1.85rem;
        line-height: 1.2;
        letter-spacing: -0.01em;

        @media (max-width: 500px) {
            font-size: 1.4rem;
        }
    }

    h3{
        font-family: var(--font-heading), Tahoma, sans-serif;
        font-weight: 600;
        font-size: 1.35rem;
        line-height: 1.3;

        @media (max-width: 500px) {
            font-size: 1.15rem;
        }
    }

    .responsive-container{
        display: flex;
        @media (max-width: 500px) {
            display: none;
        }
    }



    .embla__slide__number {
        box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
        border-radius: 1.8rem;
        font-size: 4rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    .embla__controls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1.2rem;
        margin-top: 0.4rem;
    }
    .embla__buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
        align-items: center;
    }
    .embla__button {
        -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        touch-action: manipulation;
        display: inline-flex;
        text-decoration: none;
        cursor: pointer;
        border: 0;
        padding: 0;
        margin: 0;
        box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
        width: 3.6rem;
        height: 3.6rem;
        z-index: 1;
        border-radius: 50%;
        color: var(--text-body);
        display: flex;
        align-items: center;
        justify-content: center;

        transition: var(--transition-base);

        :hover{
            transform: translateY(-3px);
            transition: var(--transition-base);
            color: ${({ theme }) => theme.primaryColor};
        }
    }
    .embla__button:disabled {
        color: var(--detail-high-contrast);
    }
    .embla__button__svg {
        width: 35%;
        height: 35%;
    }

`;
