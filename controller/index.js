const nodemailer = require("nodemailer");

// CONFIG
const transport = nodemailer.createTransport({
    host: "mail.nieniagric.org",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "info@nieniagric.org",
        pass: "NieniAgricSLLTD",
    },
})

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

// SENDING EMAIL VIA CONTACT FORM
exports.sendMail = (req, res, next) => {
    // Wrap in an async IIFE so we can use await.
    (async () => {
    const sender = await transport.sendMail({
        from: "Nieni Agric Contact Page",
        to: "info@nieniagric.org",
        subject: req.body.subject,
        text: req.body.message, // plain‑text body
    });
        console.log("Response Sent", sender.messageId);
    })();

    (async () => {
        const reply = await transport.sendMail({
            from: 'Nieni Agric Ltd <info@nieniagric.org>',
            to: req.body.email,
            subject: `Response to - ${req.body.subject}`,
            html: `
            <strong>Dear ${req.body.name},</strong><br />
            <p>Thank you for sending us a message using our contact form.</p>
            <p>Rest assured that our team will look review your message and give you a suitable response
            as soon as possible.</p>

            <p>Sincerely,</p>
            <p>Nieni Agric Team</p>
            `, // plain‑text body
        });
        console.log("Message Sent", reply.messageId);
    })();
    // res.location(req.get("Referrer") || "/");
    res.redirect("/contact");
}

// SERVICES PAGE
exports.services = (req, res, next) => {
    res.render("services", {
        title: "Nieni Agriculture | Services"
    });
}
