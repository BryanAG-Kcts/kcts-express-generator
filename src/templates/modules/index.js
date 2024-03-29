import express, { json } from 'express'
import 'dotenv/config'

const app = express()
app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
