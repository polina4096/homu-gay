import browserslist from "browserslist";
import { browserslistToTargets, Features } from "lightningcss";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const browsers = "defaults and fully supports es6-module and not and_uc > 0 and not and_qq > 0 and not kaios > 0";

export default defineConfig({
  define: {
    "import.meta.env.WEBRING_RUTG_CTX": "23",
  },
  plugins: [
    UnoCSS(),
    solid(),
  ],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(browsers)),
      exclude: Features.VendorPrefixes,
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
