import type { Resources } from "./en";

const hr: Resources = {
  language: {
    en: "EN",
    hr: "HR",
    switchTo: "Promijeni jezik",
  },
  theme: {
    toLight: "Prebaci na svijetli način",
    toDark: "Prebaci na tamni način",
  },
  nav: {
    work: "Projekti",
    experience: "Iskustvo",
    skills: "Vještine",
    contact: "Kontakt",
    resume: "Životopis",
    openMenu: "Otvori izbornik",
    closeMenu: "Zatvori izbornik",
  },
  hero: {
    eyebrow: "Fullstack programer • TypeScript React / Java Spring Boot",
    title: "Gradim produkcijske web aplikacije s naglaskom na frontend.",
    description:
      "Ja sam Bruno Tot, fullstack programer iz Zagreba usmjeren na React, TypeScript i Java Spring Boot. Radim na poslovnim aplikacijama bogatim domenom, dotjeranim frontend tokovima, ponovno iskoristivim UI sustavima i backend integracijama koje moraju ostati održive u produkciji.",
    ctaWork: "Pogledaj projekte",
    ctaContact: "Kontaktiraj me",
    chips: [
      "4+ godine profesionalnog iskustva",
      "React + TypeScript frontend",
      "Java Spring Boot backend",
      "Produkcijski poslovni sustavi",
      "Frontend arhitektura",
    ],
  },
  projects: {
    eyebrow: "Odabrani radovi",
    title: "Produkcijske aplikacije na kojima sam radio",
    description:
      "Izbor profesionalnih projekata kroz javne sustave, operativne alate i održavanje naslijeđenih sustava — usmjeren na održiv softver u stvarnim poslovnim domenama.",
    visibility: {
      public: "Javno",
      private: "Privatno",
      internal: "Interno",
    },
    fields: {
      role: "Uloga",
      company: "Tvrtka",
      duration: "Trajanje",
    },
    viewDetails: "Prikaži detalje projekta",
    hideDetails: "Sakrij detalje projekta",
    visit: "Posjeti projekt",
    prevLabel: "Prethodni projekt",
    nextLabel: "Sljedeći projekt",
    items: {
      fred: {
        statusLabel: "Prekogranična platforma za požare",
        role: "Voditelj frontenda, fullstack",
        period: "Sij. 2025 – danas (održavanje)",
        summary:
          "Prekogranična web platforma za prevenciju i odgovor na šumske požare, koja objedinjuje operativne podatke i alate za koordinaciju za timove koji rade preko regionalnih granica.",
        highlights: [
          "Izradio frontend od nule.",
          "Postavio i razvijao frontend strukturu, ponovno iskoristive UI obrasce i tokove značajki.",
          "Radio na backend funkcionalnostima od početka projekta.",
          "Snažno usmjeren na kvalitetu frontenda, održivost i ponašanje aplikacije prema korisniku.",
        ],
      },
      lms: {
        statusLabel: "Sustav za upravljanje prevodnicama",
        role: "Voditelj frontenda",
        period: "Lip. 2025 – danas",
        summary:
          "Specijalizirana aplikacija za upravljanje prevodnicama koja podržava nadzor, bilježenje i optimizaciju prolaska brodova kroz plovne putove i sustave prevodnica.",
        highlights: [
          "Izradio frontend aplikaciju od početka do kraja.",
          "Radio na složenoj domeni s operativnim tokovima i ekranima bogatim podacima.",
          "Izgradio UI aplikacije s naglaskom na održivost, dosljednost i dugoročni razvoj.",
        ],
      },
      croris: {
        statusLabel: "Nacionalni istraživački informacijski sustav",
        role: "Backend programer",
        period: "Sij. 2021 – Srp. 2023",
        summary:
          "Velik javni informacijski sustav za hrvatski znanstveno-istraživački ekosustav, s modulima za istraživače, ustanove, projekte, publikacije i povezane znanstvene podatke.",
        highlights: [
          "Radio na backend značajkama i održavanju u velikom produkcijskom sustavu.",
          "Implementirao i prilagođavao server-rendered UI tokove uz JSP, JavaScript, jQuery i CSS.",
          "Surađivao s kolegama iz SRCE-a i Notcha kroz dugotrajni vanjski angažman.",
          "Stekao snažno iskustvo rada u složenoj javnoj domeni s mnogo modula i poslovnih pravila.",
        ],
      },
      fgks: {
        statusLabel: "Europska platforma za riječne luke",
        role: "Frontend programer",
        period: "Srp. 2023 – danas (održavanje)",
        summary:
          "Produkcijska web platforma za poslovanje europskih riječnih luka, koja objedinjuje domenske tokove, upravljanje podacima i izvještavanje u jednoj aplikaciji.",
        highlights: [
          "Radio uglavnom na React + TypeScript frontend implementaciji.",
          "Doprinosio backend funkcionalnostima u Java Spring Bootu kada je bilo potrebno.",
          "Pomogao nastaviti i stabilizirati postojeći projekt, a ne raditi samo od nule.",
          "Radio na produkcijski usmjerenim značajkama, integracijskim točkama i UI tokovima.",
        ],
      },
      ceeris: {
        statusLabel: "Prekogranična platforma za izvještavanje",
        role: "Održavanje frontenda",
        period: "Srp. 2023 – danas (održavanje)",
        summary:
          "Prekogranična platforma za izvještavanje koja podržava strukturirano prikupljanje podataka i izvještavanje među sudjelujućim organizacijama.",
        highlights: [
          "Održavao i prilagođavao stariju Angular bazu koda.",
          "Radio u postojećem naslijeđenom frontend okruženju.",
          "Bavio se produkcijskim održavanjem, a ne samo razvojem novih značajki.",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Pregled iskustva",
    title: "Gdje sam isporučivao produkcijski rad",
    description:
      "Više od 4 godine kroz dugotrajne javne sustave i aktivan razvoj proizvoda, radeći blisko sa stvarnim poslovnim domenama.",
    educationTitle: "Obrazovanje",
    items: {
      rgo: {
        title: "Programer",
        company: "RGO Communications",
        period: "Srp. 2023 – danas",
        summary:
          "Rad na aktivnim produkcijskim web aplikacijama s naglaskom na React + TypeScript frontend razvoj i Java Spring Boot backend rad.",
        highlights: [
          "Izradio FRED frontend od nule.",
          "Implementirao LMS frontend od početka do kraja.",
          "Pridružio se i doprinio FGKS-u usred projekta.",
          "Održavao naslijeđeni CEERIS Angular projekt.",
          "Radio kroz frontend arhitekturu, UI tokove, integraciju API-ja i backend značajke.",
        ],
      },
      "notch-srce": {
        title: "Programer",
        company: "Notch / bivši Agency04 — outsourcan za SRCE",
        period: "Sij. 2021 – Srp. 2023",
        summary:
          "Radio 2,5 godine na CroRIS-u, velikom javnom informacijskom sustavu za hrvatski znanstveno-istraživački ekosustav.",
        highlights: [
          "Radio s Java Spring Boot backendom.",
          "Implementirao server-rendered frontend značajke uz JSP, JavaScript, jQuery i CSS.",
          "Surađivao u dugotrajnom produkcijskom sustavu sa složenim domenskim zahtjevima.",
        ],
      },
    },
    education: {
      tvz: {
        title: "Stručni prvostupnik, računarstvo",
        school: "Tehničko veleučilište u Zagrebu",
        period: "2018 – 2021",
      },
      tsrb: {
        title: "Srednjoškolska diploma",
        school: "Tehnička škola Ruđera Boškovića",
        period: "2013 – 2017",
      },
    },
  },
  skills: {
    eyebrow: "Tehničke snage",
    title: "Vještine i kako ih primjenjujem",
    description:
      "Fullstack skup alata s naglaskom na frontend, korišten za isporuku i održavanje stvarnih produkcijskih aplikacija.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      delivery: "Isporuka",
      infra: "Baze podataka / Infra",
    },
    strengths: {
      frontendArch: {
        title: "Frontend arhitektura",
        description:
          "Ponovno iskoristive komponente, složeni obrasci, tokovi sa stanjem i dosljednost produkcijskog UI-a.",
      },
      fullstack: {
        title: "Fullstack isporuka",
        description:
          "React/TypeScript frontendi integrirani s Java Spring Boot API-jima.",
      },
      legacy: {
        title: "Naslijeđeni i produkcijski sustavi",
        description:
          "Ugodno održavam starije sustave, a istovremeno gradim nove aplikacije od nule.",
      },
    },
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Surađujmo zajedno",
    description:
      "Želite surađivati ili razgovarati o fullstack projektu s naglaskom na frontend? Javite se e-poštom ili se povežite sa mnom na LinkedInu.",
    emailLabel: "E-pošta",
    elsewhere: "Drugdje",
    availability: "Otvoren za nove projekte i suradnje",
    form: {
      name: "Ime",
      email: "E-pošta",
      subject: "Predmet",
      message: "Poruka",
      namePlaceholder: "Ivan Horvat",
      emailPlaceholder: "ivan.horvat@mail.com",
      subjectPlaceholder: "Suradnja u interesu ...",
      messagePlaceholder: "Trebam ...",
      send: "Pošalji",
      success: "E-pošta uspješno poslana!",
      error: "Slanje e-pošte nije uspjelo! Pokušajte ponovno kasnije...",
    },
  },
  footer: {
    copyright: "© {{year}} Bruno Tot",
  },
  resume: {
    profile: "Profil",
    experience: "Iskustvo",
    selectedProjects: "Odabrani projekti",
    skills: "Vještine",
    education: "Obrazovanje",
    languages: "Jezici",
    personal: {
      title: "Fullstack programer",
      location: "Zagreb, Hrvatska",
      summary:
        "Fullstack programer usmjeren na React, TypeScript i Java Spring Boot, s više od 4 godine profesionalnog iskustva u izradi produkcijskih poslovnih aplikacija, održivih frontend sustava i backend integracija.",
      languages: ["Hrvatski — materinski", "Engleski — tečno"],
    },
  },
};

export default hr;
