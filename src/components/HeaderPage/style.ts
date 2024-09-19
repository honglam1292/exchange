import { css } from "@emotion/react";

export const HeaderPageStyle = {
  index: css`
    height: var(--header-height);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  menuBtn: (open: boolean) => css`
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${open ? "rotate(180deg)" : "rotate(0deg)"};
    transition: all 0.5s;
    &:hover {
      background-color: #f0f0f0;
    }
    i {
      font-size: 1.5rem;
    }
  `,
  content: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .account {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      p {
        &:first-of-type {
          font-size: 1.3rem;
          font-weight: 600;
        }
        &:last-of-type {
          font-size: 1.1rem;
          font-weight: 400;
        }
      }
    }
    .avatar {
      width: 3rem;
      height: 3rem;
      // background: #d0d0d0;
      border-radius: 3rem;
      margin-left: 1.5rem;
    }
    .down-menu {
      margin-left: 0.5rem;
      cursor: pointer;
      i {
        font-size: 1.5rem;
      }
    }
  `,
};
