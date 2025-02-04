import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
        sans: ['Roboto', 'system-ui'],
    },
    extend: {
      colors: {
        orange: {
          "50": "#FDEFEC",
          "100": "#FCDBD5",
          "200": "#F8B7AA",
          "300": "#F59380",
          "400": "#F16F55",
          "500": "#EE4D2D",
          "600": "#D03111",
          "700": "#9C240D",
          "800": "#681808",
          "900": "#340C04",
          "950": "#1C0702",
        },
      },
    },
  },
};
