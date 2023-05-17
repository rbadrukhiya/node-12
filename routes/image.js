var express = require('express');
var router = express.Router();
const multer  = require('multer')
var model = require('../models/register')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage})


router.post('/', upload.single('file'), async  function(req, res, next) {
  // try{
    console.log(req.file.originalname)
    // var obj = {
    //   "dimage":req.file.originalname,
    //   "name":req.body.name
    // }
    // data = await model.create( obj);
    // res.status(201).json({
    //     status:'success',
    //     data
    // })
});


module.exports = router;
