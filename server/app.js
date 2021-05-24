const express = require('express');
const cors = require('cors');
const server = express();
const gamesController = require('./controllers/games-controller');
const PORT = process.env.PORT || 3001;

require("./data-access-layer/dal");
server.use(cors());
server.use(express.json());

server.use('/api/games' , gamesController);

// server.use(express.static("build"));

// server.get("*", (request, response) => {
//   response.sendFile(path.join(__dirname, "build", "index.html"));
// });

const app = server.listen(PORT, () => {
    const port = app.address().port;
    console.log("Express is working on port " + port);
  });