import "dotenv/config"
import express, { json } from "express"
import router from "./routers/index.routes.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

app.listen(port, ()=>{
    console.log("Listening to port", port);
})