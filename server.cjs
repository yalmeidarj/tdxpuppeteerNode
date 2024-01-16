// const express = require('express');
// const bot = require('./bot.cjs');
// const  getDropTypeUnverified  = require('./getDropType.cjs');
// const  getConsentFinal = require('./getConsentFinal.cjs');
// const app = express();



// // create a GET route, and read the query string parameters
// app.get('/search', async(req, res) => {
//     const { chosenSite, username, password } = req.query;

//     // call the bot function, and pass in the query string parameters
  
  
//   try {
//     const response = await bot(chosenSite, username, password)

//     res.send({
//       success: true,
//       data: response,
//     });
//   } catch (error) {
//     res.send({
//       error: error.message,
//     })
//   }

// });


// app.get('/getDropTypes', async (req, res) => {
//   const { chosenSite, username, password } = req.query;
//     try {
//       const response = await getDropTypeUnverified(chosenSite, username, password)
//       res.send({
//         success: true,
//         data: response,
//       });
//     } catch (error) {
//       res.send({
//         error: error.message,
//       })
//   }
// }
// )
// app.get('/getConsentFinal', async (req, res) => {
//   const { chosenSite, username, password } = req.query;
//     try {
//       const response = await getConsentFinal(chosenSite, username, password)
//       res.send({
//         success: true,
//         data: response,
//       });
//     } catch (error) {
//       res.send({
//         error: error.message,
//       })
//   }
// }
// )

// const PORT = process.env.PORT || 7000;

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}...`);
// });

// http://localhost:7000/getDropTypes?chosenSite=TNHLON40_1021A&username=yalmeida.rj@gmail.com&password=rYeEsydWN!8808168eXkA9gV47A
// http://localhost:7000/
// /search?chosenSite=59&username=yalmeida.rj@gmail.com&password=rYeEsydWN!8808168eXkA9gV47A

// //

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const PORT = process.env.PORT || 7000;
const getConsentFinal = require("./getConsentFinal.cjs");

// Setting up CORS to allow requests from localhost:3000
const io = new Server(server, {
  cors: {
    origin: "https://tdx-server-actions.vercel.app",
    methods: ["GET", "POST"],
  },
});

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

    socket.on("getConsentFinal", async (data) => {
      try {
        const response = await getConsentFinal(
          data.chosenSite,
          data.username,
          data.password
        );
        socket.emit("botResponse", { success: true, data: response });
      } catch (error) {
        socket.emit("botResponse", { success: false, error: error.message });
      }
    });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

});



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});