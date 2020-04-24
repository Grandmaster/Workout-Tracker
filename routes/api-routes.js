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
      res.json(data).end();
    });
  });
  app.put("/api/workouts/:id", function (req, res) {
    var id = req.params.id;
    var day = Date.now();
    var exercise = [];
    exercise.push(req.body);
    var update = { day, exercise };
    db.Workout.findByIdAndUpdate(id, update, { new: true }, function (
      err,
      data
    ) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then((data) => {
      res.json(data).end();
    });
  });
};
