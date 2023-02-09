const express = require('express')
const mongoose = require('mongoose')
const app = express()
const projectRoutes = require('./src/routes/project')
const authRoutes = require('./src/routes/auth')
// const path = require('path')
// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../belajar-express/src/public')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
const port = 3000

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
mongoose.connect('mongodb://mongo:4LO8PZ2IDCxnSARloqrT@containers-us-west-174.railway.app:7846')
    .then(() => {
        app.listen(4000, () => console.log('Connection Success'))
    })
    .catch(err => console.log(err))