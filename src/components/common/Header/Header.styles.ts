import { css } from "@emotion/react";

const styles = {
  header: css`
    display: flex;
    justify-content: space-between;
    > div {
      :first-of-type {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        flex-grow: 1; // 残りの余白を埋める
        > :last-child {
          margin-left: 0.5rem;
        }
      }
    }
  `,
};

export default styles;
