//internal node packages
const path = require("path");

//external node packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
// const session = require("express-session");
// const MongoDbStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
// const bcrypt = require("bcryptjs");

//module imports
const util = require("./util/utility");

//app settings
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// db store
// const store = new MongoDbStore({
//   uri: process.env.MONGODB_URI,
//   collection: "session",
// });

//routers
const homeRoutes = require("./routes/home");

//models


//middlewares
// app.use(
//   session({
//     secret: "i am dewesh jha this is my code evaluation app.",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: util.examDuration },
//     store: store,
//   })
// );
app.use(flash());
app.use(multer().none());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



app.use("/",homeRoutes);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
const MONGODB_URI = process.env.MONGODB_URI||process.env.MONGODB_URI_LOCAL;
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("Connected to Database");
    app.listen(port, (req) => {
      console.log("Server Up at", port);
    });
  })
  .catch((err) => console.log(err));

