// runBot.cjs
const bot = require("./bot.cjs");

  const chosenSite = "TNHLON40_4212A";
  const username = "yalmeida.rj@gmail.com";
const password = "rYeEsydWN!8808168eXkA9gV47A";
  
bot(chosenSite, username, password)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
