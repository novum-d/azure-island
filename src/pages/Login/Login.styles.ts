import { css } from "@emotion/react";

const styles = {
  container: css`
    width: clamp(28ch, 50%, 54ch);
    margin-top: 6ch;
    padding: 2ch;
    margin-inline: auto;
    > div {
      > div {
        // avater
        margin-bottom: 2ch;
        margin-inline: auto;
      }
      > h1 {
        // title
        margin-bottom: 1ch;
      }
      > p {
        // discription
        opacity: 0.8;
        margin-bottom: 2ch;
        text-align: center;
      }
      button {
        margin-top: 4ch;
      }
    }
  `,
};

export default styles;
