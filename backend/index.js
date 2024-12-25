const connectToMongo = require('./db')
connectToMongo()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
app.use(cors())
app.use(express.json())

app.use('/api/auth/',require('./Routes/auth'))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})