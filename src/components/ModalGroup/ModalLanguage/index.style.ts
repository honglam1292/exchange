// index.style.js

import theme from "@/styles/theme";
import styled from "styled-components";

export const ModalConfirmStyle = styled.div`
  .listLanguage {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    .itemSelect {
      background: ${theme.bg.grayA};
    }
    .itemLanguage:last-child {
      border-bottom: 0px !important;
      border-radius: 0 7px 7px;
    }

    .itemLanguage {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border-bottom: 1px solid ${theme.border.gray};
      cursor: pointer;

      &:hover {
        background: ${theme.bg.gray};
      }
      img {
        width: 40px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;
