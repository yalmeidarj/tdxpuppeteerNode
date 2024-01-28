const puppeteeer = require("puppeteer");
require("dotenv").config();
const fs = require("fs");
const SalesForce = require("./lib/utils.cjs");
 


// bot should take a site name, and credentials (username, password) as arguments
async function getConsentFinal(chosenSite, username, password) {
  const browser = await puppeteeer.launch({
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXEUTABLE_PATH
        : puppeteeer.executablePath(),

    headless: "new",
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

  await new Promise((resolve) => setTimeout(resolve, 65000));
  // Wait for the iframe to load

  const frames = await page.frames();
  // console.log(frames);
  console.log(frames.length);

  const iframe = frames[1];

  console.log(frames);
  // Wait for the dropdown to be available and select the option

  const selectElementXPATH =
    "/html/body/div[1]/div[2]/div/div[4]/div[2]/div/div[3]/select"; // The selector for your select element

    // const chosenSiteValue = SalesForce.siteOptions[chosenSite];
    // console.log(`chosenSiteValue: ${chosenSiteValue}`);
    

  // const selectTag = await page.$x(selectElement);
  await iframe.$$(SalesForce.selectTagSelector);
  // await iframe.waitForNavigation(SalesForce.selectTagSelector);
  await iframe.select(SalesForce.selectTagSelector, chosenSite);

  await new Promise((resolve) => setTimeout(resolve, 10000));

  const view100RecordsButton = await iframe.waitForSelector(
    "button.btn.btn-default.btn-sm"
  );

  await iframe.evaluate(() => {
    const buttons = Array.from(
      document.querySelectorAll("button.btn.btn-default.btn-sm")
    );
    const targetButton = buttons.find((button) =>
      button.textContent?.includes("100")
    );
    if (targetButton) {
      targetButton.click(); // Type assertion
      console.log("100 clicked");
    }
  });

  // Wait for the table to be available
  await iframe.waitForSelector(SalesForce.tableSelector);
  const table = await iframe.$(SalesForce.tableSelector);

  let allData = [];
  let uniqueStreets = new Set();
  let hasNextPage = true;
  let chosenSiteName = "";

  while (hasNextPage) {
    // Wait for the table to be available
    await iframe.waitForSelector(SalesForce.tableSelector);

    const tableData = await iframe.evaluate(() => {
      const rows = Array.from(document.querySelectorAll("tbody.ng-scope tr"));
      return rows
        .map((row) => {
          const columns = Array.from(row.querySelectorAll("td")).map(
            (column) => column.textContent?.trim() || ""
          );
          const siteName = columns[2];
          const addressSplit = columns[0].split(" ");
          const streetNumber = addressSplit[0];
          const streetName = addressSplit.slice(1).join(" ");

          const statusAttempt = `${columns[1]} ${columns[3]}`;
          const consent = columns[3] ?? statusAttempt;
          const status =
            columns[1] === "Consent Final"
              ? `${columns[1]} ${columns[3]}`
              : columns[1];

          // // Add the street name to the unique streets set
          // uniqueStreets.add(streetName);

          return {
            streetNumber,
            streetName,
            lastName: "", // You'll need to adjust based on your data
            name: "", // Adjust as needed
            phone: "", // Adjust as needed
            email: "", // Adjust as needed
            notes: "", // Adjust as needed
            statusAttempt: status,
            consent: consent,
            type: "",
            siteName,
          }; // filter by statusAttempt
        })
        .filter(
          (item) =>
            item.statusAttempt === "Drop Type Unverified" ||
            item.statusAttempt === " Drop Type Unverified " ||
            item.statusAttempt === "Consent Final" ||
            item.statusAttempt === "Consent Final Yes" ||
            item.statusAttempt === "Site Visit Required" ||
            item.statusAttempt === " Site Visit Required " ||
            item.statusAttempt === "Consent Final No"
        );


    });

    // If chosenSiteName is not set, get it from the first row of the current page
    if (!chosenSiteName && tableData.length > 0) {
        chosenSiteName = tableData[0].siteName;
    }



    // Process and treat the data outside of the evaluate function
    tableData.forEach((item) => {
      uniqueStreets.add(item.streetName);
      allData.push({
        streetNumber: item.streetNumber,
        lastName: "", // Adjust as needed
        name: "", // Adjust as needed
        phone: "", // Adjust as needed
        email: "", // Adjust as needed
        notes: "", // Adjust as needed
        statusAttempt: item.statusAttempt,
        consent: item.consent,
        type: "", // Adjust as needed
        street: item.streetName,
      });
    });

    // Check if the 'Next' button is available and not disabled
    const isNextButtonAvailable = await iframe.evaluate(() => {
      const nextButton = document.querySelector('a[ng-switch-when="next"]');
      return nextButton && !nextButton.classList.contains("ng-hide");
    });

    if (isNextButtonAvailable) {
      // Click the 'Next' button and wait for the new data to load
      await iframe.click('a[ng-switch-when="next"]');
      await iframe.waitForTimeout(5000); // Adjust timeout as necessary
    } else {
      hasNextPage = false;
    }
  }

  // Construct the final object
  const finalObject = {
    name: chosenSiteName,
    neighborhood: "to be verified",
    priorityStatus: 1,
    houses: allData,
    streets: Array.from(uniqueStreets),
  };

    // write to file
   
    // name it with the chosenSite
    // const data = JSON.stringify(finalObject, null, 2);
    // fs.writeFileSync(`./${chosenSite}.json`, data);
    // console.log("JSON data is saved.");
    

  await browser.close();

  return finalObject;
}

module.exports = getConsentFinal;
