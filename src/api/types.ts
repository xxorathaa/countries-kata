export interface Country {
  name: {
    common: string,
    official: string,
    nativeName: any,
  },
  capital: string[],
  region: string,
  flags: {
    png: string,
    svg: string,
    alt: string,
  },
  population: number,
  ccn3: string,
}

export interface CountryDetail extends Country {
  // {
  // "name": {
  //   "common": string,
  //   "official": string,
  //   "nativeName": {
  //     "eng": {
  //       "official": string,
  //       "common": string
  //     },
  //     "tvl": {
  //       "official": string,
  //       "common": string
  //     }
  //   }
  // },
  // "tld": [
  //   ".tv"
  // ],
  // "cca2": "TV",
  // "ccn3": "798",
  // "cioc": "TUV",
  // "independent": true,
  // "status": "officially-assigned",
  // "unMember": true,
  borders?: string[],
  currencies: {
    [key: string]: {
      symbol: string,
      name: string
    },
    // "TVD": {
    //   "symbol": "$",
    //   "name": "Tuvaluan dollar"
    // }
  },
  // "idd": {
  //   "root": "+6",
  //   "suffixes": [
  //     "88"
  //   ]
  // },
  // "capital": [
  //   "Funafuti"
  // ],
  // "altSpellings": [
  //   "TV"
  // ],
  // "region": "Oceania",
  subregion: string,
  // languages: Map<Languages, string>,
  languages: {
    [key: string]: string,
  },
  //   // afr?: string,
  //   // amh?: string,
  //   // ara?: string,
  //   // arc?: string,
  //   // aym?: string,
  //   // aze?: string,
  //   // bel?: string,
  //   // ben?: string,
  //   // ber?: string,
  //   // bis?: string,
  //   // bjz?: string,
  //   // bos?: string,
  //   // bul?: string,
  //   // bwg?: string,
  //   // cal?: string,
  //   // cat?: string,
  //   // ces?: string,
  //   // cha?: string,
  //   // ckb?: string,
  //   // cnr?: string,
  //   // crs?: string,
  //   // dan?: string,
  //   // deu?: string,
  //   // div?: string,
  //   // dzo?: string,
  //   // ell?: string,
  //   // eng?: string,
  //   // est?: string,
  //   // eus?: string,
  //   // fao?: string,
  //   // fas?: string,
  //   // fij?: string,
  //   // fil?: string,
  //   // fin?: string,
  //   // fra?: string,
  //   // gil?: string,
  //   // glc?: string,
  //   // gle?: string,
  //   // glv?: string,
  //   // grn?: string,
  //   // gsw?: string,
  //   // hat?: string,
  //   // heb?: string,
  //   // her?: string,
  //   // hgm?: string,
  //   // hif?: string,
  //   // hin?: string,
  //   // hmo?: string,
  //   // hrv?: string,
  //   // hun?: string,
  //   // hye?: string,
  //   // ind?: string,
  //   // isl?: string,
  //   // ita?: string,
  //   // jam?: string,
  //   // jpn?: string,
  //   // kal?: string,
  //   // kat?: string,
  //   // kaz?: string,
  //   // kck?: string,
  //   // khi?: string,
  //   // khm?: string,
  //   // kin?: string,
  //   // kir?: string,
  //   // kon?: string,
  //   // kor?: string,
  //   // kwn?: string,
  //   // lao?: string,
  //   // lat?: string,
  //   // lav?: string,
  //   // lin?: string,
  //   // lit?: string,
  //   // loz?: string,
  //   // ltz?: string,
  //   // lua?: string,
  //   // mah?: string,
  //   // mey?: string,
  //   // mfe?: string,
  //   // mkd?: string,
  //   // mlg?: string,
  //   // mlt?: string,
  //   // mon?: string,
  //   // mri?: string,
  //   // msa?: string,
  //   // mya?: string,
  //   // nau?: string,
  //   // nbl?: string,
  //   // ndc?: string,
  //   // nde?: string,
  //   // ndo?: string,
  //   // nep?: string,
  //   // nfr?: string,
  //   // niu?: string,
  //   // nld?: string,
  //   // nno?: string,
  //   // nob?: string,
  //   // nor?: string,
  //   // nrf?: string,
  //   // nso?: string,
  //   // nya?: string,
  //   // nzs?: string,
  //   // pap?: string,
  //   // pau?: string,
  //   // pih?: string,
  //   // pol?: string,
  //   // por?: string,
  //   // pov?: string,
  //   // prs?: string,
  //   // pus?: string,
  //   // que?: string,
  //   // rar?: string,
  //   // roh?: string,
  //   // ron?: string,
  //   // run?: string,
  //   // rus?: string,
  //   // sag?: string,
  //   // sin?: string,
  //   // slk?: string,
  //   // slv?: string,
  //   // smi?: string,
  //   // smo?: string,
  //   // sna?: string,
  //   // som?: string,
  //   // sot?: string,
  //   // spa?: string,
  //   // sqi?: string,
  //   // srp?: string,
  //   // ssw?: string,
  //   // swa?: string,
  //   // swe?: string,
  //   // tam?: string,
  //   // tet?: string,
  //   // tgk?: string,
  //   // tha?: string,
  //   // tir?: string,
  //   // tkl?: string,
  //   // toi?: string,
  //   // ton?: string,
  //   // tpi?: string,
  //   // tsn?: string,
  //   // tso?: string,
  //   // tuk?: string,
  //   // tur?: string,
  //   // tvl?: string,
  //   // ukr?: string,
  //   // urd?: string,
  //   // uzb?: string,
  //   // ven?: string,
  //   // vie?: string,
  //   // xho?: string,
  //   // zdj?: string,
  //   // zho?: string,
  //   // zib?: string,
  //   // zul?: string,
  // },
  // "latlng": [-8, 178],
  // "landlocked": false,
  // "area": 26,
  // "demonyms": {
  //   "eng": {
  //     "f": "Tuvaluan",
  //     "m": "Tuvaluan"
  //   },
  //   "fra": {
  //     "f": "Tuvaluane",
  //     "m": "Tuvaluan"
  //   }
  // },
  // "cca3": "TUV",
  // "translations": {
  //   "ara": {
  //     "official": "توفالو",
  //     "common": "توفالو"
  //   },
  //   "bre": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "ces": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "cym": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "deu": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "est": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "fin": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "fra": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "hrv": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "hun": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "ind": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "ita": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "jpn": {
  //     "official": "ツバル",
  //     "common": "ツバル"
  //   },
  //   "kor": {
  //     "official": "투발루",
  //     "common": "투발루"
  //   },
  //   "nld": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "per": {
  //     "official": "تووالو",
  //     "common": "تووالو"
  //   },
  //   "pol": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "por": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "rus": {
  //     "official": "Тувалу",
  //     "common": "Тувалу"
  //   },
  //   "slk": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "spa": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "srp": {
  //     "official": "Тувалу",
  //     "common": "Тувалу"
  //   },
  //   "swe": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "tur": {
  //     "official": "Tuvalu",
  //     "common": "Tuvalu"
  //   },
  //   "urd": {
  //     "official": "تووالو",
  //     "common": "تووالو"
  //   },
  //   "zho": {
  //     "official": "图瓦卢",
  //     "common": "图瓦卢"
  //   }
  // },
  // "flag": "🇹🇻",
  // "maps": {
  //   "googleMaps": "https://goo.gl/maps/LbuUxtkgm1dfN1Pn6",
  //   "openStreetMaps": "https://www.openstreetmap.org/relation/2177266"
  // },
  // "population": 11792,
  // "gini": {
  //   "2010": 39.1
  // },
  // "car": {
  //   "signs": [
  //     "TUV"
  //   ],
  //   "side": "left"
  // },
  timezones: string[], //"UTC+12:00"
  // "continents": [
  //   "Oceania"
  // ],
  // "flags": {
  //   "png": "https://flagcdn.com/w320/tv.png",
  //   "svg": "https://flagcdn.com/tv.svg",
  //   "alt": "The flag of Tuvalu has a light blue field with the flag of the United Kingdom — the Union Jack — in the canton. A representation of the country's nine Islands using nine five-pointed yellow stars is situated in the fly half of the field."
  // },
  // "coatOfArms": {
  //   "png": "https://mainfacts.com/media/images/coats_of_arms/tv.png",
  //   "svg": "https://mainfacts.com/media/images/coats_of_arms/tv.svg"
  // },
  // "startOfWeek": "monday",
  // "capitalInfo": {
  //   "latlng": [-8.52, 179.22]
  // },
  // "postalCode": {
  //   "format": null,
  //   "regex": null
  // }
}

