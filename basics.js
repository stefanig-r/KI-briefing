// KI-Briefing – Grundwissen (fester Tab). Wird nur bei Bedarf von Hand aktualisiert.
window.KI_BRIEFING_BASICS = {
  "updated": "2026-10-28",
  "rules": [
    {"title": "KI macht Fehler – immer prüfen", "text": "KI-Antworten klingen überzeugend, können aber falsch oder erfunden sein. Zahlen, Namen, Fakten und Quellen vor der Weitergabe immer kontrollieren."},
    {"title": "Keine Kunden- oder Personendaten in fremde Tools", "text": "Kundennamen, Lebensläufe, Kontaktdaten oder Vertragsdetails nur in Tools eingeben, die intern freigegeben sind. Im Zweifel vorher anonymisieren."},
    {"title": "Der Mensch entscheidet", "text": "KI darf vorschlagen, sortieren und formulieren. Entscheidungen über Menschen – etwa wer für ein Projekt vorgeschlagen wird – trifft immer eine Person."},
    {"title": "Gute Aufträge statt kurzer Fragen", "text": "Je mehr Kontext, Ziel und gewünschtes Format die KI bekommt, desto besser das Ergebnis. Siehe Prompt-Formel unten."},
    {"title": "Transparent bleiben", "text": "Wenn Texte oder Analysen mit KI entstanden sind und das für Empfänger relevant ist, offen sagen. Verantwortung für den Inhalt bleibt bei uns."},
    {"title": "Im Zweifel fragen", "text": "Unsicher, ob ein Tool oder eine Nutzung erlaubt ist? Kurz bei Datenschutz oder IT nachfragen, bevor Daten hochgeladen werden."}
  ],
  "landscape": {
    "intro": "Das große Bild: wer die wichtigen KI-Werkzeuge anbietet, wie KI vom Chat zur Automatisierung wird, wie sie an andere Systeme angebunden wird – und was Mythos ist.",
    "asOf": "Oktober 2026",
    "providers": [
      {
        "name": "ChatGPT",
        "maker": "OpenAI",
        "origin": "USA",
        "note": "Bekanntester KI-Assistent, breites Funktionsangebot inkl. Agenten. Modelle gibt es auch über Microsoft Azure, in Kürze zusätzlich über Google Cloud."
      },
      {
        "name": "Claude",
        "maker": "Anthropic",
        "origin": "USA",
        "note": "Stark bei Texten, Analyse und Programmierung; bietet Agenten, geplante Aufgaben und viele Connectors."
      },
      {
        "name": "Gemini",
        "maker": "Google",
        "origin": "USA",
        "note": "In Google Workspace (Gmail, Docs, Drive) integriert; gilt als stark bei Bildern und Video."
      },
      {
        "name": "Microsoft Copilot",
        "maker": "Microsoft",
        "origin": "USA",
        "note": "In Microsoft 365 (Outlook, Teams, Word, Excel) integriert. Für Firmen mit M365 oft der naheliegendste Einstieg."
      },
      {
        "name": "Le Chat",
        "maker": "Mistral AI",
        "origin": "Frankreich",
        "note": "Europäischer Anbieter; relevant für Kunden, die Wert auf EU-Anbieter oder eigenen Betrieb legen."
      }
    ],
    "providerNote": "Für Firmendaten gilt bei allen Anbietern: nur Geschäftskonten nutzen, die intern freigegeben sind und einen Vertrag zur Auftragsverarbeitung haben – private oder kostenlose Konten nicht für Kunden- oder Personendaten verwenden. Welches Modell gerade „das beste“ ist, wechselt fast monatlich.",
    "stages": [
      {
        "name": "Chat",
        "text": "Man fragt, die KI antwortet. Jede Aufgabe beginnt bei null.",
        "example": "„Fasse diese Projektanfrage zusammen.“"
      },
      {
        "name": "Agent",
        "text": "Die KI erledigt mehrere Schritte selbst: recherchieren, Dateien erstellen, in Apps arbeiten – und liefert ein fertiges Ergebnis.",
        "example": "„Erstelle aus diesen drei Anfragen je ein Anforderungsprofil und eine Shortlist.“"
      },
      {
        "name": "Automatisierung",
        "text": "Der Agent läuft regelmäßig von allein, ohne dass jemand fragt. Der Mensch prüft und entscheidet.",
        "example": "Dieses Briefing: entsteht jeden Werktag automatisch."
      }
    ],
    "mcp": {
      "title": "MCP und Connectors: wie KI an andere Systeme kommt",
      "text": "Von sich aus kennt eine KI nur, was man ihr in den Chat gibt. Über Connectors bekommt sie Zugriff auf andere Systeme – etwa E-Mail, Kalender, Ablagen, CRM oder Jira. Viele dieser Verbindungen nutzen MCP (Model Context Protocol), einen offenen Standard: eine Art „USB-Anschluss“ für KI, über den ein Assistent mit vielen Tools sprechen kann.",
      "tools": [
        "E-Mail",
        "Kalender",
        "Dateiablage",
        "CRM",
        "Jira / Confluence",
        "Teams / Slack"
      ],
      "why": [
        "Für uns: Kunden binden KI zunehmend an ihre Systeme an. Erfahrung mit Connectors, MCP und Agenten wird in Projektanfragen für PMs, BAs und REs häufiger auftauchen.",
        "Für die Sicherheit: Jede Verbindung gibt der KI Rechte. Deshalb nur nötige Zugriffe freigeben und bei heiklen Aktionen (senden, löschen, bezahlen) eine Bestätigung durch den Menschen verlangen."
      ]
    },
    "myths": [
      {
        "myth": "KI kennt immer den aktuellen Stand.",
        "fact": "Ein Modell kennt nur seine Trainingsdaten bis zu einem Stichtag. Aktuelles weiß es nur, wenn es im Web sucht oder man es ihm gibt."
      },
      {
        "myth": "Was KI schreibt, stimmt.",
        "fact": "KI kann überzeugend falsche Fakten, Zahlen oder Quellen erfinden (Halluzination). Wichtiges immer prüfen."
      },
      {
        "myth": "KI ersetzt Recruiter, PMs oder BAs.",
        "fact": "KI übernimmt vor allem Aufgaben wie Dokumentieren, Zusammenfassen und Vorsortieren. Urteil, Beziehungen und Verantwortung bleiben beim Menschen – die Rollen verändern sich."
      },
      {
        "myth": "Kostenlose KI-Tools sind für Kundendaten okay.",
        "fact": "Nein. Kunden- und Personendaten nur in freigegebene Geschäftstools, sonst vorher anonymisieren."
      },
      {
        "myth": "Für gute Ergebnisse braucht man Prompt-Tricks.",
        "fact": "Wichtiger als Tricks sind Kontext, ein klares Ziel und das gewünschte Format. Siehe Prompt-Formel."
      },
      {
        "myth": "KI-Detektoren erkennen KI-Texte zuverlässig.",
        "fact": "Solche Tools liegen oft daneben und markieren auch menschliche Texte. Als Beweis taugen sie nicht."
      },
      {
        "myth": "Man muss programmieren können, um KI sinnvoll zu nutzen.",
        "fact": "Nein. Die meisten Anwendungen – auch Agenten und Automatisierungen – lassen sich heute in normaler Sprache beauftragen."
      }
    ]
  },
  "promptFormula": {
    "intro": "Ein guter Auftrag an die KI hat fünf Bausteine:",
    "parts": [
      {"name": "Rolle", "text": "Wer soll die KI sein?", "example": "Du bist erfahrene Recruiterin für IT-Freelancer."},
      {"name": "Kontext", "text": "Was ist die Ausgangslage, welches Material gibt es?", "example": "Hier ist eine anonymisierte Projektanfrage für einen SAP-Berater."},
      {"name": "Ziel", "text": "Was soll am Ende herauskommen?", "example": "Erstelle ein Anforderungsprofil mit Muss- und Kann-Kriterien."},
      {"name": "Format", "text": "Wie soll das Ergebnis aussehen?", "example": "Als Tabelle, maximal 10 Zeilen, auf Deutsch."},
      {"name": "Prüfauftrag", "text": "Was soll die KI selbst kritisch markieren?", "example": "Markiere alles, was in der Anfrage unklar oder widersprüchlich ist."}
    ]
  },
  "levels": [
    {"n": 1, "name": "Fragen stellen", "text": "KI als bessere Suchmaschine für einzelne Fragen.", "next": "Einen echten Text (E-Mail, Zusammenfassung) von der KI vorbereiten lassen."},
    {"n": 2, "name": "Texte erstellen", "text": "E-Mails, Zusammenfassungen und Entwürfe mit KI schreiben und überarbeiten.", "next": "Ein komplettes Arbeitspaket mit Ziel, Material und Format übergeben."},
    {"n": 3, "name": "Aufgaben delegieren", "text": "Ganze Aufgaben übergeben und das Ergebnis kritisch prüfen.", "next": "Eine wiederkehrende Aufgabe finden, die regelmäßig automatisch laufen könnte."},
    {"n": 4, "name": "Workflows automatisieren", "text": "Agenten oder geplante Aufgaben erledigen wiederkehrende Arbeit selbstständig.", "next": "Einen ganzen Prozess hinterfragen: Wie sähe er mit KI von Grund auf aus?"},
    {"n": 5, "name": "Prozesse neu denken", "text": "Abläufe werden mit KI grundsätzlich neu gestaltet, Menschen steuern und prüfen.", "next": "Erfahrungen im Team teilen und andere auf ihre nächste Stufe bringen."}
  ],
  "roles": [
    {
      "role": "PM", "name": "Projektmanager",
      "aiTakes": ["Statusberichte aus Tools (Jira, Git, Kalender) zusammenstellen", "Protokolle und Aufgabenlisten aus Meetings", "Risiken und Verzögerungen früh erkennen", "Umplanung vorschlagen, wenn Ressourcen fehlen"],
      "human": ["Stakeholder-Kommunikation und Erwartungsmanagement", "Führung, Motivation, Konflikte lösen", "Priorisieren und Verantwortung übernehmen"],
      "ask": ["Welche Routinearbeit haben Sie im letzten Projekt mit KI automatisiert?", "Wie prüfen Sie KI-generierte Status- oder Risikoeinschätzungen?", "Wie bringen Sie Teams mit, die KI skeptisch sehen?"]
    },
    {
      "role": "BA", "name": "Business Analyst",
      "aiTakes": ["User Stories und Akzeptanzkriterien entwerfen", "Prozessdokumentation und Diagramme", "Workshops und Interviews zusammenfassen", "Erste Datenauswertungen"],
      "human": ["Den echten Bedarf hinter dem Wunsch erkennen", "Zwischen Fachbereich und IT übersetzen", "Entscheidungen mit Daten vorbereiten und vertreten"],
      "ask": ["Wie validieren Sie von KI erstellte User Stories?", "Ein Beispiel, bei dem Sie mit Daten eine Entscheidung beeinflusst haben?", "Welche Ergebnisse (Zeit, Qualität) können Sie aus Ihrem letzten Projekt belegen?"]
    },
    {
      "role": "RE", "name": "Requirements Engineer",
      "aiTakes": ["Anforderungen formulieren und vereinheitlichen", "Auf Lücken, Widersprüche und Mehrdeutigkeit prüfen", "Klickbare Prototypen in Tagen statt Wochen", "Rückverfolgbarkeit pflegen"],
      "human": ["Domänenwissen und Kontext", "Design-Entscheidungen und Priorisierung", "Konsistenz und Abnahme verantworten"],
      "ask": ["Wie setzen Sie KI beim Erheben und Prüfen von Anforderungen ein?", "Wie stellen Sie sicher, dass keine vertraulichen Kundendaten in KI-Tools landen?", "Wie gehen Sie mit KI-Entwürfen um, die plausibel klingen, aber falsch sind?"]
    }
  ],
  "glossary": [
    {"term":"Schatten-KI","def":"KI-Tools, die Beschäftigte ohne Freigabe des Unternehmens nutzen, etwa ein privates ChatGPT-Konto für dienstliche Texte. Das Risiko: Firmen- oder Personendaten landen bei Anbietern ohne Vertrag und Kontrolle.","added":"2026-10-28"},
    {"term":"Spec-driven Development (spezifikationsgetriebene Entwicklung)","def":"Arbeitsweise, bei der zuerst eine genaue schriftliche Spezifikation entsteht, die ein KI-Coding-Agent dann direkt umsetzt. Die Qualität der Anforderungen bestimmt damit unmittelbar die Qualität der Software.","added":"2026-10-28"},
    {"term":"Computer Use (Computer-Nutzung)","def":"Fähigkeit eines KI-Modells, Programme über die Bildschirmoberfläche zu bedienen – also zu klicken, zu tippen und zwischen Fenstern zu wechseln wie ein Mensch. So kann die KI Aufgaben auch in Systemen erledigen, die keine technische Schnittstelle haben.","added":"2026-10-27"},
    {"term":"Prompt Injection","def":"Angriff, bei dem versteckte Anweisungen in Texten, Webseiten oder Dateien eine KI dazu bringen, etwas anderes zu tun als vom Nutzer gewollt – etwa Daten preiszugeben. Besonders riskant bei KI-Agenten, die selbstständig Inhalte lesen und handeln.","added":"2026-10-27"},
    {"term": "Skill (Agent Skill)", "def": "Eine gespeicherte Anleitung, die ein KI-Agent bei Bedarf lädt, etwa für einen festen Arbeitsablauf mit Vorlagen und Beispielen. So muss man denselben Ablauf nicht in jedem Chat neu erklären.", "added": "2026-10-26"},
    {"term": "Datenresidenz", "def": "Die Zusage, dass Daten in einer bestimmten Region gespeichert werden, z. B. in der EU. Sie gilt oft nur für die Speicherung – die Verarbeitung durch ein KI-Modell kann trotzdem anderswo stattfinden.", "added": "2026-10-26"},
    {"term": "Proaktiver Agent", "def": "Ein KI-Agent, der nicht auf Fragen wartet, sondern verbundene Apps wie E-Mail oder Kalender beobachtet und sich meldet, wenn etwas Aufmerksamkeit braucht. Beispiele: Claude Duet, OpenAI Dots, Meta Muse.", "added": "2026-10-23"},
    {"term": "Reverse Engineering (KI-gestützt)", "def": "Fertige Software ohne Quellcode analysieren, um zu verstehen, wie sie funktioniert, und sie ggf. nachzubauen. KI-Agenten übernehmen dabei zunehmend die Detailarbeit.", "added": "2026-10-23"},
    {"term": "Agent", "def": "Eine KI, die nicht nur antwortet, sondern selbstständig mehrere Schritte ausführt – etwa recherchieren, Dateien erstellen oder in Apps arbeiten – um ein Ziel zu erreichen."},
    {"term": "Anonymisierung", "def": "Daten so verändern, dass sich keine Person mehr erkennen lässt. Bei Pseudonymisierung werden Namen nur ersetzt, die Zuordnung bleibt mit Zusatzwissen möglich."},
    {"term": "Bias (Verzerrung)", "def": "Systematische Schieflage in KI-Ergebnissen, oft übernommen aus den Trainingsdaten. Besonders heikel bei Bewertungen von Menschen, z. B. im Recruiting."},
    {"term": "Chatbot / KI-Assistent", "def": "Programm, mit dem man in natürlicher Sprache schreibt oder spricht, z. B. Claude, ChatGPT, Gemini oder Microsoft Copilot."},
    {"term": "Connector / Integration", "def": "Verbindung zwischen einem KI-Assistenten und einer anderen App (z. B. E-Mail, Kalender, Drive), damit die KI dort lesen oder arbeiten kann."},
    {"term": "EU AI Act", "def": "EU-Verordnung zur Regulierung von KI. Sie teilt KI-Systeme nach Risiko ein und regelt Pflichten für Anbieter und Nutzer, darunter Transparenz und KI-Kompetenz."},
    {"term": "Fine-Tuning", "def": "Ein bestehendes Modell mit eigenen Beispieldaten nachtrainieren, damit es eine bestimmte Aufgabe oder einen Stil besser beherrscht."},
    {"term": "Generative KI", "def": "KI, die neue Inhalte erzeugt – Texte, Bilder, Code, Audio oder Video – statt nur vorhandene Daten zu sortieren."},
    {"term": "Geplante Aufgabe", "def": "Eine KI-Aufgabe, die zu festen Zeiten automatisch läuft, z. B. jeden Morgen eine Übersicht erstellen. Dieses Briefing entsteht so."},
    {"term": "Halluzination", "def": "Wenn eine KI etwas Falsches oder Erfundenes überzeugend als Tatsache darstellt, etwa nicht existierende Quellen oder Zahlen."},
    {"term": "Hochrisiko-KI", "def": "Kategorie im EU AI Act für Einsatzbereiche mit besonderem Risiko. Dazu zählen KI-Systeme zur Auswahl und Bewertung von Bewerbern – für sie gelten strengere Pflichten."},
    {"term": "KI-Kompetenz", "def": "Ausreichendes Wissen von Mitarbeitenden über Chancen, Risiken und richtige Nutzung von KI. Der EU AI Act verlangt das grundsätzlich von Unternehmen, die KI einsetzen."},
    {"term": "Kontextfenster", "def": "Wie viel Text eine KI auf einmal „im Blick“ behalten kann – Gesprächsverlauf, Dokumente und Anweisungen zusammen."},
    {"term": "Lokales Modell", "def": "Ein KI-Modell, das auf eigenen Rechnern oder Servern läuft statt in der Cloud eines Anbieters. Vorteil: Daten verlassen das Haus nicht."},
    {"term": "MCP (Model Context Protocol)", "def": "Offener Standard, über den KI-Assistenten mit Tools und Datenquellen verbunden werden. Viele Connectors basieren darauf."},
    {"term": "Modell / Sprachmodell (LLM)", "def": "Das eigentliche KI-System hinter einem Assistenten, trainiert auf großen Textmengen. Beispiele: Claude Opus, GPT, Gemini."},
    {"term": "Multimodal", "def": "Eine KI, die mehrere Arten von Inhalten verarbeitet – etwa Text, Bilder, PDFs und Audio gleichzeitig."},
    {"term": "Open-Weight-Modell", "def": "Ein Modell, dessen Gewichte öffentlich verfügbar sind, sodass man es selbst betreiben und anpassen kann."},
    {"term": "Prompt", "def": "Die Anweisung oder Frage, die man der KI gibt. Je klarer Ziel, Kontext und Format, desto besser das Ergebnis."},
    {"term": "RAG (Retrieval-Augmented Generation)", "def": "Technik, bei der die KI vor dem Antworten passende Informationen aus eigenen Dokumenten oder Datenbanken abruft, statt nur aus ihrem Training zu schöpfen."},
    {"term": "Reasoning-Modell", "def": "Ein Modell, das vor der Antwort intern Schritt für Schritt „nachdenkt“. Besser bei komplexen Aufgaben, dafür langsamer."},
    {"term": "Token", "def": "Die Einheit, in der KI Text verarbeitet – grob ein Wortteil. Nutzungslimits und Kosten werden oft in Tokens gemessen."},
    {"term": "Training / Trainingsdaten", "def": "Die Texte und Daten, aus denen ein Modell gelernt hat. Daraus folgt auch ein Wissensstand: Neuere Ereignisse kennt das Modell nur über Websuche."},
    {"term": "Vibe Coding", "def": "Software entwickeln, indem man der KI in normaler Sprache beschreibt, was man will, und sie den Code schreiben lässt."}
  ]
};
