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

// CONTACT US POST REQUEST
route.post("/contact", index.sendMail);

// MODULE
module.exports = route;
