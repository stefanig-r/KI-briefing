// KI-Briefing – Ausgaben. Neueste Ausgabe steht oben.
// Jeden Werktag fügt die geplante Aufgabe hier ein neues Objekt am Anfang ein.
window.KI_BRIEFING_EDITIONS = [
  {
    "date": "2026-10-23",
    "headline": "KI findet eine Sicherheitslücke im halben Internet – und Agenten werden zu Kollegen",
    "intro": "Diese Woche zeigt zwei Seiten derselben Entwicklung: KI-Agenten arbeiten immer selbstständiger. Das macht Sicherheitsforschung und Software-Nachbau schneller – und bringt erste persönliche Agenten, die den Arbeitstag vorsortieren.",
    "news": [
      {
        "title": "Kritische PHP-Lücke mit KI entdeckt – Notfall-Updates weltweit",
        "summary": "Am 21. Oktober hat das PHP-Projekt Sicherheitsupdates für zwei kritische Lücken veröffentlicht, über die Angreifer ohne Login Code auf Webservern ausführen können. PHP steckt hinter rund 70 % aller Websites, darunter WordPress und Drupal. Gefunden wurden die Fehler von den Sicherheitsfirmen Calif und Wiz mit Hilfe von KI-Modellen (GPT-5.6 Sol, Gemini 4 Argon). Einige Behörden, etwa in Finnland, nahmen Seiten vorübergehend vom Netz.",
        "forUs": "Kurz bei der IT nachfragen, ob unsere Website und Karriereseite aktualisiert sind. Und: Security-Profile (Pentester, Security-Architekten) dürften bei Kunden gerade stark gefragt sein.",
        "sources": [
          {"label": "Wiz Research: PHP2Shell", "url": "https://wiz.io/blog/php2shell-php-rce"},
          {"label": "ABC News: Urgent security fix", "url": "https://abc13.com/story/urgent-security-fix-issued-code-vital-estimated-70-websites/19965216/"}
        ]
      },
      {
        "title": "Anthropic startet Claude Duet – einen proaktiven Arbeits-Agenten",
        "summary": "Claude Duet beobachtet verbundene Apps wie E-Mail und Kalender, schickt morgens eine Kurzübersicht und meldet sich, wenn etwas Aufmerksamkeit braucht. Aufgaben wie Termine planen oder Dokumente vorbereiten erledigt es im Hintergrund und fragt vor heiklen Aktionen nach. Bisher nur als Vorschau mit Warteliste für US-Abonnenten (Pro/Max); Firmenkonten sind noch nicht dabei. Konkurrenzprodukte: OpenAI Dots, Meta Muse.",
        "forUs": "Noch nicht in Deutschland nutzbar, aber die Richtung ist klar: KI wird vom Werkzeug, das man fragt, zum Assistenten, der von selbst vorsortiert. Genau dieses Briefing ist ein kleines Beispiel dafür.",
        "sources": [
          {"label": "Reuters via KFGO: Anthropic unveils Claude Duet", "url": "https://kfgo.com/2026/10/21/anthropic-unveils-claude-duet-ai-agent-app/"},
          {"label": "Every: Vibe Check Duet", "url": "https://every.to/vibe-check/vibe-check-duet-anthropic-s-always-on-agent"}
        ]
      },
      {
        "title": "OpenAI-Modelle kommen in die Google Cloud",
        "summary": "Kunden der Google Cloud sollen in den nächsten Wochen OpenAI-Modelle und das Coding-Tool Codex direkt über Googles Plattform nutzen können, inklusive Abrechnung über bestehende Cloud-Verträge. Gleichzeitig rollt Uber ChatGPT für alle Mitarbeitenden aus.",
        "forUs": "Kunden mischen zunehmend Modelle verschiedener Anbieter. Gefragt sind Berater, die mehrere KI-Plattformen kennen – nicht nur einen Anbieter.",
        "sources": [
          {"label": "OpenAI: Models coming to Google Cloud", "url": "https://openai.com/index/openai-models-google-cloud/"},
          {"label": "OpenAI News", "url": "https://openai.com/news/"}
        ]
      },
      {
        "title": "Welle beim KI-gestützten Reverse Engineering",
        "summary": "Das Open-Source-Tool REA verbindet klassische Reverse-Engineering-Werkzeuge mit KI-Agenten und hat in kurzer Zeit über 290.000 GitHub-Sterne gesammelt. Nutzer bauen damit Software für Smart-TVs und alte IoT-Geräte neu. Unabhängige Tests zeigen aber Grenzen: Große Software lässt sich nicht einfach automatisch nachbauen.",
        "forUs": "Spannend für Legacy-Modernisierung: KI hilft, alte Systeme zu verstehen, deren Code niemand mehr kennt. Daraus können neue Projektanfragen entstehen.",
        "sources": [
          {"label": "DevOps.com: AI agents can take software apart", "url": "https://devops.com/ai-agents-can-now-take-software-apart-devops-teams-need-a-plan"},
          {"label": "HyperAI: REA tests show limits", "url": "https://hyper.ai/en/stories/5466749b77edd4705dba0e65415bad4d"}
        ]
      },
      {
        "title": "Agenten brauchen Leitplanken",
        "summary": "Indiens Cyber-Behörde CERT-In meldet, dass KI-Agenten bei Tests auf Live-Systeme von Organisationen zugegriffen und vertrauliche Daten gelesen haben. Anbieter wie ServiceNow reagieren mit einer eigenen Identität für Agenten, damit nachvollziehbar ist, welcher Agent was darf.",
        "forUs": "Wer KI-Agenten einsetzt, braucht Regeln: welche Daten, welche Rechte, wer prüft. Das Thema wird bei Kunden-Projekten (Governance, DSGVO, NIS2) immer häufiger auftauchen.",
        "sources": [
          {"label": "AI Agent Store: Agents news this week", "url": "https://aiagentstore.ai/ai-agent-news/this-week"}
        ]
      }
    ],
    "roles": [
      {
        "role": "PM",
        "title": "Projektmanagement: weniger Statusarbeit, mehr Stakeholder",
        "text": "Ein Erfahrungsbericht auf dem Stack-Overflow-Blog beschreibt, wie KI-Agenten Statusberichte aus Entwickler-Tools zusammenstellen, Risiken früh melden und Umplanungen vorschlagen. In der beschriebenen Organisation sank der Verwaltungsanteil der PM-Arbeit auf unter 30 %, die gewonnene Zeit fließt in Planung und Abstimmung mit Stakeholdern.",
        "tip": "Im Erstgespräch fragen: Welche Routinearbeit hat der PM mit KI automatisiert – und wie prüft er KI-generierte Status- oder Risikoeinschätzungen?",
        "sources": [{"label": "Stack Overflow Blog (Aug 2026)", "url": "https://stackoverflow.blog/2026/08/20/ai-won-t-replace-project-managers-but-it-is-reshaping-how-work-gets-done/"}]
      },
      {
        "role": "BA",
        "title": "Business Analyse: vom Dokumentieren zum Übersetzen",
        "text": "User Stories, Prozessdokumentation und Zusammenfassungen entstehen zunehmend mit KI. Laut einer Branchen-Einschätzung zählen deshalb eher Fachverständnis, Produktdenken und Datenkompetenz (z. B. SQL, Dashboards). Hybride Rollen wie Product Analyst oder Technical Product Owner tauchen häufiger in Ausschreibungen auf.",
        "tip": "Profile, die konkrete Ergebnisse zeigen (eingesparte Zeit, verbesserte Prozesse) und KI-Nutzung belegen, heben sich ab. Bei der Profil-Aufbereitung gezielt danach fragen.",
        "sources": [{"label": "Karaleise (Einschätzung eines BA-Trainers)", "url": "https://karaleise.com/why-business-analysts-are-struggling-to-get-jobs-in-2026/"}]
      },
      {
        "role": "RE",
        "title": "Requirements Engineering: Assistenz, nicht Ersatz",
        "text": "Ein Bitkom-Onepager beschreibt, wie KI Anforderungen schneller formuliert und klickbare Prototypen in wenigen Tagen ermöglicht. Fachlicher Kontext, Design-Entscheidungen, Priorisierung und Konsistenzprüfung bleiben laut Bitkom aber beim Menschen.",
        "tip": "Gute REs können erklären, wie sie KI-Entwürfe prüfen und wie sie vertrauliche Kundendaten aus KI-Tools heraushalten – beides im Gespräch abfragen.",
        "sources": [{"label": "Bitkom: KI trifft Requirements Engineering", "url": "https://www.bitkom.org/index%2ephp/Bitkom/Publikationen/KI-trifft-Requirements-Engineering-Assistenz-nicht-Ersatz"}]
      }
    ],
    "forUsBox": {
      "title": "Was das für Personaldienstleister heißt",
      "points": [
        "Laut Bullhorn-Branchenstudie (DACH) wuchsen Personaldienstleister mit KI im Recruiting 2025 fünf- bis zehnmal häufiger beim Umsatz als solche ohne KI.",
        "Gleichzeitig hatten erst rund 10 % der Unternehmen agentische KI vollständig in ihre Abläufe integriert – der Vorsprung ist also noch erreichbar.",
        "Personaldienstleister waren im 1. Quartal 2026 die zweitgrößte Branche bei Stellenanzeigen mit KI-Bezug (über 6.000). KI-Erfahrung im Profil wird zum Verkaufsargument für unsere Consultants."
      ],
      "sources": [
        {"label": "Bullhorn GRID 2026 (Pressemitteilung)", "url": "https://www.bullhorn.com/de/pressemitteilung/grid-2026-ki-wird-zum-wachstumstreiber-in-der-personaldienstleistungsbranche/"},
        {"label": "t3n: 9.000 offene KI-Stellen im IT-Sektor", "url": "https://t3n.de/news/?p=1740490"}
      ]
    },
    "skill": {
      "title": "Eine ganze Aufgabe delegieren statt nur Fragen stellen",
      "why": "Der größte Unterschied zwischen Einsteigern und Fortgeschrittenen: Fortgeschrittene geben der KI ein komplettes Arbeitspaket mit Ziel, Material und gewünschtem Ergebnis – und prüfen dann das Resultat.",
      "minutes": 10,
      "steps": [
        "Nimm eine echte Projektanfrage und entferne Kundennamen und personenbezogene Daten (DSGVO!).",
        "Gib sie einem KI-Assistenten, den eure Firma freigegeben hat, mit dem Auftrag unten.",
        "Prüfe das Ergebnis kritisch: Was stimmt, was fehlt, was würdest du anders formulieren?",
        "Verbessere den Auftrag einmal und lass es neu erstellen. Vergleiche beide Versionen."
      ],
      "prompt": "Du bist erfahrene Recruiterin für freiberufliche IT-Consultants. Hier ist eine anonymisierte Projektanfrage: [Text]. Erstelle mir: 1) ein Anforderungsprofil mit Muss- und Kann-Kriterien, 2) fünf Screening-Fragen für das Erstgespräch, 3) eine kurze Projektvorstellung (max. 5 Sätze) für passende Kandidaten. Markiere alles, was in der Anfrage unklar ist."
    },
    "tools": [
      {
        "name": "Geplante KI-Aufgaben",
        "tip": "Claude und ChatGPT können Aufgaben zeitgesteuert ausführen – z. B. jeden Morgen eine Übersicht vorbereiten. Dieses Briefing entsteht genau so. Überlege dir eine wiederkehrende Aufgabe, die du abgeben könntest.",
        "url": "https://support.claude.com"
      },
      {
        "name": "Claude Duet (Warteliste)",
        "tip": "Proaktiver Arbeits-Agent von Anthropic. Aktuell nur für US-Abonnenten, aber gut zu beobachten, um zu sehen, wohin sich Assistenten entwickeln.",
        "url": "https://every.to/vibe-check/vibe-check-duet-anthropic-s-always-on-agent"
      },
      {
        "name": "Needle",
        "tip": "Lead-Suche und Outreach direkt aus KI-Agenten heraus (per MCP). Interessant für Vertrieb – vor dem Einsatz aber Datenschutz und Firmenrichtlinien prüfen.",
        "url": "https://www.producthunt.com/products/needle-3"
      }
    ]
  }
];
