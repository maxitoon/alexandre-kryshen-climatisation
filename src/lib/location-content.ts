import type { PageContent } from './content';
import type { LocationPageKey } from './routes';
import type { Locale } from './site';

export type NewLocationPageKey = Exclude<LocationPageKey, 'nice'>;

type LocationDraft = Pick<PageContent, 'title' | 'lede' | 'sections'>;

const localeFrame: Record<
  Locale,
  {
    eyebrow: (city: string) => string;
    metaTitle: (city: string) => string;
    ctaTitle: (city: string) => string;
    ctaBody: string;
  }
> = {
  fr: {
    eyebrow: (city) => `${city} · Côte d’Azur`,
    metaTitle: (city) => `Projet de climatisation à ${city} | Alexandre Kryshen`,
    ctaTitle: (city) => `Préparer un projet à ${city}`,
    ctaBody: 'Décrivez le bien, son usage et les contraintes déjà connues.',
  },
  en: {
    eyebrow: (city) => `${city} · French Riviera`,
    metaTitle: (city) => `Air-conditioning project in ${city} | Alexandre Kryshen`,
    ctaTitle: (city) => `Plan a project in ${city}`,
    ctaBody: 'Describe the property, how it is used and any known constraints.',
  },
  it: {
    eyebrow: (city) => `${city} · Costa Azzurra`,
    metaTitle: (city) => `Progetto di climatizzazione a ${city} | Alexandre Kryshen`,
    ctaTitle: (city) => `Preparare un progetto a ${city}`,
    ctaBody: 'Descrivi l’immobile, il suo utilizzo e i vincoli già noti.',
  },
  ru: {
    eyebrow: (city) => `${city} · Лазурный Берег`,
    metaTitle: (city) => `Кондиционирование: ${city} | Alexandre Kryshen`,
    ctaTitle: (city) => `Подготовить проект: ${city}`,
    ctaBody: 'Опишите объект, режим использования и уже известные ограничения.',
  },
};

function buildLocationPage(locale: Locale, city: string, draft: LocationDraft): PageContent {
  const frame = localeFrame[locale];
  return {
    metaTitle: frame.metaTitle(city),
    metaDescription: draft.lede,
    eyebrow: frame.eyebrow(city),
    ...draft,
    ctaTitle: frame.ctaTitle(city),
    ctaBody: frame.ctaBody,
  };
}

