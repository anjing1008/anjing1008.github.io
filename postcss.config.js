const postcssEasyMediaQuery = require(`postcss-easy-media-query`);
const postcssNested = require(`postcss-nested`);
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssTextRemoveGap = require(`postcss-text-remove-gap`);

module.exports = () => ({
  plugins: [
    postcssEasyMediaQuery({
      breakpoints: {
        tablet: 600,
        desktop: 1024
      }
    }),
    postcssNested(),
    postcssPresetEnv({
      stage: 0
    }),
    postcssTextRemoveGap({
      defaultFontFamily: "Noto Sans",
      defaultLineHeight: "0"
    }),
  ],
});
