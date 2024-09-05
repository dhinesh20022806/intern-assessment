const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  lName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  phoneNumber: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
