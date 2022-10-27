import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config()
const port: number|string = process.env.PORT
const albums = []
import fs from "fs.promises"

app.use(express.json())

app.get("/hello",(req,res)=>{
    res.send(albums)
})

app.get("/file",(req,res)=>{
    res.download("./src/index.js")
})

app.post("/hello",(req,res)=>{
    const body=req.body
    console.log(body.album)
    albums.push(body.album)
    res.send(JSON.stringify(body))
})

app.listen(port,()=>{
    console.log(`listening on: localhost:${port}`)
})

const readDirectory = async (dir)=>{
    const files: string[] = await fs.readdir(dir)
    console.log(files)
    // files.foreach(file=>{
        
    // })
}

const os = require("os")
const homeDir = process.env.USERPROFILE
const path = process.env.LIB
readDirectory(path)