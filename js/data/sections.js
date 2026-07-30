/**
 * Modular content data for Doa Melawan Sihir.
 *
 * To add new items: push to the `items` array of the target section.
 * Supported content block types: verse, zikir, instruction, text, steps, list, subsection
 *
 * @see context.md for full documentation
 */

/* ── Shared Arabic & Malay texts (reused across sections) ──── */
const SHARED = {
  arabic: {
    ikhlas:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    falaq:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    nas:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    fatihah:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿١﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٢﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٣﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٤﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٥﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٦﴾",
    ayatKursi:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    selawat:
      "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
    hamdSelawat:
      "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
    selawatPenutup:
      "وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ"
  },
  malay: {
    ikhlas:
      "Katakanlah (wahai Muhammad): 'Dia-lah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tidak beranak dan tidak diperanakkan. Dan tidak ada sesiapapun yang setara dengan Dia.'",
    falaq:
      "Katakanlah (wahai Muhammad): 'Aku berlindung kepada Tuhan yang menciptakan sekalian makhluk, dari kejahatan (makhluk yang dilaknat) apabila ia masuk gelap, dan dari kejahatan orang-orang yang menghembus pada buih-buahan, dan dari kejahatan orang yang dengki apabila ia dengki.'",
    nas:
      "Katakanlah (wahai Muhammad): 'Aku berlindung kepada Tuhan (yang memelihara dan menguasai) sekalian manusia. Raja sekalian manusia. Tuhan (yang berhak disembah) sekalian manusia. Dari kejahatan (syaitan) yang bersifat khannas, yang melemparkan bisikan dan pengaruh jahatnya ke dalam dada manusia, (sama ada pengaruh jahat itu datangnya) dari (golongan) jin dan (golongan) manusia.'",
    fatihah:
      "Dengan nama Allah, Yang Maha Pemurah, lagi Maha Mengasihani. Segala puji bagi Allah, Tuhan yang memelihara dan mentadbirkan sekalian alam. Yang Maha Pemurah, lagi Maha Mengasihani. Yang Menguasai hari Pembalasan. Engkaulah sahaja (Ya Allah) Yang Kami sembah, dan kepada Engkaulah sahaja kami minta pertolongan. Tunjukilah kami jalan yang lurus. Iaitu jalan orang-orang yang Engkau telah kurniakan nikmat kepada mereka, bukan (jalan) orang-orang yang telah dimurkai, dan bukan pula (jalan) orang-orang yang sesat.",
    ayatKursi:
      "Allah, tiada Tuhan (yang berhak disembah) melainkan Dia, Yang hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah melainkan dengan izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Dia Maha Tinggi lagi Maha Besar.",
    zalzalah:
      "Apabila bumi digoncangkan dengan goncangan yang teruk, dan bumi mengeluarkan beban-beban berat (yang dikandung) nya, dan manusia bertanya (secara hairan, dengan mengatakan): 'Apa yang sudah terjadi kepada bumi?' — Pada hari itu, bumi menceritakan beritanya, kerana Tuhanmu telah memberi perintah kepadanya. Pada hari itu, manusia akan keluar bermacam-macam (berkelompok-kelompok), untuk diperlihatkan kepada mereka (balasan) amal-amal mereka. Maka sesiapa yang mengerjakan kebaikan seberat zarah, nescaya dia akan melihatnya. Dan sesiapa yang mengerjakan kejahatan seberat zarah, nescaya dia akan melihatnya.",
    bismillah: "Dengan nama Allah yang Maha Pemurah lagi Maha Mengasihani",
    selawat: "Ya Allah, berilah selawat ke atas junjungan kami Nabi Muhammad dan keluarga baginda.",
    hamdSelawat:
      "Segala puji bagi Allah, Tuhan sekalian alam, selawat dan salam ke atas junjungan besar Nabi Muhammad SAW serta keluarga dan sekalian sahabatnya."
  }
};

function malayTranslation(text) {
  return [{ lang: "malay", source: "Abdullah Muhammad Basmeih", text: text }];
}

