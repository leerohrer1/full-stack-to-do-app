'use strict'
const express = require('express')

// Create the express app
const app = express()
app.use(express.static('public'));

// Routes and middleware
app.get('/', (req, res) => {
  res.json({ message: 'list of to do items' })
});

app.post('/add', (req, res) => {
  res.json({ message: 'item added' })
});

app.put('/edit', (req, res) => {
  res.send('to do item')
});

app.delete('/delete', (req, res) => {
  res.send('deleted item')
});


// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

// Start server
app.listen(1234, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:1234')
})
