const puppeteer = require('puppeteer');
// import fs
const fs = require('fs');
require('dotenv').config();

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
    BRKLON97_1802A: "21",
    BRKLON97_3021A: "22",
    BRKLON97_3024A: "23",
    BRKLON97_3032A: "24",
    BRKLON97_3611A: "25",
    BRKLON97_3612A: "26",
    BRKLON97_3811A: "27",
    BRKLON97_4601A: "28",
    BRKLON97_4604A: "29",
    BRKLON97_4821D: "30",
    BURLON02_2026A: "31",
    BURLON02_2061B: "32",
    BURLON02_2093A: "33",
    BURLON03_1061A: "34",
    CALDON28_3801A: "35",
    CPBDON20_2841A: "36",
    CPBDON20_2871A: "37",
    DNDSON12_1821AA: "38",
    DNDSON12_1821AAA: "39",
    DNDSON12_1921AA: "40",
    ELVAON01_3831B: "41",
    ELVAON01_3841A: "42",
    EMVLON52_2621A: "43",
    EMVLON52_3611A: "44",
    ESSXON03_2011A: "45",
    ESSXON03_2011B: "46",
    ESSXON03_3021A: "47",
    ESSXON03_3043A: "48",
    ESSXON03_4012A: "49",
    ESSXON03_4021A: "50",
    ETLKON02_3133A: "51",
    GALTON04_2861A: "52",
    GLPHON22_1062A: "53",
    GMLYON20_1021A: "54",
    GMLYON20_3011A: "55",
    GMLYON20_3112A: "56",
    GMLYON20_3115A: "57",
    GMLYON20_3122A: "58",
    GMLYON20_3131A: "59",
    GMLYON20_3191A: "60",
    GMLYON20_3831A: "61",
    GMLYON20_3836A: "62",
    HMPNON67_1811A: "63",
    HMPNON67_1822AA: "64",
    HMTNON02_3033A: "65",
    HMTNON02_3045A: "66",
    HMTNON02_3046A: "67",
    HMTNON02_3113A: "68",
    HMTNON02_4051A: "69",
    HMTNON02_4062A: "70",
    HMTNON02_4085A: "71",
    HMTNON02_4222A: "72",
    HMTNON02_4224A: "73",
    HMTNON14_1322A: "74",
    HMTNON14_1522A: "75",
    HMTNON14_5123B: "76",
    HMTNON14_5132A: "77",
    HMTNON14_7101A: "78",
    HMTNON14_7221A: "79",
    HMTNON14_7232A: "80",
    HMTNON14_7422A: "81",
    HRRWON04_1012A: "82",
    JKVLON05_1043A: "83",
    JKVLON05_1043B: "84",
    JKVLON05_1059A: "85",
    KGCYON87_3611CC: "86",
    KGVLON05_4802A: "87",
    KNBGON21_1811A: "88",
    KNBGON21_1851B: "89",
    KNBGON21_2011A: "90",
    KNTAON16_2321A: "91",
    KTNRON06_3161B: "92",
    KTNRON06_3704A: "93",
    KTNRON06_3709A: "94",
    KTNRON06_3723A: "95",
    KTNRON06_3911A: "96",
    KTNRON06_3942C: "97",
    KTNRON06_3951C: "98",
    KTNRON06_3961B: "99",
    KTNRON06_3972A: "100",
    KTNRON06_3983A: "101",
    KTNRON08_4101A: "102",
    LMTNON07_2011A: "103",
    LMTNON07_2012A: "104",
    LMTNON07_2013A: "105",
    LMTNON07_4013A: "106",
    LONDON14_1032A: "107",
    LONDON14_1042A: "108",
    LONDON14_1071A: "109",
    LONDON14_1083A: "110",
    LONDON14_1091A: "111",
    LONDON14_1095A: "112",
    LONDON14_1111D: "113",
    LONDON14_1121A: "114",
    LONDON14_1223B: "115",
    LONDON14_1241B: "116",
    LONDON14_1244A: "117",
    LONDON14_1291B: "118",
    LONDON14_1316A: "119",
    LONDON14_1372A: "120",
    LONDON14_2073C: "121",
    MAPLON23_1102B: "122",
    MAPLON23_1133A: "123",
    MAPLON23_2035A: "124",
    MAPLON23_2041A: "125",
    MAPLON23_2061A: "126",
    MAPLON23_2062A: "127",
    MAPLON23_3311A: "128",
    MAPLON23_3312A: "129",
    MAPLON23_3314B: "130",
    MAPLON23_3401A: "131",
    MAPLON23_3401B: "132",
    MAPLON23_3401C: "133",
    MLTNON25_4504A: "134",
    MNSTON31_3681AA: "135",
    MNSTON31_3692A: "136",
    MRHMON24_2811A: "137",
    NOTLON09_1016A: "138",
    NRBAON24_2821A: "139",
    NWMKON85_1034A: "140",
    ORLNON06_2173A: "141",
    ORLNON06_3641A: "142",
    OSHWON95_1171A: "143",
    OSHWON95_1251A: "144",
    OSHWON95_1261A: "145",
    OSHWON95_2801C: "146",
    OTWAON01_5041A: "147",
    OTWAON10_2422A: "148",
    OTWAON10_5111A: "149",
    PCNGON62_1011A: "150",
    PCNGON62_1021B: "151",
    PCNGON62_1106A: "152",
    PCNGON62_1109A: "153",
    PLGVON53_1831A: "154",
    PLGVON53_1832A: "155",
    PLGVON53_3011A: "156",
    PWSNON31_2801A: "157",
    PWSNON31_4801A: "158",
    PWSNON31_4812A: "159",
    RMHLON34_3015B: "160",
    RMHLON34_3025B: "161",
    RMHLON34_3051A: "162",
    RMHLON34_3206A: "164",
    SFVLON28_1033A: "165",
    SFVLON28_3506A: "166",
    SFVLON28_3508A: "167",
    SFVLON34_1032A: "168",
    SFVLON34_1033B: "169",
    STCTON10_1771B: "170",
    STRDON29_4812A: "171",
    STTNON82_1031A: "172",
    STTNON82_1042A: "173",
    STTNON82_1042AA: "174",
    STTNON82_1051A: "175",
    STTNON82_1201A: "176",
    STTNON82_1211AA: "177",
    STTNON82_2601A: "178",
    TCMSON20_2121A: "179",
    TNHLON40_1021A: "180",
    TNHLON40_3024A: "181",
    TNHLON40_3101A: "182",
    TNHLON40_3102A: "183",
    TNHLON40_3103A: "184",
    TNHLON40_3104A: "185",
    TNHLON40_4041A: "186",
    TNHLON40_4043A: "187",
    TNHLON40_4081A: "188",
    TNHLON40_4111A: "189",
    TNHLON40_4121A: "190",
    TNHLON40_4122A: "191",
    TNHLON40_4212A: "192",
    TNHLON40_4252A: "193",
    TNHLON40_4261A: "194",
    UNVLON55_1052A: "195",
    VCTAON41_1020A: "196",
    VCTAON41_1811A: "197",
    WDBGON48_2111A: "198",
    WDBGON48_2201B: "199",
    WNDSON13_3123A: "200",
    "WNPGMB06_101-7": "201",
    "WNPGMB06_401-2": "202",
    "WNPGMB06_406-1": "203",
    WTBYON94_2013A: "204",
    WTBYON94_2013B: "205",
    WTBYON94_2044A: "206",
    WTBYON94_2051C: "207",
    WTBYON94_3013B: "208",
    WTBYON94_3064A: "209",
  },
};


