const mongoose = require("mongoose");

const Employee = new mongoose.Schema({
  name: { type: String, required: true },
  email:{ type: String, required: true , unique : true },
  phone:{ type: Number, required: true },
  password:{ type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', Employee);