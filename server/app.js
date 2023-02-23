const express = require('express');
const app = express();
const path = require('path');

// APIs
// app.use('/api/teams', require('./api/teams'));

// app.use(express.json());
// app.use('/dist', express.static(path.join(__dirname, '../dist')));
// app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  if (path.extname(rec.path).length) {
    const error = new Error('file not found');
    error.status = 404;
    next(error);
  } else {
    next();
  }
});

module.exports = app;
