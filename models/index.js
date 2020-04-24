"use strict";

var fs = require("fs");
var path = require("path");
var mongoose = require("mongoose");
var basename = path.basename(module.filename);
var db = {};

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    db.Workout = require("./" + file);
  });
//   .forEach(function (file) {
//     var model = sequelize["import"](path.join(__dirname, file));
//     db[model.name] = model;
//   });
module.exports = db;
