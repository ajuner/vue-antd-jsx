module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: ["@babel/transform-runtime", ["import", { "libraryName": "ant-design-vue", "style": true }]]
}
