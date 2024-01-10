var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017");

let userSchema = mongoose.Schema({
      username : String,
      age : Number,
      name : String
})

module.exports = mongoose.model("user",userSchema);
