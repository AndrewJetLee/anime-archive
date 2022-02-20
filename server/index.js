const express = require("express");
const cors = require("cors");
const animeRouter = require("./routers/anime");
const mangaRouter = require("./routers/manga");
const userRouter = require("./routers/user");
const connectToDb = require("./db");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

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

// session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.DB_STRING}),
  resave: false,
  saveUninitialized: true,
}));

// passport 
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

// assign routers
app.use("/api/anime", animeRouter);
app.use("/api/manga", mangaRouter);
app.use("/api/user", userRouter);

// connect to db
connectToDb()

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
