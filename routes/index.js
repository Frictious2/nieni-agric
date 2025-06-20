const express = require("express");
const index = require("../controller/index");

// CONFIG
const route = express.Router();

// ROUTES
// HOMEPAGE
route.get("/", index.home);


// MODULE
module.exports = route;
