// app.js
const express = require('express');
const cors = require('cors');
// conecting mongodb

// initialize our express app
const server = express();
server.use(express.json());
server.use(cors());

require('./mongo')

server.use("/posts", require("./routes/todos"));

let port = 3001;
server.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});