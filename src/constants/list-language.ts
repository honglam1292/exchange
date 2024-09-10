import { Img_flag_EN, Img_flag_ZH } from "@/assets/flag";

export const LIST_LANGUAGE: Array<{
  id: string;
  name: string;
  img: string;
}> = [
  {
    id: "en",
    name: "English",
    img: Img_flag_EN,
  },
  // {
  //   id: "ms",
  //   name: "Bahasa Melayu",
  //   img: Img_flag_MS,
  // },
  {
    id: "zh-Hant",
    name: "中國人",
    img: Img_flag_ZH,
  },
  {
    id: "zh-Hans",
    name: "中国人",
    img: Img_flag_ZH,
  },
  // {
  //   id: "th",
  //   name: "ภาษาไทย",
  //   img: Img_flag_TH,
  // },
  // {
  //   id: "vi",
  //   name: "Tiếng Việt",
  //   img: Img_flag_VI,
  // },
  // {
  //   id: "my",
  //   name: "မြန်မာ",
  //   img: Img_flag_MY,
  // },
];
