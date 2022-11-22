import express from 'express'
import dotenv from 'dotenv'
import Connection from './database/db.js'
import router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/",router)

Connection()

const PORT = 8000

app.listen(PORT,() => console.log(`Server is running successfully on ${PORT}`))

