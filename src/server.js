import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'ClinicaFácil API funcionando!' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

export default app