export enum LanguageCodes {
  afr = "Afrikaans",
  amh = "Amharic",
  ara = "Arabic",
  arc = "Aramaic",
  aym = "Aymara",
  aze = "Azerbaijani",
  bel = "Belarusian",
  ben = "Bengali",
  ber = "Berber",
  bis = "Bislama",
  bjz = "Belizean Creole",
  bos = "Bosnian",
  bul = "Bulgarian",
  bwg = "Chibarwe",
  cal = "Carolinian",
  cat = "Catalan",
  ces = "Czech",
  cha = "Chamorro",
  ckb = "Sorani",
  cnr = "Montenegrin",
  crs = "Seychellois Creole",
  dan = "Danish",
  deu = "German",
  div = "Maldivian",
  dzo = "Dzongkha",
  ell = "Greek",
  eng = "English",
  est = "Estonian",
  eus = "Basque",
  fao = "Faroese",
  fas = "Persian (Farsi)",
  fij = "Fijian",
  fil = "Filipino",
  fin = "Finnish",
  fra = "French",
  gil = "Gilbertese",
  glc = "Galician",
  gle = "Irish",
  glv = "Manx",
  grn = "Guaraní",
  gsw = "Swiss German",
  hat = "Haitian Creole",
  heb = "Hebrew",
  her = "Herero",
  hgm = "Khoekhoe",
  hif = "Fiji Hindi",
  hin = "Hindi",
  hmo = "Hiri Motu",
  hrv = "Croatian",
  hun = "Hungarian",
  hye = "Armenian",
  ind = "Indonesian",
  isl = "Icelandic",
  ita = "Italian",
  jam = "Jamaican Patois",
  jpn = "Japanese",
  kal = "Greenlandic",
  kat = "Georgian",
  kaz = "Kazakh",
  kck = "Kalanga",
  khi = "Khoisan",
  khm = "Khmer",
  kin = "Kinyarwanda",
  kir = "Kyrgyz",
  kon = "Kikongo",
  kor = "Korean",
  kwn = "Kwangali",
  lao = "Lao",
  lat = "Latin",
  lav = "Latvian",
  lin = "Lingala",
  lit = "Lithuanian",
  loz = "Lozi",
  ltz = "Luxembourgish",
  lua = "Tshiluba",
  mah = "Marshallese",
  mey = "Hassaniya",
  mfe = "Mauritian Creole",
  mkd = "Macedonian",
  mlg = "Malagasy",
  mlt = "Maltese",
  mon = "Mongolian",
  mri = "Māori",
  msa = "Malay",
  mya = "Burmese",
  nau = "Nauru",
  nbl = "Southern Ndebele",
  ndc = "Ndau",
  nde = "Northern Ndebele",
  ndo = "Ndonga",
  nep = "Nepali",
  nfr = "Guernésiais",
  niu = "Niuean",
  nld = "Dutch",
  nno = "Norwegian Nynorsk",
  nob = "Norwegian Bokmål",
  nor = "Norwegian",
  nrf = "Jèrriais",
  nso = "Northern Sotho",
  nya = "Chewa",
  nzs = "New Zealand Sign Language",
  pap = "Papiamento",
  pau = "Palauan",
  pih = "Norfuk",
  pol = "Polish",
  por = "Portuguese",
  pov = "Upper Guinea Creole",
  prs = "Dari",
  pus = "Pashto",
  que = "Quechua",
  rar = "Cook Islands Māori",
  roh = "Romansh",
  ron = "Romanian",
  run = "Kirundi",
  rus = "Russian",
  sag = "Sango",
  sin = "Sinhala",
  slk = "Slovak",
  slv = "Slovene",
  smi = "Sami",
  smo = "Samoan",
  sna = "Shona",
  som = "Somali",
  sot = "Sotho",
  spa = "Spanish",
  sqi = "Albanian",
  srp = "Serbian",
  ssw = "Swazi",
  swa = "Swahili",
  swe = "Swedish",
  tam = "Tamil",
  tet = "Tetum",
  tgk = "Tajik",
  tha = "Thai",
  tir = "Tigrinya",
  tkl = "Tokelauan",
  toi = "Tonga",
  ton = "Tongan",
  tpi = "Tok Pisin",
  tsn = "Tswana",
  tso = "Tsonga",
  tuk = "Turkmen",
  tur = "Turkish",
  tvl = "Tuvaluan",
  ukr = "Ukrainian",
  urd = "Urdu",
  uzb = "Uzbek",
  ven = "Venda",
  vie = "Vietnamese",
  xho = "Xhosa",
  zdj = "Comorian",
  zho = "Chinese",
  zib = "Zimbabwean Sign Language",
  zul = "Zulu",
}