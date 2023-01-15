import {Request, Response} from "express"
import log from "../utils/logger"

export const CreateUserHandler = (req:Request, res:Response)=>{
 try {
    
 } catch (error) {
    log.error(error)
    return res.json({
        status: false,
        message: error
    })
 }
}