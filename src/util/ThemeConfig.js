import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor1: "#f5f5f5",
  backgroundColor2: "#f6f6f9",
  backgroundColor3: "#f5f5f5",
  backgroundColor4: "#FFEFD5",
  text: "#363537",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
  activeLinkColor: "#388E3C",
};

export const darkTheme = {
  backgroundColor1: "#202020",
  backgroundColor2: "#303030",
  backgroundColor3: "#252525",
  backgroundColor4: "#252525",
  text: "#fbfbfb",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
  activeLinkColor: "#388E3C",
};

export const GlobalStyles = createGlobalStyle`
    :root{
        --border-radius-small: 5px;
        --border-radius-large: 10px;

        --primary-color: #e9300b;
        --secondary-color: #ffb01e;
        --tertiary-color: #FF7F00FF;

        --dark-grey: #AAAAAA;
        --light-grey: lightgrey;
        --danger: #D32F2F;
        --light-danger: #FECDD3;
        --warning: #FBC02D;
        --light-warning: #FFF2C6;
        --success: #388E3C;
        --light-success: #BBF7D0;

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
        font-family: Helvetica, sans-serif;
        font-size: large;
        

        width: 100vw;
        min-height: 100vh;
            
        overflow-y: auto;
        overflow-x: hidden;
    }

    p{
        font-family: Helvetica, sans-serif;
        font-weight: 400;
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
        font-family: Tahoma;
        font-weight: 800;
        font-size: 2.5rem;

        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }

    h2{
        color: ${({ theme }) => theme.primaryColor};
        font-family: Tahoma;
        font-weight: 600;
        font-size: 2rem;

        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
    }

    h2{
        color: ${({ theme }) => theme.primaryColor};
        font-family: Tahoma;
        font-weight: 600;
        font-size: 1.75rem;

        @media (max-width: 500px) {
            font-size: 1.25rem;
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

        transition: 0.5s;

        :hover{
            transform: translateY(-3px);
            transition: 0.5s;
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
