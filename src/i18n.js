import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                "To get started, edit <1>src/App.js</1> and save to reload.":
                    "To get started, edit <1>src/App.js</1> and save to reload.",
                "Welcome to React": "Welcome to React and react-i18next",

                "Pars<1> Jadval</1>":"Pars <1>Jadval</1>",
                "pars-title-footer": "Pars Jadval",
                "sideNav-class-select":"left",
                "lang-class":"english",

                "sideNav-home": "HOME",
                "products": "Products",
                "jadval":"Kerbstone",
                "blook":"Blocks",
                "kafpoosh":"Pavers",
                "dal":"Slabs",
                "mozayik":"Mosaics",
                "kaval":"Rings",
                "mobleman":"Site Furnish",
                "nj":"Barriers",

                "وت پرس":"Wet Press",
                "پرس خشك":"Dry Press",
                "دستی":"Handmade",
                "سبك پوكه":"Light",
                "بلوك سيمانی":"Cement Block",
                "ويبره":"Vibrated",
                "واش بتن":"Washed",
                "ترافیک سبک":"Light Traffic",
                "ترافیک سنگین":"heavy Traffic",
                "ساده":"Simple",
                "حياطی":"Yard",
                "گرد":"Round",
                "انباری":"Depot",
                "بیضی":"Oval",
                "تخته":"Plank",
                'جرسی':'Jersey',
                'مینی جرسی':'Mini Jersey',


                /// table Translation
                "بلوک ته پر پوکه": "Close Back Block",
                "بلوک ۵۰ پوکه": "Block 50",
                "بلوک ۱۵ پوکه": "Block 15",
                "تیغه ۱۰ پوکه فروه": "Blade 10 Empty",
                "دیواری ته باز سیمانی": "Open Back Cement Wall Block",
                "دیواری ته پر سیمانی": "Close Back Wall Block",
                "بلوک ۵۰ سیمانی": "Block 50 Cement",
                "بلوک ۱۵ سیمانی": "Block 15 Cement",
                "تیغه ۱۰ سیمانی": "Blade 10 Cement",
                "بلوک سقفی سیمانی": "Ceiling Block Cement",
                "کرومیت سقفی سیمانی": "Ceiling Koromit cement",
                //dal
                "ساده ایرانی ۳۰*۳۰ درجه ۱، درجه ۲": "Simple 30x30 First & Second Grade",
                "ساده ایرانی ۴۰*۴۰": "Simple Persian 40x40 ",
                "گرانیتی ساده ۴۰*۴۰": "Simple Granite 40x40",
                "مرمری ساده ۴۰*۴۰": "Simple Marble 40x40",
                "موزائیک گرانیتی حیاطی ۴۰*۴۰": "Mosaic Granite Yard 40x40 ",
                "موزائیک مرمری حیاطی ۴۰*۴۰": "Mosaic Marble Yard 40x40 ",
                '۸۰*۶۰*۱۰':'80x60x10',
                '۱۰۰*۶۰*۱۰':'100x60x10',
                '۱۲۰*۶۰*۱۰':'120x60x10',
                '۸۰*۶۰*۱۵':'80x60x15',
                '۱۰۰*۶۰*۱۵':'100x60x15',
                '۱۲۰*۶۰*۱۵':'120x60x15',
                '۲۰۰*۶۰*۲۰':'200x60x20',
                '۱۵۰*۶۰*۲۰':'150x60x20',
                '۱۵۰*۶۰*۱۵':'150x60x15',
                // '۱۲۰*۶۰*۱۵':'۱۲۰*۶۰*۱۵',
                // '۱۲۰*۶۰*۱۵':'۱۲۰*۶۰*۱۵',
                // '۱۲۰*۶۰*۱۵':'۱۲۰*۶۰*۱۵',

                //kafpoosh

                '۴۰*۴۰ پرسی':'Pressed 40x40',
                '۶/۲۵ عدد':'6/25 Piece',
                '۲۰*۲۰ پرسی':'Pressed 20x20',
                '۲۵ عدد':'25 Piece',
                '۱۰*۲۰ پرسی':'Pressed 20x10',
                '۴۹ عدد':'49 Piece',
                '۵۰*۵۰ پرسی':'Pressed 50x50',
                '۴ عدد':'4 Piece',
                '۳۰*۳۰ پرسی':'Pressed 30x30',
                '۱۱ عدد':'11 Piece',
                '۴۰*۴۰ نابینایان پرسی':'Pressed Blinded 40x40',
                '۶.۲۵ عدد':'6.25 Piece',
                '۵۰*۵۰*۸':'50x50x8',
                 'آی خشک چین':'I Shaped Dry',
                '۲۳ عدد':'23 Piece',

                'خشک چین ۶ گوش':'Dry Hexagon',
                '۱۸ عدد':'18 Piece',
                 'خشک چین پازل':'Dry Puzzle',
                '۱۶ عدد':'16 Piece',
                'خشک چین طبری':'Dry Axe',
                '۲۸ عدد':'28 Piece',
                'خشک چین کنگره':'Dry Congress',
                'خشک چین کندویی':'Dry Honeycomb',
                "خشک چین کوزه ای و شنی":"Dry Jar & sandy",
                "۲۲ عدد":"22 Piece",
                "خشک چین آجری":"Dry Block",
                "بادبر":"Windy",
                "۲۰*۲۰ ساده پوست ماری":"20x20 Dry Snake Skin",
                "۴۰*۴۰ ساده پوست ماری":"40x40 Dry Snake Skin",
                "۵ ضلعی ساده پوست ماری":"Pentagon Snake Skin",
                "۲۰ عدد":"20 Piece",
                "حیاطی ۴۰*۴۰ ستاره":"40x40 Yard Star",
                "حیاطی ۴۰*۴۰ یاسمن":"40x40 Yard Jasmine",
                "حیاطی ۳۰*۳۰ سکه ای":"40x40 Yard Coin",
                "حیاطی ۳۳*۳۳ قلوه سنگی":"40x40 Yard Rock",
                "۹ عدد":"9 Piece",
                // "":"25 Piece",











                //kaval
                "دوتکه ۱۰۰": "100 Two Piece",
                "۱۰۰": "100",
                "۱۱۰": "110",
                "۱۲۰": "120",
                "۱۴۰": "140",
                "۱۰۰*۲۵*۵": "100x25x5",
                "۷۰": "70",
                "۸۰": "80",
                "۹۰": "90",
                "۱۳۰": "130",


                //numbers
                '۵۰۰':'500',
                '۳۰۰۰':'3000',
                '۵۰۰۰':'5000',
                '۲۰۰۰۰':'20000',
                '۲۵۰۰۰۰':'250000',
                '۳۲۵۰۰۰':'325000',
                '۴۲۵۰۰۰':'425000',
                '۴۵۰۰۰۰':'450000',
                '۵۰۰۰۰۰':'500000',
                '۶۶۰۰۰۰':'660000',
                '۶۰۵۰۰۰':'605000',
                '۲۲۰۰۰۰':'220000',
                '۹۰۰۰۰/۷۰۰۰۰':'90000/70000',
                '۱۰۰۰۰۰':'100000',
                '۱۲۵۰۰۰':'125000',
                '۵۰۰۰۰':'50000',
                '۶۵۰۰۰۰':'650000',
                '۷۷۰۰۰۰':'7700000',
                '۸۰۰۰۰۰':'800000',
                '۹۳۰۰۰۰':'930000',
                '۱۰۰۰۰۰۰':'1000000',
                '۱۴۷۰۰۰۰':'1470000',
                '۱۸۳۰۰۰۰':'1830000',
                '۲۳۰۰۰۰۰':'2300000',

                '۲۰۵۰۰۰':'205000',
                '۲۴۰۰۰۰':'240000',
                '۲۸۰۰۰۰':'280000',
                '۳۰۰۰۰۰':'300000',
                '۳۵۰۰۰۰':'350000',
                '۱۴۵۰۰۰':'145000',
                '۱۷۵۰۰۰':'175000',
                '۱۶۵۰۰۰':'165000',
                '۱۹۵۰۰۰':'195000',
                '۲۳۵۰۰۰':'235000',

                '۳۰x۳۰':'30x30',
                '۴۰x۴۰':'40x40',

                '۵۲۸۰۰':'52800',

                '۴۷۰۰۰':'47000',
                '۴۲۳۰۰':'42300',
                //jadval
                '۵۰*۳۰*۱۰':'50x30x10',
                '۵۰*۳۰*۱۲.۵':'50x30x12.5',
                '۵۰*۳۰*۱۵':'50x30x15',
                '۳۸۵۰۰':'38500',
                '۶۲۰۰۰':'62000',
                '۶۵۰۰۰':'65000',

                '۵۰*۴۰*۱۵':'50x40x15',
                '۵۰*۵۰*۱۵':'50x50x15',
                '۵۰*۳۰*۶':'50x30x6',
                '۵۰*۳۰*۸':'50x30x8',
                //Blook
                '۴۰*۲۰*۲۰':'40x20x20',
                '۵۰*۲۰*۱۵':'50x20x15',
                '۴۰*۲۰*۱۵':'40x20x15',
                '۴۰*۲۰*۱۰':'40x20x10',
                '۹۳۵۰':'9350',
                '۱۲۷۰۰':'12700',
                '۱۳۶۰۰':'13600',
                '۱۱۲۰۰':'11200',

                '۹۸۰۰-۱۰۸۰۰':'9800-10800',
                '۱۰۸۰۰':'10800',
                '۱۲۰۰۰':'12000',
                '۴۰*۲۰*۲۵':'40x20x25',
                '۶۸.۵*۲۰*۲۰':'68.5x20x20',

                '۹۴۰۰':'9400',
                '۷۶۰۰':'7600',
                '۱۵۰۰۰':'15000',


                //////NJ
                "۴۵۰ کیلو":"450 (Kg)",
                "۹۰۰ کیلو":"900 (Kg)",
                "۳۴۰۰ کیلو":"3400 (Kg)",
                "۹۵ کیلو":"95 (Kg)",
                "۱۰۰*۷۰*۵۰":"100x70x50",
                "۲۰۰*۷۰*۵۰":"200x70x50",
                "۳۰۰*۱۱۰*۸۰":"300x110x80",
                "۴۰*۴۰*۴۵":"40x40x45",

                ///////// table translations
                "ship":"Ship Fee ",
                "price":"Price(Rial)",
                "sizes":"Size(cm)",
                "kg":"Weight",




                "contact":"Contact",





            }
        },
        fa: {
            translations: {
                "To get started, edit <1>src/App.js</1> and save to reload.":
                    "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
                "Welcome to React": "Willkommen bei React und react-i18next",

                "Pars<1> Jadval</1>":"پارس <1>جدول</1>",
                "pars-title-footer": "پارس جدول",
                "sideNav-class-select":"right",
                "lang-class":"farsi",



                "sideNav-home": " صفحه اصلی",
                "products": "محصولات",
                "jadval":"جدول",
                "blook":"بلوک",
                "kafpoosh":"كفپوش",
                "dal":"دال بتنی",
                "mozayik":"موزاییک",
                "kaval":"كول",
                "mobleman":"مبلمان شهری",
                "nj":"نيوجرسی",

                "وت پرس":"وت پرس",
                "پرس خشك":"پرس خشك",
                "دستی":"دستی",
                "سبك پوكه":"سبك پوكه",
                "بلوك سيمانی":"بلوك سيمانی",
                "ويبره":"ويبره",
                "واش بتن":"واش بتن",
                "ترافیک سبک":"ترافیک سبک",
                "ترافیک سنگین":"ترافیک سنگین",
                "ساده":"ساده",
                "حياطی":"حياطی",
                "گرد":"گرد",
                "انباری":"انباری",
                "بیضی":"بیضی",
                "تخته":"تخته",
                'جرسی':'جرسی',
                'مینی جرسی':'مینی جرسی',

                /// table Translation
                //blook
                "بلوک ته پر پوکه": "بلوک ته پر پوکه",
                "بلوک ۵۰ پوکه": "بلوک ۵۰ پوکه",
                "بلوک ۱۵ پوکه": "بلوک ۱۵ پوکه",
                "تیغه ۱۰ پوکه فروه": "تیغه ۱۰ پوکه فروه",
                "دیواری ته باز سیمانی": "دیواری ته باز سیمانی",
                "دیواری ته پر سیمانی": "دیواری ته پر سیمانی",
                "بلوک ۵۰ سیمانی": "بلوک ۵۰ سیمانی",
                "بلوک ۱۵ سیمانی": "بلوک ۱۵ سیمانی",
                "تیغه ۱۰ سیمانی": "تیغه ۱۰ سیمانی",
                "بلوک سقفی سیمانی": "بلوک سقفی سیمانی",
                "کرومیت سقفی سیمانی": "کرومیت سقفی سیمانی",
                //dal
                "ساده ایرانی ۳۰*۳۰ درجه ۱، درجه ۲": "ساده ایرانی ۳۰*۳۰ درجه ۱، درجه ۲",
                "ساده ایرانی ۴۰*۴۰": "ساده ایرانی ۴۰*۴۰",
                "گرانیتی ساده ۴۰*۴۰": "گرانیتی ساده ۴۰*۴۰",
                "مرمری ساده ۴۰*۴۰": "مرمری ساده ۴۰*۴۰",
                "موزائیک گرانیتی حیاطی ۴۰*۴۰": "موزائیک گرانیتی حیاطی ۴۰*۴۰",
                "موزائیک مرمری حیاطی ۴۰*۴۰": "موزائیک مرمری حیاطی ۴۰*۴۰",
                '۸۰*۶۰*۱۰':'۸۰*۶۰*۱۰',
                '۱۰۰*۶۰*۱۰':'۱۰۰*۶۰*۱۰',
                '۱۲۰*۶۰*۱۰':'۱۲۰*۶۰*۱۰',
                '۸۰*۶۰*۱۵':'۸۰*۶۰*۱۵',
                '۱۰۰*۶۰*۱۵':'۱۰۰*۶۰*۱۵',
                '۱۲۰*۶۰*۱۵':'۱۲۰*۶۰*۱۵',
                '۲۰۰*۶۰*۲۰':'۲۰۰*۶۰*۲۰',
                '۱۵۰*۶۰*۲۰':'۱۵۰*۶۰*۲۰',
                '۱۵۰*۶۰*۱۵':'۱۵۰*۶۰*۱۵',




                //kafpoosh

                '۴۰*۴۰ پرسی':'۴۰*۴۰ پرسی',
                '۶/۲۵ عدد':'۶/۲۵ عدد',
                '۲۰*۲۰ پرسی':'۲۰*۲۰ پرسی',
                '۲۵ عدد':'۲۵ عدد',
                '۱۰*۲۰ پرسی':'۱۰*۲۰ پرسی',
                '۴۹ عدد':'۴۹ عدد',
                '۵۰*۵۰ پرسی':'۵۰*۵۰ پرسی',
                '۴ عدد':'۴ عدد',
                '۳۰*۳۰ پرسی':'۳۰*۳۰ پرسی',
                '۱۱ عدد':'۱۱ عدد',
                '۴۰*۴۰ نابینایان پرسی':'۴۰*۴۰ نابینایان پرسی',
                '۶.۲۵ عدد':'۶.۲۵ عدد',
                '۵۰*۵۰*۸':'۵۰*۵۰*۸',

                'آی خشک چین':'آی خشک چین',
                '۲۳ عدد':'۲۳ عدد',


                'خشک چین ۶ گوش':'خشک چین ۶ گوش',
                '۱۸ عدد':'۱۸ عدد',
                'خشک چین پازل':'خشک چین پازل',
                '۱۶ عدد':'۱۶ عدد',
                'خشک چین طبری':'خشک چین طبری',
                '۲۸ عدد':'۲۸ عدد',
                'خشک چین کنگره':'خشک چین کنگره',
                'خشک چین کندویی':'خشک چین کندویی',
                "خشک چین کوزه ای و شنی":"خشک چین کوزه ای و شنی",
                "۲۲ عدد":"۲۲ عدد",
                "خشک چین آجری":"خشک چین آجری",
                "بادبر":"بادبر",
                "۲۰*۲۰ ساده پوست ماری":"۲۰*۲۰ ساده پوست ماری",
                "۴۰*۴۰ ساده پوست ماری":"۴۰*۴۰ ساده پوست ماری",
                "۵ ضلعی ساده پوست ماری":"۵ ضلعی ساده پوست ماری",
                "۲۰ عدد":"۲۰ عدد",
                "حیاطی ۴۰*۴۰ ستاره":"حیاطی ۴۰*۴۰ ستاره",
                "حیاطی ۴۰*۴۰ یاسمن":"حیاطی ۴۰*۴۰ یاسمن",
                "حیاطی ۳۰*۳۰ سکه ای":"حیاطی ۳۰*۳۰ سکه ای",
                "حیاطی ۳۳*۳۳ قلوه سنگی":"حیاطی ۳۳*۳۳ قلوه سنگی",
                "۹ عدد":"۹ عدد",
                // '۵۰*۵۰*۸':'50*50*8',
                // '۵۰*۵۰*۸':'50*50*8',


                // '۴۰x۴۰':'۴۰x۴۰',
                // '۱۵۰۰۰':'15000',
                // '۱۵۰۰۰':'15000',
                // '۱۵۰۰۰':'15000',
                // '۱۵۰۰۰':'15000',
                // '۱۵۰۰۰':'15000',
                // '۱۵۰۰۰':'15000',
                // '۱۵۰۰۰':'15000',


                //kaval
                "دوتکه ۱۰۰": "دوتکه ۱۰۰",
                "۱۰۰": "۱۰۰",
                "۱۱۰": "۱۱۰",
                "۱۲۰": "۱۲۰",
                "۱۴۰": "۱۴۰",
                "۱۰۰*۲۵*۵": "۱۰۰*۲۵*۵",
                "۷۰": "۷۰",
                "۸۰": "۸۰",
                "۹۰": "۹۰",
                "۱۳۰": "۱۳۰",


                //numbers
                '۵۰۰':'۵۰۰',
                '۳۰۰۰':'۳۰۰۰',
                 '۵۰۰۰':'۵۰۰۰',
                '۲۰۰۰۰':'۲۰۰۰۰',
                '۲۵۰۰۰۰':'۲۵۰۰۰۰',
                '۳۲۵۰۰۰':'۳۲۵۰۰۰',
                '۴۲۵۰۰۰':'۴۲۵۰۰۰',
                '۴۵۰۰۰۰':'۴۵۰۰۰۰',
                '۵۰۰۰۰۰':'۵۰۰۰۰۰',
                '۶۶۰۰۰۰':'۶۶۰۰۰۰',
                '۶۰۵۰۰۰':'۶۰۵۰۰۰',
                '۲۲۰۰۰۰':'۲۲۰۰۰۰',
                '۹۰۰۰۰/۷۰۰۰۰':'۹۰۰۰۰/۷۰۰۰۰',
                '۱۰۰۰۰۰':'۱۰۰۰۰۰',
                '۱۲۵۰۰۰':'۱۲۵۰۰۰',
                '۵۰۰۰۰':'۵۰۰۰۰',
                '۶۵۰۰۰۰':'۶۵۰۰۰۰',
                '۷۷۰۰۰۰':'۷۷۰۰۰۰',
                '۸۰۰۰۰۰':'۸۰۰۰۰۰',
                '۹۳۰۰۰۰':'۹۳۰۰۰۰',
                '۱۰۰۰۰۰۰':'۱۰۰۰۰۰۰',
                '۱۴۷۰۰۰۰':'۱۴۷۰۰۰۰',
                '۱۸۳۰۰۰۰':'۱۸۳۰۰۰۰',
                '۲۳۰۰۰۰۰':'۲۳۰۰۰۰۰',

                '۲۰۵۰۰۰':'۲۰۵۰۰۰',
                '۲۴۰۰۰۰':'۲۴۰۰۰۰',
                '۲۸۰۰۰۰':'۲۸۰۰۰۰',
                '۳۰۰۰۰۰':'۳۰۰۰۰۰',
                '۳۵۰۰۰۰':'۳۵۰۰۰۰',
                '۱۴۵۰۰۰':'۱۴۵۰۰۰',
                '۱۷۵۰۰۰':'۱۷۵۰۰۰',
                '۱۶۵۰۰۰':'۱۶۵۰۰۰',
                '۱۹۵۰۰۰':'۱۹۵۰۰۰',
                '۲۳۵۰۰۰':'۲۳۵۰۰۰',

                '۳۰x۳۰':'۳۰x۳۰',
                '۴۰x۴۰':'۴۰x۴۰',

                '۵۲۸۰۰':'۵۲۸۰۰',

                '۴۷۰۰۰':'۴۷۰۰۰',
                '۴۲۳۰۰':'۴۲۳۰۰',
                //jadval
                '۵۰*۳۰*۱۰':'۵۰*۳۰*۱۰',
                '۵۰*۳۰*۱۲.۵':'۵۰*۳۰*۱۲.۵',
                '۵۰*۳۰*۱۵':'۵۰*۳۰*۱۵',
                '۳۸۵۰۰':'۳۸۵۰۰',
                '۶۲۰۰۰':'۶۲۰۰۰',
                '۶۵۰۰۰':'۶۵۰۰۰',

                '۵۰*۴۰*۱۵':'۵۰*۴۰*۱۵',
                '۵۰*۵۰*۱۵':'۵۰*۵۰*۱۵',
                '۵۰*۳۰*۶':'۵۰*۳۰*۶',
                '۵۰*۳۰*۸':'۵۰*۳۰*۸',
                //Blook
                '۴۰*۲۰*۲۰':'۴۰*۲۰*۲۰',
                '۵۰*۲۰*۱۵':'۵۰*۲۰*۱۵',
                '۴۰*۲۰*۱۵':'۴۰*۲۰*۱۵',
                '۴۰*۲۰*۱۰':'۴۰*۲۰*۱۰',
                '۹۳۵۰':'۹۳۵۰',
                '۱۲۷۰۰':'۱۲۷۰۰',
                '۱۳۶۰۰':'۱۳۶۰۰',
                '۱۱۲۰۰':'۱۱۲۰۰',

                '۹۸۰۰-۱۰۸۰۰':'۹۸۰۰-۱۰۸۰۰',
                '۱۰۸۰۰':'۱۰۸۰۰',
                '۱۲۰۰۰':'۱۲۰۰۰',
                '۴۰*۲۰*۲۵':'۴۰*۲۰*۲۵',
                '۶۸.۵*۲۰*۲۰':'۶۸.۵*۲۰*۲۰',

                '۹۴۰۰':'۹۴۰۰',
                '۷۶۰۰':'۷۶۰۰',
                '۱۵۰۰۰':'۱۵۰۰۰',
                ////NJ
                "۴۵۰ کیلو":"۴۵۰ کیلو",
                "۹۰۰ کیلو":"۹۰۰ کیلو",
                "۳۴۰۰ کیلو":"۳۴۰۰ کیلو",
                "۹۵ کیلو":"۹۵ کیلو",


                "۱۰۰*۷۰*۵۰":"۱۰۰*۷۰*۵۰",
                "۲۰۰*۷۰*۵۰":"۲۰۰*۷۰*۵۰",
                "۳۰۰*۱۱۰*۸۰":"۳۰۰*۱۱۰*۸۰",
                "۴۰*۴۰*۴۵":"۴۰*۴۰*۴۵",
                // "":"",











              "ship":"هزینه باربری",
                "price":"(فی(ریال",
                "sizes":"ابعاد(cm)",
                "kg":"وزن",




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

    // react: {
    //     wait: true
    // }
});

export default i18n;