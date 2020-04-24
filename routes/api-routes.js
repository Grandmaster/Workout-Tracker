// Requirements
var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then((data) => {
      res.json(data);
    });
  });
  app.post("/api/workouts", function (req, res) {
    db.Workout.create(req.body).then((data) => {
      console.log("Successfully added data to database!");
      res.json(data).end();
    });
  });
  app.put("/api/workouts/:id", function (req, res) {
    var id = req.params.id;
    var exercise = [];
    exercise.push(req.body);
    db.Workout.findByIdAndUpdate(id, exercise, function (err, data) {
      console.log("Successfully updated document!");
      res.json(data).end();
    });
  });
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then((data) => {
      res.json(data).end();
    });
  });
};
