import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  desktop: "1200px",
  tablet: "768px",
  mobile: "360px",
});

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        outline: none;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
    }

    *:not(input, textarea) {
        user-select: none;
    }

    html,
    body {
        overflow: hidden;
        width: 100%;
        height: 100%;
        touch-action: pan-y;

        *::-webkit-scrollbar {
            display: none;
        }
    }

    a,
    button {
        display: inline-block;
        cursor: pointer;
        background: none;
        border: 0;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox  */
    input[type='number'] {
        -moz-appearance: textfield;
    }

    svg {
        cursor: pointer;
    }

    .mobile-hidden {
        ${customMedia.lessThan("tablet")`
        display : none;
        `}
    }

    .tablet-hidden {
        ${customMedia.greaterThan("tablet")`
        display : none;
        `}
    }

    a {
        text-decoration: none;
        color : inherit;
    }

    b {
        font-weight: 700;
    }
`;
