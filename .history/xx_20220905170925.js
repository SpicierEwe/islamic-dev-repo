const full_db = [
  {
    quran: [
      {
        scripts: {
          icon_link:
            "https://www.kindpng.com/picc/m/160-1608792_circle-document-icon-png-transparent-png.png",
          description:
            "Get all types of Quranic Scripts. For Example- Uthmani Script , Indo-pak Script etc.",
          resources: [
            {
              "uthmani v20": {
                download_link:
                  "https://www.mediafire.com/file/ghv0n0e99ibqzll/Uthmani_Ayah_by_Ayah_v20.zip/file",
                author: "",
                sub_title: "Ayah by Ayah script",
                includes: [
                  "Ayah by Ayah",
                  "Text Files",
                  "Original DB",
                  "Fonts",
                ],
                description:
                  "The Quranic data will be in the form of Ayah by Ayah format.",
              },
            },
            {
              "uthmani v20": {
                sub_title: "Word by Word script",
                download_link:
                  "https://www.mediafire.com/file/hfy7b2z6slneejk/Uthmani_Word_by_Word_v20.zip/file",
                author: "",
                includes: [
                  "Word by Word",
                  "Text Files",
                  "Original DB",
                  "Fonts",
                ],
                description:
                  "The Quranic data will be in the form of Word by Word format i.e every ayah split into words.",
              },
            },

            {
              "Indo-Pak v9.5": {
                sub_title: "Madinah script",
                download_link:
                  "https://www.mediafire.com/file/i0ukdew09puu7fv/Madinah_Script_Ayah_by_Ayah_v9.5.zip/file",
                author: "",
                includes: [
                  "Ayah by Ayah",
                  "Text Files",
                  "Original DB",
                  "Fonts",
                ],
                description:
                  "The Quranic data will be in the form of Ayah by Ayah format.",
              },
            },
            {
              "Indo-Pak v9.5": {
                sub_title: "Madinah script",
                download_link:
                  "https://www.mediafire.com/file/35leeo7fancyk3m/Madinah_Script_Word_by_Word_v9.5.zip/file",
                author: "",
                includes: [
                  "Word by Word",
                  "Text Files",
                  "Original DB",
                  "Fonts",
                ],
                description:
                  "The Quranic data will be in the form of Word by Word format i.e every ayah split into words.",
              },
            },
            {
              "Indo-Pak v9.5": {
                sub_title: "Hanafi script",
                download_link:
                  "https://www.mediafire.com/file/6qqgsk5i8iekkz6/Hanafi_Script_Ayah_by_Ayah_v9.5.zip/file",
                author: "",
                includes: [
                  "Ayah by Ayah",
                  "Text Files",
                  "Original DB",
                  "Fonts",
                ],
                description:
                  "The Quranic data will be in the form of Ayah by Ayah format.",
              },
            },
            {
              "Indo-Pak v9.5": {
                sub_title: "Hanafi script",
                download_link:
                  "https://www.mediafire.com/file/nk9f0b21pharkfq/Hanafi_Script_Word_by_Word_v9.5.zip/file",
                author: "",
                includes: [
                  "Word by Word",
                  "Text Files",
                  "Original DB",
                  "Fonts",
                ],
                description:
                  "The Quranic data will be in the form of Word by Word format i.e every ayah split into words.",
              },
            },
          ],
        },
      },
      {
        fonts: {
          icon_link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Adobe_Fonts.svg/1200px-Adobe_Fonts.svg.png",
          description:
            "Get all the highly optimized Quranic Fonts initial for development.",
          resources: [
            {
              "Uthmani Font v20": {
                sub_title: "for Uthmani Quranic Script",
                download_link:
                  "https://www.mediafire.com/file/9vj2gx5a3ixhzxu/uthamni_font_v20.zip/file",
                author: "",
                includes: [".ttf", ".woff", ".woff2"],
                description:
                  "Uthmani Font is a very highly optimized Font for Uthmani Quranic Script.",
              },
            },
            {
              "Indo-Pak Font v4.2.1": {
                sub_title: "without Waqf - Lazim",
                download_link:
                  "https://www.mediafire.com/file/625pkqo09fswv3p/Indo_pak_font_v4.2.1.zip/file",
                author: "",
                includes: [".ttf", ".woff", ".woff2"],
                description:
                  "This font is created and optimized for the Indo-Pak Quran script but it doesn't contain Waqf - Lazim.",
              },
            },
            {
              "Indo-Pak Font v4.2.1": {
                sub_title: "with Waqf - Lazim",
                download_link:
                  "https://www.mediafire.com/file/wj338qylo29jvud/Indo_pak_font_v4.2.1--WL.zip/file",
                author: "",
                includes: ["Waqf - Lazim", ".ttf", ".woff", ".woff2"],
                description:
                  "This font is created and optimized for the Indo-Pak Quran script and contains Waqf - Lazim.",
              },
            },
            {
              "Surah Names Font": {
                sub_title: "calligraphic Surah Names",
                download_link:
                  "https://www.mediafire.com/file/qhbonio0eryrk0b/Surah_Names_Font_Optimzed.zip/file",
                author: "",
                includes: [".ttf", ".woff", ".woff2"],
                description:
                  "This font is created and optimized for the Indo-Pak Quran script and contains Waqf - Lazim.",
              },
            },
          ],
        },
      },
      {
        reciters: {
          icon_link:
            "https://www.pngfind.com/pngs/m/658-6588781_audio-y-bocinas-ajc-logo-transparent-hd-png.png",
          description:
            "Get majority of the Quran reciters audio and generated links JSON files",
          resources: [
            {
              reciters: [
                {
                  Alafasy: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Alafasy/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Sudais: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Sudais/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  AbdulBaset: {
                    sub_title: "reciter ( Murattal )",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/AbdulBaset/Murattal/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  AbdulBaset: {
                    sub_title: "reciter ( Mujawwad )",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/AbdulBaset/Mujawwad/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Husary: {
                    sub_title: "reciter ( Murattal )",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Husary/Murattal/ogg/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Husary: {
                    sub_title: "reciter ( Mujawwad )",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Husary/Mujawwad/ogg/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Minshawy: {
                    sub_title: "reciter ( Murattal )",
                    generatable_link_template:
                      "https://everyayah.com/data/Minshawy_Murattal_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Shuraym: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Shuraym/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Jibreel: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Jibreel/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Tunaiji: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://download.quranicaudio.com/verses/Tunaiji/mp3/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  "Yasser_Ad-Dussary": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  "Ibrahim_Al-Dosary": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/warsh/warsh_ibrahim_aldosary_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  "Yassin_Al-Jazaery": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/warsh/warsh_yassin_al_jazaery_64kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  "Abdullaah_3awwaad_Al-Juhaynee": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Abdullaah_3awwaad_Al-Juhaynee_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Abdullah_Matroud: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Abdullah_Matroud_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Ahmed_Ibn_Ali_Al_Ajamy: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/ahmed_ibn_ali_al_ajamy_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Ahmed_Neana: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Ahmed_Neana_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Akram_Al_Alaqimy: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Akram_AlAlaqimy_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Ali_Jaber: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Ali_Jaber_64kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Ali_Hajjaj_AlSuesy: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Ali_Hajjaj_AlSuesy_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Ayman_Sowaid: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Ayman_Sowaid_64kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Fares_Abbad: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Fares_Abbad_64kbps",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Hudhaify: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Hudhaify_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Ibrahim_Akhdar: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Ibrahim_Akhdar_32kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Karim_Mansoori: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Karim_Mansoori_40kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  "Khalid_Abdullah_al-Qahtanee": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Khaalid_Abdullaah_al-Qahtaanee_192kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Maher_Al_Muaiqly: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/MaherAlMuaiqly128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  "Mahmoud_Ali_Al-Banna": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/mahmoud_ali_al_banna_32kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Menshawi: {
                    sub_title: "reciter",
                    generatable_link_template: "None",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Mohammad_al_Tablaway: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Mohammad_al_Tablaway_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Muhammad_AbdulKareem: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Muhammad_AbdulKareem_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Muhammad_Ayyoub: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Muhammad_Ayyoub_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Muhsin_Al_Qasim: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Muhsin_Al_Qasim_192kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Nabil_Rifa3i: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Nabil_Rifa3i_48kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Nasser_Alqatami: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Nasser_Alqatami_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Parhizgar: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Parhizgar_48kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Sahl_Yassin: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Sahl_Yassin_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Salaah_AbdulRahman_Bukhatir: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Salaah_AbdulRahman_Bukhatir_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Salah_Al_Budair: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Salah_Al_Budair_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
                {
                  Yaser_Salamah: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Yaser_Salamah_128kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "",
                  },
                },
              ],
            },
            {
              reciters_with_mistakes: [
                {
                  Abdullah_Basfar: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Abdullah_Basfar_192kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description: "",
                    mistakes: [
                      { surah_number: 11, verse_number: 82 },
                      { surah_number: 61, verse_number: 11 },
                      { surah_number: 61, verse_number: 12 },
                      { surah_number: 61, verse_number: 13 },
                      { surah_number: 61, verse_number: 14 },
                    ],
                  },
                },
                {
                  "Abu_Bakr_Ash-Shaatree": {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Abu_Bakr_Ash-Shaatree_128kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description: "",
                    mistakes: [{ surah_number: 22, verse_number: 52 }],
                  },
                },
                {
                  Aziz_Alili: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/aziz_alili_128kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description: "",
                    mistakes: [
                      { surah_number: 23, verse_number: 51 },
                      { surah_number: 28, verse_number: 25 },
                    ],
                  },
                },
                {
                  Ghamadi: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Ghamadi_40kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description: "",
                    mistakes: [
                      { surah_number: 4, verse_number: 94 },
                      { surah_number: 16, verse_number: 29 },
                      { surah_number: 59, verse_number: 24 },
                    ],
                  },
                },
                {
                  Hani_Rifai: {
                    sub_title: "reciter",
                    generatable_link_template:
                      "https://everyayah.com/data/Hani_Rifai_192kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description: "",
                    mistakes: [
                      { surah_number: 24, verse_number: 58 },
                      { surah_number: 31, verse_number: 27 },
                    ],
                  },
                },
                {
                  Minshawy: {
                    sub_title: "reciter ( Mujawwad )",
                    generatable_link_template:
                      "https://everyayah.com/data/Minshawy_Mujawwad_192kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description:
                      "The Mistakes are only in his Mujawwad Recitation and are not in the Murattal Recitation.",
                    mistakes: [
                      { surah_number: 4, verse_number: 8 },
                      { surah_number: 7, verse_number: 63 },
                      { surah_number: 7, verse_number: 163 },
                      { surah_number: 20, verse_number: 90 },
                      { surah_number: 27, verse_number: 70 },
                      { surah_number: 32, verse_number: 24 },
                      { surah_number: 39, verse_number: 57 },
                      { surah_number: 40, verse_number: 62 },
                      { surah_number: 42, verse_number: 26 },
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
      {
        translations: {
          icon_link:
            "https://cdn.icon-icons.com/icons2/1507/PNG/512/applicationsaudio_103765.png",
          description:
            "Get most of the available Qur'an Audio Translations in different languages.",
          resources: [
            {
              translations: [
                {
                  Sahih_International: {
                    sub_title: "English Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description:
                      "This is the English Translation of the Qur'an.",
                  },
                },
                {
                  Farhat_Hashmi: {
                    sub_title: "Word by Word Urdu Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/translations/urdu_farhat_hashmi/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description:
                      "This is the Word by Word Arabic Quran + Urdu Translation. Which means the translator will read the arabic word first and then will tell you its translation in urdu.",
                  },
                },
                {
                  Shamshad_Ali_Khan: {
                    sub_title: "Urdu Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description: "This is the Urdu Translation of the Qur'an.",
                  },
                },
                {
                  Makarem: {
                    sub_title: "Persian Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/translations/Makarem_Kabiri_16Kbps",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description:
                      "This is the Persian Translation of the Qur'an by Naser Makarem Shirazi.",
                  },
                },
                {
                  Besim_Korkut: {
                    sub_title: "Bosnian Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/translations/besim_korkut_ajet_po_ajet/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description:
                      "This is the Bosnian Translation of the Qur'an by Besim Korkut.",
                  },
                },
                {
                  Fooladvand: {
                    sub_title: "Persian Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/translations/Fooladvand_Hedayatfar_40Kbps/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description:
                      "This is the Persian  Translation of the Qur'an by Fooladvand.",
                  },
                },
                {
                  Balayev: {
                    sub_title: "AzerBaijani Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/translations/azerbaijani/balayev/",
                    includes: ["Full Qur'an", "JSON Files", "Audio Urls"],
                    description:
                      "This is the AzerBaijani Translation of the Qur'an by Balayev.",
                  },
                },
              ],
            },
            {
              translations_with_mistakes: [
                {
                  Sahih_International_with_recitation: {
                    sub_title: "Quran Recitation + English Translation",
                    generatable_link_template:
                      "https://everyayah.com/data/MultiLanguage/Basfar_Walk_192kbps/",
                    includes: [
                      "Mistakes",
                      "Full Qur'an",
                      "JSON Files",
                      "Audio Urls",
                    ],
                    description:
                      "The Mistakes are only in the Arabic Quran Recitation and not in the English Quran Translation.",
                    mistakes: [
                      { surah_number: 19, verse_number: 75 },
                      { surah_number: 61, verse_number: 6 },
                      { surah_number: 61, verse_number: 9 },
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },

  {
    hadiths: [
      {
        database: {
          icon_link:
            "https://toppng.com/uploads/preview/database-database-icon-11563207079binxarjjyp.png",
          description:
            "Get full hadith Database file and extract the data in any format you want.",
          resources: [],
        },
      },
    ],
  },
];
