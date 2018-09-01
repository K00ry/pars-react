import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                "To get started, edit <1>src/App.js</1> and save to reload.":
                    "To get started, edit <1>src/App.js</1> and save to reload.",
                "Welcome to React": "Welcome to React and react-i18next",

                "Pars<1>Jadval</1>":"Pars<1>Jadval</1>",
                "pars-title-footer": "Pars Jadval",

                "sideNav-home": "HOME",
                "products": "Products",
                "jadval":"Jadval",
                "blook":"Blook",
                "kafpoosh":"Kafpoosh",
                "dal":"Dal betoni",
                "mozayik":"Mozayik",
                "kaval":"Kaval",
                "mobleman":"Mobleman Shahri",
                "nj":"New Jersey",

                "contact":"Contact",





            }
        },
        fa: {
            translations: {
                "To get started, edit <1>src/App.js</1> and save to reload.":
                    "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
                "Welcome to React": "Willkommen bei React und react-i18next",

                "Pars<1>Jadval</1>":"پارس <1>جدول</1>",
                "pars-title-footer": "پارس جدول",
                "sideNav-home": " صفحه اصلی",
                "products": "محصولات",
                "jadval":"جدول",
                "blook":"بلوك",
                "kafpoosh":"كفپوش",
                "dal":"دال بتني",
                "mozayik":"موزاییک",
                "kaval":"كول",
                "mobleman":"مبلمان شهري",
                "nj":"نيوجرسی",

                "contact":"تماس",
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        // escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;