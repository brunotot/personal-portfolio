const en = {
  language: {
    en: "EN",
    hr: "HR",
    switchTo: "Switch language",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Fullstack Developer • TypeScript React / Java Spring Boot",
    title: "I build production web apps with a frontend edge.",
    description:
      "I'm Bruno Tot, a fullstack developer from Zagreb focused on React, TypeScript and Java Spring Boot. I work on domain-heavy business applications, polished frontend flows, reusable UI systems and backend integrations that need to stay maintainable in production.",
    ctaWork: "View selected work",
    ctaContact: "Contact me",
    chips: [
      "4+ years professional experience",
      "React + TypeScript frontend",
      "Java Spring Boot backend",
      "Production business systems",
      "Frontend architecture",
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Production apps I've worked on",
    description:
      "Selected production work across public systems, operational tools and legacy maintenance — focused on maintainable software in real business domains.",
    visibility: {
      public: "Public",
      private: "Private",
      internal: "Internal",
    },
    fields: {
      role: "Role",
      company: "Company",
      duration: "Duration",
    },
    viewDetails: "View project details",
    hideDetails: "Hide project details",
    visit: "Visit project",
    prevLabel: "Previous project",
    nextLabel: "Next project",
    featured: {
      badge: "Component library",
      label: "Featured project",
      title: "RGO Front UI — Component Library & Documentation",
      subtitle:
        "A React + TypeScript component library built on Material-UI, documented in Storybook and shared across RGO's production apps.",
      description:
        "A versioned, internally published UI library (@rgo/front-ui) that gives RGO product teams 41 production-ready components, 18 hooks and 8-locale i18n — fully documented in Storybook with live, interactive examples.",
      role: "Frontend engineer · Shared component library",
      cta: "View case study",
      close: "Close case study",
      stats: [
        {
          value: "41",
          label: "Production-ready components across 7 categories",
        },
        { value: "18", label: "Reusable hooks for forms, data and UX" },
        { value: "8", label: "Locales supported out of the box" },
      ],
      preview: {
        label: "Storybook documentation preview",
        nav: "Components",
        navItems: ["RgoForm", "RgoInputText", "RgoClientTable", "RgoTabs"],
        page: "RgoInputText",
        usage: "Usage",
        props: "Props",
      },
      sections: {
        overview: {
          title: "Overview",
          body: "@rgo/front-ui is an internal React + TypeScript component library built on Material-UI, packaged as a versioned npm dependency and documented in Storybook. It ships 41 production-ready components across 7 categories, 18 specialized hooks, 7 modular providers and 3 utility services — turning shared UI into a discoverable, living source of truth instead of patterns copied between apps.",
        },
        problem: {
          title: "Business problem",
          body: "RGO runs several long-lived production apps (FRED, LMS, FGKS and more), and each one was solving the same frontend problems on its own.",
          points: [
            "Inconsistent UI across products, with forms, tables and inputs rebuilt app by app.",
            "Duplicated Material-UI wrappers and validation logic copied between codebases.",
            "No shared internationalization, so every app re-implemented its own locale handling.",
            "Slow onboarding — new developers learned conventions by reading other apps' source.",
            "No single source of truth, so the same component drifted in different directions.",
          ],
        },
        solution: {
          title: "Solution",
          body: "A single versioned library, published to a private npm registry and documented in Storybook, that treats the UI kit as a product. Each component ships with interactive stories and MDX guides so teams adopt shared building blocks instead of reinventing them.",
          points: [
            "Type-safe, zod-validated forms via useRgoForm and a full set of RgoInput* controls.",
            "Feature-rich client and server data tables with sorting, pagination and filtering.",
            "Built-in i18next localization covering 8 locales out of the box.",
            "MUI theming, plus offline-cache and web-worker services for heavier app needs.",
            "~70 interactive Storybook stories and 9 MDX guides as the canonical reference.",
          ],
        },
        stack: {
          title: "Technical stack",
          items: [
            "TypeScript 5.6 — fully typed component contracts and prop documentation.",
            "React 18 + Material-UI 6 — the component library and its theming layer.",
            "Storybook 9 — interactive stories, controls and MDX documentation guides.",
            "react-hook-form + Zod — schema-validated forms behind a single useRgoForm hook.",
            "TanStack Query, axios & i18next — async data, HTTP and 8-locale internationalization.",
            "Private npm registry + Gitea CI/CD — automated build, publish and Storybook deploys.",
          ],
        },
        responsibilities: {
          title: "Responsibilities",
          points: [
            "Built and documented reusable components, hooks and providers in the shared library.",
            "Authored Storybook stories with live demos and MDX guides (providers, theming, tables, forms).",
            "Designed the documentation structure so components are easy to discover and adopt.",
            "Implemented MUI theming and verified responsive, accessible component behavior.",
            "Kept the codebase typed, linted and consistently organized across ~37k lines.",
          ],
        },
        impact: {
          title: "Impact",
          points: [
            "A single source of truth for UI shared across RGO's production apps.",
            "41 components and 18 hooks reused instead of rebuilt per project.",
            "Standardized, type-safe form and validation patterns (useRgoForm + Zod).",
            "8-locale internationalization available to every product for free.",
            "Versioned releases (currently v1.9.9, STABLE) published via automated CI/CD.",
            "Faster onboarding through Storybook's live examples and written guides.",
          ],
        },
      },
    },
    items: {
      fred: {
        statusLabel: "Cross-border wildfire platform",
        role: "Frontend lead, fullstack",
        period: "Jan. 2025 – present (maintenance)",
        summary:
          "A cross-border web platform supporting wildfire prevention and response, bringing operational data and coordination tools together for teams working across regional boundaries.",
        highlights: [
          "Implemented the frontend from scratch.",
          "Set up and evolved frontend structure, reusable UI patterns and feature flows.",
          "Worked on backend functionality from the beginning of the project.",
          "Focused heavily on frontend quality, maintainability and user-facing application behavior.",
        ],
      },
      lms: {
        statusLabel: "On-site lock-control system",
        role: "Frontend lead",
        period: "Jun. 2025 – present",
        summary:
          "A specialized lock-management application used to support monitoring, logging and optimization of ship passage through waterways and lock systems.",
        highlights: [
          "Implemented the frontend application end-to-end.",
          "Worked on a complex domain with operational workflows and data-heavy screens.",
          "Built the application UI with maintainability, consistency and long-term development in mind.",
        ],
      },
      croris: {
        statusLabel: "National research information system",
        role: "Backend developer",
        period: "Jan. 2021 – Jul. 2023",
        summary:
          "A large public information system for the Croatian science and research ecosystem, with modules for researchers, institutions, projects, publications and related scientific data.",
        highlights: [
          "Worked on backend features and maintenance in a large production system.",
          "Implemented and adjusted server-rendered UI flows using JSP, JavaScript, jQuery and CSS.",
          "Collaborated with SRCE and Notch colleagues across a long-running outsourced engagement.",
          "Gained strong experience working inside a complex public-sector domain with many modules and business rules.",
        ],
      },
      fgks: {
        statusLabel: "European river-port platform",
        role: "Frontend developer",
        period: "Jul. 2023 – present (maintenance)",
        summary:
          "A production web platform for European river-port operations, bringing domain workflows, data management and reporting together in a single application.",
        highlights: [
          "Worked mostly on React + TypeScript frontend implementation.",
          "Contributed to backend functionality in Java Spring Boot when needed.",
          "Helped continue and stabilize an existing project instead of only working from a blank slate.",
          "Worked on production-oriented features, integration points and UI flows.",
        ],
      },
      ceeris: {
        statusLabel: "Cross-border reporting platform",
        role: "Frontend maintenance",
        period: "Jul. 2023 – present (maintenance)",
        summary:
          "A cross-border reporting platform supporting structured data collection and reporting across participating organizations.",
        highlights: [
          "Maintained and adjusted an older Angular codebase.",
          "Worked in an existing legacy frontend environment.",
          "Handled production maintenance instead of only greenfield feature work.",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experience snapshot",
    title: "Where I've delivered production work",
    description:
      "Over 4+ years across long-running public systems and active product development, working close to real business domains.",
    educationTitle: "Education",
    items: {
      rgo: {
        title: "Software Developer",
        company: "RGO Communications",
        period: "Jul. 2023 – present",
        summary:
          "Working on active production web applications with a focus on React + TypeScript frontend development and Java Spring Boot backend work.",
        highlights: [
          "Built FRED frontend from scratch.",
          "Implemented LMS frontend end-to-end.",
          "Joined and contributed to FGKS mid-project.",
          "Maintained CEERIS legacy Angular project.",
          "Worked across frontend architecture, UI flows, API integration and backend features.",
        ],
      },
      "notch-srce": {
        title: "Software Developer",
        company: "Notch / former Agency04 — outsourced for SRCE",
        period: "Jan. 2021 – Jul. 2023",
        summary:
          "Worked for 2.5 years on CroRIS, a large public information system for the Croatian science and research ecosystem.",
        highlights: [
          "Worked with Java Spring Boot backend.",
          "Implemented server-rendered frontend features with JSP, JavaScript, jQuery and CSS.",
          "Collaborated in a long-running production system with complex domain requirements.",
        ],
      },
    },
    education: {
      tvz: {
        title: "Bachelor's Degree, Computer Engineering",
        school: "Zagreb University of Applied Sciences",
        period: "2018 – 2021",
      },
      tsrb: {
        title: "High School Diploma",
        school: "Technical School Ruđer Bošković",
        period: "2013 – 2017",
      },
    },
  },
  skills: {
    eyebrow: "Technical strengths",
    title: "Skills and how I apply them",
    description:
      "A frontend-leaning fullstack toolkit, used to ship and maintain real production applications.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      delivery: "Delivery",
      infra: "Database / Infra",
    },
    strengths: {
      frontendArch: {
        title: "Frontend architecture",
        description:
          "Reusable components, complex forms, stateful workflows and production UI consistency.",
      },
      fullstack: {
        title: "Fullstack delivery",
        description:
          "React/TypeScript frontends integrated with Java Spring Boot APIs.",
      },
      legacy: {
        title: "Legacy and production systems",
        description:
          "Comfortable maintaining older systems while also building new apps from scratch.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    description:
      "Want to work together or talk about a frontend-heavy fullstack project? Reach out by email or connect with me on LinkedIn.",
    emailLabel: "Email",
    elsewhere: "Elsewhere",
    availability: "Open to new projects and collaborations",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john.doe@mail.com",
      subjectPlaceholder: "Collaboration wanted ...",
      messagePlaceholder: "I need ...",
      send: "Send",
      success: "Email sent successfully!",
      error: "Email failed to send! Please try again later...",
    },
  },
  footer: {
    copyright: "© {{year}} by Bruno Tot",
  },
  resume: {
    profile: "Profile",
    experience: "Experience",
    selectedProjects: "Selected Projects",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    personal: {
      title: "Fullstack Developer",
      location: "Zagreb, Croatia",
      summary:
        "Fullstack developer focused on React, TypeScript and Java Spring Boot, with 4+ years of professional experience building production business applications, maintainable frontend systems and backend integrations.",
      languages: ["Croatian — native", "English — fluent"],
    },
  },
  company: {
    meta: {
      title: "{{company}} — Custom Web Applications",
      description:
        "{{company}} builds and maintains custom web applications for small and medium businesses — automating manual processes and replacing spreadsheets with reliable software.",
    },
    nav: {
      services: "Services",
      process: "Process",
      industries: "Industries",
      about: "About",
      contact: "Contact",
      cta: "Start a project",
      backToPortfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Custom web application studio",
      status: "Available — taking on new projects",
      title:
        "We turn manual business processes into reliable web applications.",
      titleHighlight: "reliable web applications",
      description:
        "{{company}} helps small and medium businesses replace spreadsheets and repetitive manual work with custom web applications — designed around your real workflow, built to last, and supported after launch.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See how we work",
      chips: [
        "Custom web apps",
        "Process automation",
        "Maintenance & support",
        "Small & medium businesses",
      ],
    },
    facts: {
      items: [
        {
          value: "2",
          label:
            "Founders who build and support your app — not account managers",
        },
        {
          value: "End-to-end",
          label: "From the first call and discovery to delivery and support",
        },
        {
          value: "2026",
          label: "Independent studio, freshly launched in Croatia",
        },
        {
          value: "Excel-free",
          label: "We replace the spreadsheets your business has outgrown",
        },
      ],
    },
    services: {
      eyebrow: "What we do",
      title: "Three ways we help your business",
      description:
        "From the first idea to long-term support, we cover the full lifecycle of a web application.",
      items: [
        {
          title: "Custom web applications",
          description:
            "Tailor-made web apps designed around your workflow — admin panels, dashboards, bookings, orders and internal tools.",
        },
        {
          title: "Process automation",
          description:
            "We replace repetitive manual work and scattered spreadsheets with clear, automated workflows that save time and reduce mistakes.",
        },
        {
          title: "Maintenance & support",
          description:
            "We keep your application running — bug fixes, improvements, dependency and security updates, and a clear support process.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, from idea to delivery",
      description:
        "We keep things transparent and written down, so you always know what you're getting and when.",
      steps: [
        {
          title: "Discovery",
          description:
            "We listen to your problem, understand your users and define what the application really needs to do.",
        },
        {
          title: "Specification",
          description:
            "We turn the conversation into a clear scope and an MVP, so expectations are set before development starts.",
        },
        {
          title: "Design",
          description:
            "We design simple, usable screens and flows that fit how your team actually works.",
        },
        {
          title: "Development",
          description:
            "We build the application with maintainable, production-grade code — frontend, backend and integrations.",
        },
        {
          title: "Testing",
          description:
            "We test the core flows from a real user's perspective before anything reaches you.",
        },
        {
          title: "Delivery & maintenance",
          description:
            "We deploy, hand over and keep supporting the application after launch.",
        },
      ],
    },
    industries: {
      eyebrow: "Who we help",
      title: "Built for businesses that still run on spreadsheets",
      description:
        "If your team relies on manual processes or Excel for something important, there's probably a simpler way.",
      items: [
        "Gyms & fitness centers",
        "Small services & crafts",
        "Schools & courses",
        "Rentals & tourism",
        "Small manufacturers",
        "Any Excel-heavy process",
      ],
    },
    why: {
      eyebrow: "Why {{company}}",
      title: "A small team that takes ownership",
      description:
        "You work directly with the people who build and support your application — no layers, no hand-offs.",
      items: [
        {
          title: "Direct communication",
          description:
            "You talk to the founders, not a call center. Clear answers, no jargon.",
        },
        {
          title: "Honest scope",
          description:
            "We won't promise the impossible. Everything is checked technically and written down.",
        },
        {
          title: "Built to last",
          description:
            "Maintainable code and a real support process, so your app keeps working after launch.",
        },
        {
          title: "Focused on your problem",
          description:
            "We care about saving you time and reducing mistakes — not selling you technology.",
        },
      ],
    },
    work: {
      eyebrow: "Our work",
      title: "Case studies coming soon",
      description:
        "We're a freshly started studio. Our first client case studies will appear here — in the meantime, we're happy to walk you through our process and past experience.",
      badge: "First projects in progress",
    },
    about: {
      eyebrow: "Who we are",
      title: "Two partners, one focused team",
      description:
        "We started {{company}} to build the kind of software we'd want to use ourselves — practical, reliable and well supported.",
      members: {
        marin: {
          name: "Marin",
          role: "Client & Product",
          description:
            "Marin leads client communication, discovery and product scope — making sure we build the right thing and keep you in the loop from the first call through support.",
        },
        bruno: {
          name: "Bruno Tot",
          role: "Technical Delivery",
          description:
            "Bruno leads technical delivery — frontend, backend, infrastructure and quality — turning the agreed scope into a maintainable, production-ready application.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's solve your problem",
      description:
        "Tell us about the process you'd like to improve. We'll get back to you with next steps — no obligation.",
      emailLabel: "Email",
      locationLabel: "Based in",
      cta: "Email us",
      availability: "Open to new projects",
    },
    footer: {
      tagline: "Custom web applications for small and medium businesses.",
      copyright: "© {{year}} {{company}}. All rights reserved.",
      builtBy: "Built by Bruno Tot",
    },
  },
};

export default en;
export type Resources = typeof en;
