module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "react-app", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@app", "./src/app"],
          ["@util", "./src/util"],
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@routes", "./src/routes"],
        ],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        trailingComma: "all",
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": 0,
    "no-trailing-spaces": 0,
    "react/jsx-indent": [2, 2],
    "no-console": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-multi-spaces": 0,
    "react/jsx-no-target-blank": 0,
		"react/no-array-index-key": 0,
    "no-plusplus":0,
    "no-return-assign": 0
  },
};
