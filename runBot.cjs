// runBot.cjs
const bot = require("./bot.cjs");
// const chosenSite = "PCNGON62_1022A";
// const chosenSite = "PCNGON62_1041D";

const chosenSite = "PCNGON62_1062A";





const username = "yalmeida.rj@gmail.com";
const password = "rYeEsydWN!8808168eXkA9gV47A";
  
bot(chosenSite, username, password)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
