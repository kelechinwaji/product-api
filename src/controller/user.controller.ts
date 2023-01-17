import {Request, Response} from "express"
import { createUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import log from "../utils/logger";
import {omit } from "lodash";

//Handles incoming request for creating a new user
//Request takes in params, ResBody and ReqBody. The createuserInput interface is passed as the ReqBody 
export const CreateUserHandler = async (req:Request<{},{}, createUserInput["body"]>, res:Response)=>{
 try {
    const result = await createUser(req.body);
   return res.json({
      status: true,
      message: "User created successfully",
      data: omit(result.toJSON(), "password")
   })
 } catch (error) {
    log.error(error)
    return res.json({
        status: false,
        message: error
    })
 }
}