export const newLocationContent: Record<Locale, Record<NewLocationPageKey, PageContent>> = {
  fr: {
    monaco: buildLocationPage('fr', 'Monaco', {
      title: 'À Monaco, le confort doit trouver sa place.',
      lede: 'Dans un environnement dense, un projet de climatisation commence par l’espace disponible, les accès, l’acoustique et l’intégration au bâti.',
      sections: [
        {
          title: 'Densité et accès',
          body: 'Appartements, circulations communes et zones techniques limitées demandent d’identifier précisément les passages et les contraintes d’accès.',
        },
        {
          title: 'Une intégration discrète',
          body: 'L’implantation doit préserver les volumes, limiter la gêne visuelle et tenir compte du voisinage avant toute décision technique.',
        },
      ],
    }),
    menton: buildLocationPage('fr', 'Menton', {
      title: 'À Menton, penser le confort avec le littoral.',
      lede: 'Appartements, maisons et biens occupés selon les saisons demandent un projet attentif à l’exposition, à l’air marin et au rythme d’usage.',
      sections: [
        {
          title: 'Exposition côtière',
          body: 'Orientation, ensoleillement et environnement marin font partie des éléments à observer pour cadrer durablement l’installation.',
        },
        {
          title: 'Usage annuel ou saisonnier',
          body: 'La fréquence d’occupation et les périodes d’absence aident à préciser les attentes de confort et le calendrier du projet.',
        },
      ],
    }),
    antibes: buildLocationPage('fr', 'Antibes', {
      title: 'À Antibes, adapter le projet au rythme du bien.',
      lede: 'Appartement, villa ou location saisonnière : le type d’occupation, l’exposition et l’accès orientent les premières décisions.',
      sections: [
        {
          title: 'Des biens aux usages variés',
          body: 'Résidence principale, logement occasionnel ou espace professionnel n’impliquent pas les mêmes pièces prioritaires ni les mêmes scénarios.',
        },
        {
          title: 'Préparer l’implantation',
          body: 'Volumes, façades, passages possibles et voisinage doivent être examinés ensemble pour respecter les caractéristiques du lieu.',
        },
      ],
    }),
    cannes: buildLocationPage('fr', 'Cannes', {
      title: 'À Cannes, anticiper les usages et le calendrier.',
      lede: 'Logements, commerces et espaces d’accueil peuvent connaître des rythmes très différents : le projet doit commencer par ces usages réels.',
      sections: [
        {
          title: 'Des périodes exigeantes',
          body: 'Occupation soutenue, réception de visiteurs ou périodes plus calmes influencent les priorités et la préparation du projet.',
        },
        {
          title: 'Accès et continuité d’usage',
          body: 'Les conditions d’accès et les moments compatibles avec l’activité ou l’occupation doivent être identifiés avant de planifier l’installation.',
        },
      ],
    }),
    frejus: buildLocationPage('fr', 'Fréjus', {
      title: 'À Fréjus, préparer le confort avant les fortes chaleurs.',
      lede: 'Maisons, appartements et biens saisonniers gagnent à être étudiés selon leur exposition, leurs volumes et leurs périodes d’occupation.',
      sections: [
        {
          title: 'Soleil et volumes',
          body: 'Orientation, surfaces vitrées et répartition des pièces permettent de mieux comprendre où se concentrent les besoins.',
        },
        {
          title: 'Un calendrier utile',
          body: 'Anticiper les périodes d’occupation et les contraintes d’accès aide à organiser les étapes du projet sans promesse de délai.',
        },
      ],
    }),
    sainteMaxime: buildLocationPage('fr', 'Sainte-Maxime', {
      title: 'À Sainte-Maxime, relier confort et mode d’occupation.',
      lede: 'Villas, appartements et locations peuvent alterner présence régulière, séjours courts et périodes d’absence : ces usages structurent le projet.',
      sections: [
        {
          title: 'Présence régulière ou ponctuelle',
          body: 'Le nombre d’occupants, les pièces réellement utilisées et les périodes de fermeture aident à préciser les priorités.',
        },
        {
          title: 'Préparer à distance',
          body: 'Pour un bien suivi à distance, des informations claires sur l’accès et le calendrier facilitent le premier cadrage.',
        },
      ],
    }),
    saintTropez: buildLocationPage('fr', 'Saint-Tropez', {
      title: 'À Saint-Tropez, concilier discrétion et contraintes du lieu.',
      lede: 'Villas, appartements et espaces d’accueil demandent une lecture attentive des volumes, des accès et du rythme d’occupation.',
      sections: [
        {
          title: 'Préserver l’architecture',
          body: 'L’emplacement des unités, les passages techniques et l’impact visuel doivent être examinés comme une partie du projet architectural.',
        },
        {
          title: 'Composer avec la saison',
          body: 'Périodes d’occupation, accès plus complexes et activité du bien donnent un cadre concret à la préparation du projet.',
        },
      ],
    }),
  },
  en: {
    monaco: buildLocationPage('en', 'Monaco', {
      title: 'In Monaco, comfort must earn its place.',
      lede: 'In a dense setting, an air-conditioning project begins with available space, access, acoustics and integration into the building.',
      sections: [
        {
          title: 'Density and access',
          body: 'Apartments, shared circulation and limited technical areas make it important to identify routes and access constraints precisely.',
        },
        {
          title: 'Discreet integration',
          body: 'Placement should preserve the room, reduce visual impact and consider neighbouring properties before technical decisions are made.',
        },
      ],
    }),
    menton: buildLocationPage('en', 'Menton', {
      title: 'In Menton, comfort begins with the coast.',
      lede: 'Apartments, houses and seasonally occupied properties call for careful consideration of exposure, the marine environment and patterns of use.',
      sections: [
        {
          title: 'Coastal exposure',
          body: 'Orientation, sunlight and the marine environment are practical factors to examine when framing the installation.',
        },
        {
          title: 'Year-round or seasonal use',
          body: 'Occupancy patterns and periods away help define comfort expectations and a realistic project schedule.',
        },
      ],
    }),
    antibes: buildLocationPage('en', 'Antibes', {
      title: 'In Antibes, the project should follow the property’s rhythm.',
      lede: 'Apartment, villa or seasonal rental: occupancy, exposure and access shape the first project decisions.',
      sections: [
        {
          title: 'Properties with different uses',
          body: 'A main home, occasional residence or business space does not have the same priority rooms or comfort patterns.',
        },
        {
          title: 'Planning the placement',
          body: 'Volumes, façades, possible routes and neighbours should be considered together to keep the solution connected to the property.',
        },
      ],
    }),
    cannes: buildLocationPage('en', 'Cannes', {
      title: 'In Cannes, plan around use and timing.',
      lede: 'Homes, shops and hospitality spaces can have very different occupancy patterns, so the project should begin with how the property is actually used.',
      sections: [
        {
          title: 'Demanding periods',
          body: 'Busy occupancy, guest-facing periods and quieter intervals influence priorities and project preparation.',
        },
        {
          title: 'Access and continuity',
          body: 'Access conditions and times compatible with the property’s activity or occupancy should be identified before installation is planned.',
        },
      ],
    }),
    frejus: buildLocationPage('en', 'Fréjus', {
      title: 'In Fréjus, prepare comfort before peak heat.',
      lede: 'Houses, apartments and seasonal properties benefit from a review of exposure, room volumes and occupancy periods.',
      sections: [
        {
          title: 'Sun and room volumes',
          body: 'Orientation, glazing and room layout help reveal where comfort needs are concentrated.',
        },
        {
          title: 'A useful project schedule',
          body: 'Considering occupancy periods and access constraints early helps organize the project without unsupported timing promises.',
        },
      ],
    }),
    sainteMaxime: buildLocationPage('en', 'Sainte-Maxime', {
      title: 'In Sainte-Maxime, connect comfort with occupancy.',
      lede: 'Villas, apartments and rentals may alternate between regular use, short stays and empty periods; these patterns shape the project.',
      sections: [
        {
          title: 'Regular or occasional occupancy',
          body: 'The number of occupants, rooms actually used and closed periods help establish practical priorities.',
        },
        {
          title: 'Preparing remotely',
          body: 'For a property overseen remotely, clear access and scheduling information makes the initial project frame more useful.',
        },
      ],
    }),
    saintTropez: buildLocationPage('en', 'Saint-Tropez', {
      title: 'In Saint-Tropez, balance discretion with the property’s constraints.',
      lede: 'Villas, apartments and hospitality spaces call for careful attention to volumes, access and occupancy patterns.',
      sections: [
        {
          title: 'Respecting the architecture',
          body: 'Unit placement, technical routes and visual impact should be considered as part of the architectural project.',
        },
        {
          title: 'Working with the season',
          body: 'Occupancy periods, more complex access and the property’s activity provide a practical frame for project preparation.',
        },
      ],
    }),
  },
  it: {
    monaco: buildLocationPage('it', 'Monaco', {
      title: 'A Monaco, il comfort deve trovare il suo spazio.',
      lede: 'In un contesto denso, un progetto di climatizzazione parte dallo spazio disponibile, dagli accessi, dall’acustica e dall’integrazione nell’edificio.',
      sections: [
        {
          title: 'Densità e accessi',
          body: 'Appartamenti, spazi comuni e aree tecniche limitate richiedono di individuare con precisione passaggi e vincoli di accesso.',
        },
        {
          title: 'Integrazione discreta',
          body: 'Il posizionamento deve preservare gli ambienti, ridurre l’impatto visivo e considerare il vicinato prima delle scelte tecniche.',
        },
      ],
    }),
    menton: buildLocationPage('it', 'Mentone', {
      title: 'A Mentone, il comfort parte dal contesto costiero.',
      lede: 'Appartamenti, case e immobili stagionali richiedono attenzione all’esposizione, all’ambiente marino e alle modalità di utilizzo.',
      sections: [
        {
          title: 'Esposizione costiera',
          body: 'Orientamento, sole e ambiente marino sono elementi concreti da valutare nella definizione dell’installazione.',
        },
        {
          title: 'Uso annuale o stagionale',
          body: 'La frequenza di occupazione e i periodi di assenza aiutano a definire le esigenze di comfort e i tempi del progetto.',
        },
      ],
    }),
    antibes: buildLocationPage('it', 'Antibes', {
      title: 'Ad Antibes, il progetto segue il ritmo dell’immobile.',
      lede: 'Appartamento, villa o locazione stagionale: occupazione, esposizione e accesso orientano le prime decisioni.',
      sections: [
        {
          title: 'Immobili con usi diversi',
          body: 'Abitazione principale, seconda casa o spazio professionale non hanno gli stessi ambienti prioritari né gli stessi scenari di comfort.',
        },
        {
          title: 'Preparare il posizionamento',
          body: 'Volumi, facciate, passaggi possibili e vicinato vanno considerati insieme per rispettare le caratteristiche dell’immobile.',
        },
      ],
    }),
    cannes: buildLocationPage('it', 'Cannes', {
      title: 'A Cannes, pianificare secondo uso e tempi.',
      lede: 'Abitazioni, negozi e strutture ricettive possono avere ritmi molto diversi: il progetto parte dall’uso reale degli spazi.',
      sections: [
        {
          title: 'Periodi più intensi',
          body: 'Occupazione elevata, presenza di ospiti e periodi più tranquilli influenzano priorità e preparazione.',
        },
        {
          title: 'Accesso e continuità d’uso',
          body: 'Le condizioni di accesso e i momenti compatibili con l’attività o l’occupazione vanno definiti prima di pianificare l’installazione.',
        },
      ],
    }),
    frejus: buildLocationPage('it', 'Fréjus', {
      title: 'A Fréjus, preparare il comfort prima del caldo intenso.',
      lede: 'Case, appartamenti e immobili stagionali vanno considerati secondo esposizione, volumi e periodi di occupazione.',
      sections: [
        {
          title: 'Sole e volumi',
          body: 'Orientamento, superfici vetrate e distribuzione degli ambienti aiutano a individuare dove si concentrano le esigenze.',
        },
        {
          title: 'Una tempistica utile',
          body: 'Considerare in anticipo occupazione e accessi aiuta a organizzare il progetto senza formulare promesse sui tempi.',
        },
      ],
    }),
    sainteMaxime: buildLocationPage('it', 'Sainte-Maxime', {
      title: 'A Sainte-Maxime, collegare comfort e occupazione.',
      lede: 'Ville, appartamenti e locazioni possono alternare uso regolare, soggiorni brevi e periodi vuoti: questi ritmi definiscono il progetto.',
      sections: [
        {
          title: 'Presenza regolare o occasionale',
          body: 'Numero di occupanti, ambienti realmente utilizzati e periodi di chiusura aiutano a stabilire le priorità.',
        },
        {
          title: 'Preparare a distanza',
          body: 'Per un immobile seguito a distanza, informazioni chiare su accesso e calendario rendono più utile il primo inquadramento.',
        },
      ],
    }),
    saintTropez: buildLocationPage('it', 'Saint-Tropez', {
      title: 'A Saint-Tropez, equilibrio tra discrezione e vincoli dell’immobile.',
      lede: 'Ville, appartamenti e strutture ricettive richiedono attenzione a volumi, accessi e ritmi di occupazione.',
      sections: [
        {
          title: 'Rispettare l’architettura',
          body: 'Posizionamento delle unità, passaggi tecnici e impatto visivo vanno considerati come parte del progetto architettonico.',
        },
        {
          title: 'Considerare la stagione',
          body: 'Periodi di occupazione, accessi più complessi e attività dell’immobile offrono un quadro concreto per la preparazione.',
        },
      ],
    }),
  },
  ru: {
    monaco: buildLocationPage('ru', 'Монако', {
      title: 'В Монако комфорт должен органично вписываться в пространство.',
      lede: 'В условиях плотной застройки проект кондиционирования начинается с оценки доступного места, доступа, акустики и интеграции в здание.',
      sections: [
        {
          title: 'Плотность и доступ',
          body: 'Квартиры, общие проходы и ограниченные технические зоны требуют заранее определить трассы и условия доступа.',
        },
        {
          title: 'Деликатная интеграция',
          body: 'Размещение должно сохранять пространство, снижать визуальное воздействие и учитывать соседние помещения до технических решений.',
        },
      ],
    }),
    menton: buildLocationPage('ru', 'Ментон', {
      title: 'В Ментоне комфорт начинается с особенностей побережья.',
      lede: 'Квартиры, дома и сезонно используемые объекты требуют внимания к ориентации, морской среде и режиму эксплуатации.',
      sections: [
        {
          title: 'Прибрежные условия',
          body: 'Ориентацию, солнечную нагрузку и морскую среду важно учитывать при подготовке проекта установки.',
        },
        {
          title: 'Постоянное или сезонное проживание',
          body: 'Режим использования и периоды отсутствия помогают определить ожидания от комфорта и сроки проекта.',
        },
      ],
    }),
    antibes: buildLocationPage('ru', 'Антиб', {
      title: 'В Антибе проект должен учитывать ритм жизни объекта.',
      lede: 'Квартира, вилла или сезонная аренда: режим использования, ориентация и доступ определяют первые решения.',
      sections: [
        {
          title: 'Разные сценарии использования',
          body: 'Основное жильё, второй дом и коммерческое помещение имеют разные приоритетные зоны и требования к комфорту.',
        },
        {
          title: 'Подготовка размещения',
          body: 'Объёмы, фасады, возможные трассы и соседство следует рассматривать вместе, чтобы решение соответствовало объекту.',
        },
      ],
    }),
    cannes: buildLocationPage('ru', 'Канны', {
      title: 'В Каннах важно заранее учитывать использование и сроки.',
      lede: 'Жильё, магазины и объекты гостеприимства могут иметь разный ритм работы и проживания, поэтому проект начинается с реальных сценариев.',
      sections: [
        {
          title: 'Периоды высокой нагрузки',
          body: 'Интенсивное использование, приём гостей и более спокойные периоды влияют на приоритеты и подготовку проекта.',
        },
        {
          title: 'Доступ и непрерывность использования',
          body: 'Условия доступа и подходящие периоды следует определить до планирования установки с учётом работы или проживания.',
        },
      ],
    }),
    frejus: buildLocationPage('ru', 'Фрежюс', {
      title: 'Во Фрежюсе комфорт лучше планировать до наступления сильной жары.',
      lede: 'Дома, квартиры и сезонные объекты важно оценивать с учётом ориентации, объёмов помещений и периодов использования.',
      sections: [
        {
          title: 'Солнце и объёмы',
          body: 'Ориентация, остекление и планировка помогают понять, где сосредоточены основные потребности.',
        },
        {
          title: 'Продуманный график проекта',
          body: 'Заблаговременный учёт периодов проживания и доступа помогает организовать проект без необоснованных обещаний по срокам.',
        },
      ],
    }),
    sainteMaxime: buildLocationPage('ru', 'Сент-Максим', {
      title: 'В Сент-Максиме комфорт связан с режимом использования объекта.',
      lede: 'Виллы, квартиры и арендные объекты могут использоваться постоянно, кратковременно или оставаться пустыми; этот ритм определяет проект.',
      sections: [
        {
          title: 'Постоянное или периодическое использование',
          body: 'Количество жильцов, реально используемые помещения и периоды закрытия помогают определить практические приоритеты.',
        },
        {
          title: 'Подготовка на расстоянии',
          body: 'Если объект контролируется дистанционно, ясные сведения о доступе и графике облегчают первоначальную подготовку.',
        },
      ],
    }),
    saintTropez: buildLocationPage('ru', 'Сен-Тропе', {
      title: 'В Сен-Тропе важно сочетать деликатность с особенностями объекта.',
      lede: 'Виллы, квартиры и объекты гостеприимства требуют внимательной оценки объёмов, доступа и режима использования.',
      sections: [
        {
          title: 'Сохранить архитектурный характер',
          body: 'Размещение оборудования, технические трассы и визуальное воздействие следует рассматривать как часть архитектурного проекта.',
        },
        {
          title: 'Учитывать сезон',
          body: 'Периоды использования, более сложный доступ и деятельность объекта задают практические условия подготовки проекта.',
        },
      ],
    }),
  },
};
