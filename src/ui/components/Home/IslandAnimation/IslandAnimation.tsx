import { styles } from "./IslandAnimation.styles";

export const IslandAnimation = () => (
  <svg width="600" height="350" viewBox="0 0 320 350" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_300_525)">
      <rect width="320" height="350" fill="none" />
      <g filter="url(#filter0_di_300_525)">
        <ellipse css={styles.island} cx="160" cy="295.462" rx="157" ry="46.6757" fill="#0060AB" />
        <path
          css={styles.circleBorder}
          d="M313.957 295.462C313.957 300.419 310.563 305.763 302.912 311.141C295.345 316.46 284.198 321.373 270.149 325.55C242.09 333.892 203.146 339.095 160 339.095C116.854 339.095 77.9102 333.892 49.8513 325.55C35.8023 321.373 24.6546 316.46 17.0876 311.141C9.43675 305.763 6.04276 300.419 6.04276 295.462C6.04276 290.505 9.43675 285.161 17.0876 279.783C24.6546 274.464 35.8023 269.55 49.8513 265.374C77.9102 257.032 116.854 251.829 160 251.829C203.146 251.829 242.09 257.032 270.149 265.374C284.198 269.55 295.345 274.464 302.912 279.783C310.563 285.161 313.957 290.505 313.957 295.462Z"
          stroke="url(#paint0_linear_300_525)"
          strokeWidth="6.08551"
        />
      </g>
      <path
        css={styles.island}
        d="M48.8828 289.342H111.197L163.301 154.765L88.3842 201.561L48.8828 289.342Z"
        fill="url(#paint1_linear_300_525)"
        stroke="url(#paint2_linear_300_525)"
        strokeWidth="28.5288"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        css={styles.island}
        d="M208.25 142.506L176.151 228.319L232.946 281.083L125.207 306.479H176.151H285.892"
        fill="url(#paint3_linear_300_525)"
      />
      <path
        css={styles.topCircle}
        d="M157.726 118.413C183.166 104.264 195.224 77.3935 184.658 58.3968C174.093 39.4002 144.904 35.4708 119.464 49.6203C94.0243 63.7698 81.9664 90.6401 92.5322 109.637C103.098 128.633 132.286 132.563 157.726 118.413Z"
        fill="url(#paint4_linear_300_525)"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_300_525"
        x="-1.82977"
        y="228.26"
        width="332.112"
        height="123.538"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4.82977" />
        <feGaussianBlur stdDeviation="2.41489" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_300_525" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_300_525" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="13.2819" dy="-20.5265" />
        <feGaussianBlur stdDeviation="10.867" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_300_525" />
      </filter>
      <linearGradient
        id="paint0_linear_300_525"
        x1="253.544"
        y1="261.867"
        x2="45.8642"
        y2="326.465"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#003C6B" />
        <stop offset="1" stopColor="#0073CE" />
        <stop offset="1" stopColor="#0060AB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_300_525"
        x1="129.782  "
        y1="196.061"
        x2="71.8242"
        y2="276.356"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#C7C7C7" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_300_525"
        x1="150.912"
        y1="170.704"
        x2="34.3935"
        y2="302.919"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AA7F7" />
        <stop offset="1" stopColor="#00213B" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_300_525"
        x1="205.85"
        y1="162.252"
        x2="199.21"
        y2="306.542"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.133895" stopColor="#5AA7F7" />
        <stop offset="1" stopColor="#00213B" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_300_525"
        x1="147.893"
        y1="77.128"
        x2="102.01"
        y2="116.37"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AA7F7" />
        <stop offset="1" stopColor="#106FBB" />
      </linearGradient>
      <clipPath id="clip0_300_525">
        <rect width="320" height="350" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
