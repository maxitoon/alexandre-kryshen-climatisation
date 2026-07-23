import { newLocationContent, type NewLocationPageKey } from './location-content';
import type { PageKey } from './routes';
import { locales, type Locale } from './site';

export type ContentSection = {
  title: string;
  body: string;
};

export type PageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  sections: ContentSection[];
  ctaTitle: string;
  ctaBody: string;
};

type UiCopy = {
  skip: string;
  navServices: string;
  navAreas: string;
  navApproach: string;
  navQuote: string;
  menu: string;
  close: string;
  language: string;
  corridorLabel: string;
  previewNotice: string;
  exploreServices: string;
  exploreAreas: string;
  quoteAction: string;
  phoneAction: string;
  whatsappAction: string;
  unavailableContact: string;
  breadcrumbHome: string;
  adjacentAreas: string;
  legalIdentity: string;
  form: {
    title: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    locality: string;
    propertyType: string;
    propertyOptions: Record<string, string>;
    timing: string;
    timingOptions: Record<string, string>;
    preferredContact: string;
    preferredOptions: Record<string, string>;
    message: string;
    consent: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
};

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  ru: 'Русский',
};

export const ui: Record<Locale, UiCopy> = {
  fr: {
    skip: 'Aller au contenu',
    navServices: 'Services',
    navAreas: 'Zones',
    navApproach: 'Approche',
    navQuote: 'Demander un devis',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    corridorLabel: 'Monaco — Saint-Tropez',
    previewNotice: 'Aperçu privé : coordonnées téléphoniques en attente de validation.',
    exploreServices: 'Découvrir l’approche',
    exploreAreas: 'Explorer la Côte d’Azur',
    quoteAction: 'Décrire votre projet',
    phoneAction: 'Appeler',
    whatsappAction: 'WhatsApp',
    unavailableContact: 'Téléphone et WhatsApp seront activés après validation.',
    breadcrumbHome: 'Accueil',
    adjacentAreas: 'Le corridor',
    legalIdentity: 'Identité vérifiée',
    form: {
      title: 'Parlons de votre projet',
      intro: 'Quelques détails suffisent pour préparer un premier échange utile.',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      locality: 'Ville ou code postal',
      propertyType: 'Type de bien',
      propertyOptions: {
        apartment: 'Appartement',
        house: 'Maison',
        villa: 'Villa',
        business: 'Local professionnel',
        other: 'Autre',
      },
      timing: 'Horizon du projet',
      timingOptions: {
        planning: 'En réflexion',
        soon: 'Prochainement',
        flexible: 'Flexible',
      },
      preferredContact: 'Contact préféré',
      preferredOptions: {
        email: 'E-mail',
        phone: 'Téléphone',
        whatsapp: 'WhatsApp',
      },
      message: 'Votre besoin',
      consent: 'J’accepte que mes informations soient utilisées pour répondre à cette demande.',
      submit: 'Envoyer la demande',
      submitting: 'Envoi…',
      success: 'Votre demande a bien été reçue.',
      error: 'La demande n’a pas pu être envoyée. Vérifiez les champs et réessayez.',
    },
  },
  en: {
    skip: 'Skip to content',
    navServices: 'Services',
    navAreas: 'Areas',
    navApproach: 'Approach',
    navQuote: 'Request a quote',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    corridorLabel: 'Monaco — Saint-Tropez',
    previewNotice: 'Private preview: telephone details are awaiting confirmation.',
    exploreServices: 'Explore the approach',
    exploreAreas: 'Explore the Riviera',
    quoteAction: 'Describe your project',
    phoneAction: 'Call',
    whatsappAction: 'WhatsApp',
    unavailableContact: 'Telephone and WhatsApp will appear after verification.',
    breadcrumbHome: 'Home',
    adjacentAreas: 'The corridor',
    legalIdentity: 'Verified identity',
    form: {
      title: 'Tell us about your project',
      intro: 'A few practical details are enough to prepare a useful first conversation.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      locality: 'Town or postcode',
      propertyType: 'Property type',
      propertyOptions: {
        apartment: 'Apartment',
        house: 'House',
        villa: 'Villa',
        business: 'Business premises',
        other: 'Other',
      },
      timing: 'Project timing',
      timingOptions: {
        planning: 'Planning',
        soon: 'Soon',
        flexible: 'Flexible',
      },
      preferredContact: 'Preferred contact',
      preferredOptions: {
        email: 'Email',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
      },
      message: 'What do you need?',
      consent: 'I agree that my information may be used to answer this request.',
      submit: 'Send request',
      submitting: 'Sending…',
      success: 'Your request was received.',
      error: 'The request could not be sent. Check the fields and try again.',
    },
  },
  it: {
    skip: 'Vai al contenuto',
    navServices: 'Servizi',
    navAreas: 'Zone',
    navApproach: 'Approccio',
    navQuote: 'Richiedi un preventivo',
    menu: 'Menu',
    close: 'Chiudi',
    language: 'Lingua',
    corridorLabel: 'Monaco — Saint-Tropez',
    previewNotice: 'Anteprima privata: i recapiti telefonici sono in attesa di conferma.',
    exploreServices: 'Scopri l’approccio',
    exploreAreas: 'Esplora la Costa Azzurra',
    quoteAction: 'Descrivi il progetto',
    phoneAction: 'Chiama',
    whatsappAction: 'WhatsApp',
    unavailableContact: 'Telefono e WhatsApp saranno attivati dopo la verifica.',
    breadcrumbHome: 'Pagina iniziale',
    adjacentAreas: 'Il corridoio',
    legalIdentity: 'Identità verificata',
    form: {
      title: 'Parliamo del tuo progetto',
      intro: 'Bastano pochi dettagli pratici per preparare un primo confronto utile.',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefono',
      locality: 'Città o CAP',
      propertyType: 'Tipo di immobile',
      propertyOptions: {
        apartment: 'Appartamento',
        house: 'Casa',
        villa: 'Villa',
        business: 'Locale professionale',
        other: 'Altro',
      },
      timing: 'Tempistica',
      timingOptions: {
        planning: 'In valutazione',
        soon: 'A breve',
        flexible: 'Flessibile',
      },
      preferredContact: 'Contatto preferito',
      preferredOptions: {
        email: 'E-mail',
        phone: 'Telefono',
        whatsapp: 'WhatsApp',
      },
      message: 'Esigenza',
      consent: 'Accetto che i miei dati siano utilizzati per rispondere alla richiesta.',
      submit: 'Invia la richiesta',
      submitting: 'Invio…',
      success: 'La richiesta è stata ricevuta.',
      error: 'Invio non riuscito. Controlla i campi e riprova.',
    },
  },
  ru: {
    skip: 'Перейти к содержимому',
    navServices: 'Услуги',
    navAreas: 'Регионы',
    navApproach: 'Подход',
    navQuote: 'Запросить расчёт',
    menu: 'Меню',
    close: 'Закрыть',
    language: 'Язык',
    corridorLabel: 'Монако — Сен-Тропе',
    previewNotice: 'Закрытый предпросмотр: телефонные контакты ожидают подтверждения.',
    exploreServices: 'Узнать о подходе',
    exploreAreas: 'Открыть Лазурный Берег',
    quoteAction: 'Рассказать о проекте',
    phoneAction: 'Позвонить',
    whatsappAction: 'WhatsApp',
    unavailableContact: 'Телефон и WhatsApp появятся после проверки.',
    breadcrumbHome: 'Главная',
    adjacentAreas: 'Побережье',
    legalIdentity: 'Подтверждённые данные',
    form: {
      title: 'Расскажите о проекте',
      intro: 'Нескольких практических деталей достаточно для содержательного первого контакта.',
      name: 'Имя',
      email: 'Электронная почта',
      phone: 'Телефон',
      locality: 'Город или индекс',
      propertyType: 'Тип объекта',
      propertyOptions: {
        apartment: 'Квартира',
        house: 'Дом',
        villa: 'Вилла',
        business: 'Коммерческое помещение',
        other: 'Другое',
      },
      timing: 'Срок проекта',
      timingOptions: {
        planning: 'На этапе планирования',
        soon: 'В ближайшее время',
        flexible: 'Гибкий срок',
      },
      preferredContact: 'Предпочтительный способ связи',
      preferredOptions: {
        email: 'Электронная почта',
        phone: 'Телефон',
        whatsapp: 'WhatsApp',
      },
      message: 'Задача',
      consent: 'Я согласен на использование моих данных для ответа на этот запрос.',
      submit: 'Отправить запрос',
      submitting: 'Отправка…',
      success: 'Запрос получен.',
      error: 'Не удалось отправить запрос. Проверьте поля и повторите попытку.',
    },
  },
};

