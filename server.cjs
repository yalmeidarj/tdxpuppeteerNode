const express = require('express');
const bot = require('./bot.cjs');
const app = express();

// app.get('/', async(req, res) => {
//     const response = await bot()
//   res.send(response);
// });

// create a GET route, and read the query string parameters
app.get('/search', async(req, res) => {
    const { chosenSite, username, password } = req.query;

    // call the bot function, and pass in the query string parameters
  const response = await bot(chosenSite, username, password)
  res.send(response);
});


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


// http://localhost:7000/search?chosenSite=59&username=yalmeida.rj@gmail.com&password=rYeEsydWN!8808168eXkA9gV47A