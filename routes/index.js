var express = require('express');
var router = express.Router();
const userModel = require('./users');
/* GET home page. */
router.get("/",(req,res)=>{
   res.cookie("age", 25)
    res.render('index',{title : "index"})
})
router.get("/read",function(req,res){
    console.log(req.cookies.age)
    res.send("Check")
})
router.get("/delete",function(req,res){
    res.clearCookie("age")
    res.send("Check Karle delete Hogayi")
})

module.exports = router;
