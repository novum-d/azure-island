import { css } from "@emotion/react";

const styled = {
  layout: css`
    display: flex;
    > :nth-of-type(2) {
      z-index: -1;
    }
  `,
};

export default styled;
