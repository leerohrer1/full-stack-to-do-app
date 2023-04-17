'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const config = require('dotenv').config();

// Create the express app
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

// Connect to DB
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASS,
  database: 'todoapp',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Routes and middleware
app.get('/list', (req, res) => {
  const sql = 'SELECT * FROM todoapp.todoitems';
  db.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

app.post('/add', (req, res) => {
  const listItem = req.body;
  listItem.done = false ? 0 : 1;
  const sql = `INSERT INTO todoapp.todoitems (description, done) VALUES ('${listItem.description}', '${listItem.done}')`;
  db.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

app.put('/edit', (req, res) => {
  const [item, index] = req.body;
  data[index] = item;

  res.json(data);
});

app.delete('/delete', (req, res) => {
  const [item, index] = req.body;
  data.splice(index, 1);

  res.json(data);
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
