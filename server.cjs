const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const PORT = process.env.PORT || 7000;
const getConsentFinal = require("./getConsentFinal.cjs");
const bot = require("./bot.cjs");
// Setting up CORS to allow requests from localhost:3000
const io = new Server(server, {
  cors: {
    // origin for local development and production
    origin: ["http://localhost:3000", "https://tdx-server-actions.vercel.app"],
    
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
  
  socket.on("getAllSiteData", async (data) => {
    try {
      const response = await bot(data.chosenSite, data.username, data.password);
      socket.emit("AllTableData", { success: true, data: response });
    } catch (error) {
      socket.emit("AllTableData", { success: false, error: error.message });
    }
  });



  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

});



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});