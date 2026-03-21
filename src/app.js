import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser "


const app = express()

app.use(
    cors(
        {
            origin: process.env.CORS_ORIGIN,
            credentials: true
        }
    )
)//remember proxy?



app.use(express.json({limit: "16kb"}))//converts json into js

app.use(express.urlencoded({extended: true, limit: "16kb"} ))//converts url data
app.use(express.static("public"))//serves file that dont change on server that are images,etc
app.use(cookieParser())//read cookies from the client request.

export {app}