import { css } from "@emotion/react";

const styled = {
  header: css`
    display: flex;
    justify-content: space-between;
    > div {
      :first-of-type {
        display: flex;
        margin-left: 20px;
        flex-grow: 1; // 残りの余白を埋める
        > :last-child {
          margin-left: 10px;
        }
      }
    }
  `,
};

export default styled;
