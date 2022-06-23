const express = require("express");
const db = require("../utils/db");

const router = express.Router();

// GET METHOD

router.get("/", async function (req, res) {
  const sql = `SELECT * FROM hssv.products;`;
  const list = await db.load(sql);
  // console.log(list);
  res.render("products/productList", {
    list,
    length: list.length === 0,
  });
});

router.get("/add", function (req, res) {
  res.render("products/add");
});

// POST METHOD

router.post("/add", async function (req, res) {
  const sql = `INSERT INTO hssv.products (ProductName, Price, Rest) VALUES ('${req.body.txtProName}', '${req.body.txtProPrice}', '${req.body.txtProRest}');`;
  await db.load(sql);
//   console.log(req.body);
  res.redirect("/admin/product");
});

module.exports = router;
