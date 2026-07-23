import type { Locale } from './site';
import type { LocationPageKey } from './routes';

type SharedCopy = {
  primaryNavLabel: string;
  footerNavLabel: string;
  legalNavLabel: string;
  heroComfortLabel: string;
  approachHeadingBefore: string;
  approachHeadingAccent: string;
  installationLabel: string;
  legalLabel: string;
  privacyLabel: string;
  corridorItemLabel: string;
  footerStatement: [string, string];
  previewLabel: string;
  formUnavailable: string;
  schemaServiceType: string;
  honeypotLabel: string;
  locationNames: Record<LocationPageKey, string>;
  assetAlts: {
    installation: string;
    apartment: string;
    villa: string;
    hospitality: string;
    corridor: string;
  };
};

export const sharedCopy: Record<Locale, SharedCopy> = {
  fr: {
    primaryNavLabel: 'Navigation principale',
    footerNavLabel: 'Navigation du pied de page',
    legalNavLabel: 'Informations légales',
    heroComfortLabel: 'Confort',
    approachHeadingBefore: 'Architecture, usage,',
    approachHeadingAccent: 'équilibre thermique.',
    installationLabel: 'Installation',
    legalLabel: 'Mentions légales',
    privacyLabel: 'Confidentialité',
    corridorItemLabel: 'Zone étudiée',
    footerStatement: ['Confort architectural.', 'Clarté technique.'],
    previewLabel: 'Aperçu · non indexé',
    formUnavailable:
      'Le formulaire est temporairement désactivé pendant la validation du canal de réception. Aucune donnée n’est envoyée.',
    schemaServiceType: 'Étude et devis pour un projet d’installation de climatisation',
    honeypotLabel: 'Site internet',
    locationNames: {
      monaco: 'Monaco',
      menton: 'Menton',
      nice: 'Nice',
      antibes: 'Antibes',
      cannes: 'Cannes',
      frejus: 'Fréjus',
      sainteMaxime: 'Sainte-Maxime',
      saintTropez: 'Saint-Tropez',
    },
    assetAlts: {
      installation: 'Diffuseur d’air discret intégré à un intérieur méditerranéen.',
      apartment: 'Appartement côtier dense avec intégration architecturale discrète.',
      villa: 'Villa méditerranéenne ouverte sur une terrasse ombragée.',
      hospitality: 'Espace d’accueil méditerranéen aux diffuseurs d’air intégrés.',
      corridor: 'Relief abstrait inspiré du littoral et des flux thermiques.',
    },
  },
  en: {
    primaryNavLabel: 'Primary navigation',
    footerNavLabel: 'Footer navigation',
    legalNavLabel: 'Legal information',
    heroComfortLabel: 'Comfort',
    approachHeadingBefore: 'Architecture, use,',
    approachHeadingAccent: 'thermal balance.',
    installationLabel: 'Installation',
    legalLabel: 'Legal',
    privacyLabel: 'Privacy',
    corridorItemLabel: 'Area considered',
    footerStatement: ['Architectural comfort.', 'Technical clarity.'],
    previewLabel: 'Preview · noindex',
    formUnavailable:
      'The form is temporarily disabled while the secure receiving channel is verified. No data is sent.',
    schemaServiceType: 'Air-conditioning installation planning and quotation',
    honeypotLabel: 'Website',
    locationNames: {
      monaco: 'Monaco',
      menton: 'Menton',
      nice: 'Nice',
      antibes: 'Antibes',
      cannes: 'Cannes',
      frejus: 'Fréjus',
      sainteMaxime: 'Sainte-Maxime',
      saintTropez: 'Saint-Tropez',
    },
    assetAlts: {
      installation: 'A discreet air diffuser integrated into a Mediterranean interior.',
      apartment: 'A dense coastal apartment with discreet architectural integration.',
      villa: 'A Mediterranean villa opening onto a shaded terrace.',
      hospitality: 'A Mediterranean guest space with integrated air diffusers.',
      corridor: 'An abstract relief inspired by the coast and thermal flows.',
    },
  },
  it: {
    primaryNavLabel: 'Navigazione principale',
    footerNavLabel: 'Navigazione a piè di pagina',
    legalNavLabel: 'Informazioni legali',
    heroComfortLabel: 'Comfort',
    approachHeadingBefore: 'Architettura, uso,',
    approachHeadingAccent: 'equilibrio termico.',
    installationLabel: 'Installazione',
    legalLabel: 'Note legali',
    privacyLabel: 'Privacy',
    corridorItemLabel: 'Zona considerata',
    footerStatement: ['Comfort architettonico.', 'Chiarezza tecnica.'],
    previewLabel: 'Anteprima · non indicizzata',
    formUnavailable:
      'Il modulo è temporaneamente disattivato durante la verifica del canale di ricezione. Nessun dato viene inviato.',
    schemaServiceType: 'Studio e preventivo per installazione di climatizzazione',
    honeypotLabel: 'Sito internet',
    locationNames: {
      monaco: 'Monaco',
      menton: 'Mentone',
      nice: 'Nizza',
      antibes: 'Antibes',
      cannes: 'Cannes',
      frejus: 'Fréjus',
      sainteMaxime: 'Sainte-Maxime',
      saintTropez: 'Saint-Tropez',
    },
    assetAlts: {
      installation: 'Diffusore d’aria discreto integrato in un interno mediterraneo.',
      apartment: 'Appartamento costiero denso con integrazione architettonica discreta.',
      villa: 'Villa mediterranea aperta su una terrazza ombreggiata.',
      hospitality: 'Spazio di accoglienza mediterraneo con diffusori d’aria integrati.',
      corridor: 'Rilievo astratto ispirato alla costa e ai flussi termici.',
    },
  },
  ru: {
    primaryNavLabel: 'Основная навигация',
    footerNavLabel: 'Навигация внизу страницы',
    legalNavLabel: 'Правовая информация',
    heroComfortLabel: 'Комфорт',
    approachHeadingBefore: 'Архитектура, использование,',
    approachHeadingAccent: 'тепловой баланс.',
    installationLabel: 'Установка',
    legalLabel: 'Правовая информация',
    privacyLabel: 'Конфиденциальность',
    corridorItemLabel: 'Рассматриваемая зона',
    footerStatement: ['Архитектурный комфорт.', 'Техническая ясность.'],
    previewLabel: 'Предпросмотр · без индексации',
    formUnavailable:
      'Форма временно отключена до проверки безопасного канала приёма. Данные не отправляются.',
    schemaServiceType: 'Подготовка и расчёт проекта установки кондиционирования',
    honeypotLabel: 'Веб-сайт',
    locationNames: {
      monaco: 'Монако',
      menton: 'Ментон',
      nice: 'Ницца',
      antibes: 'Антиб',
      cannes: 'Канны',
      frejus: 'Фрежюс',
      sainteMaxime: 'Сент-Максим',
      saintTropez: 'Сен-Тропе',
    },
    assetAlts: {
      installation: 'Незаметный воздушный диффузор в средиземноморском интерьере.',
      apartment: 'Квартира на плотной прибрежной застройке с деликатной интеграцией.',
      villa: 'Средиземноморская вилла с выходом на затенённую террасу.',
      hospitality: 'Средиземноморское пространство для гостей со встроенными диффузорами.',
      corridor: 'Абстрактный рельеф, вдохновлённый побережьем и тепловыми потоками.',
    },
  },
};
