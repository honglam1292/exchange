import { css } from "@emotion/react";

export const UserInforStyle = {
  content: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    & h1 {
      font-size: 30px;
      margin-left: 20px;
      margin-top: 20px;
    }
  `,
  Info: css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    margin: 40px;
  `,
  group: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,
  halfWidth: css`
    width: 70%;
    font-size: 20px;
    font-weight: 500;
  `,

  input: css`
    width: 30%;
  `,
};