function tigaQulBlocks(repeatNote) {
  return [
    {
      type: "subsection",
      title: "Surah Al-Ikhlas" + (repeatNote ? " (" + repeatNote + ")" : "")
    },
    {
      type: "verse",
      arabic: SHARED.arabic.ikhlas,
      reference: "Surah Al-Ikhlas: 1–4",
      translations: malayTranslation(SHARED.malay.ikhlas)
    },
    {
      type: "subsection",
      title: "Surah Al-Falaq" + (repeatNote ? " (" + repeatNote + ")" : "")
    },
    {
      type: "verse",
      arabic: SHARED.arabic.falaq,
      reference: "Surah Al-Falaq: 1–5",
      translations: malayTranslation(SHARED.malay.falaq)
    },
    {
      type: "subsection",
      title: "Surah An-Nas" + (repeatNote ? " (" + repeatNote + ")" : "")
    },
    {
      type: "verse",
      arabic: SHARED.arabic.nas,
      reference: "Surah An-Nas: 1–6",
      translations: malayTranslation(SHARED.malay.nas)
    }
  ];
}

const APP_SECTIONS = [
  /* ── SECTION 1 ───────────────────────────────────────────── */
  {
    id: "zikir-amalan",
    number: 1,
    title: "Zikir dan Amalan Melawan Sihir",
    items: [
      {
        id: "rujukan",
        title: "Rujukan",
        content: [
          {
            type: "text",
            text: "Rujukan: Ustaz Ahmad Dusuki"
          }
        ]
      },
      {
        id: "berwuduk",
        title: "Sentiasa Berwuduk",
        content: [
          {
            type: "instruction",
            text: "Sentiasa berwuduk sebagai amalan asas melawan sihir."
          }
        ]
      },
      {
        id: "tiga-qul",
        title: "3 Qul",
        defaultOpen: true,
        content: [
          {
            type: "instruction",
            text: "Sentiasa amalkan 3 Qul dalam amalan dan kehidupan seharian."
          }
        ].concat(tigaQulBlocks("Ulang 3 kali"))
      },
      {
        id: "yunus-81-82",
        title: "Surat Yunus Ayat 81 & 82",
        content: [
          {
            type: "verseGroup",
            verses: [
              {
                arabic:
                  "فَلَمَّا أَلْقَوْا قَالَ مُوسَىٰ مَا جِئْتُم بِهِ السِّحْرُ ۖ إِنَّ اللَّهَ سَيُبْطِلُهُ ۖ إِنَّ اللَّهَ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِينَ",
                reference: "Surah Yūnus: 81"
              },
              {
                arabic:
                  "وَيُحِقُّ اللَّهُ الْحَقَّ بِكَلِمَاتِهِ وَلَوْ كَرِهَ الْمُجْرِمُونَ",
                reference: "Surah Yūnus: 82"
              }
            ],
            translations: [
              {
                source: "Abdullah Muhammad Basmeih",
                reference: "Surah Yūnus: 81",
                text: "Setelah mereka campakkan (benda-benda itu), Nabi Musa berkata: \"Apa yang kamu datangkan itu, itulah sihir; sesungguhnya Allah akan mendedahkan kepalsuannya (dengan mukjizat yang dikurniakanNya kepadaku); sesungguhnya Allah tidak akan menjayakan perbuatan orang-orang yang melakukan kerosakan.\""
              },
              {
                source: "Abdullah Muhammad Basmeih",
                reference: "Surah Yūnus: 82",
                text: "Dan Allah juga sentiasa menetapkan perkara yang benar dengan kalimah-kalimah perintahNya, walaupun yang demikian dibenci oleh orang-orang yang melakukan dosa."
              }
            ]
          }
        ]
      },
      {
        id: "surah-zalzalah",
        title: "Surah Al-Zalzalah",
        content: [
          {
            type: "verse",
            arabic:
              "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا ﴿١﴾ وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا ﴿٢﴾ وَقَالَ الْإِنسَانُ مَا لَهَا ﴿٣﴾ يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا ﴿٤﴾ بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا ﴿٥﴾ يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ ﴿٦﴾ فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ﴿٧﴾ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ ﴿٨﴾",
            reference: "Surah Az-Zalzalah: 1–8",
            translations: malayTranslation(SHARED.malay.zalzalah)
          }
        ]
      },
      {
        id: "zikir-la-ilaha",
        title: "Zikir: Lā ilāha illallāh",
        content: [
          {
            type: "instruction",
            text: "Baca <em>100×</em> waktu pagi dan <em>100×</em> waktu petang."
          },
          {
            type: "zikir",
            arabic:
              "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            malay:
              "Tiada Tuhan melainkan Allah Yang Esa tiada sekutu bagi-Nya, bagi-Nya kerajaan dan pujian, dan Dia berkuasa atas segalanya."
          }
        ]
      },
      {
        id: "mandian",
        title: "Mandian",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Mandi air perahan limau nipis (3 biji) setiap petang sebelum Maghrib.",
              "Atau mandi air daun bidara setiap petang sebelum Maghrib. Daun pokok bidara diambil dan diramas-ramas sekadarnya di dalam air."
            ]
          }
        ]
      },
      {
        id: "tiga-qul-tidur",
        title: "Bacaan 3 Qul Sebelum Tidur",
        content: [
          {
            type: "instruction",
            text: "Baca 3 Qul sebanyak <em>3 kali</em> sebelum tidur dengan menadah tangan. Hembus pada kedua tapak tangan dan sapu pada muka, kepala dan seluruh badan."
          }
        ]
      }
    ]
  },

  /* ── SECTION 2 ───────────────────────────────────────────── */
  {
    id: "amalan-pendinding",
    number: 2,
    title: "Amalan Pendinding",
    items: [
      {
        id: "pagar-diri",
        title: "Pagar Diri",
        defaultOpen: true,
        content: [
          {
            type: "instruction",
            text: "Pagar diri ini hendaklah dibaca seelok-eloknya dalam keadaan masih duduk selepas solat Maghrib dan selepas solat Subuh."
          },
          {
            type: "text",
            text: "A'ūdhu billāhi minash-shayṭānir-rajīm..."
          },
          {
            type: "subsection",
            title: "1. Al-Fatihah"
          },
          {
            type: "verse",
            arabic: SHARED.arabic.fatihah,
            reference: "Surah Al-Fatihah: 1–7",
            translations: malayTranslation(SHARED.malay.fatihah)
          },
          {
            type: "subsection",
            title: "2. Ayat Kursi — 7× (Wakaf 9)"
          },
          {
            type: "steps",
            title: "Cara baca & hembus (7 kali)",
            steps: [
              "Habis baca pandang depan dan hembus.",
              "Habis baca pandang belakang dan hembus.",
              "Habis baca pandang kanan dan hembus.",
              "Habis baca pandang kiri dan hembus.",
              "Habis baca pandang atas dan hembus.",
              "Habis baca pandang bawah dan hembus.",
              "Habis baca pandang kanan dan hembus sekeliling kawasan diri."
            ]
          },
          {
            type: "instruction",
            text: "Semasa baca sampai <em>\"walā ya'ūduhu ḥifẓuhumā\"</em> ulang ayat itu 7× kalau boleh satu nafas. Lepas 7× habiskan Ayat Kursi."
          },
          {
            type: "verse",
            arabic: SHARED.arabic.ayatKursi,
            reference: "Surah Al-Baqarah: 255 (Ayat Kursi)"
          },
          {
            type: "subsection",
            title: "Doa Pelindung"
          },
          {
            type: "instruction",
            text: "Baca doa ini."
          },
          {
            type: "zikir",
            arabic: SHARED.arabic.bismillah,
            malay: SHARED.malay.bismillah
          },
          {
            type: "zikir",
            arabic: SHARED.arabic.hamdSelawat,
            malay: SHARED.malay.hamdSelawat
          },
          {
            type: "instruction",
            text: "\"Ya Allah Ya Tuhan Kami,\" dengan keberkatan Ayat Kursi yang ku baca ini, jadikanlah ia sebagai benteng dan pagar perlindungan untuk memelihara jasadku, rohku, keluargaku, dan harta bendaku daripada sebarang bala, musibah, dan bencana. Lindungilah kami dari sebarang kejahatan hingga ke akhir hayat kami dan selamatkanlah kami hingga ke hari akhirat. Sesungguhnya kepada Engkau kami berlindung dan kepada Engkau kami mohon pertolongan. Amin, Amin, Ya Rabbal 'Alamin."
          },
          {
            type: "zikir",
            arabic: SHARED.arabic.selawatPenutup,
            malay: SHARED.malay.hamdSelawat
          },
          {
            type: "text",
            text: "Amin ya-rabbal alamin."
          },
          {
            type: "subsection",
            title: "Baca Surah 3 Qul"
          },
          {
            type: "text",
            text: "Baca Surah Al-Ikhlas, Al-Falaq, dan An-Nas (rujuk bahagian 1 — 3 Qul di atas)."
          }
        ]
      }
    ]
  },

  /* ── SECTION 3 ───────────────────────────────────────────── */
  {
    id: "air-penawar",
    number: 3,
    title: "Air Penawar Membatalkan Sihir",
    items: [
      {
        id: "kaedah-penawar",
        title: "Kaedah & Persediaan",
        defaultOpen: true,
        content: [
          {
            type: "steps",
            title: "Langkah persediaan",
            steps: [
              "Sediakan Air: Letakkan air bersih (seperti air mineral atau air mutlak dalam bekas atau botol) berdekatan dengan mulut anda.",
              "Keadaan Diri: Seelok-eloknya berada dalam keadaan berwuduk, menutup aurat, dan mengadap kiblat.",
              "Bacaan Surah dan Doa: Baca ayat-ayat suci Al-Quran berikut dengan penuh yakin kepada Allah SWT.",
              "Hembusan: Selepas selesai membaca, hembuskan perlahan-lahan pada air tersebut dengan sedikit air liur yang lembut (tiupan tanpa air liur yang banyak).",
              "Minum dan Mandi: Air tersebut boleh diminum setiap hari dan dijadikan air basuhan atau mandian dengan niat ikhtiar sembuh daripada gangguan sihir."
            ]
          }
        ]
      },
      {
        id: "bacaan-penawar",
        title: "Bacaan",
        content: [
          {
            type: "subsection",
            title: "1. Al-Fatihah — 7×"
          },
          {
            type: "verse",
            arabic: SHARED.arabic.fatihah,
            reference: "Surah Al-Fatihah: 1–7",
            translations: malayTranslation(SHARED.malay.fatihah)
          },
          {
            type: "subsection",
            title: "2. Selawat — 7×"
          },
          {
            type: "zikir",
            arabic: SHARED.arabic.selawat,
            malay: SHARED.malay.selawat
          },
          {
            type: "subsection",
            title: "3. Ayat Kursi — 313× (Wakaf 9)"
          },
          {
            type: "instruction",
            text: "Masa baca Ayat Kursi ini kena ingat/bayangkan orang yang kita niatkan untuk kesembuhan."
          },
          {
            type: "verse",
            arabic: SHARED.arabic.ayatKursi,
            reference: "Surah Al-Baqarah: 255 (Ayat Kursi)",
            translations: malayTranslation(SHARED.malay.ayatKursi)
          },
          {
            type: "subsection",
            title: "4. Baca Ayat 3 Qul — 3 kali"
          }
        ].concat(tigaQulBlocks(null))
      },
      {
        id: "doa-penawar",
        title: "Doa Penawar",
        content: [
          {
            type: "zikir",
            arabic: SHARED.arabic.bismillah,
            malay: SHARED.malay.bismillah
          },
          {
            type: "zikir",
            arabic: SHARED.arabic.hamdSelawat,
            malay: SHARED.malay.hamdSelawat
          },
          {
            type: "instruction",
            text: "\"Ya Allah Ya Tuhan Kami,\" berkatilah ayat-ayat-Mu yang ku baca ini. Sekiranya ada gangguan iblis, syaitan, mahupun jin saka yang mengganggu diriku, suamiku, dan anak-anakku, ku mohon agar Engkau musnahkan dan terbarkanlah kesemuanya dengan kekuasaan-Mu. Kurniakanlah keamanan, kedamaian, dan keharmonian dalam hubungan antara aku dan suamiku, anak-anakku, serta seluruh keturunanku hingga ke akhir hayat kami, di dunia mahupun di akhirat. Dan jadikanlah air ini sebagai penawar untuk menyembuhkan segala penyakit yang ada pada diriku, suamiku, dan anak-anakku. Amin, Amin, Ya Rabbal 'Alamin."
          },
          {
            type: "zikir",
            arabic: SHARED.arabic.selawatPenutup,
            malay: SHARED.malay.hamdSelawat
          },
          {
            type: "text",
            text: "Amin ya-rabbal alamin."
          },
          {
            type: "instruction",
            text: "Hembusan: Selepas selesai membaca, hembuskan perlahan-lahan pada air tersebut dengan sedikit air liur yang lembut (tiupan tanpa air liur yang banyak)."
          }
        ]
      }
    ]
  }
];
