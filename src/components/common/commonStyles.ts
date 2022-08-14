import { css } from "@emotion/react";

// Common styles
const cs = {
  inlineCenter: css`
    max-inline-size: max-content; // max-content値は内因性の優先幅で、コンテンツの幅に等しくなります。
    margin-inline: auto; // start, endの余白がmarginが埋められる
  `,
  br: css`
    display: block;
  `,
};

export default cs;
