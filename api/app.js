const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  return res.json({msg: 'Hello World'})
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  return res.json({ email, password })
});

module.exports = app