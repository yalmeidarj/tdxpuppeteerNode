const seeding = require("./seeding.cjs");
require("dotenv").config();
const fs = require("fs");
const SalesForce = require("./lib/utils.cjs");

const data = fs.readFileSync("t.csv", "utf8");
// Replace carriage return characters
const cleanData = data.replace(/[\r\t]/g, "");

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

const username = "yalmeida.rj@gmail.com";
const password = "rYeEsydWN!8808168eXkA9gV47A";

seeding("TNHLON40_4134A", SalesForce.username, SalesForce.password, dataArr)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));