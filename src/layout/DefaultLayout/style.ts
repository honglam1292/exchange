import { css } from "@emotion/react";

export const DefaultLayoutStyle = {
  index: css`
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  `,
  content: css`
    flex: 1 1;
    display: flex;
    main {
      flex: 1;
      transition: all 0.25s;
    }
  `,
};
