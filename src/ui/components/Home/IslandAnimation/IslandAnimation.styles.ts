import { css } from "@emotion/react";

export const styles = {
  circleBorder: css`
    stroke-dasharray: 1600;
    animation: line-move 3000ms cubic-bezier(0.83, 0, 0.17, 1) forwards,
      line-fadeout 3000ms cubic-bezier(0.25, 1, 0.5, 1) forwards;
    @keyframes line-move {
      from {
        stroke-dashoffset: 1600;
      }

      50% {
        stroke-dashoffset: 0;
      }
    }
    @keyframes line-fadeout {
      from {
        stroke-opacity: 1;
      }
      to {
        stroke-opacity: 0;
      }
    }
  `,

  island: css`
    opacity: 0;
    transform: scaleY(0) translateY(0);
    transform-origin: top;
    animation: land-fadein 3000ms cubic-bezier(0.16, 1, 0.3, 1) 1000ms forwards;
    @keyframes land-fadein {
      to {
        opacity: 1;
        transform: scaleY(1) translateY(-0.2rem);
      }
    }
  `,

  topCircle: css`
    transform-origin: center;
    transform: scaleY(0) translateY(-100%);
    animation: bounce 1000ms cubic-bezier(0.16, 1, 0.3, 1) 2000ms forwards;

    @keyframes bounce {
      12% {
        transform: scaleY(0.11) translateY(-89.11%);
      }

      24% {
        transform: scaleY(0.44) translateY(-56.44%);
      }

      36% {
        transform: scaleY(0.98) translateY(-2.99%);
      }

      54% {
        transform: scaleY(0.75) translateY(-24.98%);
      }

      74% {
        transform: scaleY(0.98) translateY(-1.63%);
      }

      82% {
        transform: scaleY(0.94) translateY(-6.15%);
      }

      92% {
        transform: scaleY(0.99) translateY(-0.66%);
      }

      96% {
        transform: scaleY(0.98) translateY(-1.54%);
      }

      to {
        transform: scaleY(1) translateY(0%);
      }
    }
  `,
};
