import I18n from "i18n-js";

// Utils
import getBrowserLanguage from "../utils/getBrowserLanguage";

// Supported languages
import en from "./en-US";
import pt from "./pt-BR";

const normalizedTranslations = {
  en_US: "en_US",
  pt_BR: "pt_BR",
  en: "en_US",
  pt_US: "pt_BR",
  "en-US": "en_US",
  "pt-BR": "pt_BR"
};

I18n.translations = {
  en_US: en,
  pt_BR: pt
};

function setApplicationLanguage() {
  const lang = getBrowserLanguage();
  const locale = normalizedTranslations[lang];

  I18n.locale = locale;
}

function translate(key) {
  return I18n.t(key);
}

setApplicationLanguage();

export default translate;
