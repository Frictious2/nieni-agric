const express = require("express");
const Index = require("./routes/index");

// CONFIG
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));


// ROUTE MIDDLEWARE
app.use("/", Index);

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`);
});
