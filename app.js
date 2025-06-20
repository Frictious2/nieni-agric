const express = require("express");

// CONFIG
require("dotenv").config();
const app = express();

app.set("view enggine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`);
});
