module.exports = {
    presets: [
      "next/babel",
      "@babel/preset-typescript" 
    ],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "babel-plugin-parameter-decorator",
      "next"
    ]
  };
  