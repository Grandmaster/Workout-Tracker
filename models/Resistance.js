// Mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

const Resistance = mongoose.model("Workout", ResistanceSchema);
module.exports = Resistance;
