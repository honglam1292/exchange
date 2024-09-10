import { css } from "@emotion/react";

export const SideBarLeftStyle = {
  index: (open: boolean) => css`
    max-width: 200px;
    height: 100%;
    overflow: hidden;
    transition: all 0.25s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
    flex-direction: column;
    width: ${open ? "var(--sidebar-width)" : "0px"};
  `,
  listMenu: css`
    flex: 1;
    .account-detail {
      background-color: #f0f0f0;
      margin: 1rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      font-weight: 600;
    }
  `,
};
