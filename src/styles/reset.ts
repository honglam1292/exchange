import { css } from "@emotion/react";
import { media } from "./breakpoint";

export const cssReset = css`
  * {
    font-family: "Poppins";
    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  *:not(.non-reset *) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  *::before,
  *::after {
    box-sizing: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  a img {
    max-width: 100%;
    height: auto;
  }
  body {
    margin: 0;
    padding: 0;
  }
  ul,
  li {
    /* list-style: none; */
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 15px;
    ${media.xxl} {
      font-size: 14px;
    }
    ${media.sm} {
      font-size: 13px;
    }
  }
  :root {
    --header-height: 4rem;
    --sidebar-width: 200px;
  }
`;
