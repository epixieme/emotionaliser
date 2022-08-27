
const express = require("express");
const expressLayouts = require("express-ejs-layouts"); //prevents us having to duplicate code in ejs
const fileUpload = require("express-fileupload"); // file uploads for local
const session = require("express-session"); 
const cookieParser = require("cookie-parser");
const flash = require("connect-flash"); // flash messages - optional install
const cors = require('cors') // cors to allow heroku
const app = express(); 
const port = process.env.PORT || 2000;
require("dotenv").config();

const homePage= require("./routes/main"); // get hopage route
const signUpRoutes = require("./routes/signUpRoutes")
app.use(cors());
app.use(fileUpload());// for local file uploads
app.use(flash());
app.use(express.urlencoded({ extended: true })); // helps us pass url data to ejs
app.use(express.json());
app.use(express.static("public")); // hosts public fiels like html and css or main.js
app.use(expressLayouts);

app.use(cookieParser("EmotionBlogSecure"));

app.use(
  session({
    secret: "EmotionBlogSecretSession",
    saveUninitialized: true,
    resave: true,
  })
);

app.set("layout", "./layouts/main"); // sets  and changes the location for ejs layouts - by default it uses layout.ejs ./one directory backwards

app.set("view engine", "ejs");

// *****************************************
// use routes
// ******************************************

app.use("/", homePage ); //use the route
app.use("/signup", signUpRoutes );
// app.use("/dashboard/tools", supportToolsRoutes)
// app.use("/dashboard/tools/thoughtDiary", thoughDiaryRoutes); //use the route

app.listen(port, () => console.log(`listening to port $`));


