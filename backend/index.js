import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './mongoDB/conection.js'
import dotenv from 'dotenv'
import userLogin from './controller/user.js'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT']
}

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(options))
app.use(morgan('dev'))

app.post('/login', userLogin)

app.listen(PORT, ()=>{
    console.log(`connected to PORT ${PORT}`)
})