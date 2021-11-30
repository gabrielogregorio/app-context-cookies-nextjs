const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  return res.json({msg: 'Hello World'})
})

module.exports = app