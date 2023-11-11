const express = require('express')
const app = express()
const port = 8080

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

require('./modules/users/routes')(app)

app.get("/", (req, res) => {
  res.json({ message: "Nothing to see here" });
})

app.listen(port, () => {
  console.log(`Quiz Maker backend listening on port ${port}`)
})