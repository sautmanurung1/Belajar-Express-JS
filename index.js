const express = require('express')
const mongoose = require('mongoose')
const app = express()
const projectRoutes = require('./src/routes/project')
const authRoutes = require('./src/routes/auth')
const dotenv = require('dotenv')
const port = 3000
dotenv.config()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Saut Manurung')
})

app.use('/v1/project', projectRoutes)
app.use('/v1/project', authRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.mongodb)
    .then(() => {
        app.listen(4000, () => console.log('Connection Success'))
    })
    .catch(err => console.log(err))