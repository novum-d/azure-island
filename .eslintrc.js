module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    // importのリゾルバー
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    // Reactのimportを必ず必要としない
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // jsx拡張子
    "react/jsx-filename-extension": [2, { extensions: [".ts", ".tsx"] }],

    // 無関係なパッケージの使用を禁止
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    // ファイル拡張子を一貫して使用
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    // single quoteでなくてもok
    quotes: ["off", "single"],
    "import/no-unresolved": "off",

    // react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],
    "no-unused-vars": ["warn", { args: "after-used" }],
    "react/no-unused-prop-types": ["warn"],
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        variables: false,
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
