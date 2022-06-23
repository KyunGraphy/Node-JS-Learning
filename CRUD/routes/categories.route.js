const express = require("express");
const db = require("../utils/db");

const router = express.Router();

// GET METHOD

router.get("/", async function (req, res) {
  const list = await db.load("SELECT * FROM categories");

  res.render("categories/list", {
    categories: list,
    length: list.length === 0,
  });

  // console.log(rest);
});

// router.get('/product', async function(req, res) {
//   const categories = await db.load('SELECT * FROM hssv.products')

//   res.render("categories/product", {
//     categories: categories,
//     length: categories.length === 0,
//   });
// })

router.get("/add", function (req, res) {
  res.render("categories/add", {});
});

router.get("/edit", async function (req, res) {
  const items = await db.load(`SELECT * FROM hssv.categories WHERE id = '${req.query.id}'`)
  const item = items[0]
  res.render("categories/edit", { item });
});

// POST METHOD

router.post("/update", async function (req, res) {
  const data = req.body.txtCatName;
  console.log(data);
  const id = req.body.txtCatId;
  console.log(id);
  const sql = `UPDATE hssv.categories SET product = '${data}' WHERE (id = '${id}');`
  await db.load(sql);
  // console.log(req.body);
  // console.log(req.query);
  res.redirect("/admin/categories");
});

router.post("/del", async function (req, res) {
  const data = req.body.txtCatName;
  console.log(data);
  // console.log(req.body);
  // console.log(req.query);
  const id = req.body.txtCatId;
  console.log(id);
  const sql = `DELETE FROM hssv.categories WHERE (id = '${id}');`
  await db.load(sql);
  res.redirect("/admin/categories");
});

router.post("/add", async function (req, res) {
  console.log(req.body);
  const data = req.body.txtCatName;
  // console.log(data);
  const sql = `INSERT INTO hssv.categories (product) VALUES ('${data}');`
  await db.load(sql);
  res.redirect("/admin/categories");
});

module.exports = router;
