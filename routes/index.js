const path = require('path');
const app = require = require('express').Router()

// ****** Get Route for index homepage *****
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// ****** Get Route public note.html *****
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = app;

// const express = require('express');

// // Import our modular routers for /tips and /feedback
// const tipsRouter = require('./tips');
// const feedbackRouter = require('./feedback');

// const app = express();

// app.use('/tips', tipsRouter);
// app.use('/feedback', feedbackRouter);

// module.exports = app;