import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        skip: "Skip to main content",
        help: "Accessibility Help",
        about: "About Us",
        services: "Services",
        business: "Business Information",
        tender: "Tender",
        career: "Career",
        contact: "Contact Us",
        title: "Telecommunications Consultants India Limited",
        subtitle: "(A Government of India Enterprise)",
      },
    },
    hi: {
      translation: {
        skip: "मुख्य सामग्री पर जाएं",
        help: "पहुंच संबंधी सहायता",
        about: "हमारे बारे में",
        services: "सेवाएं",
        business: "व्यावसायिक जानकारी",
        tender: "निविदा",
        career: "करियर",
        contact: "हमसे संपर्क करें",
        title: "टेलीकम्युनिकेशंस कंसल्टेंट्स इंडिया लिमिटेड",
        subtitle: "(भारत सरकार का एक उपक्रम)",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
