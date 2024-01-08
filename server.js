const express = require('express');
const bot = require('./bot');
const app = express();

app.get('/', async(req, res) => {
    const response = await bot()
  res.send(response);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
