//do not push
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // role can be either 'user' or 'admin'
    default: 'user' // default role is 'user'
  }
});

const User=mongoose.model("users", userSchema);
module.exports = User;
