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
    featured: {
      badge: "Biblioteka komponenti",
      label: "Istaknuti projekt",
      title: "RGO Front UI — Biblioteka komponenti i dokumentacija",
      subtitle:
        "Biblioteka komponenti u React + TypeScriptu izgrađena na Material-UI-u, dokumentirana u Storybooku i dijeljena kroz RGO-ove produkcijske aplikacije.",
      description:
        "Verzionirana, interno objavljena UI biblioteka (@rgo/front-ui) koja RGO-ovim timovima donosi 41 produkcijski spremnu komponentu, 18 hookova i i18n s 8 jezika — potpuno dokumentirano u Storybooku sa živim, interaktivnim primjerima.",
      role: "Frontend programer · Dijeljena biblioteka komponenti",
      cta: "Pogledaj studiju slučaja",
      close: "Zatvori studiju slučaja",
      stats: [
        { value: "41", label: "Produkcijski spremnih komponenti u 7 kategorija" },
        { value: "18", label: "Ponovno iskoristivih hookova za forme, podatke i UX" },
        { value: "8", label: "Podržanih jezika od početka" },
      ],
      preview: {
        label: "Pregled Storybook dokumentacije",
        nav: "Komponente",
        navItems: ["RgoForm", "RgoInputText", "RgoClientTable", "RgoTabs"],
        page: "RgoInputText",
        usage: "Primjena",
        props: "Svojstva",
      },
      sections: {
        overview: {
          title: "Pregled",
          body: "@rgo/front-ui je interna biblioteka komponenti u React + TypeScriptu izgrađena na Material-UI-u, zapakirana kao verzionirana npm ovisnost i dokumentirana u Storybooku. Donosi 41 produkcijski spremnu komponentu u 7 kategorija, 18 specijaliziranih hookova, 7 modularnih providera i 3 uslužna servisa — pretvarajući dijeljeni UI u pregledan, živi izvor istine umjesto obrazaca kopiranih između aplikacija.",
        },
        problem: {
          title: "Poslovni problem",
          body: "RGO održava nekoliko dugovječnih produkcijskih aplikacija (FRED, LMS, FGKS i druge), a svaka je iste frontend probleme rješavala zasebno.",
          points: [
            "Nedosljedan UI kroz proizvode, gdje su se forme, tablice i inputi izrađivali aplikacija po aplikacija.",
            "Duplicirani Material-UI omotači i logika validacije kopirani između baza koda.",
            "Bez dijeljene internacionalizacije, pa je svaka aplikacija iznova implementirala vlastito rukovanje jezicima.",
            "Sporo uvođenje — novi programeri učili su konvencije čitajući izvorni kod drugih aplikacija.",
            "Bez jedinstvenog izvora istine, ista se komponenta razilazila u različitim smjerovima.",
          ],
        },
        solution: {
          title: "Rješenje",
          body: "Jedna verzionirana biblioteka, objavljena na privatni npm registry i dokumentirana u Storybooku, koja UI komplet tretira kao proizvod. Svaka komponenta dolazi s interaktivnim pričama i MDX vodičima kako bi timovi usvajali zajedničke gradivne blokove umjesto da ih iznova izmišljaju.",
          points: [
            "Tipovima sigurne, zod-validirane forme putem useRgoForm i potpunog seta RgoInput* kontrola.",
            "Bogate klijentske i serverske tablice podataka sa sortiranjem, paginacijom i filtriranjem.",
            "Ugrađena i18next lokalizacija koja od početka pokriva 8 jezika.",
            "MUI temiranje, uz servise za offline predmemoriju i web workere za zahtjevnije potrebe.",
            "~70 interaktivnih Storybook priča i 9 MDX vodiča kao kanonska referenca.",
          ],
        },
        stack: {
          title: "Tehnološki stack",
          items: [
            "TypeScript 5.6 — potpuno tipizirani ugovori komponenti i dokumentacija svojstava.",
            "React 18 + Material-UI 6 — biblioteka komponenti i njezin sloj temiranja.",
            "Storybook 9 — interaktivne priče, kontrole i MDX vodiči dokumentacije.",
            "react-hook-form + Zod — shemom validirane forme iza jednog useRgoForm hooka.",
            "TanStack Query, axios i i18next — asinkroni podaci, HTTP i internacionalizacija na 8 jezika.",
            "Privatni npm registry + Gitea CI/CD — automatizirani build, objava i Storybook deploy.",
          ],
        },
        responsibilities: {
          title: "Odgovornosti",
          points: [
            "Izradio i dokumentirao ponovno iskoristive komponente, hookove i providere u dijeljenoj biblioteci.",
            "Napisao Storybook priče sa živim demoima i MDX vodiče (provideri, temiranje, tablice, forme).",
            "Osmislio strukturu dokumentacije kako bi komponente bilo lako pronaći i usvojiti.",
            "Implementirao MUI temiranje i provjerio responzivno, pristupačno ponašanje komponenti.",
            "Održavao bazu koda tipiziranom, lintanom i dosljedno organiziranom kroz ~37 tisuća redaka.",
          ],
        },
        impact: {
          title: "Učinak",
          points: [
            "Jedinstveni izvor istine za UI dijeljen kroz RGO-ove produkcijske aplikacije.",
            "41 komponenta i 18 hookova ponovno iskorišteni umjesto izrade po projektu.",
            "Standardizirani, tipovima sigurni obrasci formi i validacije (useRgoForm + Zod).",
            "Internacionalizacija na 8 jezika dostupna svakom proizvodu besplatno.",
            "Verzionirana izdanja (trenutno v1.9.9, STABLE) objavljena putem automatiziranog CI/CD-a.",
            "Brže uvođenje zahvaljujući živim primjerima i pisanim vodičima u Storybooku.",
          ],
        },
      },
    },
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
