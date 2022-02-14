const express = require("express");
const cors = require("cors");

// initialize server
const app = express();
const PORT = process.env.PORT || 4000;

// mount middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// start server
const startServer = async () => {
  try {
    await app.listen(PORT);
    console.log(`Successfully started server on port:${PORT}`)
  } catch (err) {
    console.log("Error starting server", err);
  }
};

startServer();
