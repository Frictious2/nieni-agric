const express = require("express");
const index = require("../controller/index");

// CONFIG
const route = express.Router();

// ROUTES
// HOMEPAGE
route.get("/", index.home);

// ABOUT US
route.get("/about", index.about);

// SERVICES
route.get("/services", index.services);

// CONTACT US
route.get("/contact", index.contact);


// MODULE
module.exports = route;
