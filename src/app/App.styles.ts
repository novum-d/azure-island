import { css } from "@emotion/react";

const styles = {
  layout: css`
    display: flex;
    > :nth-of-type(2) {
      z-index: -1;
    }
  `,
};

export default styles;
