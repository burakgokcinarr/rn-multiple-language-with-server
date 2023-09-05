import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import i18nHttpLoader from 'i18next-http-backend';
import Axios from 'axios';

i18n
    .use(initReactI18next)
    .use(i18nHttpLoader)
    .init({
        compatibilityJSON: 'v3',
        lng: getLocales()[0].languageCode,  // tr, en, de vs..
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        },
        backend: {
            loadPath: 'http://localhost:5010/languagedb?lang={{lng}}',      // Fetch via server mongodb languages 
            // loadPath: 'http://localhost:5010/languagedb?lang={{lng}}',      // Fetch via serber languages files (tr.json, en.json vs)
            request: async(options, url, payload, callback) => {
                try {
                    const response = await Axios.get(url);
                    //console.log("Lang = ", response.data);
                    callback(null, response);
                } catch (err) {
                    console.log(err);
                    callback(err, null);
                }
            },
        }
    }); 

export default i18n;