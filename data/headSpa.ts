import type { Massage } from "@/data/massages";

// Japāņu galvas spa — atsevišķa sadaļa (nav masāžu sarakstā).
export const headSpa: Massage = {
  id: "japanu-galvas-spa",
  slug: "japanu-galvas-spa",
  title: "Japāņu galvas spa",
  shortDescription:
    "Rituāls galvas ādai un matiem, kas atbrīvo prātu un ļauj pilnībā atslābt.",
  description: [
    "Japāņu galvas spa ir japāņu tradīcijās balstīta procedūra, kas apvieno galvas ādas attīrīšanu, maigu matu mazgāšanu un relaksējošu galvas, kakla un roku masāžu.",
    "Procedūra sākas ar stāvēšanu uz sadhu dēlīša un turpinās ar matu un sejas kopšanu, masāžu, aromterapiju un skaņu terapiju, kā arī zāļu tēju — pilnvērtīgs atpūtas rituāls ķermenim un prātam.",
  ],
  benefits: [
    "Dziļi atslābina un mazina stresu",
    "Attīra un atsvaidzina galvas ādu",
    "Uzlabo asinsriti galvas ādā un veicina matu veselību",
    "Mazina saspringumu galvā un kaklā",
  ],
  suitableFor: [
    "Tiem, kas izjūt stresu vai garīgu nogurumu",
    "Cilvēkiem ar saspringumu galvas un kakla zonā",
    "Ikvienam, kurš vēlas parūpēties par galvas ādu un matiem",
  ],
  duration: "120 min",
  prices: [{ duration: "120 min", price: "70 €" }],
  includes: [
    "Stāvēšana uz adatām (sadhu)",
    "Matu mazgāšana, pīlings, maska",
    "Sejas attīrīšana, masāža un maska",
    "Galvas, kakla un roku masāža",
    "Aromaterapija ar avota ūdeni",
    "Skaņu terapija",
    "Zāļu tēja",
  ],
  contraindications: [
    "Grūtniecība",
    "Paaugstināts asinsspiediens",
    "Onkoloģiskas slimības",
    "Alerģijas",
    "Nesen veikti ķīmiski pīlingi",
    "Nesen veiktas operācijas",
    "Pieaudzēti mati",
  ],
  image: "/japan-head-masaza.jpg",
  seoTitle: "Japāņu galvas spa Tukumā",
  seoDescription:
    "Japāņu galvas spa Šēra Labsajūtas Studijā — relaksējošs rituāls galvas ādai un matiem, kas mazina stresu un atsvaidzina. 120 min, 70 €.",
};
