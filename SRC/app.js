const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path   = require("path");

const app = express();

const routes = require("./Routes/main");
const details = require("./models/user");

// app.use('/static', express.static("../public"));// with this we can have static objects into our page  
app.use("/static", express.static(path.join(__dirname, "/public")));
// const  staticpath = path.join(__dirname, "../public");
// app.use(express.static(staticpath))
app.use("", routes);

// template engine

app.set('view engine', 'hbs');// by this line we are telling that our view engine is 'hbs'
app.set("views", "views"); // second view is folder name
hbs.registerPartials("views/partials")
// hbs.registerPartial('Navbar', '{{prefix}}');
// hbs.registerPartial('myPartial', '{{prefix}}');


//Db connection
mongoose.connect("mongodb://localhost/DynamicProject")
  .then(() => {
    console.log("Database is connected");
    // details.create({
    //   brandName : "SailorScript",
    //   brandIconurl : "https://fabrikbrands.com/wp-content/uploads/The-Best-Logos-Of-All-Time-2.png",
    //   links : [{
    //     label : "Home",
    //     url : "/Home"
    //   },
    //  {
    //     label : "Services",
    //     url : "/Serivices"
    //   },
    //  {
    //     label : "Gallery",
    //     url : "/gallery"
    //   },
    //  {
    //     label : "About",
    //     url : "/about"
    //   },
    //  {
    //     label : "Contact US",
    //     url : "/contact-us"
    //   },
    // ]
    // })
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });



app.listen(process.env.PORT || 4545, () =>{
    console.log("Server Started");
})
