import { css } from "@emotion/react";

// Common styles
export const cs = {
  inlineCenter: css`
    max-inline-size: max-content; // max-content値は内因性の優先幅で、コンテンツの幅に等しくなります。
    margin-inline: auto; // start, endの余白がmarginが埋められる
  `,
  br: css`
    display: block;
  `,
  lhSmall: css`
    display: block;
    line-height: 3rem;
  `,
  fx: css`
    display: flex;
  `,
};
