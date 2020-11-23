///////////////////////////
// Environmental Variables
///////////////////////////
require("./envfunc")();

const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;
console.log(PORT);

//Bringing in Express
const express = require("express");
const app = express();
const expressVue = require("express-vue");

//OTHER IMPORTS
const session = require("express-session");
const methodOverride = require("method-override");
const morgan = require("morgan");

////////////
//MIDDLEWARE
////////////
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //comment if not using forms
// app.use(express.json()) uncomment if using json
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////

expressVue.use(app).then(() => {
  app.get("/", (req, res) => {
    //Data to use in your vue
    const data = {
      hello: "World",
    };

    //options to pass into route such as page title property
    const routeOptions = {
      head: {
        title: "Vue Express View Engine",
      },
    };

    res.renderVue("index.vue", data, routeOptions);
  });

  app.get("/hello", (req, res) => {
    res.send("hello");
  });

  //LISTENER
  app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
  });
});
