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
    },
   // ==========================================
  // STAGE 2: STELLENWERT VON SPRACHE UND BILDUNG
  // ==========================================
  {
    id: "edu_1",
    category_id: "education",
    base_question_id: "edu_1",
    points: 2,
    official_text: {
      question: "Der Staat Österreich bezahlt für die Bildung. Das ist nur möglich, weil viele Menschen arbeiten gehen und Steuern zahlen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🏫💶 ➔ 👷‍♀️👷‍♂️",
      short_question: "Der Staat bezahlt für {Bildung}, weil Menschen arbeiten und {Steuern} zahlen.",
      keywords: { "Bildung": "Education", "Steuern": "Taxes" },
      signal_words: ["Bildung", "Steuern"],
      coach_tip_en: "Public schools and universities in Austria are funded by working people paying taxes."
    }
  },
  {
    id: "edu_2",
    category_id: "education",
    base_question_id: "edu_2",
    points: 3,
    official_text: {
      question: "Wie viele Jahre kann eine Lehre dauern?",
      options: [
        { id: "a", text: "8 Jahre." },
        { id: "b", text: "10 Jahre." },
        { id: "c", text: "2 bis 4 Jahre." }
      ],
      correct_option: "c"
    },
    learning_aids: {
      visual_anchor: "🛠️📅 2–4 Jahre",
      short_question: "{Wie viele Jahre} kann eine {Lehre} dauern?",
      keywords: { "Wie viele Jahre": "How many years", "Lehre": "Apprenticeship" },
      signal_words: ["Lehre", "2 bis 4 Jahre"],
      coach_tip_en: "An apprenticeship (Lehre) in Austria typically takes 2 to 4 years."
    }
  },
  {
    id: "edu_3",
    category_id: "education",
    base_question_id: "edu_3",
    points: 2,
    official_text: {
      question: "Eine Person möchte Frisör oder Frisörin werden. Sie muss eine Lehre machen und in eine Berufsschule gehen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "💇‍♀️🛠️ + 🏫",
      short_question: "Ein Frisör muss eine {Lehre} machen UND in die {Berufsschule} gehen.",
      keywords: { "Lehre": "Apprenticeship", "Berufsschule": "Vocational school" },
      signal_words: ["Lehre", "Berufsschule"],
      coach_tip_en: "Austria uses a dual system: practical training at work (Lehre) + theory at vocational school (Berufsschule)."
    }
  },
  {
    id: "edu_3_1",
    category_id: "education",
    base_question_id: "edu_3",
    points: 2,
    official_text: {
      question: "Eine Person möchte Bäcker oder Bäckerin werden. Sie muss eine Lehre machen und in eine Berufsschule gehen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🥖🛠️ + 🏫",
      short_question: "Ein Bäcker muss eine {Lehre} machen UND in die {Berufsschule} gehen.",
      keywords: { "Lehre": "Apprenticeship", "Berufsschule": "Vocational school" },
      signal_words: ["Lehre", "Berufsschule"],
      coach_tip_en: "Same rule for bakers! Apprenticeship + vocational school (Berufsschule) are both required."
    }
  },
  {
    id: "edu_3_2",
    category_id: "education",
    base_question_id: "edu_3",
    points: 2,
    official_text: {
      question: "Eine Person möchte von Beruf Mechaniker oder Mechanikerin werden. Die Person kann den Beruf in der Werkstatt lernen und muss keine Berufsschule besuchen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "b"
    },
    learning_aids: {
      visual_anchor: "🔧⚠️ KEINE Berufsschule?",
      short_question: "Ein Mechaniker muss {KEINE Berufsschule} besuchen.",
      keywords: { "KEINE Berufsschule": "NO vocational school (watch out!)" },
      signal_words: ["KEINE", "Berufsschule"],
      coach_tip_en: "Watch out for 'keine'! Every apprentice in Austria MUST attend Berufsschule."
    }
  },
  {
    id: "edu_3_3",
    category_id: "education",
    base_question_id: "edu_3",
    points: 2,
    official_text: {
      question: "Eine Person möchte Optiker oder Optikerin werden. Sie muss eine Lehre machen und in eine Berufsschule gehen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "👓🛠️ + 🏫",
      short_question: "Ein Optiker muss eine {Lehre} machen UND in die {Berufsschule} gehen.",
      keywords: { "Lehre": "Apprenticeship", "Berufsschule": "Vocational school" },
      signal_words: ["Lehre", "Berufsschule"],
      coach_tip_en: "Yes! Opticians also do a Lehre combined with Berufsschule."
    }
  },
  {
    id: "edu_3_4",
    category_id: "education",
    base_question_id: "edu_3",
    points: 2,
    official_text: {
      question: "Eine Person möchte von Beruf Koch oder Köchin werden. Die Person kann den Beruf in einem Restaurant lernen und braucht dafür keine Berufsschule.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "b"
    },
    learning_aids: {
      visual_anchor: "👨‍🍳⚠️ KEINE Berufsschule?",
      short_question: "Ein Koch braucht {KEINE Berufsschule}.",
      keywords: { "KEINE Berufsschule": "NO vocational school" },
      signal_words: ["KEINE", "Berufsschule"],
      coach_tip_en: "False! Even chefs (Koch/Köchin) must attend Berufsschule during their apprenticeship."
    }
  },
  {
    id: "edu_4",
    category_id: "education",
    base_question_id: "edu_4",
    points: 3,
    official_text: {
      question: "Kinder im Alter von 6 bis 9 oder 10 Jahren besuchen in Österreich …",
      options: [
        { id: "a", text: "die Volksschule." },
        { id: "b", text: "die Neue Mittelschule." },
        { id: "c", text: "den Kindergarten." }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🎒👧👦 6–10 Jahre",
      short_question: "Kinder von {6 bis 10 Jahren} besuchen die …",
      keywords: { "6 bis 10 Jahren": "6 to 10 years old (elementary age)" },
      signal_words: ["6 bis 9 oder 10", "Volksschule"],
      coach_tip_en: "Volksschule = Elementary school (grades 1–4, ages 6 to 10)."
    }
  },
  {
    id: "edu_5",
    category_id: "education",
    base_question_id: "edu_5",
    points: 2,
    official_text: {
      question: "Nach der Volksschule können Kinder in die Unterstufe einer Allgemeinbildenden Höheren Schule (AHS) oder in die Neue Mittelschule (NMS) gehen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🏫 ➔ AHS / NMS",
      short_question: "Nach der Volksschule gehen Kinder in die {AHS} oder {Neue Mittelschule (NMS)}.",
      keywords: { "AHS": "Academic high school (Gymnasium)", "Neue Mittelschule (NMS)": "Middle school" },
      signal_words: ["Nach der Volksschule", "AHS", "Neue Mittelschule"],
      coach_tip_en: "After age 10, kids move on to either AHS (Gymnasium) or Mittelschule (NMS)."
    }
  },
  {
    id: "edu_6",
    category_id: "education",
    base_question_id: "edu_6",
    points: 2,
    official_text: {
      question: "Erwachsene haben keine Möglichkeit, einen Kurs zu besuchen und etwas Neues zu lernen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "b"
    },
    learning_aids: {
      visual_anchor: "👩‍🎓👨‍🎓❌ KEINE Kurse?",
      short_question: "{Erwachsene} haben {KEINE Möglichkeit}, einen Kurs zu besuchen.",
      keywords: { "Erwachsene": "Adults", "KEINE Möglichkeit": "NO opportunity" },
      signal_words: ["Erwachsene", "KEINE Möglichkeit"],
      coach_tip_en: "False! Adult education (Erwachsenenbildung) is huge in Austria (VHS, WIFI, BFI)."
    }
  },
  {
    id: "edu_7",
    category_id: "education",
    base_question_id: "edu_7",
    points: 2,
    official_text: {
      question: "Ich möchte als erwachsene Person eine neue Sprache lernen. Es gibt Sprachkurse für Erwachsene.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🗣️📚 Erwachsene",
      short_question: "Es gibt {Sprachkurse} für {Erwachsene}.",
      keywords: { "Sprachkurse": "Language courses", "Erwachsene": "Adults" },
      signal_words: ["Sprachkurse", "Erwachsene"],
      coach_tip_en: "Yes! Language courses for adults are widely available across Austria."
    }
  },
  {
    id: "edu_8",
    category_id: "education",
    base_question_id: "edu_8",
    points: 2,
    official_text: {
      question: "Mit einem Schulabschluss hat man bessere Chancen am Arbeitsmarkt.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🎓 ➔ 💼📈",
      short_question: "Mit einem {Schulabschluss} hat man {bessere Chancen} am Arbeitsmarkt.",
      keywords: { "Schulabschluss": "School diploma / graduation", "bessere Chancen": "better opportunities" },
      signal_words: ["Schulabschluss", "bessere Chancen"],
      coach_tip_en: "A school degree opens doors on the job market (Arbeitsmarkt)."
    }
  },
  {
    id: "edu_9",
    category_id: "education",
    base_question_id: "edu_9",
    points: 2,
    official_text: {
      question: "Wenn eine erwachsene Person einen neuen Beruf lernen will, kann sie sich selbst Informationen über die Ausbildung holen.",
      options: [
        { id: "a", text: "richtig" },
        { id: "b", text: "falsch" }
      ],
      correct_option: "a"
    },
    learning_aids: {
      visual_anchor: "🔍💼 Ausbildung",
      short_question: "Man kann sich {selbst Informationen} über eine {Ausbildung} holen.",
keywords: { "selbst Informationen": "information on your own", "Ausbildung": "Training / education" },
signal_words: ["selbst Informationen", "Ausbildung"],
coach_tip_en: "Yes! Adults can independently research and sign up for career training."
}
},
{
id: "edu_10",
category_id: "education",
base_question_id: "edu_10",
points: 2,
official_text: {
question: "Wenn ich in Österreich eine Arbeit finden will, kann mir eine gute Ausbildung helfen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🎓✅ ➔ 💼",
short_question: "Eine {gute Ausbildung} kann helfen, {Arbeit} zu finden.",
keywords: { "gute Ausbildung": "good education / training", "Arbeit": "Work / job" },
signal_words: ["gute Ausbildung", "Arbeit finden"],
coach_tip_en: "Solid education and qualifications make finding a job much easier."
}
},
{
id: "edu_11",
category_id: "education",
base_question_id: "edu_11",
points: 3,
official_text: {
question: "Was hilft mir, wenn ich eine Arbeit suche?",
options: [
{ id: "a", text: "Eine gute Ausbildung." },
{ id: "b", text: "Meine e-card." },
{ id: "c", text: "Ein teures Handy." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🔍💼 ➔ 🎓",
short_question: "{Was hilft}, wenn ich eine {Arbeit suche}?",
keywords: { "Was hilft": "What helps", "Arbeit suche": "look for a job" },
signal_words: ["Arbeit suche", "gute Ausbildung"],
coach_tip_en: "Your e-card is for the doctor, not job hunting! Good training (Ausbildung) helps."
}
},
{
id: "edu_12",
category_id: "education",
base_question_id: "edu_12",
points: 2,
official_text: {
question: "In Österreich lernen Buben und Mädchen gemeinsam in einer Klasse.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👦👧🏫 Gemeinsam",
short_question: "{Buben} und {Mädchen} lernen {gemeinsam} in einer Klasse.",
keywords: { "Buben": "Boys (Austrian word!)", "Mädchen": "Girls", "gemeinsam": "together" },
signal_words: ["Buben", "Mädchen", "gemeinsam"],
coach_tip_en: "Note the Austrian word 'Buben' = boys! Boys and girls study together in the same class."
}
},
{
id: "edu_13",
category_id: "education",
base_question_id: "edu_13",
points: 2,
official_text: {
question: "Nur Buben können in Österreich einen technischen Beruf lernen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "⚠️ NUR Buben? 🔧",
short_question: "{NUR Buben} können einen {technischen Beruf} lernen.",
keywords: { "NUR Buben": "ONLY boys", "technischen Beruf": "technical profession" },
signal_words: ["NUR Buben", "technischen Beruf"],
coach_tip_en: "False! Equal rights apply—both girls and boys can learn any technical trade."
}
},
{
id: "edu_14",
category_id: "education",
base_question_id: "edu_14",
points: 2,
official_text: {
question: "Mädchen können in Österreich auch Mechanikerin werden.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👧🔧✅ Mechanikerin",
short_question: "{Mädchen} können auch {Mechanikerin} werden.",
keywords: { "Mädchen": "Girls", "Mechanikerin": "Female mechanic" },
signal_words: ["Mädchen", "Mechanikerin"],
coach_tip_en: "Yes! Girls have full access to technical careers like becoming a mechanic."
}
},
{
id: "edu_15",
category_id: "education",
base_question_id: "edu_15",
points: 3,
official_text: {
question: "Wer unterrichtet Kinder in der Schule?",
options: [
{ id: "a", text: "Nur Lehrer." },
{ id: "b", text: "Nur Lehrerinnen." },
{ id: "c", text: "Lehrerinnen und Lehrer." }
],
correct_option: "c"
},
learning_aids: {
visual_anchor: "👩‍🏫 + 👨‍🏫 🏫",
short_question: "{Wer unterrichtet} Kinder in der Schule?",
keywords: { "Wer unterrichtet": "Who teaches" },
signal_words: ["unterrichtet", "Lehrerinnen und Lehrer"],
coach_tip_en: "Both women (Lehrerinnen) and men (Lehrer) teach in Austrian schools."
}
},
{
id: "edu_15_1",
category_id: "education",
base_question_id: "edu_15",
points: 3,
official_text: {
question: "In der Schule gibt es …",
options: [
{ id: "a", text: "immer einen Direktor." },
{ id: "b", text: "immer eine Direktorin." },
{ id: "c", text: "eine Direktorin oder einen Direktor." }
],
correct_option: "c"
},
learning_aids: {
visual_anchor: "👩‍💼 / 👨‍💼 🏫",
short_question: "In der Schule gibt es … ({Direktor / Direktorin})",
keywords: { "Direktor / Direktorin": "School principal (male or female)" },
signal_words: ["Direktorin oder einen Direktor"],
coach_tip_en: "A school principal can be either a woman (Direktorin) or a man (Direktor)."
}
},
{
id: "edu_16",
category_id: "education",
base_question_id: "edu_16",
points: 2,
official_text: {
question: "In der Schule gelten die gleichen Regeln für Buben und Mädchen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👦⚖️👧 Gleiche Regeln",
short_question: "In der Schule gelten die {gleichen Regeln} für Buben und Mädchen.",
keywords: { "gleichen Regeln": "same rules" },
signal_words: ["gleichen Regeln", "Buben und Mädchen"],
coach_tip_en: "Equal rules and equal expectations apply to both boys and girls."
}
},
{
id: "edu_17",
category_id: "education",
base_question_id: "edu_17",
points: 2,
official_text: {
question: "In Österreich ist es wichtig, dass Mädchen und Buben eine gute Schulbildung bekommen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👧👦🎓✅",
short_question: "Es ist wichtig, dass {Mädchen und Buben} eine {gute Schulbildung} bekommen.",
keywords: { "gute Schulbildung": "good school education" },
signal_words: ["Mädchen und Buben", "gute Schulbildung"],
coach_tip_en: "Education is equally important for both girls and boys."
}
},
{
id: "edu_18",
category_id: "education",
base_question_id: "edu_18",
points: 2,
official_text: {
question: "In Österreich ist eine gute Ausbildung für Buben sehr wichtig. Mädchen brauchen keine gute Ausbildung, weil sie später heiraten.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "👧❌ KEINE Ausbildung?",
short_question: "Mädchen brauchen {KEINE gute Ausbildung}, weil sie heiraten.",
keywords: { "KEINE gute Ausbildung": "NO good education" },
signal_words: ["Mädchen", "KEINE", "heiraten"],
coach_tip_en: "Completely false! Girls and boys have the exact same right and need for education."
}
},
{
id: "edu_19",
category_id: "education",
base_question_id: "edu_19",
points: 2,
official_text: {
question: "Im Kindergarten und in der Schule gibt es Elternabende. Dorthin gehen Eltern nur dann, wenn das Kind Probleme in der Schule oder im Kindergarten hat.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "👨‍👩‍👧🏫 Elternabend",
short_question: "Eltern gehen {NUR bei Problemen} zum {Elternabend}.",
keywords: { "NUR bei Problemen": "ONLY when there are problems", "Elternabend": "Parents' evening / PTA meeting" },
signal_words: ["Elternabende", "NUR dann"],
coach_tip_en: "False! Elternabende are general info evenings for ALL parents, not just when there's trouble."
}
},
{
id: "edu_20",
category_id: "education",
base_question_id: "edu_20",
points: 2,
official_text: {
question: "Wenn die Eltern nicht gut Deutsch sprechen, müssen sie nicht zum Elternabend gehen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🗣️⚠️ Elternabend",
short_question: "Wenn Eltern {nicht gut Deutsch} sprechen, müssen sie {nicht zum Elternabend}.",
keywords: { "nicht gut Deutsch": "not good German" },
signal_words: ["nicht gut Deutsch", "nicht zum Elternabend"],
coach_tip_en: "False! Parents are still expected to participate and stay informed."
}
},
{
id: "edu_21",
category_id: "education",
base_question_id: "edu_21",
points: 2,
official_text: {
question: "Wenn das Kind Probleme in der Schule hat, sollen seine Eltern einen Termin mit der Lehrerin oder dem Lehrer machen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "📅🤝👩‍🏫 Termin",
short_question: "Bei Problemen sollen Eltern einen {Termin} mit dem {Lehrer} machen.",
keywords: { "Termin": "Appointment", "Lehrer": "Teacher" },
signal_words: ["Probleme", "Termin", "Lehrer"],
coach_tip_en: "Yes! Making an appointment (Termin) with the teacher is the right way to solve issues."
}
},
{
id: "edu_22",
category_id: "education",
base_question_id: "edu_22",
points: 2,
official_text: {
question: "Eltern müssen sich informieren, was das Kind im Kindergarten braucht.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🧸🎒 Eltern-Pflicht",
short_question: "Eltern müssen sich {informieren}, was das Kind im {Kindergarten} braucht.",
keywords: { "informieren": "inform themselves" },
signal_words: ["Eltern müssen", "informieren", "Kindergarten"],
coach_tip_en: "Parents have a duty to stay informed about what their child needs."
}
},
{
id: "edu_22_1",
category_id: "education",
base_question_id: "edu_22",
points: 2,
official_text: {
question: "Eltern müssen sich informieren, was das Kind in der Schule braucht.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "📚✏️ Eltern-Pflicht",
short_question: "Eltern müssen sich {informieren}, was das Kind in der {Schule} braucht.",
keywords: { "informieren": "inform themselves" },
signal_words: ["Eltern müssen", "informieren", "Schule"],
coach_tip_en: "Same for school: parents must check what supplies or info the child needs."
}
},
{
id: "edu_23",
category_id: "education",
base_question_id: "edu_23",
points: 2,
official_text: {
question: "Eltern können eine Strafe bekommen, wenn das Kind nicht in die Schule geht.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🏫⚠️ ➔ 💸 Strafe",
short_question: "Eltern können eine {Strafe} bekommen, wenn das Kind {nicht in die Schule} geht.",
keywords: { "Strafe": "Fine / penalty" },
signal_words: ["Strafe", "nicht in die Schule"],
coach_tip_en: "School is mandatory (Schulpflicht)! Parents can be fined if kids skip school."
}
},
{
id: "edu_24",
category_id: "education",
base_question_id: "edu_24",
points: 2,
official_text: {
question: "Wenn es zuhause viel Arbeit gibt, dürfen Kinder zuhause bleiben und helfen. Sie müssen dann nicht in die Schule gehen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🏠🧹❌ ➔ 🏫!",
short_question: "Bei {viel Arbeit zuhause} dürfen Kinder {zuhause bleiben}.",
keywords: { "viel Arbeit zuhause": "lots of work at home", "zuhause bleiben": "stay home" },
signal_words: ["zuhause bleiben", "nicht in die Schule"],
coach_tip_en: "False! Housework is never an excuse to miss mandatory schooling."
}
},
// ==========================================
// STAGE 3: ARBEITSWELT UND WIRTSCHAFT
// ==========================================
{
id: "work_1",
category_id: "work",
base_question_id: "work_1",
points: 3,
official_text: {
question: "Wer bezahlt in Österreich die Arbeitslosenversicherung, Kindergärten und Krankenhäuser?",
options: [
{ id: "a", text: "Nur Ärzte und Ärztinnen." },
{ id: "b", text: "Menschen, die Steuern und Sozialversicherung zahlen." },
{ id: "c", text: "Nur Politiker und Politikerinnen." }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🏥🧸 ➔ 💶 Steuern",
short_question: "{Wer bezahlt} Kindergärten und Krankenhäuser?",
keywords: { "Wer bezahlt": "Who pays for" },
signal_words: ["Wer bezahlt", "Steuern und Sozialversicherung"],
coach_tip_en: "Solidarity principle: Everyone who works pays taxes and social insurance to fund public services."
}
},
{
id: "work_2",
category_id: "work",
base_question_id: "work_2",
points: 3,
official_text: {
question: "Obwohl einige Menschen keine Arbeit haben, bekommen sie Hilfe vom Staat Österreich. Wie ist das möglich?",
options: [
{ id: "a", text: "Viele Menschen arbeiten. Sie zahlen Steuern und Sozialversicherung und bezahlen damit dieses System." },
{ id: "b", text: "Die EU hat viel Geld und bezahlt für arme Menschen in Österreich." },
{ id: "c", text: "Österreich hat viel Gold und Öl." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👷‍♂️💶 ➔ 🤝 Staat",
short_question: "Wie ist {Hilfe für Arbeitslose} möglich?",
keywords: { "Hilfe für Arbeitslose": "Help for unemployed people" },
signal_words: ["keine Arbeit", "Steuern und Sozialversicherung"],
coach_tip_en: "Working people pay taxes & social insurance, which supports those without a job."
}
},
{
id: "work_3",
category_id: "work",
base_question_id: "work_3",
points: 3,
official_text: {
question: "Mit einer vollen Sozialversicherung haben Personen …",
options: [
{ id: "a", text: "die Kranken-, Unfall-, Arbeitslosen- und Pensionsversicherung." },
{ id: "b", text: "nur die Kranken- und Pensionsversicherung." },
{ id: "c", text: "nur die Krankenversicherung." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🛡️ 4 Versicherungen",
short_question: "Mit einer {vollen Sozialversicherung} hat man …",
keywords: { "vollen Sozialversicherung": "full social insurance" },
signal_words: ["vollen Sozialversicherung", "Kranken-, Unfall-, Arbeitslosen- und Pensionsversicherung"],
coach_tip_en: "Full insurance covers ALL 4 pillars: Health (Kranken), Accident (Unfall), Unemployment (Arbeitslosen), and Pension!"
}
},
{
id: "work_4",
category_id: "work",
base_question_id: "work_4",
points: 3,
official_text: {
question: "Ich habe keine Arbeit und will Arbeit suchen. Wo finde ich Hilfe?",
options: [
{ id: "a", text: "In der Schule." },
{ id: "b", text: "Im Krankenhaus." },
{ id: "c", text: "Beim AMS (Arbeitsmarktservice)." }
],
correct_option: "c"
},
learning_aids: {
visual_anchor: "🔍💼 ➔ AMS",
short_question: "Ich will {Arbeit suchen}. Wo finde ich Hilfe?",
keywords: { "Arbeit suchen": "look for work" },
signal_words: ["Arbeit suchen", "AMS"],
coach_tip_en: "AMS = Arbeitsmarktservice (Austria's public employment agency)."
}
},
{
id: "work_5",
category_id: "work",
base_question_id: "work_5",
points: 3,
official_text: {
question: "Wann gehen Personen zum AMS?",
options: [
{ id: "a", text: "Wenn sie eine neue Wohnung suchen." },
{ id: "b", text: "Wenn sie einen Arzt oder eine Ärztin brauchen." },
{ id: "c", text: "Wenn sie Arbeit suchen." }
],
correct_option: "c"
},
learning_aids: {
visual_anchor: "🏢 AMS = 💼",
short_question: "{Wann} gehen Personen zum {AMS}?",
keywords: { "Wann": "When", "AMS": "Employment service" },
signal_words: ["Wann", "AMS", "Arbeit suchen"],
coach_tip_en: "AMS is strictly for job seekers (Arbeit suchen)."
}
},
{
id: "work_6",
category_id: "work",
base_question_id: "work_6",
points: 3,
official_text: {
question: "Eine Person hat keine Arbeit und bekommt Geld vom Staat. Diese Hilfe vom Staat bekommt sie …",
options: [
{ id: "a", text: "nur, wenn sie mit dem AMS zusammenarbeitet." },
{ id: "b", text: "nur, wenn sie eine Familie hat." },
{ id: "c", text: "immer." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "💶🤝 AMS",
short_question: "Geld vom Staat bekommt man nur, wenn man mit dem {AMS zusammenarbeitet}.",
keywords: { "AMS zusammenarbeitet": "cooperates with the AMS" },
signal_words: ["Geld vom Staat", "AMS zusammenarbeitet"],
coach_tip_en: "You only get unemployment benefits if you actively cooperate with the AMS."
}
},
{
id: "work_7",
category_id: "work",
base_question_id: "work_7",
points: 3,
official_text: {
question: "Wann bekommt eine Person Arbeitslosengeld?",
options: [
{ id: "a", text: "Wenn sie vorher gearbeitet hat." },
{ id: "b", text: "Immer, wenn sie Arbeit sucht." },
{ id: "c", text: "Ab 18 Jahren." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👷‍♂️ ➔ 💶 Arbeitslosengeld",
short_question: "{Wann} bekommt man {Arbeitslosengeld}?",
keywords: { "Wann": "When", "Arbeitslosengeld": "Unemployment benefits" },
signal_words: ["Arbeitslosengeld", "vorher gearbeitet"],
coach_tip_en: "To receive Arbeitslosengeld, you must have worked and paid into the system beforehand."
}
},
{
id: "work_8",
category_id: "work",
base_question_id: "work_8",
points: 2,
official_text: {
question: "Eine Person hat keine Arbeit und bekommt Geld vom Staat. Das AMS sagt, dass diese Person in einen AMS-Kurs gehen muss. Muss sie den Kurs besuchen, um das Geld weiter zu bekommen?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🏫 AMS-Kurs = 💶✅",
short_question: "Muss man einen {AMS-Kurs besuchen}, um weiter Geld zu bekommen?",
keywords: { "AMS-Kurs besuchen": "attend an AMS course" },
signal_words: ["AMS-Kurs", "Geld weiter"],
coach_tip_en: "Yes! Attending assigned AMS training courses is mandatory to keep receiving benefits."
}
},
{
id: "work_9",
category_id: "work",
base_question_id: "work_9",
points: 3,
official_text: {
question: "Eine Person hat sich arbeitslos gemeldet und bekommt ein Beratungsgespräch beim AMS. Das AMS informiert sie über einen passenden Job. Was soll diese Person machen?",
options: [
{ id: "a", text: "Die Person bewirbt sich für diese Arbeit." },
{ id: "b", text: "Sie meldet sich nicht beim AMS. Sie möchte eine andere Arbeit haben." },
{ id: "c", text: "Die Person bekommt Geld vom Staat. Sie muss nicht arbeiten." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "📄💼 ➔ ✉️ Bewerben",
short_question: "Das AMS zeigt einen {passenden Job}. Was soll man machen?",
keywords: { "passenden Job": "suitable job" },
signal_words: ["passenden Job", "bewirbt sich"],
coach_tip_en: "Sich bewerben = apply for the job! You must apply when the AMS suggests a suitable job."
}
},
{
id: "work_10",
category_id: "work",
base_question_id: "work_10",
points: 3,
official_text: {
question: "Das Sozialsystem in Österreich funktioniert, weil die Menschen arbeiten und Steuern zahlen. Wenn man die Arbeit verliert, soll man …",
options: [
{ id: "a", text: "nichts machen. Andere zahlen Steuern." },
{ id: "b", text: "selbst und aktiv eine neue Arbeit suchen." },
{ id: "c", text: "vom Staat leben." }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🔍💪 Aktiv suchen",
short_question: "Wenn man die {Arbeit verliert}, soll man …",
keywords: { "Arbeit verliert": "loses a job" },
signal_words: ["Arbeit verliert", "selbst und aktiv"],
coach_tip_en: "Everyone is expected to actively look for a new job (selbst und aktiv suchen)."
}
},
{
id: "work_11",
category_id: "work",
base_question_id: "work_11",
points: 2,
official_text: {
question: "Das österreichische Sozialsystem funktioniert nur, wenn viele Menschen ohne Hilfe vom Staat leben.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👷‍♀️👷‍♂️ ➔ ⚖️ Sozialsystem",
short_question: "Das {Sozialsystem} funktioniert nur, wenn viele Menschen {ohne Hilfe} leben.",
keywords: { "Sozialsystem": "Social welfare system", "ohne Hilfe": "without state aid" },
signal_words: ["Sozialsystem", "ohne Hilfe"],
coach_tip_en: "True! Most people need to work and support themselves so the safety net stays funded."
}
},
{
id: "work_12",
category_id: "work",
base_question_id: "work_12",
points: 3,
official_text: {
question: "Wem hilft der Staat, wenn man arbeitslos ist?",
options: [
{ id: "a", text: "Personen, die Geld brauchen, aber nicht arbeiten wollen." },
{ id: "b", text: "Personen, die sich arbeitslos melden und wieder arbeiten wollen." },
{ id: "c", text: "Niemandem." }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🤝💼 Wieder arbeiten",
short_question: "{Wem hilft} der Staat bei Arbeitslosigkeit?",
keywords: { "Wem hilft": "Whom does ... help" },
signal_words: ["arbeitslos melden", "wieder arbeiten wollen"],
coach_tip_en: "The state helps people who register as unemployed and genuinely want to work again."
}
},
{
id: "work_13",
category_id: "work",
base_question_id: "work_13",
points: 2,
official_text: {
question: "Nur Männer können in der Arbeit wichtige Projekte organisieren.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "⚠️ NUR Männer? 💼",
short_question: "{NUR Männer} können wichtige Projekte organisieren.",
keywords: { "NUR Männer": "ONLY men" },
signal_words: ["NUR Männer"],
coach_tip_en: "False! Women and men have equal leadership roles at work."
}
},
{
id: "work_13_1",
category_id: "work",
base_question_id: "work_13",
points: 2,
official_text: {
question: "Frauen und Männer können in der Arbeit Projekte und Sitzungen leiten.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "👩‍💼👨‍💼✅ Projekte leiten",
short_question: "{Frauen und Männer} können Projekte und Sitzungen leiten.",
keywords: { "Frauen und Männer": "Women and men" },
signal_words: ["Frauen und Männer", "leiten"],
coach_tip_en: "Yes! Both women and men can lead projects and meetings."
}
},
{
id: "work_14",
category_id: "work",
base_question_id: "work_14",
points: 2,
official_text: {
question: "Schwangere Frauen haben in der Arbeit spezielle Rechte.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🤰🛡️ Spezielle Rechte",
short_question: "{Schwangere Frauen} haben in der Arbeit {spezielle Rechte}.",
keywords: { "Schwangere Frauen": "Pregnant women", "spezielle Rechte": "special rights" },
signal_words: ["Schwangere Frauen", "spezielle Rechte"],
coach_tip_en: "Mutterschutz! Pregnant women enjoy strong legal protection at work in Austria."
}
},
{
id: "work_15",
category_id: "work",
base_question_id: "work_15",
points: 2,
official_text: {
question: "Frauen müssen in der Arbeit nicht mit Männern zusammenarbeiten.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "👩‍💼🤝👨‍💼 Arbeit",
short_question: "Frauen müssen {nicht mit Männern} zusammenarbeiten.",
keywords: { "nicht mit Männern": "not with men" },
signal_words: ["nicht", "zusammenarbeiten"],
coach_tip_en: "False! Workplaces in Austria are mixed, and colleagues work together regardless of gender."
}
},
{
id: "work_16",
category_id: "work",
base_question_id: "work_16",
points: 2,
official_text: {
question: "Ein Mann und eine Frau haben dieselbe Ausbildung und machen die gleiche Arbeit. Ist es fair, wenn der Mann mehr Gehalt bekommt als die Frau?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "👩‍💼💶 = 👨‍💼💶",
short_question: "Ist es {fair}, wenn der Mann {mehr Gehalt} für gleiche Arbeit bekommt?",
keywords: { "fair": "fair", "mehr Gehalt": "more salary" },
signal_words: ["fair", "mehr Gehalt"],
coach_tip_en: "Equal pay for equal work! Paying a man more for the exact same job is unfair."
}
},
{
id: "work_17",
category_id: "work",
base_question_id: "work_17",
points: 2,
official_text: {
question: "Eine Frau und ein Mann haben für einen Beruf die gleiche Qualifikation. Die Frau bekommt die Arbeit nicht, weil sie eine Frau ist. Ist das erlaubt?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🚫 Gender-Diskriminierung",
short_question: "Eine Frau bekommt die Arbeit nicht, {weil sie eine Frau ist}. Ist das {erlaubt}?",
keywords: { "weil sie eine Frau ist": "because she is a woman", "erlaubt": "allowed" },
signal_words: ["weil sie eine Frau ist", "erlaubt"],
coach_tip_en: "No! Gender discrimination in hiring is strictly illegal in Austria."
}
},
{
id: "work_18",
category_id: "work",
base_question_id: "work_18",
points: 2,
official_text: {
question: "Mein Kollege ist homosexuell. Er verliert deshalb seinen Job. Ist das erlaubt?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🏳️‍🌈🛡️ Job-Schutz",
short_question: "Ein Kollege ist {homosexuell} und {verliert seinen Job}. Ist das {erlaubt}?",
keywords: { "homosexuell": "gay / homosexual", "verliert seinen Job": "loses his job", "erlaubt": "allowed" },
signal_words: ["homosexuell", "verliert", "erlaubt"],
coach_tip_en: "No! Firing someone because of sexual orientation is illegal discrimination."
}
},
{
id: "work_18_1",
category_id: "work",
base_question_id: "work_18",
points: 2,
official_text: {
question: "Meine Kollegin ist homosexuell. Sie verliert deshalb ihren Job. Ist das erlaubt?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🏳️‍🌈🛡️ Job-Schutz",
short_question: "Eine Kollegin ist {homosexuell} und {verliert ihren Job}. Ist das {erlaubt}?",
keywords: { "homosexuell": "gay / lesbian", "verliert ihren Job": "loses her job", "erlaubt": "allowed" },
signal_words: ["homosexuell", "verliert", "erlaubt"],
coach_tip_en: "No! Same protection applies to women and men."
}
},
{
id: "work_19",
category_id: "work",
base_question_id: "work_19",
points: 2,
official_text: {
question: "Eine Frau verliert ihre Arbeit, weil sie schwanger ist. Ist das erlaubt?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🤰🛡️ Kündigungsschutz",
short_question: "Eine Frau verliert ihre Arbeit, {weil sie schwanger ist}. Ist das {erlaubt}?",
keywords: { "weil sie schwanger ist": "because she is pregnant", "erlaubt": "allowed" },
signal_words: ["schwanger", "erlaubt"],
coach_tip_en: "No! Pregnant employees are protected against dismissal (Kündigungsschutz)."
}
},
{
id: "work_20",
category_id: "work",
base_question_id: "work_20",
points: 3,
official_text: {
question: "Eine Person arbeitet 40 Stunden pro Woche in einer Firma. Sie bekommt von der Firma jeden Monat das Nettogehalt oder den Nettolohn auf ihr Konto. Muss sie von diesem Gehalt auch noch Steuern und die Sozialversicherung bezahlen?",
options: [
{ id: "a", text: "Nein, die Firma hat die Steuern und die Sozialversicherung schon bezahlt." },
{ id: "b", text: "Ja, die Firma hat die Steuern und die Sozialversicherung noch nicht bezahlt." },
{ id: "c", text: "Ja, Firmen zahlen nie Steuern und die Sozialversicherung von Mitarbeitern und Mitarbeiterinnen." }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🏦💶 Netto = Alles bezahlt",
short_question: "Man bekommt das {Nettogehalt}. Muss man davon {noch Steuern} bezahlen?",
keywords: { "Nettogehalt": "Net salary (after taxes)", "noch Steuern": "taxes again" },
signal_words: ["Nettogehalt", "noch Steuern", "Nein"],
coach_tip_en: "Netto = No more taxes! Your employer already deducted taxes and insurance before paying you."
}
},
{
id: "work_20_1",
category_id: "work",
base_question_id: "work_20",
points: 3,
official_text: {
question: "Eine Person arbeitet und bekommt Nettogehalt/Nettolohn. Was bedeutet das?",
options: [
{ id: "a", text: "Sie muss vom Nettogehalt/Nettolohn noch Steuern und die Sozialversicherung bezahlen." },
{ id: "b", text: "Sie muss vom Nettogehalt/Nettolohn nur noch die Sozialversicherung bezahlen." },
{ id: "c", text: "Die Firma hat die Steuern, Abgaben und die Sozialversicherung schon bezahlt." }
],
correct_option: "c"
},
learning_aids: {
visual_anchor: "💶✅ Netto-Bedeutung",
short_question: "Was bedeutet {Nettogehalt / Nettolohn}?",
keywords: { "Nettogehalt / Nettolohn": "Net salary / net wage" },
signal_words: ["Nettogehalt", "schon bezahlt"],
coach_tip_en: "Brutto = Gross (before tax). Netto = Net (company already paid taxes & social security)."
}
},
{
id: "work_21",
category_id: "work",
base_question_id: "work_21",
points: 2,
official_text: {
question: "Eine Person will in Österreich eine eigene Firma/ein eigenes Geschäft haben. Ist das möglich?",
options: [
{ id: "a", text: "ja" },
{ id: "b", text: "nein" }
],
correct_option: "a"
},
learning_aids: {
visual_anchor: "🏪🚀 Eigene Firma",
short_question: "Darf man in Österreich eine {eigene Firma} haben?",
keywords: { "eigene Firma": "own company / business" },
signal_words: ["eigene Firma", "möglich"],
coach_tip_en: "Yes! Entrepreneurship is open to everyone—you can start your own business in Austria."
}
},
{
id: "work_22",
category_id: "work",
base_question_id: "work_22",
points: 2,
official_text: {
question: "Eine Person arbeitet in einer Firma und bekommt dafür das Nettogehalt/den Nettolohn auf das Konto. Von diesem Geld muss sie auch noch Steuern bezahlen.",
options: [
{ id: "a", text: "richtig" },
{ id: "b", text: "falsch" }
],
correct_option: "b"
},
learning_aids: {
visual_anchor: "🏦❌ Noch Steuern vom Netto?",
short_question: "Vom {Nettogehalt} muss man {auch noch Steuern} bezahlen.",
keywords: { "Nettogehalt": "Net salary", "auch noch Steuern": "also pay taxes" },
signal_words: ["Nettogehalt", "noch Steuern"],
coach_tip_en: "False! Netto is yours to keep—taxes were already paid by your company."
}
}
  ]