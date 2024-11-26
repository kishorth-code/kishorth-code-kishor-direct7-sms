import dotenv from "dotenv"
import { getPrice } from "./controllers/getPrice.mjs"
import { getMessagestatus } from "./controllers/getStatus.mjs"
import { sendMessage } from "./controllers/sendsms.mjs"
dotenv.config()




export default {
getPrice,getMessagestatus,sendMessage
}
