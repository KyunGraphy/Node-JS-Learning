const multer = require("multer");
const sharp = require("sharp");
const engine = require('express-handlebars');
const express = require('express');
/* create folder uploads ngang hàng với file app.js */
const app = express()

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/imgProducts')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.JPG')
  }
})
 
const upload = multer({ storage: storage })

app.get("/", function (req, res) {
  res.render('home', {
    layout: false,
  })
})
/* upload.any() sử dụng func này chúng ta có thể upload được nhiều file */
app.post("/upload_image", upload.any(), function (req, res, next) {
  console.log(req.body);
  console.log('----------------');
  console.log(req.files);
  if (!req.body && !req.files) {
    res.json({ success: false });
  } else {
    /* res.json({ success: true, files: req.files }); */
    /* req.files các file upload return về một array, qua đó chúng ta có thể dễ dàng xử lý  */
    /* chú ý: nhớ rename file lại không nữa sinh ra lỗi. ở đay mình rename theo kích thuước mình resize. */
    sharp(req.files[0].path)
      .resize(262, 317)
      .toFile(
        "./uploads/" + "262x317-" + req.files[0].filename,
        function (err) {
          if (err) {
            console.error("sharp>>>", err);
          }
          console.log("ok okoko");
        }
      );
  }
});


app.listen(3000);