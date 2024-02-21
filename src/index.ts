import express from 'express'
import diariesRouter from './routes/diaries.routes'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pingged here!! ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
