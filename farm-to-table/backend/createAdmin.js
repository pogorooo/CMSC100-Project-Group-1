require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel');

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to database.');

    const email = 'admin100@gmail.com';
    const password = 'admin100';
    const firstName = 'Admin';
    const middleName = '';
    const lastName = '100';

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create admin user with 'admin' role
    const admin = new User({
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
