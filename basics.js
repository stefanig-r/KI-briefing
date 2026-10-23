// KI-Briefing – Grundwissen (fester Tab). Wird nur bei Bedarf von Hand aktualisiert.
window.KI_BRIEFING_BASICS = {
  "updated": "2026-10-23",
  "rules": [
    {"title": "KI macht Fehler – immer prüfen", "text": "KI-Antworten klingen überzeugend, können aber falsch oder erfunden sein. Zahlen, Namen, Fakten und Quellen vor der Weitergabe immer kontrollieren."},
    {"title": "Keine Kunden- oder Personendaten in fremde Tools", "text": "Kundennamen, Lebensläufe, Kontaktdaten oder Vertragsdetails nur in Tools eingeben, die intern freigegeben sind. Im Zweifel vorher anonymisieren."},
    {"title": "Der Mensch entscheidet", "text": "KI darf vorschlagen, sortieren und formulieren. Entscheidungen über Menschen – etwa wer für ein Projekt vorgeschlagen wird – trifft immer eine Person."},
    {"title": "Gute Aufträge statt kurzer Fragen", "text": "Je mehr Kontext, Ziel und gewünschtes Format die KI bekommt, desto besser das Ergebnis. Siehe Prompt-Formel unten."},
    {"title": "Transparent bleiben", "text": "Wenn Texte oder Analysen mit KI entstanden sind und das für Empfänger relevant ist, offen sagen. Verantwortung für den Inhalt bleibt bei uns."},
    {"title": "Im Zweifel fragen", "text": "Unsicher, ob ein Tool oder eine Nutzung erlaubt ist? Kurz bei Datenschutz oder IT nachfragen, bevor Daten hochgeladen werden."}
  ],
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
  "glossary": [
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
