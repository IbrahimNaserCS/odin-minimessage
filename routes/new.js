const { Router } = require("express");
const { iR, m } = require("./index");
const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form", { title: "Mini Messageboard", messages: m });
});

newRouter.post("/", (req, res) => {
    m.push({ text: req.body.messageText, user: req.body.authorName, added: new Date() });
    res.redirect("/");
});
  
module.exports = newRouter;