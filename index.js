import express, { json } from 'express'
import { set, connect } from 'mongoose'
const app = express()
import projectRoutes from './src/routes/project'
import authRoutes from './src/routes/auth'
import { config } from 'dotenv'
const port = 3000
config()

app.use(json())
app.get('/', (req, res) => {
    res.send('Saut Manurung')
})

app.use('/v1/project', projectRoutes)
app.use('/v1/project', authRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

set('strictQuery', true)
connect(process.env.mongodb)
    .then(() => {
        app.listen(4000, () => console.log('Connection Success'))
    })
    .catch(err => console.log(err))