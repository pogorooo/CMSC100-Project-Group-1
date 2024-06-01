require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const users = require('./src/models/user.model');
const { connectDb } = require("./src/config/db");

const uri = "mongodb+srv://cmsc1000:cmsc1000@cmsc100.srhrzaq.mongodb.net/?retryWrites=true&w=majority&appName=CMSC100";
// connect to MongoDB
mongoose.connect(uri)
  .then(async () => {
    console.log('Connected to database.');

    const email = 'admin100@cmsc.com';
    const password = 'admin100';
    const firstName = 'Admin';
    const middleName = '';
    const lastName = '100';

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create admin user with 'admin' role
    const admin = new users({
      firstName,
      middleName,
      lastName,
      email,
      password: hash,
      role: 'admin'
    });

    await admin.save();
    console.log('Admin account created.');

    // close database connection
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('Database connection error:', error);
  });
