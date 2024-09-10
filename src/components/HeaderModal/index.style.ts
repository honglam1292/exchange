// index.style.js

import theme from "@/styles/theme";
import styled from "styled-components";

export const HeaderModalStyle = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    span {
      font-size: 18px;
      color: ${theme.color.blue};
      line-height: 20px;
    }
  }
  .closeIcon {
    display: flex;
    justify-content: flex-end;
    position: relative;
    svg {
      width: 26px;
      height: 26px;
      position: absolute;
      right: 4px;
      top: 4px;
      cursor: pointer;
    }
  }
`;
