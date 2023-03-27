'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create the express app
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const fakeDB = [
  { description: '1', done: true },
  { description: '12', done: false },
  { description: '123', done: true },
  { description: '1234', done: false },
  { description: '12345', done: false },
  { description: '123456', done: false },
];

// Routes and middleware
app.get('/list', (req, res) => {
  res.json(fakeDB);
});

app.post('/add', (req, res) => {
  const listItem = req.body;
  fakeDB.push(listItem);

  res.json(fakeDB);
});

app.put('/edit', (req, res) => {
  const [item, index] = req.body;
  fakeDB[index] = item;

  res.json(fakeDB);
});

app.delete('/delete', (req, res) => {
  const [item, index] = req.body;
  fakeDB.splice(index, 1);
  
  res.json(fakeDB);
});

// Error handlers
app.use(function fourOhFourHandler(req, res) {
  res.status(404).send();
});

app.use(function fiveHundredHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send();
});

// Start server
app.listen(1234, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Started at http://localhost:1234');
});
