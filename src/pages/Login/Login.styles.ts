import { css } from "@emotion/react";

const styles = {
  container: css`
    width: clamp(46ch, 50%, 54ch);
    margin-top: 6ch;
    padding: 2ch;
    margin-inline: auto;
  `,
  avatar: css`
    margin-bottom: 2ch;
    margin-inline: auto;
  `,
  title: css`
    margin-bottom: 1ch;
  `,
  description: css`
    opacity: 0.8;
    text-align: center;
  `,
};

export default styles;
