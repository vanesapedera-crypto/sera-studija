export interface MassagePrice {
  duration: string;
  price: string;
}

export interface Massage {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string[];
  benefits: string[];
  suitableFor: string[];
  duration: string;
  prices: MassagePrice[];
  /** Neobligāti: ko ietver procedūra */
  includes?: string[];
  /** Neobligāti: kontrindikācijas */
  contraindications?: string[];
  /** Neobligāti: piezīme pie ilguma, piem. "+ matu žāvēšana" */
  durationNote?: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export const massages: Massage[] = [
  {
    id: "muguras-masaza",
    slug: "muguras-masaza",
    title: "Muguras masāža",
    shortDescription:
      "Palīdz mazināt saspringumu muguras, kakla un plecu zonā.",
    description: [
      "Muguras masāža ir viena no visbiežāk pieprasītajām procedūrām, jo lielākā daļa ikdienas sasprindinājuma uzkrājas tieši muguras, kakla un plecu zonā.",
      "Procedūras laikā tiek izmantota mērķtiecīga tehnika, kas atbrīvo saspringtos muskuļus, uzlabo asinsriti un mazina diskomfortu, kas radies no ilgstošas sēdēšanas vai fiziskas slodzes.",
    ],
    benefits: [
      "Mazina muskuļu saspringumu un stīvumu",
      "Uzlabo asinsriti muguras un kakla zonā",
      "Samazina galvassāpes, ko izraisa sasprindinājums",
      "Veicina vispārēju atslābināšanos",
    ],
    suitableFor: [
      "Cilvēkiem ar sēdošu darbu",
      "Tiem, kam ir saspringums kakla un plecu zonā",
      "Ikvienam, kurš vēlas ātru un efektīvu atslābinājumu",
    ],
    duration: "40 min",
    prices: [{ duration: "40 min", price: "30 €" }],
    image: "/klasiska-maaza.jpg",
    seoTitle: "Muguras masāža Tukumā",
    seoDescription:
      "Muguras masāža Šēra Labsajūtas Studijā — efektīvs risinājums saspringuma mazināšanai muguras, kakla un plecu zonā. 40 min, 30 €.",
  },
  {
    id: "klasiska-kermena-masaza",
    slug: "klasiska-kermena-masaza",
    title: "Klasiskā ķermeņa masāža",
    shortDescription:
      "Pilna ķermeņa masāža muskuļu relaksācijai un pašsajūtas uzlabošanai.",
    description: [
      "Klasiskā ķermeņa masāža ir pilnvērtīga procedūra, kas aptver visu ķermeni, palīdzot atbrīvot uzkrāto spriedzi un atjaunot enerģijas līdzsvaru.",
      "Ar mierīgu, plūstošu tehniku šī masāža ir piemērota gan tiem, kas meklē dziļu relaksāciju, gan tiem, kam nepieciešama muskuļu atjaunošana pēc noguruma pilnas dienas.",
    ],
    benefits: [
      "Relaksē visu ķermeni",
      "Uzlabo miega kvalitāti",
      "Mazina stresa un noguruma sajūtu",
      "Veicina ādas un audu atjaunošanos",
    ],
    suitableFor: [
      "Ikvienam, kurš vēlas pilnvērtīgu atpūtu",
      "Cilvēkiem ar paaugstinātu stresa līmeni",
      "Tiem, kas meklē regulāru labsajūtas rutīnu",
    ],
    duration: "60–90 min",
    prices: [
      { duration: "60 min", price: "35 €" },
      { duration: "90 min", price: "50 €" },
    ],
    image: "/muguras.jpg",
    seoTitle: "Klasiskā ķermeņa masāža Tukumā",
    seoDescription:
      "Klasiskā ķermeņa masāža Šēra Labsajūtas Studijā — pilna ķermeņa relaksācija un pašsajūtas uzlabošana. 60 min no 35 €, 90 min no 50 €.",
  },
  {
    id: "karsto-akmenu-masaza",
    slug: "karsto-akmenu-masaza",
    title: "Karsto akmeņu masāža ar aromterapiju",
    shortDescription:
      "Silto akmeņu terapija kopā ar aromātiskajām eļļām dziļai relaksācijai.",
    description: [
      "Šī procedūra apvieno silto vulkānisko akmeņu siltumu ar rūpīgi izvēlētu aromātisko eļļu smaržām, radot dziļi relaksējošu pieredzi visam ķermenim.",
      "Akmeņu siltums palīdz muskuļiem ātrāk atslābināties, ļaujot masierei strādāt dziļāk un maigāk, savukārt aromterapija papildina procedūru ar nomierinošu efektu prātam.",
    ],
    benefits: [
      "Dziļi atslābina muskuļus ar akmeņu siltumu",
      "Uzlabo asinsriti un limfas plūsmu",
      "Aromterapija mazina trauksmi un nogurumu",
      "Rada sajūtu sensoro pieredzi visām maņām",
    ],
    suitableFor: [
      "Tiem, kas meklē dziļu, siltu relaksāciju",
      "Cilvēkiem ar hronisku muskuļu saspringumu",
      "Ikvienam, kurš novērtē aromterapijas efektu",
    ],
    duration: "75 min",
    prices: [{ duration: "75 min", price: "45 €" }],
   image: "/akmenu-masaza.jpg",
    seoTitle: "Karsto akmeņu masāža ar aromterapiju Tukumā",
    seoDescription:
      "Karsto akmeņu masāža ar aromterapiju Šēra Labsajūtas Studijā — dziļa relaksācija siltu akmeņu un aromātisko eļļu kombinācijā. 75 min, 45 €.",
  },
  {
    id: "relaksejosa-ar-zeltu",
    slug: "relaksejosa-ar-zeltu",
    title: "Relaksējoša masāža ar zeltu",
    shortDescription: "Luksusa procedūra pilnīgai relaksācijai.",
    description: [
      "Relaksējoša masāža ar zeltu ir īsta luksusa pieredze — zelta daļiņas saturošs eļļas maisījums papildina klasisko relaksējošo tehniku, piešķirot ādai maigu mirdzumu un procedūrai īpašu, svinīgu sajūtu.",
      "Šī procedūra ir domāta brīžiem, kad vēlaties sev veltīt kaut ko patiesi izsmalcinātu — pilnīgu atslābināšanos gan ķermenim, gan prātam.",
    ],
    benefits: [
      "Rada dziļu relaksācijas sajūtu",
      "Piešķir ādai mīkstumu un mirdzumu",
      "Mazina stresu un ikdienas spriedzi",
      "Ideāla izvēle īpašiem gadījumiem",
    ],
    suitableFor: [
      "Tiem, kas vēlas izlutināt sevi ar luksusa pieredzi",
      "Īpašu notikumu vai svētku reizēm",
      "Ikvienam, kas novērtē izsmalcinātas procedūras",
    ],
    duration: "60–90 min",
    prices: [
      { duration: "60 min", price: "40 €" },
      { duration: "90 min", price: "55 €" },
    ],
   image: "/zelta.jpg",
    seoTitle: "Relaksējoša masāža ar zeltu Tukumā",
    seoDescription:
      "Relaksējoša masāža ar zeltu Šēra Labsajūtas Studijā — luksusa procedūra pilnīgai relaksācijai. 60 min no 40 €, 90 min no 55 €.",
  },
  {
    id: "sokolades-masaza",
    slug: "sokolades-masaza",
    title: "Šokolādes masāža",
    shortDescription: "Barojoša procedūra, kas relaksē ķermeni un prātu.",
    description: [
      "Šokolādes masāža izmanto kakao bagātus eļļu maisījumus, kas barot ādu, vienlaikus piepildot telpu ar maigu, silto šokolādes aromātu.",
      "Procedūra apvieno taustes un smaržas sajūtas, radot iejūtīgu, gandrīz meditatīvu pieredzi, kas atstāj ādu mīkstu un pašsajūtu — svaigu.",
    ],
    benefits: [
      "Bagātīgi baro un mitrina ādu",
      "Nomierina nervu sistēmu",
      "Uzlabo garastāvokli ar patīkamo aromātu",
      "Atstāj ādu mīkstu un elastīgu",
    ],
    suitableFor: [
      "Tiem, kas meklē juteklisku, barojošu pieredzi",
      "Cilvēkiem ar sausu vai nogurušu ādu",
      "Ikvienam, kurš vēlas atšķirīgu masāžas pieredzi",
    ],
    duration: "60–90 min",
    prices: [
      { duration: "60 min", price: "40 €" },
      { duration: "90 min", price: "55 €" },
    ],
    image: "/sokolades.jpg",
    seoTitle: "Šokolādes masāža Tukumā",
    seoDescription:
      "Šokolādes masāža Šēra Labsajūtas Studijā — barojoša procedūra, kas relaksē ķermeni un prātu. 60 min no 40 €, 90 min no 55 €.",
  },
  {
    id: "indiesu-pedu-masaza",
    slug: "indiesu-pedu-masaza",
    title: "Indiešu pēdu masāža",
    shortDescription: "Pēdu refleksoloģija dziļai atpūtai.",
    description: [
      "Indiešu pēdu masāža balstās uz refleksoloģijas principiem, kur mērķtiecīgs spiediens uz pēdu punktiem palīdz atslābināt ne tikai pēdas, bet visu ķermeni.",
      "Šī procedūra ir lieliska izvēle pēc garas dienas kājās vai vienkārši kā mierpilns veids, kā apstāties un atpūsties.",
    ],
    benefits: [
      "Atslābina nogurušas un pietūkušas pēdas",
      "Uzlabo asinsriti kāju zonā",
      "Veicina vispārēju ķermeņa līdzsvaru",
      "Rada dziļu mierinājuma sajūtu",
    ],
    suitableFor: [
      "Cilvēkiem, kas daudz laika pavada stāvot vai staigājot",
      "Tiem, kam nepieciešama ātra, efektīva atpūta",
      "Ikvienam, kurš novērtē refleksoloģijas ieguvumus",
    ],
    duration: "60 min",
    prices: [{ duration: "60 min", price: "40 €" }],
    image: "/indian-foot-massage.jpg",
    seoTitle: "Indiešu pēdu masāža Tukumā",
    seoDescription:
      "Indiešu pēdu masāža Šēra Labsajūtas Studijā — pēdu refleksoloģija dziļai atpūtai. 60 min, 40 €.",
  },
  {
    id: "sporta-masaza",
    slug: "sporta-masaza",
    title: "Sporta masāža",
    shortDescription: "Muskuļu atjaunošanai pēc fiziskas slodzes.",
    description: [
      "Sporta masāža ir mērķtiecīga, intensīvāka tehnika, kas paredzēta muskuļu atjaunošanai pēc treniņiem vai fiziskas slodzes.",
      "Tā palīdz mazināt muskuļu nogurumu, uzlabot kustību amplitūdu un paātrināt atveseļošanās procesu, tāpēc ir populāra izvēle aktīviem cilvēkiem un sportistiem.",
    ],
    benefits: [
      "Paātrina muskuļu atjaunošanos",
      "Mazina piepūles izraisītu stīvumu",
      "Uzlabo kustību amplitūdu",
      "Samazina traumu risku turpmākajās aktivitātēs",
    ],
    suitableFor: [
      "Sportistiem un fiziski aktīviem cilvēkiem",
      "Tiem, kas regulāri trenējas sporta zālē",
      "Ikvienam pēc intensīvas fiziskas slodzes",
    ],
    duration: "60–90 min",
    prices: [
      { duration: "60 min", price: "40 €" },
      { duration: "90 min", price: "55 €" },
    ],
    image: "/sport-massage.jpg",
    seoTitle: "Sporta masāža Tukumā",
    seoDescription:
      "Sporta masāža Šēra Labsajūtas Studijā — muskuļu atjaunošanai pēc fiziskas slodzes. 60 min no 40 €, 90 min no 55 €.",
  },
  {
    id: "anticelulita-masaza",
    slug: "anticelulita-masaza",
    title: "Anticelulīta masāža",
    shortDescription: "Veicina limfas atteci un uzlabo ādas tonusu.",
    description: [
      "Anticelulīta masāža izmanto intensīvāku, ritmisku tehniku, kas veicina limfas atteci un stimulē asinsriti problēmzonās.",
      "Regulāras procedūras palīdz uzlabot ādas struktūru un tonusu, radot gludāku un elastīgāku izskatu.",
    ],
    benefits: [
      "Veicina limfas un šķidruma atteci",
      "Uzlabo ādas tonusu un struktūru",
      "Stimulē vielmaiņu problēmzonās",
      "Papildina veselīga dzīvesveida rutīnu",
    ],
    suitableFor: [
      "Tiem, kas vēlas uzlabot ādas tonusu",
      "Cilvēkiem ar nosliece uz šķidruma aizturi",
      "Ikvienam, kurš meklē regulāru kopšanas procedūru",
    ],
    duration: "60–90 min",
    prices: [
      { duration: "60 min", price: "35 €" },
      { duration: "90 min", price: "50 €" },
    ],
    image: "/anticelulita-masaza.jpg",
    seoTitle: "Anticelulīta masāža Tukumā",
    seoDescription:
      "Anticelulīta masāža Šēra Labsajūtas Studijā — veicina limfas atteci un uzlabo ādas tonusu. 60 min no 35 €, 90 min no 50 €.",
  },
  {
    id: "grutniecu-masaza",
    slug: "grutniecu-masaza",
    title: "Grūtnieču masāža",
    shortDescription: "Saudzīga procedūra topošajām māmiņām.",
    description: [
      "Grūtnieču masāža ir maiga, rūpīgi pielāgota procedūra, kas ņem vērā topošās māmiņas ķermeņa izmaiņas un vajadzības.",
      "Ar drošu pozicionējumu un saudzīgu tehniku šī masāža palīdz mazināt grūtniecības laikā radušos muskuļu spriedzi un veicina mierīgu, atslābinošu sajūtu.",
    ],
    benefits: [
      "Mazina muguras un kāju spriedzi",
      "Uzlabo asinsriti un samazina pietūkumu",
      "Rada mierinošu, drošu sajūtu",
      "Palīdz uzlabot miega kvalitāti",
    ],
    suitableFor: [
      "Topošajām māmiņām (pēc 1. trimestra)",
      "Tām, kas meklē saudzīgu, drošu atslābināšanos",
    ],
    duration: "90 min",
    prices: [{ duration: "90 min", price: "50 €" }],
   image: "/grutniecu-masaza.jpg",
    seoTitle: "Grūtnieču masāža Tukumā",
    seoDescription:
      "Grūtnieču masāža Šēra Labsajūtas Studijā — saudzīga procedūra topošajām māmiņām. 90 min, 50 €.",
  },
  {
    id: "medus-masaza",
    slug: "medus-masaza",
    title: "Medus masāža",
    shortDescription: "Dabīga detoksikācijas un relaksācijas procedūra.",
    description: [
      "Medus masāža izmanto dabīgā medus īpašības, lai veicinātu ādas attīrīšanos un uzlabotu asinsriti, izmantojot raksturīgo \"plaukstas atraušanas\" tehniku.",
      "Šī procedūra apvieno dabīgu detoksikāciju ar dziļu relaksāciju, atstājot ādu tīru, mīkstu un atsvaidzinātu.",
    ],
    benefits: [
      "Veicina ādas dabīgu attīrīšanos",
      "Uzlabo asinsriti un audu skābekļa piegādi",
      "Baro un mitrina ādu",
      "Atstāj sajūtu vieglumu visā ķermenī",
    ],
    suitableFor: [
      "Tiem, kas meklē dabīgu detoksikācijas procedūru",
      "Cilvēkiem, kuri novērtē dabīgas sastāvdaļas",
      "Ikvienam, kurš vēlas atsvaidzinošu pieredzi",
    ],
    duration: "60–90 min",
    prices: [
      { duration: "60 min", price: "45 €" },
      { duration: "90 min", price: "60 €" },
    ],
   image: "/medus.jpg",
    seoTitle: "Medus masāža Tukumā",
    seoDescription:
      "Medus masāža Šēra Labsajūtas Studijā — dabīga detoksikācijas un relaksācijas procedūra. 60 min no 45 €, 90 min no 60 €.",
  },
];

export function getMassageBySlug(slug: string): Massage | undefined {
  return massages.find((m) => m.slug === slug);
}

export function getAdjacentMassages(slug: string) {
  const index = massages.findIndex((m) => m.slug === slug);
  const prev = index > 0 ? massages[index - 1] : massages[massages.length - 1];
  const next =
    index < massages.length - 1 ? massages[index + 1] : massages[0];
  return { prev, next };
}

export function getRelatedMassages(slug: string, count = 3): Massage[] {
  const others = massages.filter((m) => m.slug !== slug);
  const startIndex = massages.findIndex((m) => m.slug === slug);
  const rotated = [
    ...others.slice(startIndex % others.length),
    ...others.slice(0, startIndex % others.length),
  ];
  return rotated.slice(0, count);
}
