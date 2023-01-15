import {Request, Response} from "express"
import { createUser } from "../service/user.service";
import log from "../utils/logger"

export const CreateUserHandler = async (req:Request, res:Response)=>{
 try {
    const result = await createUser(req.body);
    return {status: true, message: "User created successfully", data: result};
 } catch (error) {
    log.error(error)
    return res.json({
        status: false,
        message: error
    })
 }
}