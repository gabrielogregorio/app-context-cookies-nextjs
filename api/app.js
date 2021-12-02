require('dotenv/config')
const express = require('express');
const cors = require('cors');
const app = express()
const jwt = require('jsonwebtoken');
const userAuth = require('./middlewares/userAuth')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  return res.json({msg: 'Hello World'})
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  try {
    const token = jwt.sign({ email }, process.env.TOKEN_JWT, { expiresIn: '1h' });
    return res.json({ token, success: true })
  } catch(error) {
    return res.json({ msg: error.message, success: false })
  }
});

app.get('/auth', userAuth, (req, res) => {
  return res.sendStatus(200)
})

app.get('/posts',userAuth, (req, res) => {
  setTimeout(() => {
    return res.json([
      {id: 1, title:"post1"},
      {id: 2, title:"post2"},
      {id: 3, title:"post3"},
      {id: 4, title:"post4"},
    ])
  }, 2000)
})

module.exports = app