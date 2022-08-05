import { css } from "@emotion/react";

const styles = {
  container: css`
    width: clamp(28ch, 50%, 54ch);
    margin-top: 6ch;
    padding: 2ch;
    margin-inline: auto;
    > div {
      > div {
        // avatar
        margin-bottom: 2ch;
        margin-inline: auto;
      }
      > h1 {
        // title
        margin-bottom: 1ch;
      }
      > p {
        // description
        opacity: 0.8;
        text-align: center;
      }
      + form > button {
        margin-top: 3ch;
      }
    }
  `,
};

export default styles;
