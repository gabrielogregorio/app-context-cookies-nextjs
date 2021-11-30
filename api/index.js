const app = require('./app');
const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost.com:${PORT}`)
})

