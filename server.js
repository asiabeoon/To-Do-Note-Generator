const express = require('express');
const path = require('path');
const api = require('./routes/api/apiroutes.js');
const index = require('./routes/index');
// const api = require('./routes/newnotes');
// above not defined

const PORT = process.env.port || 4092;

const app = express();

// *GET Route for homepage index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// *GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Express Middleware parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
// app.use('/', index.js);
// above api and index not defined

app.use(express.static('public'));



// *Listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

