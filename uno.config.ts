import { defineConfig,presetUno,presetIcons,presetWebFonts } from "unocss";

export default defineConfig({
  //製作快捷的 class
  shortcuts: {},
  // 自訂規則
  rules: [],
  // 管理主題用的
  theme: {
    // 顏色
    colors: {
      primary: {
        120: "#7B6651",
        DEFAULT: "#Bf9d7d",
        80: "#d0b79f",
        60: "#e1d1c2",
        40: "#f1eae4",
        20: "#Faf7f5",
      },
      success: {
        120: "#299F65",
        DEFAULT: "#BF9D7D",
        20: "#BCFBBD",
        10: "#E8FEE7",
      },
      info: {
        120: "#1D66AC",
        DEFAULT: "#3BADEF",
        20: "#B1EFFD",
        10: "#E6FBFE",
      },
      error: {
        120: "#C22538",
        DEFAULT: "#DA3E51",
        20: "#F5CCD1",
        10: "#FDECEF",
      },
      gray: {
        120: "#140F0A",
        DEFAULT: "#000000",
        80: "#4B4B4B",
        60: "#909090",
        40: "#ECECEC",
        10: "#F9F9F9",
      },
    },
    // 斷點
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3 xl": "1920px",
    },
  },
  // 預設的 plugins
  presets: [
    // 預設 引入 windi.css
    presetUno(),
    // 引入外部Icon
    presetIcons(),
    // 引入外部字體
    presetWebFonts({
      //文字來源於
      provider: "google",
      //定義字體配置
      fonts:{
        //noto 是自定義名城 ex: font-[noto (自訂義)]
        noto: [
          {
            //字體的名稱
            name: 'Noto Serif TC',
            //字體的字重
            weights: [200, 300, 400, 500, 700, 900],
            //是否斜體
            italic: false,
          },
        ],
      },
    }),
  ],
});