// bot should take a site name, and credentials (username, password) as arguments
async function getDropTypeUnverified(chosenSite, username, password) {
  const browser = await puppeteer.launch({
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXEUTABLE_PATH
        : puppeteer.executablePath(),

    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(SalesForce.URL);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="pw"]');
  await page.waitForSelector('input[name="Login"]');

  // Type the username and password into the fields
  // await page.type('input[name="username"]', SalesForce.username);
  await page.type('input[name="username"]', username);
  // await page.type('input[name="pw"]', SalesForce.password);
  await page.type('input[name="pw"]', password);

  // Click the login button
  await page.click('input[name="Login"]');

  // if (process.env.NODE_ENV === "development") {
  // }

  await new Promise((resolve) => setTimeout(resolve, 40000));

  const frames = await page.frames();
  // console.log(frames);
  console.log(frames.length);

  const iframe = frames[1];

  console.log(frames);
  // Wait for the dropdown to be available and select the option

  const selectElementXPATH =
    "/html/body/div[1]/div[2]/div/div[4]/div[2]/div/div[3]/select"; // The selector for your select element

  const chosenSiteValue = SalesForce.siteOptions[chosenSite];


  // const selectTag = await page.$x(selectElement);
  await iframe.$$(SalesForce.selectTagSelector);
  // await iframe.waitForNavigation(SalesForce.selectTagSelector);
  await iframe.select(SalesForce.selectTagSelector, chosenSiteValue);
  
  console.log(`chosenSiteValue: ${chosenSiteValue}`);
  broweser.close();
  console.log(`chosenSiteValue: ${chosenSiteValue}`)
  return {}

  await new Promise((resolve) => setTimeout(resolve, 10000));

  // const view100RecordsButtonSelector =
    
  // await iframe.evaluate(() => {
  //   const buttons = Array.from(
  //     document.querySelectorAll("button.btn.btn-default.btn-sm")
  //   );
  //   const targetButton = buttons.find((button) =>
  //     button.textContent?.includes("100")
  //   );
  //   if (targetButton) {
  //       targetButton.click(); // Type assertion
  //     console.log("100 clicked");
  //   }
  // });

  // Wait for the table to be available
  await iframe.waitForSelector(SalesForce.tableSelector);
  const table = await iframe.$(SalesForce.tableSelector);

  let allData = [];
  let uniqueStreets = new Set();
  const nextButtonSelector =
    "body > div > div:nth-child(2) > div > div.row.mapTable.ng-scope > div.col-lg-10.col-md-12.col-sm-12.col-xs-12 > div > div.ng-scope.ng-isolate-scope > div > ul > li.ng-scope.next > a";
  let currentPage = 1;
  let hasNextPage = true;
  
  while (hasNextPage) {
    await scrapeData(iframe, allData, uniqueStreets);

    await new Promise((resolve) => setTimeout(resolve, 4000));
      // Check if there's a next button and it's not disabled
  const nextButton = await iframe.$(nextButtonSelector);
  const isDisabled = nextButton && await iframe.evaluate(el => el.classList.contains('disabled'), nextButton);

    if (nextButton && !isDisabled) {
      await nextButton.click(); // Click the 'Next' button
      await iframe.click(nextButtonSelector);
      await iframe.waitForNavigation({ waitUntil: 'networkidle0' });

      // if (isNextButtonAvailable) {
      //   await new Promise((resolve) => setTimeout(resolve, 3000));
      //   // Click the 'Next' button and wait for the new data to load
      //   await iframe.click(nextButtonSelector);
      //   await new Promise((resolve) => setTimeout(resolve, 3000));
      // }
    } else {
      hasNextPage = false;
    }
  }


  const finalObject = {
    name: chosenSite,
    neighborhood: "to be verified",
    priorityStatus: 1,
    houses: allData,
    streets: Array.from(uniqueStreets),
  };

  await fs.writeFile(
    `${chosenSite}.json`,
    JSON.stringify(finalObject, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been created");
    }
    );
    
    await browser.close();
    return finalObject;
  }










async function handleSecondPage(iframe, dataObject) {

  const formSelector = "body > div > div:nth-child(2) > div > div > form";

  try {
    // Wait for the form to load
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await iframe.waitForSelector(formSelector);
    console.log("form loaded... ");

    // Scrape data from the form
    const formData = await iframe.evaluate(() => {
      const data = {};
      const form = document.querySelector("form[name='frmAccount']");

      // Example of extracting data - adjust selectors based on actual form structure
      const lastNameInput = form.querySelector("input[name='lastName']");
      data.lastName = lastNameInput ? lastNameInput.value : "";

      const firstNameInput = form.querySelector("input[name='firstName']");
      data.name = firstNameInput ? firstNameInput.value : "";

      const phoneInput = form.querySelector("input[name='phone']");
      data.phone = phoneInput ? phoneInput.value : "";

      const emailInput = form.querySelector("input[name='email']");
      data.email = emailInput ? emailInput.value : "";

      const notesTextarea = form.querySelector("textarea[name='note']");
      data.notes = notesTextarea ? notesTextarea.value : "";

      const statusSelect = form.querySelector("select[name='status']");
      data.statusAttempt = statusSelect ? statusSelect.value : "";

      console.log(`data: ${JSON.stringify(data)}`); // Log the data to the console
      return data;
    });

    // Map scraped data to your data object
    dataObject.lastName = formData.lastName;
    dataObject.name = formData.name;
    dataObject.phone = formData.phone;
    dataObject.email = formData.email;
    dataObject.notes = formData.notes;
    dataObject.statusAttempt = formData.statusAttempt;

    // More processing if needed

    return dataObject;

    // Navigate back or to the next action
  } catch (error) {
    console.error("Error on second page:", error);
    // Handle error or perform recovery actions
  }
}
  
  
async function scrapeData(iframe, allData, uniqueStreets) {
  await iframe.waitForSelector(SalesForce.tableSelector);

  const tableData = await iframe.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("tbody.ng-scope tr"));
    return rows
      .map((row, index) => {
        const columns = Array.from(row.querySelectorAll("td")).map(
          (column) => column.textContent?.trim() || ""
        );
        const addressSplit = columns[0].split(" ");
        const streetNumber = addressSplit[0];
        const streetName = addressSplit.slice(1).join(" ");
        const statusAttempt = columns[1];
        const consent = columns[3] ?? statusAttempt;

        return {
          goToButtonIndex: index + 2,
          streetNumber,
          streetName,
          name: "",
          lastName: " ",
          phone: "",
          email: "",
          notes: "",
          statusAttempt,
          consent,
          type: "",
        };
      })
      .filter(
        (item) =>
          item.statusAttempt === "Drop Type Unverified" ||
          item.statusAttempt === " Drop Type Unverified "
      );
  });

  

  for (const row of tableData) {
    const goToButtonSelector = `body > div > div:nth-child(2) > div > div.row.mapTable.ng-scope > div.col-lg-10.col-md-12.col-sm-12.col-xs-12 > div > table > tbody:nth-child(${row.goToButtonIndex}) > tr > td:nth-child(6) > button:nth-child(1)`;
    await iframe.waitForSelector(goToButtonSelector);
    await iframe.click(goToButtonSelector);
    const updatedRowData = await handleSecondPage(iframe, row);
    console.log(`updatedRowData: ${JSON.stringify(updatedRowData)}`);
    allData.push(updatedRowData);
    uniqueStreets.add(updatedRowData.streetName);
    //  await new Promise((resolve) => setTimeout(resolve, 3000));
     const cancelButtonSelector =
       "body > div > div:nth-child(2) > div > div > div:nth-child(2) > div.col-lg-8.col-md-8.col-sm-10.col-xs-11.label > button.button.dkgrayGrad";
     // Click the cancel button to navigate back to the main table page
     await iframe.waitForSelector(cancelButtonSelector);
     await iframe.click(cancelButtonSelector);
  }





}



module.exports = getDropTypeUnverified;


            
    