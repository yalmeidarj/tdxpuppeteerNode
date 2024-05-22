const puppeteeer = require("puppeteer");
require("dotenv").config();
const fs = require("fs");
const SalesForce = require("./lib/utils.cjs");


async function seeding(chosenSite, username, password, data) {
    // async function updateSiteDetails(iframe) {
    //   const saveButtonSelector =
    //     "body > div > div:nth-child(2) > div > div > div:nth-child(4) > div.col-lg-8.col-md-8.col-sm-10.col-xs-11.label > button.button.orangeGrad";
    //   const nameSelector =
    //     "body > div > div:nth-child(2) > div > div > form > div:nth-child(3) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > input:nth-child(1)";
    //   const lastNameSelector =
    //     "body > div > div:nth-child(2) > div > div > form > div:nth-child(3) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > input:nth-child(3)";

    //   const phoneSelector = "#phone";

    //   const emailSelector =
    //     "body > div > div:nth-child(2) > div > div > form > div:nth-child(6) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > input";

    //   const typeSelector =
    //     "body > div > div:nth-child(2) > div > div > form > div:nth-child(12) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > select";

    //   const consentSelector =
    //     "body > div > div:nth-child(2) > div > div > form > div:nth-child(17) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > select";

    //   // const dataToFeedSF = data;
    //   console.log(`Data Object: ${data}`);

    //   console.log(
    //     `lastName: ${data.lastName}, name: ${data.name}, phone: ${data.phone}, email: ${data.email}, type: ${data.type}`
    //   );

    //   // return true;
    //   try {
    //     const formSelector = "body > div > div:nth-child(2) > div > div > form";
    //     await iframe.waitForSelector(formSelector);

    //     await new Promise((resolve) => setTimeout(resolve, 3000));

    //     const lastName = data.lastName ? data.lastName : "Last Name"
    //     const name = data.name ? data.name : "First Name"
    //     const phone = data.phone ? data.phone : "0000000000"
    //     const email = data.email ? data.email : "noreply@aecon.com"
    //     const type = data.type ? data.type : ""

    //       await iframe.focus(lastNameSelector);
    //       await iframe.keyboard.type(lastName);

    //       await iframe.focus(nameSelector);
    //       await iframe.keyboard.type(name);

    //       await iframe.focus(phoneSelector);
    //       await iframe.keyboard.type(phone);

    //       await iframe.focus(emailSelector);
    //       await iframe.keyboard.type(email);

    //     // await iframe.$eval(nameSelector, (el, value) => (el.value = value), name);

    //     // await iframe.$eval(phoneSelector, (el, value) => (el.value = value), phone);

    //     // await iframe.$eval(emailSelector, (el, value) => (el.value = value), email);

    //     // Select dropdowns and checkboxes
    //     await iframe.waitForSelector(typeSelector);
    //     await iframe.select(typeSelector, data.type);
    //     console.log("Type selected:", data.type);

    //     const statusSelector =
    //         "body > div > div:nth-child(2) > div > div > form > div:nth-child(13) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > select";
    //     await iframe.waitForSelector(statusSelector);
    //     await iframe.select(statusSelector, data.statusAttempt);
    //     if (data.consent === "Yes" || data.consent === "No") {
    //       await iframe.waitForSelector(consentSelector);
    //       await iframe.select(consentSelector, data.consent);
    //     }

    //     await iframe.waitForSelector(saveButtonSelector);
    //     await iframe.click(saveButtonSelector);
    //     return true;

    //   } catch (error) {
    //     console.error("Error updating site details:", error);
    //   }
    // }
    console.log("main function running...");
    const browser = await puppeteeer.launch({
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXEUTABLE_PATH
        : puppeteeer.executablePath(),

    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

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

  await new Promise((resolve) => setTimeout(resolve, 35000));
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

  // Wait for a reasonable amount of time for table data to load (consider reducing or adjusting this)

  // Loop through each data item
  for (let i = 0; i < data.length; i++) {
    // const selectTag = await page.$x(selectElement);
    await iframe.$$(SalesForce.selectTagSelector);
    // await iframe.waitForNavigation(SalesForce.selectTagSelector);
    const site = SalesForce.siteOptions[chosenSite];
    await iframe.select(SalesForce.selectTagSelector, site);

    // Wait for the table to be available
    await iframe.waitForSelector(SalesForce.tableSelector);
    const table = await iframe.$(SalesForce.tableSelector);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const addressToSearch = data[i].streetNumber + " " + data[i].street;
    let isAddressFound = false;
    let hasNextPage = true;

    while (hasNextPage) {
      const rows = await table.$$("tbody > tr"); // Adjusted to select rows within each tbody
      console.log(`Total rows: ${rows.length}`);
      // Loop through each row in the table
      for (const row of rows) {
        const cells = await row.$$("td");

        // Ensure there are enough cells and the address cell exists
        if (cells.length > 0) {
          const address = await cells[0].evaluate((cell) =>
            cell.innerText.trim()
          );
          // console.log(`Looking for ${addressToSearch}, found ${address}`);

          // Compare the addresses
          if (address === addressToSearch) {
            console.log("Found address!");
            // Click the link to open the record
            const goToRecordButton = await cells[cells.length - 1].$(
              "button:first-of-type"
            );

            await goToRecordButton.click();
            await new Promise((resolve) => setTimeout(resolve, 5000));
            console.log("Clicked go to record button");
            console.log(data[i]);
            // const dataToFeedSF = data[i];
            // const isUpdated = await updateSiteDetails(iframe);
            const saveButtonSelector =
              "body > div > div:nth-child(2) > div > div > div:nth-child(4) > div.col-lg-8.col-md-8.col-sm-10.col-xs-11.label > button.button.orangeGrad";
            const nameSelector =
              "body > div > div:nth-child(2) > div > div > form > div:nth-child(3) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > input:nth-child(1)";
            const lastNameSelector =
              "body > div > div:nth-child(2) > div > div > form > div:nth-child(3) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > input:nth-child(3)";

            const phoneSelector = "#phone";

            const emailSelector =
              "body > div > div:nth-child(2) > div > div > form > div:nth-child(6) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > input";

            const typeSelector =
              "body > div > div:nth-child(2) > div > div > form > div:nth-child(12) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > select";

            const consentSelector =
              "body > div > div:nth-child(2) > div > div > form > div:nth-child(17) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > select";

            // const dataToFeedSF = data;
            console.log(`Data Object: ${ await data[i]}`);

            console.log(
              `lastName: ${data[i].lastName},
                name: ${data[i].name},
                phone: ${data[i].phone},
                email: ${data[i].email},
                type: ${data[i].type},
                statusAttempt: ${data[i].statusAttempt},
                consent: ${data[i].consent}
              `
            );

            // return true;
            try {
              const formSelector =
                "body > div > div:nth-child(2) > div > div > form";
              await iframe.waitForSelector(formSelector);

              await new Promise((resolve) => setTimeout(resolve, 3000));

              const lastName = data[i].lastName
                ? data[i].lastName
                : "Last Name";
              const name = data[i].name ? data[i].name : "First Name";
              const phone = data[i].phone ? data.phone : "0000000000";
              const email = data[i].email
                ? data[i].email
                : "noreply@aecon.com";
              const constructionType = data[i].type ? data[i].type : "";

              await iframe.focus(lastNameSelector);
              await iframe.keyboard.type(lastName);

              await iframe.focus(nameSelector);
              await iframe.keyboard.type(name);

              await iframe.focus(phoneSelector);
              await iframe.keyboard.type(phone);

              await iframe.focus(emailSelector);
              await iframe.keyboard.type(email);

              // await iframe.$eval(nameSelector, (el, value) => (el.value = value), name);

              // await iframe.$eval(phoneSelector, (el, value) => (el.value = value), phone);

              // await iframe.$eval(emailSelector, (el, value) => (el.value = value), email);

              // Select dropdowns and checkboxes
              await iframe.waitForSelector(typeSelector);
              await iframe.select(typeSelector, data[i].type);
              console.log("Type selected:", data[i].type);

              const statusSelector =
                "body > div > div:nth-child(2) > div > div > form > div:nth-child(13) > div.col-lg-5.col-md-5.col-sm-6.col-xs-7.input > select";
              await iframe.waitForSelector(statusSelector);
              await iframe.select(statusSelector, data[i].statusAttempt);
              if (data[i].consent === "Yes" || data[i].consent === "No") {
                await iframe.waitForSelector(consentSelector);
                await iframe.select(consentSelector, data[i].consent);
              }

              await iframe.waitForSelector(saveButtonSelector);
              await iframe.click(saveButtonSelector);
                            console.log("Site details updated!");
              await new Promise((resolve) => setTimeout(resolve, 7000));

              
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

              isAddressFound = true;
              break; // Break the inner loop as address is found
                  } catch (error) {
                    console.error("Error updating site details:", error);
                  }
            // if (isUpdated) {

            // } else {
            //   console.log("Error updating site details.");
            // }
          }
        } else {
          console.log("Row does not have enough cells.");
        }
      }

      if (isAddressFound) {
        break; // Break the pagination loop as well
      }

      // Check if the 'Next' button is available and not disabled
      const isNextButtonAvailable = await iframe.evaluate(() => {
        const nextButton = document.querySelector('a[ng-switch-when="next"]');
        return nextButton && !nextButton.classList.contains("ng-hide");
      });

      if (isNextButtonAvailable) {
        // Click the 'Next' button and wait for the new data to load
        await iframe.click('a[ng-switch-when="next"]');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Adjust timeout as necessary
      } else {
        hasNextPage = false;
        break;
      }
    }

    if (!isAddressFound) {
      console.log(`Address ${addressToSearch} not found in the table.`);
    }
  }

  // Close the browser
  // await browser.close();


}
// read the data from the file at c:\Users\yalme\Desktop\Start\TDX-BOT\toFeedSF\data-to-feed-SF.csv
const data = fs.readFileSync("data-to-feed-SF.csv", "utf8");
// Replace carriage return characters
const cleanData = data.replace(/[\r\t]/g, "");
// split the data into an array of objects

const dataArr = cleanData.split("\n").map((row) => {
  const [
    id,
    streetNumber,
    lastName,
    name,
    notes,
    salesForceNotes,
    phone,
    email,
    type,
    streetId,
    locationId,
    lastUpdated,
    lastUpdatedBy,
    statusAttempt,
    consent,
    street,
    location,
  ] = row.split(",");
  return {
    id,
    streetNumber,
    lastName,
    name,
    notes,
    salesForceNotes,
    phone,
    email,
    type,
    streetId,
    locationId,
    lastUpdated,
    lastUpdatedBy,
    statusAttempt,
    consent,
    street,
    location,
  };
});

// Remove the first record
dataArr.shift();

// Remove the last record
dataArr.pop();

// console.log(dataArr);



module.exports = seeding;