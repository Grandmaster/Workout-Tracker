// Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  type: String,
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number,
  duration: Number,
});

const WorkOut = mongoose.model("WorkOut", WorkOutSchema);
module.exports = WorkOut;
