// HOMEPAGE
exports.home = (req, res, next) => {
    res.render("index", {
        title: "Nieni Agriculture | Homepage"
    });
}