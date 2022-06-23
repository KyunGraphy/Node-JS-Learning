const newsRouter = require("./news.route");
const homeRouter = require("./home.route");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/home", homeRouter);

  // app.get('/news', (req, res) => {
  //     res.render('news');
  // });

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.get("/", function (req, res) {
    res.send("Hello World");
  });
}

module.exports = route;
