const SalesForce = {
  URL: "https://bellconsent.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fbellconsent.lightning.force.com%252Flightning%252Fn%252FBell",
  username: "yalmeida.rj@gmail.com",
  password: "rYeEsydWN!8808168eXkA9gV47A",
  iFrameXpath:
    "/html/body/div[4]/div[1]/section/div[1]/div/div[2]/div[1]/div/div/div/div/div/div/force-aloha-page/div/iframe",
  selectTagSelector:
    "body > div.container.map.noPad > div:nth-child(2) > div > div.row.mapSearch.ng-scope > div.col-lg-10.col-md-12.col-sm-12.col-xs-12 > div > div.col-lg-3.col-md-3.col-sm-3 > select",
  view100RecordsSelector:
    "body > div.container.map.noPad > div:nth-child(2) > div > div.row.mapTable.ng-scope > div.col-lg-10.col-md-12.col-sm-12.col-xs-12 > div > div.ng-scope.ng-isolate-scope > div > ul > li:nth-child(7) > div > button:nth-child(4)",
  view100RecordsSelectorXpath:
    "/html/body/div[1]/div[2]/div/div[5]/div[2]/div/div[2]/div/ul/li[7]/div/button[4]",

  tableSelector:
    "body > div.container.map.noPad > div:nth-child(2) > div > div.row.mapTable.ng-scope > div.col-lg-10.col-md-12.col-sm-12.col-xs-12 > div",
  // body > div.container.map.noPad > div:nth-child(2) > div > div.row.mapSearch.ng-scope > div.col-lg-10.col-md-12.col-sm-12.col-xs-12 > div > div.col-lg-3.col-md-3.col-sm-3 > select > option:nth-child(1)
  siteOptions: {
    ALTOON41_2012A: "1",
    ALTOON41_3013C: "2",
    ALTOON41_3023B: "3",
    ALTOON41_3041A: "4",
    ALTOON41_4021A: "5",
    ANCSON04_1931A: "6",
    AURRON91_3031A: "7",
    BARION18_1891A: "8",
    BARION18_4022AA: "9",
    BARION18_4342A: "10",
    BLNHON15_1011A: "11",
    BLNHON15_1013A: "12",
    BLNHON15_3012A: "13",
    BLRVON02_1613A: "14",
    BLRVON02_3611A: "15",
    BLRVON02_3613A: "16",
    BLRVON02_3621A: "17",
    BLRVON02_3634A: "18",
    BMTNON37_2712A: "19",
    BMVLON08_1014B: "20",
    BMVLON08_1111B: "21",
    BRKLON97_1802A: "22",
    BRKLON97_3021A: "23",
    BRKLON97_3024A: "24",
    BRKLON97_3032A: "25",
    BRKLON97_3611A: "26",
    BRKLON97_3612A: "27",
    BRKLON97_3811A: "28",
    BRKLON97_4601A: "29",
    BRKLON97_4604A: "30",
    BRKLON97_4821D: "31",
    BURLON02_2026A: "32",
    BURLON02_2061B: "33",
    BURLON02_2093A: "34",
    BURLON03_1061A: "35",
    CALDON28_3801A: "36",
    CPBDON20_2841A: "37",
    CPBDON20_2871A: "38",
    DNDSON12_1821AA: "39",
    DNDSON12_1821AAA: "40",
    DNDSON12_1921AA: "41",
    ELVAON01_3831B: "42",
    ELVAON01_3841A: "43",
    EMVLON52_2621A: "44",
    EMVLON52_3611A: "45",
    ESSXON03_2011A: "46",
    ESSXON03_2011B: "47",
    ESSXON03_3021A: "48",
    ESSXON03_3043A: "49",
    ESSXON03_4012A: "50",
    ESSXON03_4021A: "51",
    ETLKON02_3133A: "52",
    GALTON04_2861A: "53",
    GLPHON22_1062A: "54",
    GMLYON20_1021A: "55",
    GMLYON20_3011A: "56",
    GMLYON20_3112A: "57",
    GMLYON20_3115A: "58",
    GMLYON20_3122A: "59",
    GMLYON20_3131A: "60",
    GMLYON20_3191A: "61",
    GMLYON20_3831A: "62",
    GMLYON20_3836A: "63",
    HMPNON67_1811A: "64",
    HMPNON67_1822AA: "65",
    HMTNON02_3033A: "66",
    HMTNON02_3045A: "67",
    HMTNON02_3046A: "68",
    HMTNON02_3113A: "69",
    HMTNON02_4011B: "70",
    HMTNON02_4011BA: "71",
    HMTNON02_4051A: "72",
    HMTNON02_4062A: "73",
    HMTNON02_4085A: "74",
    HMTNON02_4222A: "75",
    HMTNON02_4224A: "76",
    HMTNON14_1322A: "77",
    HMTNON14_1522A: "78",
    HMTNON14_1711A: "79",
    HMTNON14_3133A: "80",
    HMTNON14_3133AA: "81",
    HMTNON14_3311A: "82",
    HMTNON14_3316A: "83",
    HMTNON14_5123B: "84",
    HMTNON14_5132A: "85",
    HMTNON14_7101A: "86",
    HMTNON14_7221A: "87",
    HMTNON14_7232A: "88",
    HMTNON14_7422A: "89",
    HRRWON04_1012A: "90",
    JKVLON05_1043A: "91",
    JKVLON05_1043B: "92",
    JKVLON05_1059A: "93",
    KGCYON87_3611CC: "94",
    KGVLON05_4802A: "95",
    KNBGON21_1811A: "96",
    KNBGON21_1851B: "97",
    KNBGON21_2011A: "98",
    KNTAON16_2321A: "99",
    KTNRON06_3161B: "100",
    KTNRON06_3704A: "101",
    KTNRON06_3709A: "102",
    KTNRON06_3723A: "103",
    KTNRON06_3911A: "104",
    KTNRON06_3942C: "105",
    KTNRON06_3951C: "106",
    KTNRON06_3961B: "107",
    KTNRON06_3972A: "108",
    KTNRON06_3983A: "109",
    KTNRON08_4101A: "110",
    LMTNON07_2011A: "111",
    LMTNON07_2012A: "112",
    LMTNON07_2013A: "113",
    LMTNON07_4013A: "114",
    LONDON14_1032A: "115",
    LONDON14_1042A: "116",
    LONDON14_1071A: "117",
    LONDON14_1083A: "118",
    LONDON14_1091A: "119",
    LONDON14_1095A: "120",
    LONDON14_1111D: "121",
    LONDON14_1121A: "122",
    LONDON14_1223B: "123",
    LONDON14_1241B: "124",
    LONDON14_1244A: "125",
    LONDON14_1291B: "126",
    LONDON14_1316A: "127",
    LONDON14_1372A: "128",
    LONDON14_2073C: "129",
    MAPLON23_1102B: "130",
    MAPLON23_1133A: "131",
    MAPLON23_2035A: "132",
    MAPLON23_2041A: "133",
    MAPLON23_2061A: "134",
    MAPLON23_2062A: "135",
    MAPLON23_3311A: "136",
    MAPLON23_3312A: "137",
    MAPLON23_3314B: "138",
    MAPLON23_3401A: "139",
    MAPLON23_3401B: "140",
    MAPLON23_3401C: "141",
    MLTNON25_4504A: "142",
    MNSTON31_3681AA: "143",
    MNSTON31_3692A: "144",
    MRHMON24_2811A: "145",
    NOTLON09_1016A: "146",
    NRBAON24_1811A: "147",
    NRBAON24_2821A: "148",
    NWMKON85_1034A: "149",
    ORLNON06_2173A: "150",
    ORLNON06_3641A: "151",
    OSHWON95_1171A: "152",
    OSHWON95_1251A: "153",
    OSHWON95_1261A: "154",
    OSHWON95_2801C: "155",
    OTWAON01_5041A: "156",
    OTWAON10_2422A: "157",
    OTWAON10_5111A: "158",
    PCNGON62_1011A: "159",
    PCNGON62_1021B: "160",
    PCNGON62_1031A: "161",
    PCNGON62_1061A: "162",
    PCNGON62_1063A: "163",
    PCNGON62_1106A: "164",
    PCNGON62_1109A: "165",
    PCNGON62_1112A: "166",
    PLGVON53_1831A: "167",
    PLGVON53_1832A: "168",
    PLGVON53_3011A: "169",
    PWSNON31_2801A: "170",
    PWSNON31_4801A: "171",
    PWSNON31_4812A: "172",
    RMHLON34_3015B: "173",
    RMHLON34_3025B: "174",
    RMHLON34_3051A: "175",
    RMHLON34_3101A: "176",
    RMHLON34_3206A: "177",
    SFVLON28_1033A: "178",
    SFVLON28_3506A: "179",
    SFVLON28_3508A: "180",
    SFVLON34_1032A: "181",
    SFVLON34_1033B: "182",
    SSVLON39_1521A: "183",
    SSVLON39_3021A: "184",
    STCTON10_1771B: "185",
    STRDON29_4812A: "186",
    STTNON82_1031A: "187",
    STTNON82_1042A: "188",
    STTNON82_1042AA: "189",
    STTNON82_1051A: "190",
    STTNON82_1201A: "191",
    STTNON82_1211AA: "192",
    STTNON82_2601A: "193",
    TCMSON20_2121A: "194",
    TNHLON40_1021A: "195",
    TNHLON40_3024A: "196",
    TNHLON40_3101A: "197",
    TNHLON40_3102A: "198",
    TNHLON40_3103A: "199",
    TNHLON40_3104A: "200",
    TNHLON40_4011A: "201",
    TNHLON40_4021A: "202",
    TNHLON40_4041A: "203",
    TNHLON40_4043A: "204",
    TNHLON40_4081A: "205",
    TNHLON40_4101A: "206",
    TNHLON40_4111A: "207",
    TNHLON40_4121A: "208",
    TNHLON40_4122A: "209",
    TNHLON40_4162A: "210",
    TNHLON40_4212A: "211",
    TNHLON40_4252A: "212",
    TNHLON40_4261A: "213",
    TRCKON40_1601A: "214",
    TRCKON40_1601AA: "215",
    TRCKON40_1801A: "216",
    TRCKON40_1801AA: "217",
    TRCKON40_4801A: "218",
    TRCKON40_4801AA: "219",
    UNVLON55_1052A: "220",
    VCTAON41_1020A: "221",
    VCTAON41_1811A: "222",
    WDBGON48_2111A: "223",
    WDBGON48_2201B: "224",
    WNDSON13_3123A: "225",
    "WNPGMB06_101-7": "226",
    "WNPGMB06_401-2": "227",
    "WNPGMB06_406-1": "228",
    WTBYON94_2013A: "229",
    WTBYON94_2013B: "230",
    WTBYON94_2044A: "231",
    WTBYON94_2051C: "232",
    WTBYON94_3013B: "233",
    WTBYON94_3064A: "234",
  },

  // The Site options are the keys of the siteOptions object
};

module.exports = SalesForce;
