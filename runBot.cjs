// runBot.cjs
const bot = require("./bot.cjs");

const chosenSite = "PCNGON62_1042A";
// const chosenSite = "GMLYON20_3876A";





const username = "yalmeida.rj@gmail.com";
const password = "rYeEsydWN!8808168eXkA9gV47A";
  
bot(chosenSite, username, password)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
