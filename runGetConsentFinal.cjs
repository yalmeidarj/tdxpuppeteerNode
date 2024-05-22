// runGetConsentFinal.cjs
const getConsentFinal = require("./getConsentFinal.cjs");
// const chosenSite = "KNBGON21_1811A"; //
// const chosenSite = "TNHLON40_4134A"; //
// const chosenSite = "GMLYON20_3042A"; //
// const chosenSite = "GMLYON20_3973A"; //
// const chosenSite = "GMLYON20_3116A"; //
// const chosenSite = "RMHLON34_3032A"; //
// const chosenSite = "TNHLON40_4132A"; //

// const chosenSite = "RMHLON34_3223A"; //
// const chosenSite = "PCNGON62_1062A"; //
// const chosenSite = "PCNGON62_1041D"; //
// const chosenSite = "PCNGON62_1022A"; //
// const chosenSite = "JKVLON05_1048A"; //
// const chosenSite = "PCNGON62_1042A"; // 
const chosenSite = "GMLYON20_3876A"; // 

// const sitesArray = [
// "GMLYON20_3042A",
// "GMLYON20_3116A",
// "GMLYON20_3973A",
// "KNBGON21_1811A",
// "RMHLON34_3032A",
// "TNHLON40_4132A",
// "TNHLON40_4134A",
// "PCNGON62_1062A",
// "PCNGON62_1041D",
// "PCNGON62_1022A",
//"RMHLON34_3223A",
//"JKVLON05_1048A"
// ]

const username = "yalmeida.rj@gmail.com";
const password = "rYeEsydWN!8808168eXkA9gV47A";

// for (let i = 0; i < sitesArray.length; i++) {
//   getConsentFinal(sitesArray[i], username, password)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// }
getConsentFinal(chosenSite, username, password)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
 