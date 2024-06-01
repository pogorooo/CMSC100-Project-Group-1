const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// function to create a JWT token
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' });
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({email, token, role: user.role});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {firstName, middleName, lastName, email, password} = req.body;

  try {
    const user = await User.signup(firstName, middleName, lastName, email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({email, token, role: user.role});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = { signupUser, loginUser };
