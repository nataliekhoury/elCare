import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./english.json";
import hebrew from "./hebrew.json";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: english,
    he: hebrew,
  },
  react: {
    //to get ride off any errors
    useSuspense: false,
  },
});
export default i18next;