type ExistingPageKey = Exclude<PageKey, NewLocationPageKey>;

const baseContent: Record<Locale, Record<ExistingPageKey, PageContent>> = {
  fr: {
    home: {
      metaTitle: 'Climatisation sur la Côte d’Azur | Alexandre Kryshen',
      metaDescription:
        'Étude et devis pour vos projets de climatisation, de Monaco à Saint-Tropez, avec une approche précise et adaptée au bâti méditerranéen.',
      eyebrow: 'Confort architectural · Côte d’Azur',
      title: 'Le confort juste, de Monaco à Saint-Tropez.',
      lede: 'Une approche calme et précise des projets de climatisation : comprendre le lieu, cadrer le besoin et préparer une installation cohérente.',
      sections: [
        {
          title: 'Le lieu avant la machine',
          body: 'Appartement, villa ou espace professionnel : l’accès, l’exposition, le bruit et l’intégration comptent autant que l’équipement.',
        },
        {
          title: 'Un projet lisible',
          body: 'Le premier échange sert à clarifier les volumes, les usages et le calendrier avant l’étude et le devis.',
        },
      ],
      ctaTitle: 'Un projet sur la Côte d’Azur ?',
      ctaBody: 'Décrivez le bien, la ville et votre horizon pour préparer un échange utile.',
    },
    services: {
      metaTitle: 'Étude et installation de climatisation | Alexandre Kryshen',
      metaDescription:
        'Une méthode structurée pour cadrer un projet de climatisation et préparer une installation adaptée au bien.',
      eyebrow: 'Services',
      title: 'Une installation pensée comme un projet.',
      lede: 'Du premier cadrage au devis, chaque décision doit servir le confort, la discrétion et la cohérence du lieu.',
      sections: [
        {
          title: 'Cadrage',
          body: 'Usage des pièces, exposition, contraintes d’accès et attentes esthétiques structurent la demande.',
        },
        {
          title: 'Installation & remplacement',
          body: 'L’étude prépare une solution adaptée au projet, sans promesse de marque ou de performance non documentée.',
        },
      ],
      ctaTitle: 'Commencer par les bonnes questions',
      ctaBody: 'Une demande courte permet de préparer les points techniques à examiner.',
    },
    installation: {
      metaTitle: 'Installation de climatisation sur la Côte d’Azur | Devis',
      metaDescription:
        'Préparer un projet d’installation ou de remplacement de climatisation entre Monaco et Saint-Tropez.',
      eyebrow: 'Installation & remplacement',
      title: 'Intégrer le confort sans imposer la technique.',
      lede: 'Une installation réussie se juge autant à son usage quotidien qu’à sa place dans l’architecture.',
      sections: [
        {
          title: 'Observer',
          body: 'Volumes, orientation, circulation de l’air, acoustique et accès guident le cadrage initial.',
        },
        {
          title: 'Arbitrer',
          body: 'Implantation, discrétion et besoins réels sont mis en balance avant la préparation du devis.',
        },
      ],
      ctaTitle: 'Préparer votre installation',
      ctaBody: 'Indiquez le type de bien, la ville et les pièces concernées.',
    },
    areas: {
      metaTitle: 'Climatisation de Monaco à Saint-Tropez | Zones',
      metaDescription:
        'Un corridor de projets de climatisation sur la Côte d’Azur, étudiés selon le bâti, l’accès et la saisonnalité.',
      eyebrow: 'Le corridor',
      title: 'Une côte, des contraintes très différentes.',
      lede: 'De Monaco à Saint-Tropez, la densité, l’accès, la saison et le type de bien changent la manière de cadrer un projet.',
      sections: [
        {
          title: 'Villes denses',
          body: 'Appartements, copropriétés, voisinage et accès demandent une préparation particulièrement attentive.',
        },
        {
          title: 'Biens saisonniers',
          body: 'Villas, locations et espaces d’accueil nécessitent une réflexion sur l’usage et le calendrier.',
        },
      ],
      ctaTitle: 'Situer le projet',
      ctaBody: 'La ville et le type de bien donnent un premier cadre concret.',
    },
    nice: {
      metaTitle: 'Projet de climatisation à Nice | Alexandre Kryshen',
      metaDescription:
        'Préparer une installation de climatisation à Nice en tenant compte des appartements, copropriétés, accès et contraintes acoustiques.',
      eyebrow: 'Nice · Côte d’Azur',
      title: 'À Nice, chaque mètre et chaque accès comptent.',
      lede: 'Le tissu niçois mêle appartements, copropriétés, maisons et locaux professionnels : le projet commence par les contraintes du lieu.',
      sections: [
        {
          title: 'Appartement & copropriété',
          body: 'Passages, implantation, voisinage et parties communes doivent être identifiés avant toute décision.',
        },
        {
          title: 'Confort discret',
          body: 'La recherche d’une intégration sobre aide à préserver les volumes et l’usage quotidien.',
        },
      ],
      ctaTitle: 'Un projet à Nice ?',
      ctaBody: 'Décrivez le quartier, le type de bien et les pièces concernées.',
    },
    quote: {
      metaTitle: 'Demander un devis climatisation | Côte d’Azur',
      metaDescription:
        'Décrivez votre projet de climatisation sur la Côte d’Azur pour préparer un premier échange.',
      eyebrow: 'Votre projet',
      title: 'Quelques détails. Une discussion mieux préparée.',
      lede: 'Le formulaire recueille uniquement les informations utiles pour comprendre le bien et votre horizon.',
      sections: [
        {
          title: 'Avant l’envoi',
          body: 'Aucune pièce jointe ni donnée bancaire n’est demandée. Un e-mail ou un téléphone suffit.',
        },
        {
          title: 'Réception en attente',
          body: 'Tant que le canal sécurisé n’est pas confirmé, le formulaire reste désactivé et aucune donnée n’est envoyée.',
        },
      ],
      ctaTitle: 'Formulaire de projet',
      ctaBody: 'Les champs marqués sont nécessaires à la préparation du contact.',
    },
    legal: {
      metaTitle: 'Mentions légales | Alexandre Kryshen',
      metaDescription: 'Informations légales vérifiées de l’activité Alexandre Kryshen.',
      eyebrow: 'Informations légales',
      title: 'Une identité claire.',
      lede: 'Ce site publie uniquement les éléments juridiques confirmés.',
      sections: [
        {
          title: 'Éditeur',
          body: 'Alexandre Kryshen — entrepreneur individuel — activité basée à Nice.',
        },
        {
          title: 'Identifiant',
          body: 'SIRET : 849 573 779 00014. Les coordonnées de publication restent à confirmer.',
        },
      ],
      ctaTitle: 'Une information manque ?',
      ctaBody: 'Les éléments non vérifiés sont volontairement omis du site.',
    },
    privacy: {
      metaTitle: 'Confidentialité | Demande de devis',
      metaDescription: 'Principes de confidentialité appliqués au formulaire de demande de projet.',
      eyebrow: 'Confidentialité',
      title: 'Collecter peu. Expliquer clairement.',
      lede: 'Le formulaire demande uniquement ce qui est nécessaire à la compréhension et à la réponse.',
      sections: [
        {
          title: 'Formulaire désactivé',
          body: 'Aucune donnée n’est envoyée tant qu’un destinataire sécurisé et documenté n’est pas configuré.',
        },
        {
          title: 'Avant activation',
          body: 'Le destinataire, la durée de conservation et le contact de confidentialité seront configurés et documentés.',
        },
      ],
      ctaTitle: 'Maîtrise des données',
      ctaBody: 'Aucun document client, donnée bancaire ou fichier n’est demandé.',
    },
  },
  en: {
    home: {
      metaTitle: 'Air conditioning on the French Riviera | Alexandre Kryshen',
      metaDescription:
        'Planning and quotations for air-conditioning projects from Monaco to Saint-Tropez, shaped around Mediterranean properties.',
      eyebrow: 'Architectural comfort · French Riviera',
      title: 'Measured comfort, from Monaco to Saint-Tropez.',
      lede: 'A calm, precise approach to air-conditioning projects: understand the property, frame the need and prepare a coherent installation.',
      sections: [
        {
          title: 'Property before equipment',
          body: 'Apartment, villa or business space: access, exposure, acoustics and integration matter as much as the system.',
        },
        {
          title: 'A legible project',
          body: 'The first conversation clarifies rooms, uses and timing before the study and quotation.',
        },
      ],
      ctaTitle: 'A project on the Riviera?',
      ctaBody: 'Share the property type, location and timing to prepare a useful conversation.',
    },
    services: {
      metaTitle: 'Air-conditioning planning and installation | Alexandre Kryshen',
      metaDescription:
        'A structured way to frame an air-conditioning project and prepare an installation suited to the property.',
      eyebrow: 'Services',
      title: 'Treating installation as a complete project.',
      lede: 'From initial framing to the quotation, each decision should support comfort, discretion and architectural coherence.',
      sections: [
        {
          title: 'Framing',
          body: 'Room use, solar exposure, access constraints and aesthetic expectations shape the request.',
        },
        {
          title: 'Installation & replacement',
          body: 'The study prepares a suitable solution without unsupported claims about brands or performance.',
        },
      ],
      ctaTitle: 'Start with the right questions',
      ctaBody: 'A short request prepares the technical points that need attention.',
    },
    installation: {
      metaTitle: 'Air-conditioning installation on the French Riviera | Quote',
      metaDescription:
        'Prepare an air-conditioning installation or replacement project between Monaco and Saint-Tropez.',
      eyebrow: 'Installation & replacement',
      title: 'Integrate comfort without imposing the technology.',
      lede: 'A successful installation belongs in the architecture and supports daily use.',
      sections: [
        {
          title: 'Observe',
          body: 'Volumes, orientation, airflow, acoustics and access guide the initial project frame.',
        },
        {
          title: 'Balance',
          body: 'Placement, discretion and real needs are weighed before the quotation is prepared.',
        },
      ],
      ctaTitle: 'Prepare your installation',
      ctaBody: 'Share the property type, town and rooms concerned.',
    },
    areas: {
      metaTitle: 'Air conditioning from Monaco to Saint-Tropez | Areas',
      metaDescription:
        'A French Riviera project corridor shaped by each property, its access and seasonal use.',
      eyebrow: 'The corridor',
      title: 'One coastline. Very different constraints.',
      lede: 'From Monaco to Saint-Tropez, density, access, season and property type change how a project should be framed.',
      sections: [
        {
          title: 'Dense towns',
          body: 'Apartments, shared buildings, neighbours and access require especially careful preparation.',
        },
        {
          title: 'Seasonal properties',
          body: 'Villas, rentals and hospitality spaces benefit from clear use and timing decisions.',
        },
      ],
      ctaTitle: 'Locate the project',
      ctaBody: 'The town and property type provide a practical first frame.',
    },
    nice: {
      metaTitle: 'Air-conditioning project in Nice | Alexandre Kryshen',
      metaDescription:
        'Prepare an air-conditioning installation in Nice around apartments, shared buildings, access and acoustics.',
      eyebrow: 'Nice · French Riviera',
      title: 'In Nice, every metre and every access point matters.',
      lede: 'Nice combines apartments, shared buildings, houses and business premises; the project begins with the property’s constraints.',
      sections: [
        {
          title: 'Apartment & shared building',
          body: 'Routes, placement, neighbours and common areas should be identified before decisions are made.',
        },
        {
          title: 'Discreet comfort',
          body: 'A restrained integration helps preserve both the room and everyday use.',
        },
      ],
      ctaTitle: 'A project in Nice?',
      ctaBody: 'Describe the area, property type and rooms concerned.',
    },
    quote: {
      metaTitle: 'Request an air-conditioning quote | French Riviera',
      metaDescription:
        'Describe your French Riviera air-conditioning project and prepare the first conversation.',
      eyebrow: 'Your project',
      title: 'A few details. A better first conversation.',
      lede: 'The form asks only for information needed to understand the property and timing.',
      sections: [
        {
          title: 'Before submitting',
          body: 'No attachment or banking detail is requested. An email address or phone number is enough.',
        },
        {
          title: 'Receiving channel pending',
          body: 'Until a secure channel is confirmed, the form remains disabled and no data is sent.',
        },
      ],
      ctaTitle: 'Project form',
      ctaBody: 'The required fields prepare the next contact.',
    },
    legal: {
      metaTitle: 'Legal information | Alexandre Kryshen',
      metaDescription:
        'Verified legal information for Alexandre Kryshen’s air-conditioning activity in Nice.',
      eyebrow: 'Legal information',
      title: 'A clear identity.',
      lede: 'This site publishes only confirmed legal details.',
      sections: [
        {
          title: 'Publisher',
          body: 'Alexandre Kryshen — entrepreneur individuel — activity based in Nice.',
        },
        {
          title: 'Identifier',
          body: 'SIRET: 849 573 779 00014. Publication contact details remain to be confirmed.',
        },
      ],
      ctaTitle: 'Something missing?',
      ctaBody: 'Unverified information is intentionally omitted from the site.',
    },
    privacy: {
      metaTitle: 'Privacy | Project request',
      metaDescription: 'Privacy principles for the local air-conditioning project request form.',
      eyebrow: 'Privacy',
      title: 'Collect less. Explain clearly.',
      lede: 'The form asks only for information needed to understand and answer the request.',
      sections: [
        {
          title: 'Form disabled',
          body: 'No data is sent until a secure, documented recipient has been configured.',
        },
        {
          title: 'Before activation',
          body: 'The recipient, retention period and privacy contact will be configured and documented.',
        },
      ],
      ctaTitle: 'Data restraint',
      ctaBody: 'No client document, banking detail or file upload is requested.',
    },
  },
  it: {
    home: {
      metaTitle: 'Climatizzazione in Costa Azzurra | Alexandre Kryshen',
      metaDescription:
        'Studio e preventivo per progetti di climatizzazione da Monaco a Saint-Tropez, pensati per gli immobili mediterranei.',
      eyebrow: 'Comfort architettonico · Costa Azzurra',
      title: 'Comfort misurato, da Monaco a Saint-Tropez.',
      lede: 'Un approccio calmo e preciso: comprendere l’immobile, definire l’esigenza e preparare un’installazione coerente.',
      sections: [
        {
          title: 'Prima l’immobile',
          body: 'Appartamento, villa o spazio professionale: accesso, esposizione, acustica e integrazione contano quanto l’impianto.',
        },
        {
          title: 'Un progetto leggibile',
          body: 'Il primo confronto chiarisce ambienti, utilizzo e tempi prima dello studio e del preventivo.',
        },
      ],
      ctaTitle: 'Un progetto in Costa Azzurra?',
      ctaBody: 'Indica immobile, località e tempistica per preparare un confronto utile.',
    },
    services: {
      metaTitle: 'Studio e installazione climatizzazione | Alexandre Kryshen',
      metaDescription:
        'Un metodo strutturato per definire un progetto di climatizzazione adatto all’immobile.',
      eyebrow: 'Servizi',
      title: 'L’installazione come progetto completo.',
      lede: 'Dal primo inquadramento al preventivo, ogni scelta deve sostenere comfort, discrezione e coerenza.',
      sections: [
        {
          title: 'Inquadramento',
          body: 'Uso degli ambienti, esposizione, accesso e aspettative estetiche definiscono la richiesta.',
        },
        {
          title: 'Installazione e sostituzione',
          body: 'Lo studio prepara una soluzione adatta senza promesse non documentate su marchi o prestazioni.',
        },
      ],
      ctaTitle: 'Partire dalle domande giuste',
      ctaBody: 'Una richiesta breve prepara i punti tecnici da esaminare.',
    },
    installation: {
      metaTitle: 'Installazione climatizzazione in Costa Azzurra | Preventivo',
      metaDescription:
        'Preparare un progetto di installazione o sostituzione tra Monaco e Saint-Tropez.',
      eyebrow: 'Installazione e sostituzione',
      title: 'Integrare il comfort senza imporre la tecnica.',
      lede: 'Una buona installazione appartiene all’architettura e sostiene l’uso quotidiano.',
      sections: [
        {
          title: 'Osservare',
          body: 'Volumi, orientamento, flussi d’aria, acustica e accesso guidano il primo inquadramento.',
        },
        {
          title: 'Valutare',
          body: 'Posizionamento, discrezione ed esigenze reali vengono bilanciati prima del preventivo.',
        },
      ],
      ctaTitle: 'Preparare l’installazione',
      ctaBody: 'Indica tipo di immobile, località e ambienti interessati.',
    },
    areas: {
      metaTitle: 'Climatizzazione da Monaco a Saint-Tropez | Zone',
      metaDescription:
        'Un corridoio di progetti in Costa Azzurra, studiati secondo immobile, accesso e stagionalità.',
      eyebrow: 'Il corridoio',
      title: 'Una costa. Vincoli molto diversi.',
      lede: 'Da Monaco a Saint-Tropez, densità, accesso, stagione e immobile cambiano il modo di definire il progetto.',
      sections: [
        {
          title: 'Città dense',
          body: 'Appartamenti, condomini, vicinato e accesso richiedono una preparazione attenta.',
        },
        {
          title: 'Immobili stagionali',
          body: 'Ville, locazioni e strutture ricettive beneficiano di scelte chiare su uso e tempi.',
        },
      ],
      ctaTitle: 'Localizzare il progetto',
      ctaBody: 'La località e il tipo di immobile offrono un primo quadro concreto.',
    },
    nice: {
      metaTitle: 'Progetto di climatizzazione a Nizza | Alexandre Kryshen',
      metaDescription:
        'Preparare un’installazione a Nizza considerando appartamenti, condomini, accesso e acustica.',
      eyebrow: 'Nizza · Costa Azzurra',
      title: 'A Nizza, ogni metro e ogni accesso contano.',
      lede: 'Nizza unisce appartamenti, condomini, case e locali professionali: il progetto parte dai vincoli reali.',
      sections: [
        {
          title: 'Appartamento e condominio',
          body: 'Passaggi, posizionamento, vicinato e parti comuni vanno identificati prima delle scelte.',
        },
        {
          title: 'Comfort discreto',
          body: 'Un’integrazione sobria aiuta a preservare lo spazio e l’uso quotidiano.',
        },
      ],
      ctaTitle: 'Un progetto a Nizza?',
      ctaBody: 'Descrivi zona, immobile e ambienti interessati.',
    },
    quote: {
      metaTitle: 'Richiedi un preventivo climatizzazione | Costa Azzurra',
      metaDescription:
        'Descrivi il progetto di climatizzazione in Costa Azzurra e prepara il primo confronto.',
      eyebrow: 'Il tuo progetto',
      title: 'Pochi dettagli. Un confronto più utile.',
      lede: 'Il modulo chiede solo le informazioni necessarie a comprendere immobile e tempi.',
      sections: [
        {
          title: 'Prima dell’invio',
          body: 'Non sono richiesti allegati o dati bancari. Basta un’e-mail o un telefono.',
        },
        {
          title: 'Canale di ricezione in attesa',
          body: 'Finché non viene confermato un canale sicuro, il modulo resta disattivato e nessun dato viene inviato.',
        },
      ],
      ctaTitle: 'Modulo progetto',
      ctaBody: 'I campi richiesti preparano il contatto successivo.',
    },
    legal: {
      metaTitle: 'Note legali | Alexandre Kryshen',
      metaDescription: 'Informazioni legali verificate dell’attività Alexandre Kryshen.',
      eyebrow: 'Note legali',
      title: 'Un’identità chiara.',
      lede: 'Il sito pubblica solo gli elementi legali confermati.',
      sections: [
        {
          title: 'Editore',
          body: 'Alexandre Kryshen — entrepreneur individuel — attività con sede di riferimento a Nizza.',
        },
        {
          title: 'Identificativo',
          body: 'SIRET: 849 573 779 00014. I recapiti di pubblicazione restano da confermare.',
        },
      ],
      ctaTitle: 'Manca un’informazione?',
      ctaBody: 'Gli elementi non verificati sono intenzionalmente omessi.',
    },
    privacy: {
      metaTitle: 'Privacy | Richiesta di progetto',
      metaDescription:
        'Principi di privacy applicati al modulo locale di richiesta per un progetto di climatizzazione.',
      eyebrow: 'Privacy',
      title: 'Raccogliere meno. Spiegare bene.',
      lede: 'Il modulo chiede solo ciò che serve per comprendere e rispondere.',
      sections: [
        {
          title: 'Modulo disattivato',
          body: 'Nessun dato viene inviato finché non viene configurato un destinatario sicuro e documentato.',
        },
        {
          title: 'Prima dell’attivazione',
          body: 'Destinatario, durata di conservazione e contatto privacy saranno configurati e documentati.',
        },
      ],
      ctaTitle: 'Essenzialità dei dati',
      ctaBody: 'Non sono richiesti documenti cliente, dati bancari o file.',
    },
  },
  ru: {
    home: {
      metaTitle: 'Кондиционирование на Лазурном Берегу | Alexandre Kryshen',
      metaDescription:
        'Подготовка и расчёт проектов кондиционирования от Монако до Сен-Тропе с учётом особенностей средиземноморской недвижимости.',
      eyebrow: 'Архитектурный комфорт · Лазурный Берег',
      title: 'Продуманный комфорт — от Монако до Сен-Тропе.',
      lede: 'Спокойный и точный подход: понять объект, определить задачу и подготовить согласованное решение.',
      sections: [
        {
          title: 'Сначала объект',
          body: 'Квартира, вилла или коммерческое пространство: доступ, солнце, акустика и интеграция не менее важны, чем оборудование.',
        },
        {
          title: 'Понятный проект',
          body: 'Первый разговор уточняет помещения, сценарии и сроки до подготовки решения и расчёта.',
        },
      ],
      ctaTitle: 'Проект на Лазурном Берегу?',
      ctaBody: 'Укажите тип объекта, город и сроки, чтобы подготовить полезный первый контакт.',
    },
    services: {
      metaTitle: 'Проектирование установки кондиционирования | Alexandre Kryshen',
      metaDescription:
        'Структурированный подход к подготовке проекта кондиционирования под конкретный объект.',
      eyebrow: 'Услуги',
      title: 'Установка как цельный проект.',
      lede: 'От постановки задачи до расчёта каждое решение должно поддерживать комфорт, сдержанность и архитектуру.',
      sections: [
        {
          title: 'Постановка задачи',
          body: 'Назначение помещений, солнечная нагрузка, доступ и эстетические ожидания формируют запрос.',
        },
        {
          title: 'Установка и замена',
          body: 'Подготовка решения проходит без неподтверждённых обещаний о марках и характеристиках.',
        },
      ],
      ctaTitle: 'Начать с правильных вопросов',
      ctaBody: 'Краткое описание помогает заранее определить технические темы.',
    },
    installation: {
      metaTitle: 'Установка кондиционеров на Лазурном Берегу | Расчёт',
      metaDescription:
        'Подготовка проекта установки или замены кондиционирования между Монако и Сен-Тропе.',
      eyebrow: 'Установка и замена',
      title: 'Встроить комфорт, не навязывая технику.',
      lede: 'Удачное решение становится частью архитектуры и помогает в повседневной жизни.',
      sections: [
        {
          title: 'Изучить',
          body: 'Объём, ориентация, движение воздуха, акустика и доступ задают исходные условия.',
        },
        {
          title: 'Согласовать',
          body: 'Расположение, визуальная сдержанность и реальные потребности оцениваются до расчёта.',
        },
      ],
      ctaTitle: 'Подготовить установку',
      ctaBody: 'Укажите тип объекта, город и помещения.',
    },
    areas: {
      metaTitle: 'Кондиционирование от Монако до Сен-Тропе | Регионы',
      metaDescription:
        'Проекты на Лазурном Берегу с учётом объекта, доступа и сезонного использования.',
      eyebrow: 'Побережье',
      title: 'Одно побережье. Очень разные условия.',
      lede: 'От Монако до Сен-Тропе плотность застройки, доступ, сезон и тип объекта меняют постановку задачи.',
      sections: [
        {
          title: 'Плотная застройка',
          body: 'Квартиры, общие здания, соседи и доступ требуют особенно внимательной подготовки.',
        },
        {
          title: 'Сезонные объекты',
          body: 'Виллы, аренда и гостиничные пространства требуют ясных сценариев и сроков.',
        },
      ],
      ctaTitle: 'Указать место',
      ctaBody: 'Город и тип объекта дают практичную отправную точку.',
    },
    nice: {
      metaTitle: 'Проект кондиционирования в Ницце | Alexandre Kryshen',
      metaDescription:
        'Подготовка установки в Ницце с учётом квартир, общих зданий, доступа и акустики.',
      eyebrow: 'Ницца · Лазурный Берег',
      title: 'В Ницце важны каждый метр и каждый доступ.',
      lede: 'В Ницце сочетаются квартиры, общие здания, дома и коммерческие помещения — проект начинается с реальных ограничений.',
      sections: [
        {
          title: 'Квартира и общее здание',
          body: 'Трассы, расположение, соседство и общие зоны следует определить заранее.',
        },
        {
          title: 'Незаметный комфорт',
          body: 'Сдержанная интеграция помогает сохранить пространство и привычный ритм.',
        },
      ],
      ctaTitle: 'Проект в Ницце?',
      ctaBody: 'Опишите район, тип объекта и помещения.',
    },
    quote: {
      metaTitle: 'Запросить расчёт кондиционирования | Лазурный Берег',
      metaDescription: 'Опишите проект на Лазурном Берегу для подготовки первого контакта.',
      eyebrow: 'Ваш проект',
      title: 'Несколько деталей. Более полезный разговор.',
      lede: 'Форма запрашивает только данные, необходимые для понимания объекта и сроков.',
      sections: [
        {
          title: 'Перед отправкой',
          body: 'Не нужны вложения и банковские данные. Достаточно почты или телефона.',
        },
        {
          title: 'Канал приёма ожидает подтверждения',
          body: 'До подтверждения безопасного канала форма остаётся отключённой, и данные не отправляются.',
        },
      ],
      ctaTitle: 'Форма проекта',
      ctaBody: 'Обязательные поля помогают подготовить следующий контакт.',
    },
    legal: {
      metaTitle: 'Правовая информация | Alexandre Kryshen',
      metaDescription: 'Подтверждённые правовые сведения о деятельности Alexandre Kryshen.',
      eyebrow: 'Правовая информация',
      title: 'Понятная идентичность.',
      lede: 'На сайте опубликованы только подтверждённые юридические сведения.',
      sections: [
        {
          title: 'Издатель',
          body: 'Alexandre Kryshen — entrepreneur individuel — деятельность базируется в Ницце.',
        },
        {
          title: 'Идентификатор',
          body: 'SIRET: 849 573 779 00014. Контактные данные для публикации ожидают подтверждения.',
        },
      ],
      ctaTitle: 'Не хватает сведений?',
      ctaBody: 'Неподтверждённые данные намеренно не публикуются.',
    },
    privacy: {
      metaTitle: 'Конфиденциальность | Запрос проекта',
      metaDescription:
        'Принципы конфиденциальности формы запроса локального проекта по кондиционированию.',
      eyebrow: 'Конфиденциальность',
      title: 'Собирать меньше. Объяснять ясно.',
      lede: 'Форма запрашивает только то, что необходимо для понимания и ответа.',
      sections: [
        {
          title: 'Форма отключена',
          body: 'Данные не отправляются, пока не будет настроен безопасный и документированный получатель.',
        },
        {
          title: 'До активации',
          body: 'Получатель, срок хранения и контакт по вопросам данных будут настроены и документированы.',
        },
      ],
      ctaTitle: 'Минимум данных',
      ctaBody: 'Клиентские документы, банковские сведения и файлы не запрашиваются.',
    },
  },
};

export const content = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      ...baseContent[locale],
      ...newLocationContent[locale],
    },
  ]),
) as Record<Locale, Record<PageKey, PageContent>>;
