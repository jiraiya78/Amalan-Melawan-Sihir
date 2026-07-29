/**
 * Modular content data for Doa Melawan Sihir.
 *
 * To add new items: push to the `items` array of the target section.
 * Supported content block types: verse, zikir, instruction, text, steps, list, subsection
 *
 * @see context.md for full documentation
 */
const APP_SECTIONS = [
  {
    id: "zikir-amalan",
    number: 1,
    title: "Zikir dan Amalan Melawan Sihir",
    items: [
      {
        id: "tiga-qul",
        title: "3 Qul",
        defaultOpen: true,
        content: [
          {
            type: "subsection",
            title: "Surah Al-Ikhlas"
          },
          {
            type: "verse",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
            reference: "Surah Al-Ikhlas: 1–4"
          },
          {
            type: "subsection",
            title: "Surah Al-Falaq"
          },
          {
            type: "verse",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
            reference: "Surah Al-Falaq: 1–5"
          },
          {
            type: "subsection",
            title: "Surah An-Nas"
          },
          {
            type: "verse",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
            reference: "Surah An-Nas: 1–6"
          }
        ]
      },
      {
        id: "yunus-81-82",
        title: "Surat Yunus Ayat 81 & 82",
        content: [
          {
            type: "verse",
            arabic: "فَلَمَّا أَلْقَوْا قَالَ مُوسَىٰ مَا جِئْتُم بِهِ السِّحْرُ ۖ إِنَّ اللَّهَ سَيُبْطِلُهُ ۖ إِنَّ اللَّهَ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِينَ",
            reference: "Surah Yūnus: 81",
            translations: [
              {
                lang: "malay",
                source: "Abdullah Muhammad Basmeih",
                text: "Setelah mereka campakkan (benda-benda itu), Nabi Musa berkata: \"Apa yang kamu datangkan itu, itulah sihir; sesungguhnya Allah akan mendedahkan kepalsuannya (dengan mukjizat yang dikurniakanNya kepadaku); sesungguhnya Allah tidak akan menjayakan perbuatan orang-orang yang melakukan kerosakan.\""
              },
              {
                lang: "english",
                source: "Dr. Mustafa Khattab",
                text: "When they did, Moses said, \"What you have produced is mere magic, Allah will surely make it useless, for Allah certainly does not set right the work of the corruptors.\""
              }
            ]
          },
          {
            type: "verse",
            arabic: "وَيُحِقُّ اللَّهُ الْحَقَّ بِكَلِمَاتِهِ وَلَوْ كَرِهَ الْمُجْرِمُونَ",
            reference: "Surah Yūnus: 82",
            translations: [
              {
                lang: "malay",
                source: "Abdullah Muhammad Basmeih",
                text: "Dan Allah juga sentiasa menetapkan perkara yang benar dengan kalimah-kalimah perintahNya, walaupun yang demikian dibenci oleh orang-orang yang melakukan dosa."
              },
              {
                lang: "english",
                source: "Dr. Mustafa Khattab",
                text: "And Allah establishes the truth by His Words—even to the dismay of the wicked."
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
            arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا ﴿١﴾ وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا ﴿٢﴾ وَقَالَ الْإِنسَانُ مَا لَهَا ﴿٣﴾ يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا ﴿٤﴾ بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا ﴿٥﴾ يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ ﴿٦﴾ فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ﴿٧﴾ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ ﴿٨﴾",
            reference: "Surah Az-Zalzalah: 1–8"
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
            arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            malay: "Tiada Tuhan melainkan Allah Yang Esa tiada sekutu bagi-Nya, bagi-Nya kerajaan dan pujian, dan Dia berkuasa atas segalanya."
          }
        ]
      }
    ]
  },
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
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿١﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٢﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٣﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٤﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٥﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٦﴾",
            reference: "Surah Al-Fatihah: 1–7"
          },
          {
            type: "subsection",
            title: "2. Ayat Kursi — 7× (Wakaf 9)"
          },
          {
            type: "instruction",
            text: "Semasa baca sampai <em>\"walā ya'ūduhu ḥifẓuhumā\"</em> ulang ayat itu 7× kalau boleh satu nafas. Lepas 7× habiskan Ayat Kursi."
          },
          {
            type: "verse",
            arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            reference: "Surah Al-Baqarah: 255 (Ayat Kursi)"
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
            type: "subsection",
            title: "3. Doa Pelindung"
          },
          {
            type: "instruction",
            text: "Ya Allah... berkat Ayat Kursi yang ku baca, kau jadikan ia pagar untuk melindungi jasadku, rohku, keluargaku dan harta bendaku daripada bala bencana sampai akhir hayatku dan sampai hari akhirat."
          },
          {
            type: "subsection",
            title: "4. Baca Surah 3 Qul"
          },
          {
            type: "text",
            text: "Baca Surah Al-Ikhlas, Al-Falaq, dan An-Nas (rujuk bahagian 1 — 3 Qul di atas)."
          }
        ]
      }
    ]
  },
  {
    id: "amalan-kawasan-rumah",
    number: 3,
    title: "Amalan Pendinding Kawasan Rumah",
    items: [],
    placeholder: "Kandungan bahagian ini akan ditambah pada kemas kini akan datang."
  }
];
