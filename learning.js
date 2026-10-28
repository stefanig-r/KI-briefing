// KI-Briefing – Lernthemen (Tab "Lernen"). Wächst mit den Ausgaben mit.
// audience: "alle" | "recruiting" | "PM" | "BA" | "RE"; level: "Einstieg" | "Vertiefung"
// triggers: Ausgaben, die das Thema ausgelöst oder wieder aufgegriffen haben (neueste zuerst).
window.KI_BRIEFING_LEARNING = [
  {
    "id": "sap-joule-agents",
    "title": "KI-Agenten in SAP verstehen: Was Joule kann",
    "audience": [
      "recruiting",
      "BA"
    ],
    "level": "Einstieg",
    "effort": "ca. 45 Min.",
    "priority": 2,
    "why": "SAP und Oracle bauen KI-Agenten direkt in ERP-Prozesse ein, und Kunden fragen bei SAP-Projekten zunehmend nach Joule-Erfahrung. Wer SAP-Spezialisten vermittelt, muss einschätzen können, was hinter solchen Angaben im Profil steckt.",
    "goals": [
      "Danach kannst du erklären, was Joule ist und wofür es in SAP-Systemen genutzt wird",
      "Danach kannst du Joule-Erfahrung im Kandidatenprofil gezielt hinterfragen (genutzt, konfiguriert, eigene Agenten gebaut)",
      "Danach kannst du einordnen, warum Governance bei Agenten in ERP-Systemen wichtig ist"
    ],
    "resources": [
      {
        "label": "SAP Learning: Getting Started with Joule for Business Users (kostenlos)",
        "url": "https://learning.sap.com/de/courses/getting-started-with-joule-for-business-users",
        "lang": "EN"
      }
    ],
    "triggers": [
      {
        "date": "2026-10-28",
        "title": "SAP TechEd: Joule-Agenten sollen zusammenarbeiten – über eine kontrollierte Tür"
      },
      {
        "date": "2026-10-28",
        "title": "Oracle macht ChatGPT zur Bedienoberfläche für seine Geschäftssoftware"
      }
    ],
    "added": "2026-10-28"
  },
  {
    "id": "ai-act-recruiting",
    "title": "EU AI Act im Recruiting: Was ist Hochrisiko-KI?",
    "audience": ["alle", "recruiting"],
    "level": "Einstieg",
    "effort": "ca. 30 Min.",
    "priority": 1,
    "why": "KI-Vorinterviews und Matching-Tools kommen in HR-Systemen an. Solche Systeme können unter Hochrisiko-KI fallen – mit Pflichten zu Transparenz und menschlicher Prüfung, auch für Kunden, die Freelancer auswählen.",
    "goals": [
      "Erkennen, wann ein KI-Tool im Recruiting als Hochrisiko-KI gelten kann",
      "Wissen, welche Pflichten dann für Anbieter und Nutzer gelten",
      "Kandidaten und Kunden die Grundzüge in eigenen Worten erklären können"
    ],
    "resources": [
      {"label": "EU AI Act Service Desk: Hochrisiko-KI im Bereich Beschäftigung (mit Beispielen)", "url": "https://ai-act-service-desk.ec.europa.eu/de/node/464", "lang": "EN"},
      {"label": "Bundesnetzagentur: KI-Service Desk mit Compliance-Kompass", "url": "https://www.bundesnetzagentur.de/ki", "lang": "DE"}
    ],
    "triggers": [{"date":"2026-10-28","title":"Umfrage: Schatten-KI im Recruiting, KI-Absagen oft ungeprüft"}, {"date": "2026-10-26", "title": "Dayforce kauft Ribbon AI: Erstgespräche führt die KI"}],
    "added": "2026-10-27"
  },
  {
    "id": "ai-data-protection",
    "title": "Welche Daten dürfen in welches KI-Tool?",
    "audience": ["alle", "recruiting", "PM", "BA", "RE"],
    "level": "Einstieg",
    "effort": "ca. 20 Min.",
    "priority": 1,
    "why": "Behörden sperren ungeprüfte KI-Tools, und selbst lokal laufende Modelle können Daten nach außen senden. Wer mit Kunden- und Kandidatendaten arbeitet, muss die Grundregeln sicher beherrschen.",
    "goals": [
      "Freigegebene Geschäftstools von privaten/kostenlosen Konten unterscheiden",
      "Daten vor der KI-Nutzung anonymisieren oder pseudonymisieren",
      "Die wichtigsten Risiken generativer KI für Unternehmen benennen"
    ],
    "resources": [
      {"label": "BSI: Management-Blitzlicht Generative KI (Risiken und Maßnahmen kompakt)", "url": "https://allianz-fuer-cybersicherheit.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Management_Blitzlicht/Management_Blitzlicht_Generative-KI.pdf", "lang": "DE"}
    ],
    "triggers": [{"date":"2026-10-28","title":"Umfrage: Schatten-KI im Recruiting, KI-Absagen oft ungeprüft"}, 
      {"date": "2026-10-27", "title": "Offenes KI-Modell versuchte unaufgefordert Daten nach China zu senden"},
      {"date": "2026-10-26", "title": "Schweden sperrt ChatGPT und Claude in den Regierungsbüros"}
    ],
    "added": "2026-10-27"
  },
  {
    "id": "ai-literacy",
    "title": "KI-Kompetenz aufbauen und nachweisen",
    "audience": ["alle", "recruiting"],
    "level": "Einstieg",
    "effort": "ca. 30 Min.",
    "priority": 2,
    "why": "Arbeitgeber und Kunden fragen zunehmend konkret nach KI-Erfahrung. Der EU AI Act verlangt von Unternehmen, die KI einsetzen, grundsätzlich ausreichende KI-Kompetenz der Mitarbeitenden.",
    "goals": [
      "Die eigene KI-Nutzung konkret beschreiben können (Tool, Zweck, Ergebnis)",
      "Wissen, was KI-Kompetenz im Sinne des AI Act meint",
      "KI-Erfahrung in Consultant-Profilen gezielt abfragen und darstellen"
    ],
    "resources": [
      {"label": "Bundesnetzagentur: KI-Service Desk – KI-Kompetenz und kostenlose Schulungsangebote", "url": "https://www.bundesnetzagentur.de/ki", "lang": "DE"}
    ],
    "triggers": [{"date": "2026-10-27", "title": "Proton führt mit Beschäftigten „KI-Gespräche“ zur Weiterbeschäftigung"}],
    "added": "2026-10-27"
  },
  {
    "id": "agent-security",
    "title": "Sicherheit bei KI-Agenten: Prompt Injection verstehen",
    "audience": ["alle", "PM", "RE"],
    "level": "Vertiefung",
    "effort": "ca. 45 Min.",
    "priority": 2,
    "why": "Agenten lesen selbstständig Dateien, E-Mails und Webseiten – präparierte Inhalte können sie umlenken. Kunden mit Agenten-Projekten brauchen Leute, die das Risiko verstehen und Leitplanken einplanen.",
    "goals": [
      "Erklären können, was Prompt Injection ist",
      "Die wichtigsten Risiken von LLM-Anwendungen kennen",
      "Typische Schutzmaßnahmen (Rechte begrenzen, Bestätigung durch Menschen) benennen"
    ],
    "resources": [
      {"label": "OWASP Top 10 für LLM-Anwendungen", "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/", "lang": "EN"},
      {"label": "OWASP: Top 10 Risiken für agentische KI-Anwendungen (Rechte, Identitäten, Werkzeuge)", "url": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications/", "lang": "EN"}
    ],
    "triggers": [{"date":"2026-10-28","title":"Vergessene KI-Agenten behalten ihre Zugänge"}, 
      {"date": "2026-10-27", "title": "Präparierte Anleitungsdatei kapert KI-Programmierhelfer"},
      {"date": "2026-10-23", "title": "Agenten brauchen Leitplanken"}
    ],
    "added": "2026-10-27"
  },
  {
    "id": "ai-in-jira",
    "title": "KI in Jira und Confluence (Atlassian Rovo)",
    "audience": ["PM", "BA", "RE"],
    "level": "Einstieg",
    "effort": "ca. 20 Min.",
    "priority": 2,
    "why": "Viele Kunden unserer PMs, BAs und REs arbeiten mit Jira und Confluence. Dort kommen Fragen zu Datenverarbeitung, Modellen und Einstellungen auf.",
    "goals": [
      "Wissen, welche KI-Modelle Rovo nutzt und wohin Daten gehen",
      "Die wichtigsten Admin-Einstellungen kennen",
      "Kunden-Fragen zu Datenschutz in Jira einordnen können"
    ],
    "resources": [
      {"label": "Atlassian AI Trust Center (Datenverarbeitung, Modelle, Admin-Einstellungen)", "url": "https://www.atlassian.com/trust/ai", "lang": "EN"}
    ],
    "triggers": [{"date": "2026-10-26", "title": "Jira und Confluence: Mehr OpenAI im Atlassian-Assistenten Rovo"}],
    "added": "2026-10-27"
  },
  {
    "id": "pm-role-shift",
    "title": "Projektmanagement mit KI: Was ändert sich an der Rolle?",
    "audience": ["PM", "recruiting"],
    "level": "Einstieg",
    "effort": "ca. 20 Min.",
    "priority": 3,
    "why": "KI übernimmt Status- und Verwaltungsarbeit, der Fokus verschiebt sich zu Stakeholdern und Steuerung. Das verändert, wonach Kunden bei PMs fragen.",
    "goals": [
      "Die Verschiebung der PM-Aufgaben durch KI erklären können",
      "Gute Fragen an PM-Kandidaten zu ihrem KI-Einsatz stellen"
    ],
    "resources": [
      {"label": "GPM-Blog: Projektmanagement vor dem Rollenwechsel", "url": "https://www.gpm-ipma.de/ueber-die-gpm/blog/projektmanagement-vor-dem-rollenwechsel", "lang": "DE"}
    ],
    "triggers": [{"date":"2026-10-28","title":"Projektmanagement: Der PMI-Standard für KI in Projekten"}, 
      {"date": "2026-10-27", "title": "Projektmanagement: Der Planner-Agent wird erwachsener"},
      {"date": "2026-10-26", "title": "Projektmanagement: Projektleute wollen KI – die Organisationen hinken hinterher"}
    ],
    "added": "2026-10-27"
  },
  {
    "id": "ba-state",
    "title": "Business Analyse und KI: Stand der Branche",
    "audience": ["BA", "recruiting"],
    "level": "Einstieg",
    "effort": "ca. 30 Min.",
    "priority": 3,
    "why": "BAs nutzen KI bisher vor allem zum Schreiben und Dokumentieren. Wer darüber hinausgeht, hebt sich ab – das hilft bei Profil-Aufbereitung und Kandidatengesprächen.",
    "goals": [
      "Wissen, wie BAs KI heute einsetzen und wo es hakt",
      "Über Doku hinausgehende KI-Einsätze im Profil erkennen und hervorheben"
    ],
    "resources": [
      {"label": "IIBA: Global State of Business Analysis Report 2026", "url": "https://www.iiba.org/business-analysis-blogs/insight-enables-confidence-the-2026-global-state-of-business-analysis-report/", "lang": "EN"}
    ],
    "triggers": [{"date":"2026-10-28","title":"Business Analyse: Nur wenige Firmen sehen echten KI-Nutzen"}, {"date": "2026-10-27", "title": "Business Analyse: Positive Sicht auf KI – aber mit leichtem Dämpfer"}],
    "added": "2026-10-27"
  },
  {
    "id": "re-check-ai-output",
    "title": "Requirements Engineering: KI-Entwürfe richtig prüfen",
    "audience": ["RE", "BA"],
    "level": "Vertiefung",
    "effort": "ca. 30 Min.",
    "priority": 2,
    "why": "KI formuliert Anforderungen schnell, ergänzt aber Lücken oft mit falschen Annahmen. Entscheidend wird, diese Annahmen zu erkennen und mit Stakeholdern zu klären.",
    "goals": [
      "Typische Fehler in KI-generierten Anforderungen erkennen",
      "Wissen, welche Aufgaben im RE beim Menschen bleiben",
      "Gute Prüffragen für RE-Kandidaten formulieren"
    ],
    "resources": [
      {"label": "Fraunhofer IESE: KI im Requirements Engineering – der Mensch bleibt wichtigste Instanz", "url": "https://www.iese.fraunhofer.de/blog/ki-im-requirements-engineering-mensch-trotz-genai-wichtigste-instanz/", "lang": "DE"},
      {"label": "Bitkom: KI trifft Requirements Engineering – Assistenz, nicht Ersatz", "url": "https://www.bitkom.org/index%2ephp/Bitkom/Publikationen/KI-trifft-Requirements-Engineering-Assistenz-nicht-Ersatz", "lang": "DE"}
    ],
    "triggers": [{"date":"2026-10-28","title":"Requirements Engineering: Die Spezifikation wird zum Bauplan für Agenten"}, 
      {"date": "2026-10-27", "title": "Requirements Engineering: KI füllt Lücken – oft mit falschen Annahmen"},
      {"date": "2026-10-23", "title": "Requirements Engineering: Assistenz, nicht Ersatz"}
    ],
    "added": "2026-10-27"
  },
  {
    "id": "agent-skills",
    "title": "Wiederkehrende Abläufe als „Skill“ für KI beschreiben",
    "audience": ["alle", "recruiting"],
    "level": "Vertiefung",
    "effort": "ca. 45 Min.",
    "priority": 3,
    "why": "Abläufe wie Profil-Formatierung oder Anforderungsabgleich lassen sich einmal als Skill beschreiben und dann in verschiedenen KI-Tools wiederverwenden – ein offener Standard macht das anbieterunabhängig.",
    "goals": [
      "Verstehen, was ein Agent Skill ist und wie er aufgebaut ist",
      "Einen eigenen wiederkehrenden Ablauf als Kandidaten für einen Skill erkennen"
    ],
    "resources": [
      {"label": "Agent Skills: Überblick und Quickstart", "url": "https://agentskills.io/", "lang": "EN"}
    ],
    "triggers": [{"date": "2026-10-26", "title": "„Skills“ für KI-Agenten werden ein offener Standard"}],
    "added": "2026-10-27"
  }
];
