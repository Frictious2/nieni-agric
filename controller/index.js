// HOMEPAGE
exports.home = (req, res, next) => {
    res.render("index", {
        title: "Nieni Agriculture | Homepage"
    });
}

// ABOUT US PAGE
exports.about = (req, res, next) => {
    res.render("about", {
        title : "Nieni Agriculture | About"
    });
}

// CONTACT US PAGE
exports.contact = (req, res, next) => {
    res.render("contact", {
        title : "Nieni Agriculture | Contact Us"
    });
}

// SERVICES PAGE
exports.services = (req, res, next) => {
    res.render("services", {
        title: "Nieni Agriculture | Services"
    });
}
