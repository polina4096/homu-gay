import presetRemToPx from "@unocss/preset-rem-to-px";
import presetUno from "@unocss/preset-uno";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
    transformerVariantGroup(),
  ],
  theme: {
    fontFamily: {
      ascii: "Saitamaar",
    },

    breakpoints: {
      xs: "480px",
      sm: "640px",
      md: "768px",
    },
  },
  preflights: [
    {
      getCSS() {
        return `
        @font-face {
            font-family: 'Saitamaar';
            src: url('/saitamaar.ttf') format('truetype');
        }
        `;
      },
    },
  ],
});
