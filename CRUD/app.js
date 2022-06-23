const express = require("express");
const exhbs = require("express-handlebars");

const app = express();
app.use(express.urlencoded({
  extended: true
}))


app.engine(".hbs", exhbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("home");
});

const categoryRouter = require('./routes/categories.route');
app.use('/admin/categories', categoryRouter)

const productRouter = require('./routes/product.route');
app.use('/admin/product', productRouter)

app.listen(3000);
