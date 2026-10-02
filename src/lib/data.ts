// Single source of truth for all site content.
// Every fact here is pulled directly from Niaz Rahman's resume (2026) — nothing invented.

export const profile = {
  name: "Niaz Rahman",
  firstName: "Niaz",
  lastName: "Rahman",
  tagline: "Backend & Full-Stack Development · Node.js & TypeScript · Data-Driven Product Work",
  location: "Bashundhara, Dhaka, Bangladesh",
  phone: "+880 1602 068167",
  phoneHref: "tel:+8801602068167",
  email: "rahmanniaz29@gmail.com",
  github: "https://github.com/niazbuoy08",
  githubLabel: "github.com/niazbuoy08",
  linkedin: "https://linkedin.com/in/niazman",
  linkedinLabel: "linkedin.com/in/niazman",
  currentRole: "Business Analyst",
  currentCompany: "Sheba Technologies Limited",
  summary:
    "Software Engineering graduate who combines strong technical skills with hands-on product and business experience. I've built and shipped applications end to end across logistics, machine learning, and job matching using TypeScript, Node.js, MongoDB, and SQL. Currently at Sheba Technologies, I work on live FinTech and banking products — translating business requirements into practical technical solutions alongside clients and engineering teams.",
};

export const intro =
  "I'm Niaz Rahman, a Software Engineering graduate who works across product, business analysis and AI. I enjoy translating ambiguous problems into useful digital products that create real value for users and businesses.";

export const heroStats = [
  { value: "3+", label: "Products built end to end" },
  { value: "15+", label: "Technical artefacts authored at Sheba" },
  { value: "58+", label: "WCAG issues taken to certification" },
  { value: "5+", label: "Competition podium finishes" },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "Next.js API routes",
      "FastAPI",
      "REST & JSON API design",
      "Auth & sessions",
      "RBAC",
      "Zod validation",
      "State machines",
      "Concurrency control",
    ],
  },
  {
    label: "Databases",
    skills: [
      "MongoDB & Atlas",
      "Aggregation pipelines",
      "SQL",
      "Relational & document modelling",
      "Data extraction & transformation",
    ],
  },
  {
    label: "Data & ML",
    skills: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "Feature engineering",
      "Power BI",
      "KPI dashboards",
    ],
  },
  {
    label: "Tooling & Practice",
    skills: [
      "React",
      "Git",
      "GitHub Actions",
      "CI unit testing",
      "Agile & Scrum",
      "Jira",
      "BRD / HLD / LLD",
      "Stakeholder management",
    ],
  },
  {
    label: "Domains",
    skills: ["FinTech & banking", "Logistics & courier ops", "Telecom", "E-commerce"],
  },
];

export const education = [
  {
    school: "Islamic University of Technology (IUT)",
    credential: "B.Sc. in Software Engineering · CGPA 3.41 / 4.00",
    degree: "B.Sc. in Software Engineering",
    cgpa: "3.41",
    period: "Graduated Aug 2026",
    location: "Dhaka, Bangladesh",
    detail:
      "Coursework: data structures & algorithms, database management systems, OOP, software design & architecture, operating systems, computer networks, software quality & testing.",
  },
  {
    school: "Mastermind English Medium School",
    credential: "Cambridge A Level — 4 A*",
    period: "2021",
    location: "Dhaka, Bangladesh",
  },
  {
    school: "Mastermind English Medium School",
    credential: "Cambridge O Level — 6 A* and 2 A",
    period: "2019",
    location: "Dhaka, Bangladesh",
  },
];

export const experience = [
  {
    company: "Sheba Technologies Limited",
    role: "Business Analyst",
    period: "Oct 2025 – Present",
    location: "Dhaka, Bangladesh",
    summary:
      "Business analysis on live FinTech and banking platforms, sitting between international clients and engineering teams.",
    keyWork: ["bKash Channel KYC", "HSBC MyCalendar", "Agile delivery", "BRD · HLD · LLD"],
    bullets: [
      "Bridge international client stakeholders and engineering teams on live FinTech and banking platforms — turning business goals into requirements, acceptance criteria, and KPIs, then tracking delivery in Agile sprints.",
      "Analyse post-launch issue data for the live **bKash Channel KYC** platform, grouping cases by root cause and business impact into a prioritised engineering action list that cut resolution cycles.",
      "Author and maintain **15+ technical artefacts** — BRD, HLD, LLD, process models, report logic, test cases, and user manuals — using LLM tooling to speed up turnaround.",
      "Led accessibility compliance for **HSBC MyCalendar** with AbilityNet: audited **58 WCAG issues** into a tracked remediation plan, worked through fixes with engineers, and secured full third-party certification.",
    ],
  },
];

