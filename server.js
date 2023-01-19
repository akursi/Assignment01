/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ahmed Kursi Student ID: 151252210 Date: Jan 19, 20223
*
*  Online (Cyclic) URL: https://blue-woodpecker-hat.cyclic.app/
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Ahmed Kursi - 151252210");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);