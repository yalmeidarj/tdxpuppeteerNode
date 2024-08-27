// runBot.cjs
const bot = require("./bot.cjs");
const chosenSite = "GMLYON20_3971A"


const username = "yalmeida.rj@gmail.com";
const password = "!88081647ydA";
  
bot(chosenSite, username, password)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