export const leadership = [
  {
    org: "IUT Career & Business Society",
    role: "Vice President, Development and Planning",
    period: "Feb 2024 – Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Organised IUT Career Expo 2024 and 2025, securing 20+ leading companies including BAT, Nestlé, bKash, and Summit Communications.",
      "Led INTERN 2024, an intra-university case competition, and drove BizNation 2.0, including industry partnerships and coordination of 20+ professional judges.",
    ],
  },
  {
    org: "British American Tobacco Bangladesh (BATB)",
    role: "XCEED Talent Campus Ambassador",
    period: "Jul 2025 – Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Ran a full campus survey, analysed the responses, and turned the findings into a Campus Activation Strategy for BAT tailored to IUT.",
      "Helped BATB identify top talent across IUT by scouting high-performing students and channelling them into the company's early-careers pipeline.",
    ],
  },
];

export const awards = [
  { title: "1st Runner-up, Over the Wall Season 4", org: "Marico Bangladesh", scale: "1,600+ teams" },
  { title: "Top 45, Bizmaestros X UFLP", org: "Unilever Bangladesh", scale: "12,000+ candidates" },
  { title: "1st Runner-up, Breaking Brand 2026", org: "", scale: "415+ teams" },
  { title: "1st Runner-up, 3ZERO Ideation Challenge", org: "", scale: "100+ teams" },
  { title: "2nd Runner-up, BIZVERSE 2025", org: "BRAC BIZZBEE", scale: "300+ teams" },
  { title: "2nd Runner-up (Bronze), National Blockchain Olympiad 2024", org: "", scale: "200+ teams" },
];

export const projects = [
  {
    slug: "courier-ops",
    repo: "https://github.com/niazbuoy08/Courier-Ops",
    name: "Courier Ops",
    tagline: "Parcel Delivery Operations Platform",
    summary:
      "Parcel delivery operations platform with a server-enforced shipment state machine, live ops dashboards and 85 unit tests in CI.",
    period: "2026",
    description:
      "Internal operations platform where dispatchers register shipments, push tracking scans, and flag exceptions, while ops leads watch live tiles for volume, status mix, and overdue parcels.",
    bullets: [
      "Modelled the shipment lifecycle as a forward-only **state machine**, enforced server-side with compare-and-swap updates so two dispatchers scanning the same parcel can never skip or reorder a step.",
      "Wrote the MongoDB **aggregation pipeline** behind the dashboard, a filterable query endpoint with CSV export, and an append-only activity log recording who changed what and when.",
      "Added a tested **72-hour delivery SLA** rule classifying shipments as on-track, due soon, overdue, or late.",
      "Validated every request with Zod, applied role-based access control per route, and covered the domain logic with **85 unit tests** running in CI.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Zod"],
  },
  {
    slug: "churn-prediction",
    repo: "https://github.com/niazbuoy08/AI-Powered-Customer-Churn-Prediction-and-Retention-System",
    name: "AI Churn & Retention",
    tagline: "AI-Powered Customer Churn Prediction & Retention System",
    summary:
      "Machine learning churn prediction and retention system built on 7,043 subscriber records, explained with SHAP and turned into actions with Gemini.",
    period: "2025 – 2026",
    description:
      "Full-stack decision system that shows, for every subscriber, who is about to leave, why, and what will retain them — ~11,000 lines across a 70-endpoint JSON API, a MongoDB Atlas data layer, and a React front end.",
    bullets: [
      "Designed the API around the full model lifecycle: dataset ingestion, training runs, versioned model artefacts, batch and single-record scoring, and an admin console for retraining.",
      "Cleaned 7,043 subscriber records, engineered behavioural and billing features, and benchmarked **7 classifiers** including XGBoost, LightGBM, CatBoost, and Random Forest — reaching 0.845 ROC AUC and 79.6% accuracy.",
      "Explained predictions with SHAP and used the Google Gemini API to turn each one into a concrete retention action, shown on an 8-KPI dashboard.",
    ],
    tech: ["Python", "FastAPI", "MongoDB Atlas", "React", "XGBoost", "SHAP"],
  },
  {
    slug: "smarthire",
    repo: "https://github.com/AntaraArifa/SmartHire",
    name: "SmartHire",
    tagline: "Semantic Job Matching Platform",
    summary:
      "Job portal backend with a semantic candidate-to-job matching engine that lifted match relevance by 30% over keyword matching.",
    period: "2024 – 2025",
    description:
      "Backend built with a small team: data models, REST JSON APIs for authentication, candidate profiles, job posts and applications, and the query layer behind them.",
    bullets: [
      "Shipped the semantic candidate-to-job matching engine that lifted match relevance by **30%** over keyword matching.",
      "Integrated with the front end through documented API contracts and Git-based code review.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
  },
];
