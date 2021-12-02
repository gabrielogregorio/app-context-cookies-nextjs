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

  if(email !== 'admin' && password !== 'admin') {
    return res.sendStatus(403)
  }

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
      {id: 1, title: "typesetting industr standard", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
      {id: 2, title: "its layout reader of since", body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
      {id: 3, title: "in so variations", body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"},
      {id: 4, title: "those intereste", body:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."},
    ])
  }, 2000)
})

module.exports = app