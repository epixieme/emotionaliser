
const express = require("express");
const expressLayouts = require("express-ejs-layouts"); //prevents us having to duplicate code in ejs
const cookieParser = require("cookie-parser");
// const flash = require("connect-flash"); // flash messages - optional install
const cors = require('cors') // cors to allow heroku
const app = express(); 
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const dashboardRoutes = require("./routes/dashboard");
const thoughtDiaryRoutes = require("./routes/thoughtDiary");
const motivationsRoutes = require("./routes/motivations");
const bookmarkRoutes = require("./routes/bookmarks");
const profileRoutes = require("./routes/profile");


// const port = process.env.PORT || 2000;

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");
app.use(cors());


//Body Parsing
app.use(express.urlencoded({ extended: true })); // helps us pass url data to ejs
app.use(express.json());
//Logging
app.use(logger("dev"));
//  static folder hosts public fields like html and css or main.js
app.use(express.static("public")); 

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

app.use(cookieParser("EmotionBlogSecure"));

// ejs layouts
app.use(expressLayouts);
app.set("layout", "./layouts/main"); // sets  and changes the location for ejs layouts - by default it uses layout.ejs ./one directory backwards


// *****************************************
// use routes
// ******************************************


app.use("/", mainRoutes); //use the route
app.use("/dashboard", dashboardRoutes); //use the route
app.use("/dashboard/profile", profileRoutes); //use the route
app.use("/dashboard/tools/thoughtdiary", thoughtDiaryRoutes);
app.use("/dashboard/bookmarks", bookmarkRoutes);
app.use("/dashboard/tools/motivations", motivationsRoutes);
// app.use("/login", login ); //use the route


// app.use("/dashboard/tools", supportToolsRoutes)
// app.use("/dashboard/tools/thoughtDiary", thoughDiaryRoutes); //use the route

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
