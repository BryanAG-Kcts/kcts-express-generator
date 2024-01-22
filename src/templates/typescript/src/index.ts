import express, { json } from 'express'
import 'dotenv/config'

const app = express()
app.use(json())

const port = process.env.PORT ?? 3000

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
