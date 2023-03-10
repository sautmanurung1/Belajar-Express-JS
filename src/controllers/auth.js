import { validationResult } from 'express-validator'
import { hashSync, compare } from 'bcrypt'
const saltRounds = 10
import UserModels from '../models/auth'

export function RegisterUserController(req, res) {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        const err = new Error('Input value tidak ada')
        err.errorStatus = 400
        err.data = error.array()
        throw err
    }

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const HashPassword = hashSync(password, saltRounds)

    const Post = new UserModels({
        name: name,
        email: email,
        password: HashPassword,
        role: 'user'
    })

    Post.save()
        .then(result => {
            res.status(201).json({
                message: "Create User Success",
                data: result
            })
        })
        .catch(err => {
            console.log('the error : ', err)
        })
}


export function LoginUserController(req, res) {
    const email = req.body.email
    const password = req.body.password
    const newData = UserModels.findOne({ email: email }).exec()
    newData.then(result => {
        compare(password, result.password, function (err, isMatch) {
            if (!isMatch) {
                return err = errors()
            } else {
                return result = success()
            }
        })

        function errors() {
            return res.status(400).json({
                message: 'error goblok anjing kimak'
            })
        }

        function success() {
            return res.status(200).json({
                message: 'Login User Success',
                data: result
            })
        }
    })
        .catch(err => {
            next(err)
        });
}