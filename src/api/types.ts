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
    languages: {
      [key: string]: string,
      // "tvl": string
    },
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
