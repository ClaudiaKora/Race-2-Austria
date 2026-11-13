const CATEGORIES = [
    { id: "general", stage: 1, title: "Allgemeines Orientierungswissen", color: "#E63946", icon: "🇦🇹" },
    { id: "education", stage: 2, title: "Sprache und Bildung", color: "#F4A261", icon: "🎓" },
    { id: "work", stage: 3, title: "Arbeitswelt und Wirtschaft", color: "#2A9D8F", icon: "💼" },
    { id: "health", stage: 4, title: "Gesundheit", color: "#457B9D", icon: "🏥" },
    { id: "living", stage: 5, title: "Wohnen und Nachbarschaft", color: "#8AB17D", icon: "🏠" },
    { id: "law", stage: 6, title: "Rechtliche Integration", color: "#6D597A", icon: "⚖️" },
    { id: "culture", stage: 7, title: "Kulturelle Integration", color: "#E9C46A", icon: "🤝" }
  ];
  
  const QUESTIONS = [
    {
      id: "gen_1",
      category_id: "general",
      base_question_id: "gen_1",
      points: 2,
      official_text: {
        question: "Österreich ist eine Monarchie. Das heißt, es gibt zum Beispiel einen König oder einen Kaiser.",
        options: [
          { id: "a", text: "richtig" },
          { id: "b", text: "falsch" }
        ],
        correct_option: "b"
      },
      learning_aids: {
        visual_anchor: "👑❌ ➔ 🗳️🇦🇹",
        short_question: "Österreich ist eine {Monarchie} (mit {König} oder {Kaiser}).",
        keywords: {
          "Monarchie": "Monarchy",
          "König": "King",
          "Kaiser": "Emperor"
        },
        signal_words: ["Monarchie", "König", "Kaiser"],
        coach_tip_en: "No kings or emperors here! Austria has been a democratic Republic since 1918."
      }
    },
    {
      id: "gen_2",
      category_id: "general",
      base_question_id: "gen_2",
      points: 2,
      official_text: {
        question: "In Österreich macht der Bundespräsident oder die Bundespräsidentin alle Gesetze.",
        options: [
          { id: "a", text: "richtig" },
          { id: "b", text: "falsch" }
        ],
        correct_option: "b"
      },
      learning_aids: {
        visual_anchor: "🤵❌ ➔ 🏛️📜",
        short_question: "Der {Bundespräsident} macht alle {Gesetze}.",
        keywords: {
          "Bundespräsident": "Federal President",
          "Gesetze": "Laws"
        },
        signal_words: ["Bundespräsident", "alle Gesetze"],
        coach_tip_en: "Not the President! In Austria, the Parliament (Parlament) makes the laws."
      }
    },
    {
      id: "gen_2_1",
      category_id: "general",
      base_question_id: "gen_2",
      points: 2,
      official_text: {
        question: "In Österreich beschließt das Parlament die Gesetze.",
        options: [
          { id: "a", text: "richtig" },
          { id: "b", text: "falsch" }
        ],
        correct_option: "a"
      },
      learning_aids: {
        visual_anchor: "🏛️✅ 📜",
        short_question: "Das {Parlament} {beschließt} die {Gesetze}.",
        keywords: {
          "Parlament": "Parliament",
          "beschließt": "passes / decides",
          "Gesetze": "Laws"
        },
        signal_words: ["Parlament", "Gesetze"],
        coach_tip_en: "Yes! Just like Congress in the US, the Austrian Parliament passes the laws."
      }
    },
    {
      id: "gen_3",
      category_id: "general",
      base_question_id: "gen_3",
      points: 3,
      official_text: {
        question: "Wie groß ist Österreich?",
        options: [
          { id: "a", text: "148.000 km²" },
          { id: "b", text: "8.000 km²" },
          { id: "c", text: "84.000 km²" }
        ],
        correct_option: "c"
      },
      learning_aids: {
        visual_anchor: "🗺️🇦🇹 📏",
        short_question: "{Wie groß} ist Österreich?",
        keywords: {
          "Wie groß": "How big (area)"
        },
        signal_words: ["Wie groß", "84.000"],
        coach_tip_en: "Memory trick: 84,000 km² (roughly the size of Maine or South Carolina!)."
      }
    },
    {
      id: "gen_4",
      category_id: "general",
      base_question_id: "gen_4",
      points: 3,
      official_text: {
        question: "Wie viele Einwohner und Einwohnerinnen hat Österreich?",
        options: [
          { id: "a", text: "Ca. 85 Mio." },
          { id: "b", text: "Ca. 8,5 Mio." },
          { id: "c", text: "Ca. 58 Mio." }
        ],
        correct_option: "b"
      },
      learning_aids: {
        visual_anchor: "👥🇦🇹 8,5M",
        short_question: "{Wie viele Einwohner} hat Österreich?",
        keywords: {
          "Wie viele Einwohner": "How many inhabitants / population"
        },
        signal_words: ["Einwohner", "8,5 Mio."],
        coach_tip_en: "Notice the pattern: 84,000 km² area and ~8.5 Million people (same as New York City!)."
      }
    },
    {
      id: "gen_5",
      category_id: "general",
      base_question_id: "gen_5",
      points: 3,
      official_text: {
        question: "Was ist kein österreichisches Bundesland?",
        options: [
          { id: "a", text: "Steiermark" },
          { id: "b", text: "Niederösterreich" },
          { id: "c", text: "Bregenz" }
        ],
        correct_option: "c"
      },
      learning_aids: {
        visual_anchor: "⚠️ KEIN Bundesland",
        short_question: "Was ist {KEIN} österreichisches {Bundesland}?",
        keywords: {
          "KEIN": "NOT a (watch out for negation!)",
          "Bundesland": "Federal state"
        },
        signal_words: ["KEIN", "Bundesland"],
        coach_tip_en: "Watch out for 'KEIN' (not)! Bregenz is a city (capital of Vorarlberg), not a state."
      }
    },
    {
      id: "gen_5_1",
      category_id: "general",
      base_question_id: "gen_5",
      points: 3,
      official_text: {
        question: "Was ist ein österreichisches Bundesland?",
        options: [
          { id: "a", text: "Steiermark" },
          { id: "b", text: "Bregenz" },
          { id: "c", text: "Klagenfurt" }
        ],
        correct_option: "a"
      },
      learning_aids: {
        visual_anchor: "🗺️✅ Bundesland",
        short_question: "Was ist {ein} österreichisches {Bundesland}?",
        keywords: {
          "ein": "a (positive question)",
          "Bundesland": "Federal state"
        },
        signal_words: ["ein", "Bundesland", "Steiermark"],
        coach_tip_en: "Steiermark (Styria) is the green state in the south. Bregenz and Klagenfurt are cities."
      }
    },
    {
      id: "gen_5_2",
      category_id: "general",
      base_question_id: "gen_5",
      points: 3,
      official_text: {
        question: "Was ist kein österreichisches Bundesland?",
        options: [
          { id: "a", text: "Niederösterreich" },
          { id: "b", text: "Kärnten" },
          { id: "c", text: "Eisenstadt" }
        ],
        correct_option: "c"
      },
      learning_aids: {
        visual_anchor: "⚠️ KEIN Bundesland",
        short_question: "Was ist {KEIN} österreichisches {Bundesland}?",
        keywords: {
          "KEIN": "NOT a",
          "Bundesland": "Federal state"
        },
        signal_words: ["KEIN", "Bundesland"],
        coach_tip_en: "Eisenstadt is the tiny capital city of Burgenland, not a state itself!"
      }
    },
    {
      id: "gen_5_3",
      category_id: "general",
      base_question_id: "gen_5",
      points: 3,
      official_text: {
        question: "Was ist ein österreichisches Bundesland?",
        options: [
          { id: "a", text: "Tirol" },
          { id: "b", text: "St. Pölten" },
          { id: "c", text: "Graz" }
        ],
        correct_option: "a"
      },
      learning_aids: {
        visual_anchor: "🏔️🇦🇹 Tirol",
        short_question: "Was ist {ein} österreichisches {Bundesland}?",
        keywords: {
          "ein": "a",
          "Bundesland": "Federal state"
        },
        signal_words: ["ein", "Bundesland", "Tirol"],
        coach_tip_en: "Tirol (Tyrol) is the famous alpine state in the west! St. Pölten and Graz are cities."
      }
    },
    {
      id: "gen_6",
      category_id: "general",
      base_question_id: "gen_6",
      points: 3,
      official_text: {
        question: "Was ist keine österreichische Landeshauptstadt?",
        options: [
          { id: "a", text: "Vorarlberg" },
          { id: "b", text: "Linz" },
          { id: "c", text: "Salzburg" }
        ],
        correct_option: "a"
      },
      learning_aids: {
        visual_anchor: "⚠️ KEINE Hauptstadt",
        short_question: "Was ist {KEINE} österreichische {Landeshauptstadt}?",
        keywords: {
          "KEINE": "NOT a",
          "Landeshauptstadt": "State capital city"
        },
        signal_words: ["KEINE", "Landeshauptstadt"],
        coach_tip_en: "Flip it around! Vorarlberg is a state (Bundesland), not a capital city."
      }
    },
    {
      id: "gen_6_1",
      category_id: "general",
      base_question_id: "gen_6",
      points: 3,
      official_text: {
        question: "Was ist eine österreichische Landeshauptstadt?",
        options: [
          { id: "a", text: "Wien" },
          { id: "b", text: "Niederösterreich" },
          { id: "c", text: "Kärnten" }
        ],
        correct_option: "a"
      },
      learning_aids: {
        visual_anchor: "🏙️🇦🇹 Wien",
        short_question: "Was ist {eine} österreichische {Landeshauptstadt}?",
        keywords: {
          "eine": "a",
          "Landeshauptstadt": "State capital city"
        },
        signal_words: ["eine", "Landeshauptstadt", "Wien"],
        coach_tip_en: "Wien (Vienna) is both a state AND a capital city! Niederösterreich and Kärnten are states."
      }
    },
    {
      id: "gen_7",
      category_id: "general",
      base_question_id: "gen_7",
      points: 2,
      official_text: {
        question: "Wien ist ein Bundesland und Landeshauptstadt.",
        options: [
          { id: "a", text: "richtig" },
          { id: "b", text: "falsch" }
        ],
        correct_option: "a"
      },
      learning_aids: {
        visual_anchor: "🏙️ + 🗺️ = Wien",
        short_question: "Wien ist ein {Bundesland} UND {Landeshauptstadt}.",
        keywords: {
          "Bundesland": "Federal state",
          "Landeshauptstadt": "State capital"
        },
        signal_words: ["Wien", "Bundesland", "Landeshauptstadt"],
        coach_tip_en: "Double role! Just like Washington D.C. or Berlin, Vienna is both a city and its own state."
      }
    },
    {
      id: "gen_7_1",
      category_id: "general",
      base_question_id: "gen_7",
      points: 3,
      official_text: {
        question: "Die Hauptstadt von Österreich ist …",
        options: [
          { id: "a", text: "Salzburg." },
          { id: "b", text: "Wien." },
          { id: "c", text: "Graz." }
        ],
        correct_option: "b"
     },
     learning_aids: {
        visual_anchor: "🇦🇹 ⭐ Wien",
        short_question: "Die {Hauptstadt} von Österreich ist …",
        keywords: {
            "Hauptstadt": "Capital city"
        },
        signal_words: ["Hauptstadt", "Wien"],
        coach_tip_en: "Easy win! Wien (Vienna) is the capital of Austria."
    }
    },
    {
        id: "gen_8",
        category_id: "general",
        base_question_id: "gen_8",
        points: 3,
        official_text: {
        question: "Wie viele Bundesländer hat Österreich?",
        options: [
        { id: "a", text: "5" },
        { id: "b", text: "9" },
        { id: "c", text: "13" }
        ],
        correct_option: "b"
        },
        learning_aids: {
        visual_anchor: "🇦🇹 🧩 9",
        short_question: "{Wie viele Bundesländer} hat Österreich?",
        keywords: {
        "Wie viele Bundesländer": "How many federal states"
        },
        signal_words: ["Wie viele", "Bundesländer", "9"],
        coach_tip_en: "Austria has 9 federal states (Bundesländer) – much easier to memorize than 50 US states!"
        }
    },
    {
        id: "gen_9",
        category_id: "general",
        base_question_id: "gen_9",
        points: 2,
        official_text: {
        question: "Österreich ist bei der Europäischen Union.",
        options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
        ],
        correct_option: "a"
        },
        learning_aids: {
        visual_anchor: "🇦🇹 🤝 🇪🇺",
        short_question: "Österreich ist bei der {Europäischen Union}.",
        keywords: {
        "Europäischen Union": "European Union (EU)"
        },
        signal_words: ["Österreich", "Europäischen Union"],
        coach_tip_en: "Yes! Austria is a proud member of the European Union (EU)."
        }
    },
    {
        id: "gen_9_1",
        category_id: "general",
        base_question_id: "gen_9",
        points: 3,
        official_text: {
        question: "Seit wann ist Österreich bei der Europäischen Union?",
        options: [
        { id: "a", text: "Gar nicht." },
        { id: "b", text: "Seit 2005." },
        { id: "c", text: "Seit 1995." }
        ],
        correct_option: "c"
        },
        learning_aids: {
        visual_anchor: "🇪🇺 📅 1995",
        short_question: "{Seit wann} ist Österreich bei der {Europäischen Union}?",
        keywords: {
        "Seit wann": "Since when",
        "Europäischen Union": "European Union"
        },
        signal_words: ["Seit wann", "1995"],
        coach_tip_en: "Memory trick: 1995! (Think of the 90s – Austria joined the EU on Jan 1, 1995)."
        }
    },
    {
        id: "gen_10",
        category_id: "general",
        base_question_id: "gen_10",
        points: 3,
        official_text: {
        question: "Die offizielle Sprache in einem Land heißt auch Amtssprache. Welche Sprache ist die Amtssprache in Österreich?",
        options: [
        { id: "a", text: "Englisch" },
        { id: "b", text: "Türkisch" },
        { id: "c", text: "Deutsch" }
        ],
        correct_option: "c"
        },
        learning_aids: {
        visual_anchor: "🗣️🇦🇹 Deutsch",
        short_question: "Welche Sprache ist die {Amtssprache} in Österreich?",
        keywords: {
        "Amtssprache": "Official language"
        },
        signal_words: ["Amtssprache", "Deutsch"],
        coach_tip_en: "Amtssprache = Official language. That's why we're practicing in Deutsch!"
        }
    },
    {
    id: "gen_11",
    category_id: "general",
    base_question_id: "gen_11",
    points: 3,
    official_text: {
    question: "In Österreich zahlt man mit …",
    options: [
    { id: "a", text: "Dollar." },
    { id: "b", text: "Schilling." },
    { id: "c", text: "Euro." }
    ],
    correct_option: "c"
    },
    learning_aids: {
    visual_anchor: "💶🇦🇹 Euro",
    short_question: "In Österreich {zahlt} man mit …",
    keywords: {
    "zahlt": "pays (currency)"
    },
    signal_words: ["zahlt", "Euro"],
    coach_tip_en: "Schilling was the old currency before 2002. Today Austria uses the Euro (€)!"
    }
    }
    ];